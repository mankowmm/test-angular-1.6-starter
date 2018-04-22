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


import * as angular from 'angular';

/**
 *  Import module to be bootstrapped
 */
import { mmAngularModuleName, mmAngularModule, bootstrapNgApp } from './app/AngularModuleBootstraper';

/**
 * import components etc..
 */
import './app/services/TestService';
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
    /*
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

/**
 * bootstrap app
 */
bootstrapNgApp();

