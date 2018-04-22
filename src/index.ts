/**
 * Import the polyfills and vendor files
 */
import './polyfills';
import './vendor';
import 'jquery';
import 'bootstrap';

/**
 * Import the global styles
 */
import './index.scss';

/**
 * Temporary Import angular
 * see: https://github.com/Microsoft/TypeScript/issues/10178
 */
import * as angular from 'angular';

/**
 *  Import module to be bootstrapped
 */
import { mmAngularModuleName, mmAngularModule, bootstrapNgApp } from './app/AngularModuleBootstraper';

/**
 * Bootstrap the application using the imported moduleName
 */
/* const bootstrapModuleName = angular.module('mmtestapp', [
  mmAngularModuleName
]); */


/**
 * import components etc..
 */
import './app/services/PostsService';
import './app/components/HomeComponent/HomeComponent';
import './app/components/TestComponent/TestComponent';

/**
 * Define angular routing
 */
mmAngularModule.config(['$routeProvider', ($routeProvider: any) => {
    $routeProvider
    .when('/home', {
        template: '<home-component></home-component>'
    })
    .when('/test', {
        template: '<test-component id="100"></test-component>'
    })
  /* .when('/posts', {
      template: '<post-list-component></post-list-component>'
  })
  .when('/post/:id', {
      template: '<post-detail-component id="{{ $resolve.postId }}"></post-detail-component>',
      resolve: {
          postId: ['$route', ($route: any) =>  {
              const currentId = $route.current.params.id;
              return currentId;
          }]
      }
  }) */
  .otherwise({redirectTo: '/home'});
}]);


bootstrapNgApp();

