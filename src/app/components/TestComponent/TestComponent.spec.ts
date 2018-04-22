import angular = require('angular');
import 'angular-mocks';
import { mmAngularModuleName } from '../../AngularModuleBootstraper';
import { TestComponent } from './TestComponent';

describe('TestComponent test suite', () => {

    let $compile;
    let $rootScope;
    let $q;
    let ctrl;
    let scope;
    let $componentController;
    let testServiceMock;
    let testServiceSpy;
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
        testServiceMock = _testService_;
        $q = _$q_;
    }));

    // prepare mocks
    beforeEach(() =>  {

        // prepare mock of getPost Service
        var deferred = $q.defer();
        deferred.resolve({id: 1, title: 'Some mocked post'});
        testServiceSpy = spyOn(testServiceMock , 'getPostDetail').and.returnValue(deferred.promise);

        // get scope and compile element
        scope = $rootScope.$new();
        element = angular.element('<test-component id="{{testID}}"></test-component>');
        scope.testID = 100;
        element = $compile(element)(scope);
        scope.$apply();
    });

    it('should render the text based on bindings', function() {
        expect(element).toBeDefined();
        let mainRootElement = angular.element(element[0].querySelector('.test-component'));
        expect(mainRootElement.text()).toBe('Test content 100');
    });

    it('should handle properly params to service call', () => {
        ctrl = $componentController('testComponent', null, {id: 100} );
        expect(ctrl.id).toBe(100);
        expect(testServiceSpy).toHaveBeenCalledTimes(1);
        expect(testServiceSpy).toHaveBeenCalledWith('100');
    });

});
