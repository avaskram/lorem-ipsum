var headerStick = function(){
  var $header = $(headerEl),
      $target = $($header.data('stick-target')),
      stickOffset = $header.data('stick-offset'),
      stickMod = headerClassName+'--stick',
      stickedMod = headerClassName+'--sticked',
      isStick = $header.hasClass(stickMod);

  if ($header.hasClass(stickMod)){
    if ($target.length){
      targetPos = $target.offset().top;
      stickOffset = stickOffset + targetPos;

      if ($window.scrollTop() >= stickOffset) {
        $header.addClass(stickedMod);
      }
      else {
        $header.removeClass(stickedMod);
      }
    }
    else {
      if ($window.scrollTop() >= stickOffset) {
        $header.addClass(stickedMod);
      }
      else {
        $header.removeClass(stickedMod);
      }
    }
  }
}
window.addEventListener('load', headerStick);
window.addEventListener('scroll', headerStick);
