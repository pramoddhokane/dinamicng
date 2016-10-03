(function() {
    'use strict';

    angular
        .module(APP_MODULE_NAME)
        .controller('ContentController', ContentController);

    ContentController.$inject = ['$scope'];
    function ContentController($scope) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();