(function() {
    'use strict';

    angular
        .module(APP_MODULE_NAME)
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope'];
    function HeaderController($scope) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() {
            vm.title = 'New Title';
         }
    }
})();