(function () {
    'use strict';

    angular.module(APP_MODULE_NAME, ['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider) {
        }).controller('AppController', ['$scope', '$rootScope', function ($scope, $rootScope) {
            $scope.$on('$viewContentLoaded', function () {
                App.initComponents(); // init core components
                Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
            });
        }]).factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: true, // sidebar menu state
            pageContentWhite: true, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        assetsPath: '../assets',
        globalPath: '../assets/global',
        layoutPath: '../assets/layouts/layout2',
    };
    $rootScope.settings = settings;
    return settings;
}]);
})();
