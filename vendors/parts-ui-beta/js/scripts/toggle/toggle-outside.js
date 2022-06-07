$.fn.toggleOutside = function(options){
	var options = $.extend({
    exceptions: null,
    className: activeClassName,
		callback: function(){}
  },options);

	var init = function(el){
		var el = $(this);

		$document.on('click','body',function(event){
			var exceptions = options.exceptions;
			var className = options.className;

			if (el.attr('data-toggle-exceptions')){
				var exceptions = el.data('toggle-exceptions');
			}
			if (el.attr('data-toggle-class')){
				var className = el.data('toggle-class');
			}
			function clickOutsideEvent(){
				options.callback();
				el.removeClass(className);
				event.stopPropagation();
			}
			if (!$(event.target).closest(el).length && !$(event.target).closest(exceptions).length){
				clickOutsideEvent();
			}
		});
	}
	return this.each(init);
}

$('.js-toggle-outside').toggleOutside();
