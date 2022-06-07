///// require input symbols only for phone number
var inputPhoneRequire = function(el){
  var requireEvent = function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46 || event.keyCode === 43) {
      return true;
    } else if (key < 48 || key > 57) {
      return false;
    } else {
      return true;
    }
  }
  $body.on('keypress',el,requireEvent);
}('.js-input-phone');
