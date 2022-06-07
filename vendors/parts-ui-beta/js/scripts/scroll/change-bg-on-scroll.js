///// dinamic change backgrounds on scroll
function changeBgOnScroll(contentEl,imgEl){
  var $bgContent = $(contentEl),
      $imageEl = $(imgEl).
	    windowHeight = window.innerHeight,
	    windowTopPosition = $(window).scrollTop(),
	    windowBottomPosition = (windowTopPosition + windowHeight/2);

	$.each($bgContent,function(){
		var $this = $(this),
		    elementHeight = $this.outerHeight(),
		    topPos = $this.offset().top,
        bottomPos = (topPos + elementHeight),
        bgMod = $this.data('bg-mod');

		if ((bottomPos >= windowTopPosition) && (topPos <= windowBottomPosition)) {
			$imageEl.addClass(bgMod);
		}
		else {
			$imageEl.removeClass(bgMod);
		}
	});
}
