angular
    .module('iofio-player')
    .factory('IofioEpisode', IofioEpisode);
IofioEpisode.$inject = [];
function IofioEpisode() {
    var Episode = function (info) {
        this.name = info.title[0];
        this.date = new Date(info.pubDate[0]);
        this.duration = info['itunes:duration'][0];
        this.image = info['itunes:image'][0].$.href;
        this.description = info.description[0];
        this.link = info.link[0];
        this.media = info.enclosure[0].$;
        this.podcast = null;
    };
    Episode.prototype.setPodcast = function (podcast) {
        this.podcast = podcast;
        return this;
    };
    return Episode;
}
