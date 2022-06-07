///// detecting scroll / mouseweel direction
var scrollDirection,
    scrollDirectionDown,
    scrollDirectionUp;

var getScrollDirection = function(){
  var scrollPos = 0;

  window.addEventListener('scroll',function(){
    if ((document.body.getBoundingClientRect()).top > scrollPos){
      document.body.classList.add(scrollDirectionUpClassName);
      document.body.classList.remove(scrollDirectionDownClassName);
      scrollDirectionUp = true;
      scrollDirectionDown = false;
      scrollDirection = 'up';
    }
    else {
      document.body.classList.add(scrollDirectionDownClassName);
      document.body.classList.remove(scrollDirectionUpClassName);
      scrollDirectionDown = true;
      scrollDirectionUp = false;
      scrollDirection = 'down';
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
    return scrollDirection, scrollDirectionUp, scrollDirectionDown;
  });
}();
