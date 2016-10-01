(function() {
    'use strict';

    angular
        .module(APP_MODULE_NAME)
        .controller('QuickSideBarController', QuickSideBarController);

    QuickSideBarController.$inject = ['$scope'];
    function QuickSideBarController($scope) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();