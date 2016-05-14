angular
    .module('iofio-player')
    .service('IofioPlaylist', IofioPlaylist);
IofioPlaylist.$inject = ['$http'];
function IofioPlaylist($http) {
    var Playlist = (function () {
        function Playlist() {
            //playlist: [IofioEpisode];
            this.playlist = [];
            this.currentId = 0;
        }
        Playlist.prototype.addToPlaylist = function (songs) {
            var self = this;
            for (var key in songs) {
                if (songs.hasOwnProperty(key) && angular.isObject(songs[key])) {
                    self.playlist.push(songs[key]);
                }
            }
            return self.playlist;
        };
        Playlist.prototype.getPlaylist = function () {
            return this.playlist;
        };
        Playlist.prototype.clearPlaylist = function () {
            this.playlist = [];
            return this.playlist;
        };
        Playlist.prototype.getInfo = function (id) {
            if (typeof id === 'undefined') {
                id = this.currentId;
            }
            return this.playlist[this.currentId];
        };
        Playlist.prototype.nextEpisode = function () {
            if (this.currentId + 2 < this.playlist.length) {
                this.currentId++;
            }
            else {
                this.currentId = this.playlist.length - 1;
            }
            return this.playlist[this.currentId];
        };
        Playlist.prototype.previousEpisode = function () {
            if (this.currentId > 0) {
                this.currentId--;
            }
            else {
                this.currentId = 0;
            }
            return this.playlist[this.currentId];
        };
        return Playlist;
    }());
    return Playlist;
}
