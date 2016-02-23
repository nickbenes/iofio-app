/* global angular */
angular.module('iofio')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$sce', '$ionicModal', '$state', '$scope', 'MockData'];
function MainCtrl($sce, $ionicModal, $state, $scope, MockData) {
    var scope = $scope;
    var donations = scope.donations = MockData.donations();
    var player = scope.API = null;
    scope.onPlayerReady = function (API) {
      player = scope.API = API;
    }
    
    scope.init = function init() {
      var notes = MockData.showNotes().map(prepNote);
      
      scope.config = {
        sources: [
          { src: $sce.trustAsResourceUrl("audio/insideoutside-ep32.mp3"), type: "audio/mpeg" }
          // {src: $sce.trustAsResourceUrl(scope.episode.media.url), type: scope.episode.media.type}
        ],
        cuePoints: {
          notes: notes
        },
        theme: "css/iofio-player.css"
      };
    }

    function prepNote(note, idx) {
      note.timeLapse = {
        start: note.start,
        end: note.stop
      }
      
      note.onLeave = scope.onLeave.bind(scope);
      note.onComplete = scope.onComplete.bind(scope);
      note.onUpdate = scope.onUpdate.bind(scope);
      note.params = note;
      note.params.index = idx;
      return note;
    }
    
    scope.onLeave = function (currentTime, timeLapse, params) { 
      params.completed = false;
      params.active = false;
      // logShowNoteAction(params, 'moved before', currentTime);
    }
    
    scope.onComplete = function (currentTime, timeLapse, params) { 
      params.completed = true;
      params.active = false;
      // logShowNoteAction(params, 'completed', currentTime);
    }
    
    scope.onUpdate = function (currentTime, timeLapse, params) {
      if (!params.active) {
        params.completed = false;
        params.active = true;
        // logShowNoteAction(params, 'activated', currentTime);
      }
      // logShowNoteAction(params, 'updating', currentTime);
    }
    
    function logShowNoteAction(params, action, time) {
      console.log('At ' + time + ': ' + action + ' note ' + params.index + ' (completed: ' + params.completed + ',selected: ' + params.selected + ')');
    } 
        
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

    scope.init();
  }