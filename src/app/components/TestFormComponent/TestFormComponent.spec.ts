import angular = require('angular');
import 'angular-mocks';
import { mmAngularModuleName } from '../../AngularModuleBootstraper';
import { TestFormComponent } from './TestFormComponent';

describe('TestFormComponent test suite', () => {

    let $compile;
    let $rootScope;
    let ctrl;
    let scope;
    let $componentController;
    let element;
    let testServiceMock;
    let testServiceSaveUserSpy;

    // prepare mocked module
    beforeEach(function() {
        angular.mock.module(mmAngularModuleName);
    });

    // prepare common stuff
    beforeEach(inject((_$compile_, _$rootScope_: any, _$componentController_: any, _$q_, _testService_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        testServiceMock = _testService_;

        $componentController = _$componentController_;
    }));

    // prepare mocks
    beforeEach(() =>  {

        testServiceSaveUserSpy = spyOn(testServiceMock , 'saveUser');

        // get scope and compile element
        scope = $rootScope.$new();
        element = angular.element('<test-form-component></test-form-component>');
        element = $compile(element)(scope);
        scope.$apply();
    });

    it('should render form', function() {
        expect(element).toBeDefined();
        let formElement = angular.element(element[0].querySelector('form'));
        expect(formElement).toBeDefined();
    });

    it('when form submitted that is invalid should not call saveUser', function() {
        ctrl = $componentController('testFormComponent', null, {} );
        var formMock = {
            $valid: false
        };
        ctrl.onSubmit(formMock);
        expect(testServiceSaveUserSpy).not.toHaveBeenCalled();
    });


});
