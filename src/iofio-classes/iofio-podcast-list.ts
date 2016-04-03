angular
  .module('iofio-player')
  .service('IofioPodcastList', IofioPodcastList);

IofioPodcastList.$inject = ['$http']
function IofioPodcastList($http) {
  var list = [];
  var currentId = 0;
  var service = {
    addToList: addToList,
    getList: getList,
    clearList: clearList,
    getInfo: getInfo,
    nextPodcast: nextPodcast,
    previousPodcast: previousPodcast
  }
  
  function addToList(podcasts) {
    for (var key in podcasts) {
      if (podcasts.hasOwnProperty(key) && angular.isObject(podcasts[key])) {
        list.push(podcasts[key]);
      }
    }
    return list;
  }
  
  function getList() {
    return list;
  }
  
  function clearList() {
    list = [];
    return list;
  }
  
  function getInfo(id) {
    if (typeof id === 'undefined') {
      id = currentId;
    }
    
    return list[currentId];
  }
  
  function nextPodcast() {
    if (currentId + 2 < list.length) {
      currentId++;
    } else {
      currentId = list.length - 1;
    }
    return list[currentId];
  }
  
  function previousPodcast() {
    if (currentId > 0) {
      currentId--;
    } else {
      currentId = 0;
    }
    return list[currentId];
  }
  
  return service;
}