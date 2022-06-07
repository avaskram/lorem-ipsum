$.fn.clickOutside = function(options){
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

			if (el.attr('data-exceptions')){
				var exceptions = el.data('exceptions');
			}
			if (el.attr('data-classname')){
				var name = el.data('classname');
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
$('.js-toggle-outside').clickOutside();
