//// range slider
(function rangeSlider(){
  var $rangeSlider = $('.js-range-slider'),
			instance,
			min,
			max,
			from = $rangeSlider.data('from'),
			step = 1

	$rangeSlider.ionRangeSlider({
    min: $rangeSlider.data('min'),
    max: $rangeSlider.data('max'),
    step: $rangeSlider.data('step'),
    onChange: function(data) {
      from = data.from
    }
  });

  $rangeSlider.each(function(){
    var $this = $(this),
        $target = $($this.data('target')),
        minVal = $this.data('min'),
        maxVal = $this.data('max');


    $this.on('change',function(){
      var from = $this.data('from'),
          to = $this.data('to'),
          postfix = $this.data('postfix'),
          value = $this.prop('value');

      if (postfix == undefined) {
        if ($target.prop('tagName') != "INPUT") {
          $target.text(value);
        }
        else {
          $target.val(value);
        }
      }
      else {
        if ($target.prop('tagName') != "INPUT") {
          $target.text(value+postfix);
        }
        else {
          $target.val(value+postfix);
        }
      }
    });

    var instance = $this.data('ionRangeSlider');

    $target.on('input',function(){
      var val = $target.prop('value');
      val = val.replace(/,/g, '.');
      $target.val(val);
      console.log(val,minVal);
      if (val < minVal) {
        val = minVal;
      } else if (val > maxVal) {
        val = maxVal;
      }
      instance.update({
        from: val
      });
    });

  });
})();
