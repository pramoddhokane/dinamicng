
(function () {
  'use strict';

  angular
    .module(APP_MODULE_NAME)
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$mdSidenav', '$rootScope', '$timeout', 'menu'];
  function MainController($scope, $mdSidenav, $rootScope, $timeout, menu) {
    var vm = this;


    activate();

    ////////////////

    function activate() {

    }
    $scope.menu = menu;

    // Methods used by menuLink and menuToggle directives

    $scope.path = path;
    $scope.goHome = goHome;
    $scope.openMenu = openMenu;
    $scope.closeMenu = closeMenu;
    $scope.isSectionSelected = isSectionSelected;

    $rootScope.$on('$locationChangeSuccess', openPage);

    // Methods used by menuLink and menuToggle directives
    this.isOpen = isOpen;
    this.isSelected = isSelected;
    this.toggleOpen = toggleOpen;

    var mainContentArea = document.querySelector("[role='main']");

    // *********************
    // Internal methods
    // *********************

    function closeMenu() {
      $timeout(function () { $mdSidenav('left').close(); });
    }

    function openMenu() {
      $timeout(function () { $mdSidenav('left').open(); });
    }

    function path() {
      return $location.path();
    }

    function goHome($event) {
      menu.selectPage(null, null);
      $location.path('/');
    }

    function openPage() {
      $scope.closeMenu();
      mainContentArea.focus();
    }

    function isSelected(page) {
      return menu.isPageSelected(page);
    }

    function isSectionSelected(section) {
      var selected = false;
      var openedSection = menu.openedSection;
      if (openedSection === section) {
        selected = true;
      }
      else if (section.children) {
        section.children.forEach(function (childSection) {
          if (childSection === openedSection) {
            selected = true;
          }
        });
      }
      return selected;
    }

    function isOpen(section) {
      return menu.isSectionSelected(section);
    }

    function toggleOpen(section) {
      menu.toggleSelectSection(section);
    }
  }
})();