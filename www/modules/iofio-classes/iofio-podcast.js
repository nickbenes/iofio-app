angular
  .module('iofio-player')
  .factory('IofioPodcast', IofioPodcast);

IofioPodcast.$inject = []
function IofioPodcast() {
  var Podcast = function (info) {
    this.name = info.trackName;
    this.url = this.feedUrl;
    this.artworkThumb = info.artworkUrl100;
	this.artworkFull = info.artworkUrl600;
    this.description = info.description;
    this.host = info.host;
    this.lastUpdate = info.lastUpdate;
    this.episodes = [];
  }
    
  return Podcast;
}