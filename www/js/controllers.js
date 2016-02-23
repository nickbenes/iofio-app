/* global angular */
angular.module('iofio')

  .controller('MainCtrl', function($sce, $ionicModal, $state, $scope, MockData) {
    var scope = $scope;
    var donations = scope.donations = MockData.donations();
    var player = scope.API = null;
    scope.onPlayerReady = function (API) {
      player = scope.API = API;
    }
    
    scope.showNotes = [];
    
    function addShowNote() {
      scope.showNotes = scope.showNotes.concat(MockData.showNotes());
    }

    scope.addShowNote = addShowNote;
    
    scope.back = function () {
      player.seekTime(0);
    };
    scope.scrubbk = function () {
      var time = player.currentTime;
      player.seekTime(Math.max(time - 30, 0));
    }
    scope.playPause = function () {
      player.playPause();
    }
    scope.playPauseClass = function () {
      if (player && player.currentState === 'play') {
        return 'pause';
      } else {
        return 'play';
      }
    }
    scope.scrubfwd = function () {
      var time = player.currentTime;
      player.seekTime(Math.min(time + 30, player.totalTime));
    }
    scope.forward = function () {
      player.seekTime(player.totalTime);
    }
    
    
    donations.options = {
      chart: {
                type: 'pieChart',
                height: 300,
                width: 300,
                x: function(d){return d.name;},
                y: function(d){return +d.share;},
                showLabels: false,
                duration: 500,
                labelThreshold: 0.05,
                labelType: 'percent',
                donut: true,
                donutRatio: 0.7,
                donutLabelsOutside: false,
                margin: {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0
                },
                 legend: {
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            }
    };
    
    scope.itunes = MockData.itunes();
    scope.podcast = MockData.podcast();
    scope.episode = MockData.episode();
        
    scope.$state = $state;

    scope.player = {
      title: scope.podcast.title[0] + ": " + scope.episode.name,
    };
    
    scope.isPlayer = function () {
      return $state.current.name === 'page.player';
    }
    
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