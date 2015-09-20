angular.module('iofio.controllers', [])

  .controller('MainCtrl', function ($ionicSideMenuDelegate, $state) {
    this.toggleLeft = function () {
      $ionicSideMenuDelegate.toggleLeft();
    }

    this.$state = $state;

    this.nowPlaying = {
      title: null,
      src: null,
      position: null,
      duration: null,
      state: null
    };
  })

  .controller('MenuCtrl', function () {
    this.items = [
      {
        name: "Home",
        ref: "page.home"
      },
      {
        name: "Playlists",
        ref: "page.playlist"
      },
      {
        name: "Search",
        ref: "page.search"
      },
      {
        name: "Donations",
        ref: "page.donations"
      },
      {
        name: "Settings",
        ref: "page.settings"
      },
    ]
  });
