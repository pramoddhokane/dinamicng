(function() {
    'use strict';

    angular
        .module(APP_MODULE_NAME)
        .controller('SideBarController', SideBarController);

    SideBarController.$inject = ['$scope'];
    function SideBarController($scope) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();