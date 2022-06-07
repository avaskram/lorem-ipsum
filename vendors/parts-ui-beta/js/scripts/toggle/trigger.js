
trigger: function(){
	attrs = {
		type: 'data-trigger-type',
		link: 'data-trigger-link',
		group: 'data-trigger-group',
		target: 'data-trigger-target',
		class: 'data-trigger-class'
	}
	var init = function(el){
		var el = this,
				type = el.getAttribute(attrs.type),
				currentGroup = el.getAttribute(attrs.link),
				$toggleGroup = document.querySelectorAll('['+attrs.group+'="'+currentGroup+'"]'),
				$toggleLinks = document.querySelectorAll('['+attrs.links+'="'+currentGroup+'"]'),
				$target = document.querySelectorAll(el.getAttribute(attrs.target)),
				className = el.getAttribute(attrs.class),
				selectedItem = el.querySelectorAll('option:selected'),
				active = null;

		if (className == undefined) {
			active = activeClassName;
		}
		else {
			active = className;
		}


		const toggleIn = function(){
			if (el.getAttribute(attrs.target)){
				if (el.attr(attrs.link)){
					$toggleGroup.classList.remove(active);
					$toggleLinks.classList.remove(active);
					$target.classList.add(active);
					el.classList.add(active);
				}
				else {
					el.classList.add(active);
					$target.classList.add(active);
				}
			}
			else {
				el.classList.add(active);
			}
		}


		var toggleOut = function(){
			if (el.getAttribute(attrs.target)) {
				if (el.getAttribute(attrs.link)){
					$toggleGroup.classList.remove(active);
					$toggleLinks.classList.remove(active);
					$target.classList.remove(active);
				}
				$target.classList.remove(active);
			}

			el.classList.remove(active);
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
			var target = el.getAttribute(attrs.target),
					$target = el.parents(target);

			el.on('click', function(){
				if ($target.hasClass(active)) {
					$target.classList.remove(active);
				}
				else {
					$target.classList.add(active);
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
					$target.classList.remove(active);
				}
				else {
					$target.classList.add(active);
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
