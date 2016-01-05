angular.module('iofio')
  .directive('backImg', backImg);
  
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