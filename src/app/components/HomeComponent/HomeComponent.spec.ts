/* import angular = require('angular');
import 'angular-mocks';
import { mmAngularModuleName } from '../../AngularModuleBootstraper';
import { HomeComponent } from './HomeComponent';

describe('HomeComponent test suite', () => {

    let $compile: any;
    let $rootScope: any;
    let ctrl: any;
    let scope: any;
    let $componentController: any;

    // prepare mocked module
    beforeEach(function() {
        angular.mock.module(mmAngularModuleName);
    });

    // inject the required services and instantiate the controller
    beforeEach(inject(function(_$rootScope_: any, _$compile_: any, _$componentController_: any) {
        $rootScope = _$rootScope_;
        $componentController = _$componentController_;
        $compile = _$compile_;
        scope = $rootScope.$new();
        // prepare controller
        ctrl = $componentController('homeComponent', { $scope: scope }, null);
    }));

    it('should have main root element', function() {
        var element = $compile('<home-component></home-component>')($rootScope);
        $rootScope.$digest();
        expect(element).toBeDefined();
        let mainRootElement = angular.element(element[0].querySelector('.home-component'));
        expect(mainRootElement).toBeDefined();
        expect(mainRootElement.text()).toBe('Home content..');
    });

});
 */