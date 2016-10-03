(function() {
    'use strict';

    angular
        .module(APP_MODULE_NAME)
        .controller('ThemePanelController', ThemePanelController);

    ThemePanelController.$inject = ['$scope'];
    function ThemePanelController($scope) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();