/* global angular */
angular.module('iofio')
    .factory('MockData', MockData);
function MockData() {
    return {
        itunes: itunes,
        podcast: podcast,
        episode: episode,
        donations: donations,
        showNotes: showNotes
    };
    function showNotes() {
        return [{
                type: 'ad',
                start: 2,
                stop: 10,
                href: 'http://iofio.com',
                title: 'Welcome to iofio'
            },
            {
                type: 'link',
                start: 6,
                stop: 15,
                href: 'http://google.com',
                title: 'Heading to Google...'
            },
            {
                type: 'img',
                start: 600,
                stop: 1200,
                title: 'Shop at Target!',
                src: 'https://logo.clearbit.com/target.com',
                href: 'http://target.com'
            }];
    }
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
        };
    }
    function podcast() {
        return {
            "title": ["Inside Outside"],
            "description": ["Inside Outside is your access to startups, outside of Silicon Valley. We sit down with founders, investors and creative people building companies in startup pockets around the United States."],
            "link": ["http://www.acast.com/insideoutside"],
            "lastBuildDate": ["Tue, 17 Nov 2015 06:49:59 GMT"],
            "pubDate": ["Tue, 22 Sep 2015 08:42:37 GMT"],
            "ttl": ["120"],
            "language": ["en"],
            "copyright": [""],
            "docs": ["https://www.acast.com/insideoutside"],
            "image": [{ "url": ["http://az592690.vo.msecnd.net/media/channels/53ec74a4-7574-417c-8c59-e975122a787c/image/2.jpg"],
                    "title": ["Inside Outside"],
                    "link": ["https://www.acast.com/insideoutside"] }],
            "itunes:image": [{
                    "$": {
                        "href": "http://az592690.vo.msecnd.net/media/channels/53ec74a4-7574-417c-8c59-e975122a787c/image/2.jpg"
                    }
                }],
            "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
            "itunes:author": ["Brian Ardinger, Matt Boyd and Paul Jarrett interview startups, investors, and great guests like Brad Feld, Alistair Croll, Diana Kander, Marc Hemeon, Tyler Crowley, and more"],
            "itunes:summary": ["Building a startup outside of Silicon Valley is hard. Inside Outside is your podcast for inside access to startup founders, investors and creative people building companies outside the valley."],
            "atom:link": [{
                    "$": {
                        "rel": "self",
                        "type": "application/rss+xml",
                        "href": "http://rss.acast.com/insideoutside"
                    }
                }],
            "itunes:owner": [{
                    "itunes:name": ["Matt Boyd"],
                    "itunes:email": ["matt@insideoutside.io"]
                }],
            "itunes:explicit": ["no"],
            "itunes:keywords": [""],
            "itunes:category": [{
                    "$": {
                        "text": "Business"
                    },
                    "itunes:category": [{
                            "$": {
                                "text": "Management & Marketing"
                            }
                        }]
                }],
            "media:credit": [{
                    "_": "Brian Ardinger, Matt Boyd and Paul Jarrett interview startups, investors, and great guests like Brad Feld, Alistair Croll, Diana Kander, Marc Hemeon, Tyler Crowley, and more",
                    "$": { "role": "author" }
                }],
            "media:description": [{
                    "_": "Inside Outside is your access to startups, outside of Silicon Valley. We sit down with founders, investors and creative people building companies in startup pockets around the United States.",
                    "$": { "type": "html" }
                }],
            "item": [
                {
                    "title": ["Ep. 32 - 'Startup Travel' w/ Mickey Cloud, VP at VaynerMedia"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "d5eec3c9-24e8-402a-af91-38250637bffb",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 16 Nov 2015 17:14:08 GMT"],
                    "itunes:duration": ["00:41:56"],
                    "itunes:keywords": [""],
                    "itunes:explicit": ["no"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/v1/d5eec3c9-24e8-402a-af91-38250637bffb/32-ih27e37y.png" } }],
                    "description": ["This episode is all about how to remain productive while traveling. We discuss various aspects of travel and how to optimize your experience. We also caught up with Mickey Cloud, VP at VaynerMedia in Chattanooga TN. All this and more on this episode of Inside Outside."],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep.32-startuptravelw-mickeycloud-vpatvaynermedia"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep.32-startuptravelw-mickeycloud-vpatvaynermedia/media.mp3",
                                "length": "58244576",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 31 - 'Product Design' w/ Leslie Jump, Founder/CEO of Startup Angels"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "9983858c-fb8c-4425-9429-59f3d54cfcd4",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 09 Nov 2015 17:07:51 GMT"],
                    "itunes:duration": ["00:46:16"],
                    "itunes:keywords": [""],
                    "itunes:explicit": ["no"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/v1/9983858c-fb8c-4425-9429-59f3d54cfcd4/31-igs7ad87.png" } }],
                    "description": ["On this episode, we discussed the various aspects of product design while giving some tips and tactics along the way. We also caught up with Leslie Jump, Founder and CEO of Startup Angels in Washington DC. All this and more on this episode of Inside Outside."],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep.31-productdesignw-lesliejump-founder-ceoofstartupangels"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep.31-productdesignw-lesliejump-founder-ceoofstartupangels/media.mp3",
                                "length": "64475744",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 30 - 'Blog Breakdown' w/ Nick Moran, Host of The Full Ratchet"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "fbb13481-f0e5-4992-b057-5aef0b2f5d04",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 02 Nov 2015 17:30:46 GMT"],
                    "itunes:duration": ["00:49:03"],
                    "itunes:keywords": [""],
                    "itunes:explicit": ["no"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/v1/fbb13481-f0e5-4992-b057-5aef0b2f5d04/30-igi7psgl.png" } }],
                    "description": ["Articles discussed: \\r\\n\\r\\n'The Rise and Fall of Everest (The App)' - https://medium.com/@producthunt/the-rise-and-fall-of-everest-the-app-b0d2e6cb594c#.yqh1mb46l\\r\\n\\r\\n'Expensify’s CEO on the Tactics that Doubled its Customer Base in Just Six Months' - http://firstround.com/review/expensifys-ceo-on-the-tactics-that-doubled-its-customer-base-in-just-six-months/\\r\\n\\r\\nThis episode is a little different. We took two articles that spoke to us, and discussed them in depth. We also sat down with Nick Moran, partner at the amazing New Stack Ventures in Chicago and host of the popular podcast all about the art of startup investing, 'The Full Ratchet'. All this and more on this episode of Inside Outside."],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep.30-blogbreakdownw-nickmoran-hostofthefullratchet"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep.30-blogbreakdownw-nickmoran-hostofthefullratchet/media.mp3",
                                "length": "68493142",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 29 - 'Startup Team Members' w/ David Chait, CEO of Travefy"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "7f2af993-33cc-4f85-9851-f0470876b06f",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 26 Oct 2015 16:08:04 GMT"],
                    "itunes:duration": ["00:46:39"],
                    "itunes:keywords": [""],
                    "itunes:explicit": ["no"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/v1/7f2af993-33cc-4f85-9851-f0470876b06f/episode-cover-ig84olgg.png" } }],
                    "description": ["On this episode, we discussed the thought process of startup team members and looked at the situation from their perspective. We also caught up with David Chait, CEO of Travefy to hear his story."],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep.29-startupteammembersw-davidchait-ceooftravefy"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep.29-startupteammembersw-davidchait-ceooftravefy/media.mp3",
                                "length": "65029856",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 28 - 'Branding' w/ Neil Patel, Co-founder of Kissmetrics"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "254fb081-3d06-4963-846f-192f3787a8d7",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 19 Oct 2015 15:00:32 GMT"],
                    "itunes:duration": ["00:38:24"],
                    "itunes:keywords": [""],
                    "itunes:explicit": ["no"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/v1/254fb081-3d06-4963-846f-192f3787a8d7/28-ify2f3hy.png" } }],
                    "description": ["On this week's episode, we discussed branding and some ways you can put together a compelling brand story. We also caught up with Neil Patel, rockstar Co-founder of Kissmetrics and content marketing genius. All this and more on this episode of Inside Outside!"],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep.28-brandingw-neilpatel-co-founderofkissmetrics"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep.28-brandingw-neilpatel-co-founderofkissmetrics/media.mp3",
                                "length": "53157920",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 27 - 'Founders Tool Kit' w/ Josh Jones-Dilworth, Founder of JDI and Austin Entrepreneur"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "c964b8c5-49b0-4a30-a6ba-b2d793e32742",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 12 Oct 2015 14:25:00 GMT"],
                    "itunes:duration": ["00:45:21"],
                    "itunes:keywords": [""],
                    "itunes:explicit": ["no"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/v1/c964b8c5-49b0-4a30-a6ba-b2d793e32742/27-ifo102so.png" } }],
                    "description": ["On this episode, we discuss the various skills and personality traits involved in starting a company. We also caught up with Josh Jones-Dilworth, amazing entrepreneur from Austin Texas. We talked about the unique aspects of Austin, giving you a deeper looking into this thriving startup ecosystem.\\r\\n\\r\\nAll this and more on this episode of Inside Outside."],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep.27-founderstoolkitw-joshjones-dilworth-founderofjdiandaustinentrepreneur"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep.27-founderstoolkitw-joshjones-dilworth-founderofjdiandaustinentrepreneur/media.mp3",
                                "length": "63144608",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 26 - LIVE! 'Networking' w/ Ben Vu, Founder of SkyVu Entertainment"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "23975358-8571-45a3-a958-aeae9a47a090",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 05 Oct 2015 05:00:00 GMT"],
                    "itunes:duration": ["00:36:21"],
                    "itunes:keywords": [""],
                    "itunes:explicit": ["no"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/v1/23975358-8571-45a3-a958-aeae9a47a090/episode-cover-ife1fr0q.png" } }],
                    "description": ["Join us for our first ever live recording. This recording took place at Vega in downtown Lincoln, NE on 10/1/15. We discussed the ins and outs of networking. We're also joined by Ben Vu, founder and CEO of SkyVu entertainment. He tells his story and shares the unique perspective of running a gaming company in the midwest. All this and more on this episode of Inside Outside."],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep.26-live-networkingw-benvu-founderofskyvuentertainment"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep.26-live-networkingw-benvu-founderofskyvuentertainment/media.mp3",
                                "length": "50203040",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 25 - 'The Funnel Pt. 2' w/ Brian Spaly, CEO of Trunk Club"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "469274ac-55fa-4346-86eb-b2169d00fc22",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 28 Sep 2015 05:00:00 GMT"],
                    "itunes:duration": ["00:47:35"],
                    "itunes:keywords": [""],
                    "itunes:explicit": ["no"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/v1/469274ac-55fa-4346-86eb-b2169d00fc22/25-if481lkv.png" } }],
                    "description": ["The week is part two and a continuation of last week's discussion on the funnel, or as some people like to call it, 'Pirate Metrics'. We also sat down with Brian Spaly, Co-founder of popular apparel company, Bonobos and Founder/CEO of Trunk Club. We discuss his history as an entrepreneur and dig into the founding story of his companies. All this and more on this episode of Inside Outside."],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep.25-thefunnelpt.2w-brianspaly-ceooftrunkclub"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep.25-thefunnelpt.2w-brianspaly-ceooftrunkclub/media.mp3",
                                "length": "66364448",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 24 - 'The Funnel Pt. 1' w/ Tim Sprinkle, Author of 'Screw the Valley'"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "755222b5089b731bd2c8b310f9741643",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 21 Sep 2015 14:21:55 GMT"],
                    "itunes:duration": ["00:45:29"],
                    "itunes:keywords": ["founder,marketing,business,entrepreneur,valley,startup,silicon"],
                    "itunes:explicit": ["clean"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/acasts/22616623-6918-40dd-b62d-0872c5ab663b/image/2.jpg" } }],
                    "description": ["<p class='p1'>On part one of this two part series, we discuss a startup's funnel and Dave McClure's pirate metrics (AARRR). We also caught up with Tim Sprinkle, author of 'Screw the Valley: A Coast-to-Coast Tour of America’s New Tech Startup Culture' to hear his views on what it's really like to build a company outside the valley. </p>\\r\\n<p class='p2'> </p>\\r\\n<p> </p>\\r\\n<p class='p1'>All this and more on this episode of Inside Outside.</p>\\r\\n\\r\\nMusic: http://www.bensound.com/royalty-free-music"],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep-24-the-funnel-pt-1-w-tim-sprinkle-author-of-screw-the-valley-"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep-24-the-funnel-pt-1-w-tim-sprinkle-author-of-screw-the-valley-/media.mp3",
                                "length": "63349664",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 23 - 'Remote Working' w/ Devon Brooks, Co-founder of Blo"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "98cac7af9b249a01318934c40a0c52f7",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 14 Sep 2015 14:17:41 GMT"],
                    "itunes:duration": ["00:41:23"],
                    "itunes:keywords": ["founder,business,entrepreneur,startup,venture,company,capital"],
                    "itunes:explicit": ["clean"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/acasts/838d35db-ea7a-4756-9951-d501fca843d1/image/2.jpg" } }],
                    "description": ["<p> </p>\\r\\n<p class='p1'>On this episode, we discuss what it's like to work remotely and some best practices. We also caught up with Devon Brooks, Co-founder of Blo, a national chain of Blow Dry Bars. She brings unique insight into breaking through to new markets, the ideation stage and much more. All this and more on this episode of Inside Outside!</p>\\r\\n\\r\\nMusic: http://www.bensound.com/royalty-free-music"],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep-23-remote-working-w-devon-brooks-co-founder-of-blo"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep-23-remote-working-w-devon-brooks-co-founder-of-blo/media.mp3",
                                "length": "57433568",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 22 - 'Competition' w/ Justin Mares, Author of 'Traction'"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "ed33ab404e1da5b876c9f3a2baf2f989",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Tue, 08 Sep 2015 13:29:27 GMT"],
                    "itunes:duration": ["00:39:53"],
                    "itunes:keywords": ["podcast,valley,startup,growth,venture,capital,silicon,traction"],
                    "itunes:explicit": ["clean"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/acasts/d9ea5c2c-8c6b-4684-a6e0-a43601db067f/image/2.jpg" } }],
                    "description": ["<p> </p>\\r\\n<p class='p1'>On this episode, we discuss competition and the competitive nature of a startup. We also caught up with Justin Mares, Co-author of 'Traction' a definitive guide on achieving explosive growth for your company. All this and more on this episode of Inside Outside.</p>\\r\\n\\r\\nMusic: http://www.bensound.com/royalty-free-music"],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep-22-competition-w-justin-mares-author-of-traction-"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep-22-competition-w-justin-mares-author-of-traction-/media.mp3",
                                "length": "55283360",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 21 - How VC's Assess Risk w/ Paul Singh"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "54cc5826c307cc4973d8d22fc2adb50f",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 31 Aug 2015 14:46:30 GMT"],
                    "itunes:duration": ["00:54:46"],
                    "itunes:keywords": ["founder,investment,valley,startup,venture,capital,silicon"],
                    "itunes:explicit": ["clean"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/acasts/c13366a3-22bc-485b-becb-30cc7442c98a/image/2.jpg" } }],
                    "description": ["<p>On this episode, we discuss how VC's look at various risk factors when investing in startups. We also sat down with Paul Singh, rockstar investor, entrepreneur, Founder at Disruption Corporation and partner at 500 Startups. All this and more on this episode of Inside Outside!<br /><br />Link Mentioned This Week: http://tomtunguz.com/the-11-risks-vcs-evaluate/</p>\\r\\n\\r\\nMusic: http://www.bensound.com/royalty-free-music"],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep-21-how-vc-s-assess-risk"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep-21-how-vc-s-assess-risk/media.mp3",
                                "length": "76727840",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 20 - 'Workplace Dynamics' w/ Shoemoney"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "90c28baa96067d33829f75eaf82c5df5",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 24 Aug 2015 15:01:05 GMT"],
                    "itunes:duration": ["00:46:39"],
                    "itunes:keywords": ["fundraising,valley,startup,venture,capital,silicon,prairie,vc"],
                    "itunes:explicit": ["clean"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/acasts/8ecc9678-7072-45c0-85b7-9c7b9a61fa80/image/2.jpg" } }],
                    "description": ["<p class='p1'>On this episode of Inside Outside, we dig into the day to day struggle of working and dealing with people. We also sat down with internet marketer and entrepreneur, Jeremy Shoemaker also known as 'Shoemoney'.</p>\\r\\n<p class='p1'>Links mentioned:</p>\\r\\n<p> </p>\\r\\n<p class='p1'>'Nummi' episode of This American Life - http://www.thisamericanlife.org/radio-archives/episode/561/nummi-2015</p>\\r\\n\\r\\nMusic: http://www.bensound.com/royalty-free-music"],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep-20-workplace-dynamics-w-shoemoney"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep-20-workplace-dynamics-w-shoemoney/media.mp3",
                                "length": "65037920",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 19 - 'Pitching' w/ Tyler Crowley"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "5cd3ee3eb88e453e0e5097ca46be37d4",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 17 Aug 2015 14:24:06 GMT"],
                    "itunes:duration": ["00:53:28"],
                    "itunes:keywords": ["business,valley,startup,venture,company,capital,silicon,pitching,prairie,vc"],
                    "itunes:explicit": ["clean"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/acasts/61b75092-d763-47a4-86a6-a629620909ee/image/2.jpg" } }],
                    "description": ["<p> </p>\\r\\n<p class='p1'>On this episode, we discuss best practices for pitching your company. We also caught up with pitch coach and rockstar community builder, Tyler Crowley to hear his thoughts on the Stockholm startup scene. All this and more on this episode of Inside Outside.</p>\\r\\n\\r\\nMusic: http://www.bensound.com/royalty-free-music"],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep-19-pitching-w-tyler-crowley"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep-19-pitching-w-tyler-crowley/media.mp3",
                                "length": "74855840",
                                "type": "audio/mpeg"
                            }
                        }]
                },
                {
                    "title": ["Ep. 18 - 'Startup Accelerators' w/ Brett Byman, Co-founder and CEO of Nobl"],
                    "itunes:subtitle": ["Inside Access to Startups Outside Silicon Valley"],
                    "guid": [{
                            "_": "ad14f08d76a35c96ffd368f48236185e",
                            "$": { "isPermaLink": "false" }
                        }],
                    "pubDate": ["Mon, 10 Aug 2015 15:45:33 GMT"],
                    "itunes:duration": ["00:41:52"],
                    "itunes:keywords": ["fundraising,valley,startup,venture,capital,silicon,prairie,vc"],
                    "itunes:explicit": ["clean"],
                    "itunes:image": [{ "$": { "href": "http://az592690.vo.msecnd.net/media/acasts/07f31d7f-784f-41ba-9021-449f8a327624/image/2.jpg" } }],
                    "description": ["<p class='p1'><span class='s1'>On this episode, we discuss the advantage of startup accelerators. We also sat down with Brett Byman, Co-founder and CEO of Nobl Health to discuss his experience in an accelerator.</span></p>\\r\\n<p class='p2'> </p>\\r\\n<p> </p>\\r\\n<p class='p1'><span class='s1'>All this and more on this episode of Inside Outside!</span></p>\\r\\n\\r\\nMusic: http://www.bensound.com/royalty-free-music"],
                    "link": ["https://www.acast.com/channels/insideoutside/acasts/ep-18-startup-accelerators-w-brett-byman-co-founder-and-ceo-of-nobl"],
                    "enclosure": [{
                            "$": {
                                "url": "http://rss.acast.com/insideoutside/ep-18-startup-accelerators-w-brett-byman-co-founder-and-ceo-of-nobl/media.mp3",
                                "length": "58136288",
                                "type": "audio/mpeg"
                            }
                        }]
                }
            ]
        };
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
        };
    }
    function donations() {
        return {
            total: 20,
            data: [
                { name: "Lasertime", share: .55 },
                { name: "Bonfireside Chats", share: .25 },
                { name: "iofio", share: .2 }
            ]
        };
    }
}
