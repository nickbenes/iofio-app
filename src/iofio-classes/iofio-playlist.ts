angular
  .module('iofio-player')
  .service('IofioPlaylist', IofioPlaylist);

IofioPlaylist.$inject = ['$http']
function IofioPlaylist($http) {
  class Playlist {
    //playlist: [IofioEpisode];
    playlist: [any];
    currentId: number;
    
    constructor(){
      this.playlist = [];
      this.currentId = 0;
    }
    
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
  }
  
  return Playlist;
  
  function clearPlaylist() {
    playlist = [];
    return playlist;
  }
  
  function getInfo(id) {
    if (typeof id === 'undefined') {
      id = currentId;
    }
    
    return playlist[currentId];
  }
  
  function nextEpisode() {
    if (currentId + 2 < playlist.length) {
      currentId++;
    } else {
      currentId = playlist.length - 1;
    }
    return playlist[currentId];
  }
  
  function previousEpisode() {
    if (currentId > 0) {
      currentId--;
    } else {
      currentId = 0;
    }
    return playlist[currentId];
  }
  
}