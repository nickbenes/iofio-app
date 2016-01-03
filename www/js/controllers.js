/* global angular */
angular.module('iofio')

  .controller('MainCtrl', function($sce, $ionicModal, $state, $scope, MockData) {
    var scope = $scope;
    
    scope.$state = $state;
    
    scope.itunes = MockData.itunes();
    scope.podcast = MockData.podcast();
    scope.episode = MockData.episode();
    
    scope.player = {
      title: scope.podcast.name + ": " + scope.episode.name,
    };
    
    scope.config = {
      sources: [
        {src: $sce.trustAsResourceUrl("audio/insideoutside-ep32.mp3"), type: "audio/mpeg"}
        // {src: $sce.trustAsResourceUrl(scope.episode.media.url), type: scope.episode.media.type}
      ],
      theme: "css/iofio-player.css"
    }
    
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