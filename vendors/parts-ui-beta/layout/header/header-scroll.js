var headerScroll = function(){
  var $header = $(headerEl),
      scrollOffset = $header.data('scroll-offset'),
      scrollMod = headerClassName+'--scroll',
      scrollHideMod = headerClassName+'--hidden';


  if (typeof getScrollDirection !== 'undefined') {
    if ($header.hasClass(scrollMod)){
      if (scrollDirection == 'up') {
        if ($window.scrollTop() >= scrollOffset){
          $header.addClass(stickedMod);
        }
        if ($window.scrollTop() == 0) {
          $header.removeClass(scrollHideMod);
        }
      }
      if (scrollDirection == 'down') {
        if ($window.scrollTop() >= scrollOffset){
          $header.addClass(scrollHideMod);
        }
        else {
          $header.removeClass(scrollHideMod);
        }
      }
    }
  }
}
window.addEventListener('scroll', headerScroll);
