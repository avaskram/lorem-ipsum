///// input number
var inputNumberRequire = function(el){
  var requireEvent = function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
      return true;
    } else if (key < 48 || key > 57) {
      return false;
    } else {
      return true;
    }
  }
  $body.on('keypress',el,requireEvent);

}('.js-input-number');
