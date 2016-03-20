angular
  .module('iofio-player')
  .service('IofioPlaylist', IofioPlaylist);

IofioPlaylist.$inject = ['$http']
function IofioPlaylist($http) {
  var playlist = [];
  var currentId = 0;
  var service = {
    addToPlaylist: addToPlaylist,
    getPlaylist: getPlaylist,
    clearPlaylist: clearPlaylist,
    getInfo: getInfo,
    nextEpisode: nextEpisode,
    previousEpisode: previousEpisode
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
  
  return service;
}