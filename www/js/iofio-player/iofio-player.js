angular
    .module('iofio-player', []);
angular
    .module('iofio-player')
    .service('IofioPlayer', IofioPlayer);
IofioPlayer.$inject = ['$http', '$timeout', '$q'];
function IofioPlayer($http, $timeout, $q) {
    var playlist = [];
    var currentId = 0;
    var isReady = false;
    var isLoaded = false;
    var isPlaying = false;
    var status = 0;
    var position = 0;
    var duration = 0;
    var mediaDeferred = $q.defer();
    var audio = mediaDeferred.promise;
    var service = {
        addToPlaylist: addToPlaylist,
        getPlaylist: getPlaylist,
        clearPlaylist: clearPlaylist,
        getInfo: getInfo
    };
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        isReady = true;
    }
    function addToPlaylist(songs) {
        for (var key in songs) {
            if (songs.hasOwnProperty(key) && angular.isObject(songs[key])) {
                playlist.push(songs[key]);
            }
        }
        return playlist;
    }
    function getPlaylist() {
        return playlist;
    }
    function clearPlaylist() {
        playlist = [];
        return playlist;
    }
    function getInfo() {
        return {
            podcastName: playlist[currentId].artist
        };
    }
    function loadAudio(src) {
        src = src || playlist[currentId].src;
        /*
        var media = new $cordovaMedia(src, function mediaSuccess(pos) {
          position = pos;
          isLoaded = true;
          mediaDeferred.resolve(media);
        }, function mediaError(err) {
          playerError(err);
          mediaDeferred.reject(err);
        }, function statusChange(mediaStatus) {
          status = mediaStatus;
        })
        */
    }
    function playerError(err) {
        return console.error(err);
    }
}
