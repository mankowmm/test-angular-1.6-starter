import angular = require('angular');
import 'angular-mocks';
import { mmAngularModuleName } from '../../AngularModuleBootstraper';
import { PostListComponent } from './PostListComponent';

describe('PostListComponent test suite', () => {

    let $compile: any;
    let $rootScope: any;
    let $q;
    let ctrl: any;
    let scope: any;
    let $componentController: any;
    let postsServiceMock;
    let postServiceSpy;
    let postServiceGetPostsMockedPromise = () => {
        var mockPostsPromise = $q.defer();
        console.log('will resolve mocked getPosts..');
        mockPostsPromise.resolve(['post1', 'post2']);
        return mockPostsPromise.promise;
    };

    // prepare mocked module
    beforeEach(function() {
        angular.mock.module(mmAngularModuleName);
    });

    // inject the required services and instantiate the controller
    beforeEach(inject(function(_$rootScope_: any, _$compile_: any, _$componentController_: any, _postsService_, _$q_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        scope = $rootScope.$new();
        $q = _$q_;
        // mock service dependency and getPosts method
        postsServiceMock = _postsService_;

        var deferred = $q.defer();
        deferred.resolve(['post1', 'post2']);
        postServiceSpy = spyOn(postsServiceMock, 'getPosts').and.returnValue(deferred.promise);
        // mock component controller
        $componentController = _$componentController_;

    }));

    /* it('should have main root element', function() {
        var element = $compile('<post-list-component></post-list-component>')($rootScope);
        $rootScope.$digest();
        expect(element).toBeDefined();
        let mainRootElement = angular.element(element[0].querySelector('.post-list-component'));
        expect(mainRootElement).toBeDefined();
        expect(mainRootElement.text()).toBe('Post list content..');
        expect(postServiceSpy).toHaveBeenCalledTimes(1);
        // console.log('ctrl.posts', ctrl.posts);
    }); */

    /* it('should have posts array when called postsService.getPosts method', function() {
        console.log('should have posts array when called');
        ctrl = $componentController('postListComponent', { $scope: scope }, null);
        ctrl.$onInit();
        console.log('ctrl.posts', ctrl.posts);
        expect(ctrl.posts.length).toBe(2);
    }); */

});
