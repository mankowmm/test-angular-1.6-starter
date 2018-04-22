import angular = require('angular');
import 'angular-mocks';
import { mmAngularModuleName } from '../../AngularModuleBootstraper';
import { HomeComponent } from './HomeComponent';

describe('HomeComponent test suite', () => {

    let $compile;
    let $rootScope;
    let $q;
    let ctrl;
    let scope;
    let $componentController;
    let element;

    // prepare mocked module
    beforeEach(function() {
        angular.mock.module(mmAngularModuleName);
    });

    // prepare common stuff
    beforeEach(inject((_$compile_, _$rootScope_: any, _$componentController_: any, _testService_, _$q_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        $componentController = _$componentController_;
    }));

    // prepare mocks
    beforeEach(() =>  {
        // get scope and compile element
        scope = $rootScope.$new();
        element = angular.element('<home-component></home-component>');
        element = $compile(element)(scope);
        scope.$apply();
    });

    it('should render the h1', function() {
        expect(element).toBeDefined();
        let mainRootElement = angular.element(element[0].querySelector('h1'));
        expect(mainRootElement.text()).toBe('Home content..');
    });

});
