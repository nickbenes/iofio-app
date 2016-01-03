/* global angular */
angular.module('iofio')
  .factory('MockData', MockData);
  
function MockData() {
  return {
    itunes: itunes,
    podcast: podcast,
    episode: episode,
    donations: donations
  };
  
  function itunes() {
    return {
      "wrapperType": "track",
      "kind": "podcast",
      "artistId": 1046028598,
      "collectionId": 984656982,
      "trackId": 984656982,
      "artistName": "Brian Ardinger, Matt Boyd and Paul Jarrett interview startups, investors, and great guests like Brad Feld, Alistair Croll, Diana Kander, Marc Hemeon, Tyler Crowley, and more",
      "collectionName": "Inside Outside",
      "trackName": "Inside Outside",
      "collectionCensoredName": "Inside Outside",
      "trackCensoredName": "Inside Outside",
      "artistViewUrl": "https://itunes.apple.com/us/artist/acast/id1046028598?mt=2&uo=4",
      "collectionViewUrl": "https://itunes.apple.com/us/podcast/inside-outside/id984656982?mt=2&uo=4",
      "feedUrl": "http://rss.acast.com/insideoutside",
      "trackViewUrl": "https://itunes.apple.com/us/podcast/inside-outside/id984656982?mt=2&uo=4",
      "artworkUrl30": "http://is3.mzstatic.com/image/thumb/Music1/v4/28/d8/22/28d82223-a497-95fb-63a9-eec9177c9743/source/30x30bb.jpg",
      "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Music1/v4/28/d8/22/28d82223-a497-95fb-63a9-eec9177c9743/source/60x60bb.jpg",
      "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Music1/v4/28/d8/22/28d82223-a497-95fb-63a9-eec9177c9743/source/100x100bb.jpg",
      "collectionPrice": 0,
      "trackPrice": 0,
      "trackRentalPrice": 0,
      "collectionHdPrice": 0,
      "trackHdPrice": 0,
      "trackHdRentalPrice": 0,
      "releaseDate": "2015-11-16T17:14:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "trackCount": 32,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Management & Marketing",
      "radioStationUrl": "https://itunes.apple.com/station/idra.984656982",
      "artworkUrl600": "http://is3.mzstatic.com/image/thumb/Music1/v4/28/d8/22/28d82223-a497-95fb-63a9-eec9177c9743/source/600x600bb.jpg",
      "genreIds": [
        "1413",
        "26",
        "1321"
      ],
      "genres": [
        "Management & Marketing",
        "Podcasts",
        "Business"
      ]
    }
  }
  
  function podcast() {
    return {
      "wrapperType": "track",
      "kind": "podcast",
      "artistId": 1046028598,
      "collectionId": 984656982,
      "trackId": 984656982,
      "artistName": "Brian Ardinger, Matt Boyd and Paul Jarrett interview startups, investors, and great guests like Brad Feld, Alistair Croll, Diana Kander, Marc Hemeon, Tyler Crowley, and more",
      "collectionName": "Inside Outside",
      "name": "Inside Outside",
      "collectionCensoredName": "Inside Outside",
      "trackCensoredName": "Inside Outside",
      "artistViewUrl": "https://itunes.apple.com/us/artist/acast/id1046028598?mt=2&uo=4",
      "collectionViewUrl": "https://itunes.apple.com/us/podcast/inside-outside/id984656982?mt=2&uo=4",
      "feedUrl": "http://rss.acast.com/insideoutside",
      "trackViewUrl": "https://itunes.apple.com/us/podcast/inside-outside/id984656982?mt=2&uo=4",
      "artworkUrl30": "http://is3.mzstatic.com/image/thumb/Music1/v4/28/d8/22/28d82223-a497-95fb-63a9-eec9177c9743/source/30x30bb.jpg",
      "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Music1/v4/28/d8/22/28d82223-a497-95fb-63a9-eec9177c9743/source/60x60bb.jpg",
      "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Music1/v4/28/d8/22/28d82223-a497-95fb-63a9-eec9177c9743/source/100x100bb.jpg",
      "collectionPrice": 0,
      "trackPrice": 0,
      "trackRentalPrice": 0,
      "collectionHdPrice": 0,
      "trackHdPrice": 0,
      "trackHdRentalPrice": 0,
      "releaseDate": "2015-11-16T17:14:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "trackCount": 32,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Management & Marketing",
      "radioStationUrl": "https://itunes.apple.com/station/idra.984656982",
      "artworkUrl600": "http://is3.mzstatic.com/image/thumb/Music1/v4/28/d8/22/28d82223-a497-95fb-63a9-eec9177c9743/source/600x600bb.jpg",
      "genreIds": [
        "1413",
        "26",
        "1321"
      ],
      "genres": [
        "Management & Marketing",
        "Podcasts",
        "Business"
      ]
    }
  }
  
  function episode() {
    return {
      "name": "Ep. 32 - 'Startup Travel' w/ Mickey Cloud, VP at VaynerMedia",
      "itunes:subtitle": "Inside Access to Startups Outside Silicon Valley",
      "guid": {
        "_": "d5eec3c9-24e8-402a-af91-38250637bffb",
        "$": { "isPermaLink": "false" }
      },
      "pubDate": "Mon, 16 Nov 2015 17:14:08 GMT",
      "itunes:duration": "00:41:56",
      "itunes:keywords": "",
      "itunes:explicit": "no",
      "image": "http://az592690.vo.msecnd.net/media/v1/d5eec3c9-24e8-402a-af91-38250637bffb/32-ih27e37y.png",
      "description": "This episode is all about how to remain productive while traveling. We discuss various aspects of travel and how to optimize your experience. We also caught up with Mickey Cloud, VP at VaynerMedia in Chattanooga TN. All this and more on this episode of Inside Outside.",
      "link": "https://www.acast.com/channels/insideoutside/acasts/ep.32-startuptravelw-mickeycloud-vpatvaynermedia",
      "media": {
        "url": "http://rss.acast.com/insideoutside/ep.32-startuptravelw-mickeycloud-vpatvaynermedia/media.mp3",
        "length": "58244576",
        "type": "audio/mpeg"
      }
    }
  }
  
  function donations() {
    return {
      total: 20,
      distribution: [
        { name: "Lasertime", share: .55 },
        { name: "Bonfireside Chats", share: .25 },
        { name: "iofio", share: .2 }
      ]
    };
  }
}