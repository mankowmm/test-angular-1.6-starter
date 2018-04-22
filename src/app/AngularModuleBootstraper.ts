import angular = require('angular');
import 'angular-route';
import 'angular-ui-bootstrap';

/**
 * Register angular module name
 * Add all neccessary angular module depenedencies
 * angular-material, router, etc..
 */
const mmAngularModuleName = 'mmAngularModule';

const mmAngularModule = angular.module(mmAngularModuleName, ['ngRoute',  'ui.bootstrap']);

const bootstrapNgApp = () => {
    angular.element(function() {
        angular.bootstrap(document, [mmAngularModuleName]);
    });
};

export {mmAngularModuleName, mmAngularModule, bootstrapNgApp};
