(function () {
    'use strict';

    angular
        .module(APP_MODULE_NAME)
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope'];
    function FooterController($scope) {
        var vm = this;


        activate();

        ////////////////

        function activate() {
           
        }
    }
})();