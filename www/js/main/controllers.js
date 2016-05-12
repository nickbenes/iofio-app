/* global angular */
angular.module('iofio')
    .controller('MainCtrl', function ($sce, $http, Restangular, $ionicModal, $state, $scope, MockData, IofioEpisode, IofioPodcast, IofioPlaylist, IofioPodcastList) {
    var scope = $scope;
    var donations = scope.donations = MockData.donations();
    var player = scope.API = null;
    scope.onPlayerReady = function (API) {
        player = scope.API = API;
    };
    scope.Episode = IofioEpisode;
    scope.Podcast = IofioPodcast;
    scope.Playlist = IofioPlaylist;
    scope.PodcastList = IofioPodcastList;
    scope.MockData = MockData;
    scope.Restangular = Restangular;
    scope.$http = $http;
    scope.foo = Restangular.allUrl('googlers', 'http://www.google.com/').getList().$object;
    scope.back = function () {
        player.seekTime(0);
    };
    scope.scrubbk = function () {
        var time = player.currentTime;
        player.seekTime(Math.max(time - 30, 0));
    };
    scope.playPause = function () {
        player.playPause();
    };
    scope.playPauseClass = function () {
        if (player && player.currentState === 'play') {
            return 'pause';
        }
        else {
            return 'play';
        }
    };
    scope.scrubfwd = function () {
        var time = player.currentTime;
        player.seekTime(Math.min(time + 30, player.totalTime));
    };
    scope.forward = function () {
        player.seekTime(player.totalTime);
    };
    donations.options = {
        chart: {
            type: 'pieChart',
            height: 350,
            width: 350,
            x: function (d) { return d.name; },
            y: function (d) { return +d.share; },
            showLabels: true,
            duration: 500,
            labelThreshold: 0.05,
            labelType: 'percent',
            donut: true,
            donutRatio: 0.7,
            donutLabelsOutside: true,
            margin: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 5
            },
            legend: {
                margin: {
                    top: 0,
                    right: 35,
                    bottom: 5,
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
    scope.config = {
        sources: [
            { src: $sce.trustAsResourceUrl("audio/insideoutside-ep32.mp3"), type: "audio/mpeg" }
        ],
        theme: "css/iofio-player.css"
    };
    // Home Modal
    $ionicModal
        .fromTemplateUrl('templates/home.html', {
        scope: scope,
        animation: 'slide-in-up'
    })
        .then(function (modal) {
        scope.homeModal = modal;
    });
    scope.openHome = function () {
        scope.homeModal.show();
    };
    scope.closeHome = function () {
        scope.homeModal.hide();
    };
    // Search Modal
    $ionicModal
        .fromTemplateUrl('templates/search.html', {
        scope: scope,
        animation: 'slide-in-up'
    })
        .then(function (modal) {
        scope.searchModal = modal;
    });
    scope.openSearch = function () {
        scope.searchModal.show();
    };
    scope.closeSearch = function () {
        scope.searchModal.hide();
    };
    // Modal cleanup
    scope.$on('$destroy', function () {
        if (scope.homeModal)
            scope.homeModal.remove();
        if (scope.searchModal)
            scope.searchModal.remove();
    });
});
