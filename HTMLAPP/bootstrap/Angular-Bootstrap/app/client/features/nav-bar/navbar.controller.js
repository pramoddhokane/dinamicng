(function() {
    'use strict';

    angular
        .module(APP_MODULE_NAME)
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope'];
    function NavbarController($scope) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();