angular
  .module('iofio-player')
  .factory('IofioEpisode', IofioEpisode);

IofioEpisode.$inject = []
function IofioEpisode() {
  class Episode {
    name: string;
    date: Date;
    duration: string;
    image: string;
    description: string;
    link: string;
    media: string;
    podcast: any;
    
    constructor(info: any) {
      this.name = info.title[0];
      this.date = new Date(info.pubDate[0]);
      this.duration = info['itunes:duration'][0];
      this.image = info['itunes:image'][0].$.href;
      this.description = info.description[0];
      this.link = info.link[0];
      this.media = info.enclosure[0].$;
      this.podcast = null;
    }
  
    setPodcast(podcast) {
      this.podcast = podcast;
      return this;
    }
  }
  return Episode;
}