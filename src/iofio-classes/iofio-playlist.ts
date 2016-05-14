angular
  .module('iofio-player')
  .service('IofioPlaylist', IofioPlaylist);

IofioPlaylist.$inject = ['$http']
function IofioPlaylist($http) {
  class Playlist {
    //playlist: [IofioEpisode];
    playlist: any[] = [];
    currentId: number = 0;
        
    addToPlaylist(songs) {
      var self=this;
      for (var key in songs) {
        if (songs.hasOwnProperty(key) && angular.isObject(songs[key])) {
          self.playlist.push(songs[key]);
        }
      }
      return self.playlist;
    }
    
    getPlaylist() {
      return this.playlist;
    }
    
    clearPlaylist() {
      this.playlist = [];
      return this.playlist;
    }
    
    getInfo(id) {
      if (typeof id === 'undefined') {
        id = this.currentId;
      }
      return this.playlist[this.currentId];
    }
    
    nextEpisode() {
      if (this.currentId + 2 < this.playlist.length) {
        this.currentId++;
      } else {
        this.currentId = this.playlist.length - 1;
      }
      return this.playlist[this.currentId];
    }
    
    previousEpisode() {
      if (this.currentId > 0) {
        this.currentId--;
      } else {
        this.currentId = 0;
      }
      return this.playlist[this.currentId];
    }
  }
  
  return Playlist;
}