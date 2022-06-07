///// toggle
$.fn.toggleSwitch = function(){
	var init = function(el){
		var el = $(this),
				type = el.data('toggle-type'),
				currentGroup = el.data('toggle-link'),
				$toggleGroup = $('[data-toggle-group="'+currentGroup+'"]'),
				$toggleLinks = $('[data-toggle-link="'+currentGroup+'"]'),
				$target = $(el.data('toggle-target')),
				className = el.data('toggle-class'),
				selectedItem = el.find('option:selected'),
				active = null;

		if (className == undefined) {
			active = activeClassName;
		}
		else {
			active = className;
		}
		var toggleIn = function(){
			if (el.attr('data-toggle-target')){
				if (el.attr('data-toggle-link')){
					$toggleGroup.removeClass(active);
					$toggleLinks.removeClass(active);
					$target.addClass(active);
					el.addClass(active);
				}
				else {
					el.addClass(active);
					$target.addClass(active);
				}
			}
			else {
				el.addClass(active);
			}
		}
		var toggleOut = function(){
			if (el.attr('data-toggle-target')) {
				if (el.attr('data-toggle-link')){
					$toggleGroup.removeClass(active);
					$toggleLinks.removeClass(active);
					$target.removeClass(active);
				}
				$target.removeClass(active);
			}
			el.removeClass(active);
		}

		var toggleRemove = function(){
			el.remove();
		}

		if (type == 'hover') {
			el.hover((toggleIn), toggleOut);
		}

		if (type == 'remove'){
			el.on('click',toggleRemove);
		}

		if (type == 'parent'){
			var target = el.data('toggle-target'),
					$target = el.parents(target);

			el.on('click', function(){
				if ($target.hasClass(active)) {
					$target.removeClass(active);
				}
				else {
					$target.addClass(active);
				}
			});
		}

		if (el.prop('tagName') == "SELECT") {
			var target = selectedItem.data('toggle-target'),
					$target = $(target);
			el.on('change',toggleIn);
		}

		if (el.prop('tagName') == "INPUT") {
			el.on('change',function(){
				if ($target.hasClass(active)) {
					$target.removeClass(active);
				}
				else {
					$target.addClass(active);
				}
			});
		}

		if (type == 'choice') {
			el.on('click',toggleIn);
		}

		else {
			el.on('click', function(){
				if (el.hasClass(active)){
					toggleOut();
				}
				else {
					toggleIn();
				}
			});
		}
	}
	return this.each(init);
}

$('.js-toggle').toggleSwitch();
