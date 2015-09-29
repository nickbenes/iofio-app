/* global angular */
angular.module('iofio.controllers', [])

/* Commented content enables side menu 
  .controller('MainCtrl', function ($ionicSideMenuDelegate, $state) {
    this.toggleLeft = function () {
      $ionicSideMenuDelegate.toggleLeft();
    }
*/
  .controller('MainCtrl', function($ionicModal, $state, $scope) {
    var scope = $scope;
    
    scope.$state = $state;

    scope.player = {
      title: "Polygon Longform: A podcast episode",
      src: null,
      position: null,
      duration: null,
      state: null
    };
    
    // Home Modal
    $ionicModal
      .fromTemplateUrl('templates/home.html', {
        scope: scope,
       animation: 'slide-in-up'
      })
      .then(function (modal) {
        scope.homeModal = modal;
      })
    
    scope.openHome = function () {
      scope.homeModal.show();
    }
    
    scope.closeHome = function () {
      scope.homeModal.hide();
    }
    
    // Search Modal
    $ionicModal
      .fromTemplateUrl('templates/search.html', {
        scope: scope,
       animation: 'slide-in-up'
      })
      .then(function (modal) {
        scope.searchModal = modal;
      })
    
    scope.openSearch = function () {
      scope.searchModal.show();
    }
    
    scope.closeSearch = function () {
      scope.searchModal.hide();
    }
    
    // Modal cleanup
    scope.$on('$destroy', function () {
      if (scope.homeModal)
        scope.homeModal.remove();
      if(scope.searchModal)
        scope.searchModal.remove();
    })
  })

/*
  .controller('MenuCtrl', function () {
    this.items = [
      {
        name: "Home",
        ref: "page.home"
      },
      {
        name: "Playlists",
        ref: "page.playlist"
      },
      {
        name: "Search",
        ref: "page.search"
      },
      {
        name: "Donations",
        ref: "page.donations"
      },
      {
        name: "Settings",
        ref: "page.settings"
      },
    ]
  });
*/