/* global angular */
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('iofio', [
  'ionic',
  'nvd3',
  'ionic.service.core',
  "ngSanitize",
  "com.2fdevs.videogular",
  "com.2fdevs.videogular.plugins.controls",
  "com.2fdevs.videogular.plugins.overlayplay",
  "com.2fdevs.videogular.plugins.poster"
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // abstract state for header and footer
    .state('page', {
      abstract: true,
      templateUrl: 'templates/page.html',
      controller: 'MainCtrl'
    })
      
    /*
    .state('page.home', {
      url: '/',
      templateUrl: 'templates/home.html'      
    })
    
    .state('page.search', {
      url: '/search',
      templateUrl: 'templates/search.html'
    })
    */
    
    .state('page.playlist', {
      url: '/playlist',
      templateUrl: 'templates/playlist.html'
    })
    
    .state('page.donations', {
      url: '/donations',
      templateUrl: 'templates/donations.html'
    })
    
    .state('page.settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html'
    })
    
    .state('page.player', {
      url: '/player',
      templateUrl: 'templates/player.html'
    })
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/playlist');

});
