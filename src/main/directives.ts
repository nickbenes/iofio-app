angular.module('iofio')
  .directive('backImg', backImg)
  .directive('iofioNote', iofioNote);
  
function backImg() {
  return function(scope, element, attrs){
      attrs.$observe('backImg', function(value) {
          element.css({
              'background-image': 'url(' + value +')',
              'background-size': 'contain',
              'background-repeat': 'no-repeat',
              'background-position': 'center',
              'background-color': 'rgba(0,0,0,0)'
          });
      });
  };
}

function iofioNote() {
  return {
    scope: {
      iofioDataProvider: '='
    },
    templateUrl: 'templates/show-note.html'
  }
}