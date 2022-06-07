var initOnScroll = function(el,scrollOffset,mod,callback){
	var initEvent = function(){
		var $target = $(el);
		if ($target.length != 0){
			var bound = $target[0].getBoundingClientRect(),
					boundTop = bound.top,
					boundBottom = bound.bottom,
					$window = $(this),
					wTop = $window.scrollTop(),
					wHeight = window.innerHeight,
					scrollProgress = wTop - boundTop,
					scrollProgressBottom = scrollProgress+wHeight,
					initClassName = mod,
					offset = scrollOffset,
					initState = (boundTop + scrollOffset) <= wHeight;

			if (initState){
				///// lazy load images
				if ($target.attr('data-lazy')){
					var blockName = themeName+'-lazy',
							block = '.'+blockName;

					var names = {
						image: block + bem.el.image,
						placeholder: blockName + bem.el.placeholder,
						bgMod: blockName + bem.mod.bg,
						loadedMod: blockName + bem.mod.loaded
					}

					var $image = $target.find(names.image),
							image = $target.data('lazy');

					$image.attr('src',image).on('load',function(){
						$target.addClass(names.loadedMod);
					});

					if ($target.hasClass(names.bgMod)) {
						$target.attr('style','background-image:url('+image+');');
					}
					if (callback != null) {
						callback();
					}
				}
				else {
					if (!$target.hasClass(initClassName)) {
						$target.addClass(initClassName);
						if (callback != null) {
							callback();
						}
					}
				}
			}
		}
	}
	$window.on('load scroll',initEvent);
}
