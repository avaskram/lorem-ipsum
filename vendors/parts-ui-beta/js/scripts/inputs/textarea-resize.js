///// resize textarea on input
var textareaResize = function(){
	var textarea = $('.js-textarea-resize');

	$.each(textarea,function(){
		var offset = this.offsetHeight - this.clientHeight;
		var $this = $(this);
		var textareaResizeEvent = function(el) {
			$(el).css('height','auto').css('height', el.scrollHeight + offset);
			var value = $(el).val().length
			if (value < 1){
				$this.removeAttr('style');
			}
		};
		$this.on('keyup input', function () {
			textareaResizeEvent(this);
		});
	});

	$body.on('blur',textarea,function(){
		var $this = $(this);
		var value = $this.val().length
		if (value < 1){
			$this.removeAttr('style');
		}
	});
}
textareaResize();
