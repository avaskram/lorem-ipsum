
//////// switch colors with radio button
var choiceColor = function(el,container,item) {
  var $colorEl = $(el.parents(container).find(item)),
      currentColor = el.data('color-value'),
      $target = $(el.data('color-target'));

  $colorEl.each(function(){
    var $this = $(this);

    $this.css({
      backgroundColor: currentColor
    });

    var isChecked = $(el).prop('checked');

    if (isChecked) {
      $target.css({
        backgroundColor: currentColor
      });
    }
  });

  el.on('change', function(){
    $target.css({
      backgroundColor: currentColor
    });
  });
}

$('.js-color-choice').each(function(){
  var $this = $(this);
  choiceColor($this,themeEl+'-radio',themeEl+'-radio__color');
});

///// colors data
//////// indicate color in target element from entered hex number
var inputColor = function(input) {
  var $target = $(input.data('color-target')),
      $colorGroup = $(input.data('color-group')),
      $checkedColors = $colorGroup.find('input[data-color]');

  input.on('focus input',function(){
    var $this = $(this),
        inputValue = $this.val(),
        nums = inputValue.length;

    $checkedColors.prop('checked', false);

    if (nums == 0) {
      $this.val('#');
    }
    if (nums == 7){
      $target.css({
        backgroundColor: inputValue
      });
    }
    else {
      $target.removeAttr('style');
    }
  });

  input.on('blur',function(){
    var $this = $(this),
        inputValue = $this.val(),
        nums = inputValue.length;
    if (nums < 7) {
      $this.val('');
    }
  });

  $checkedColors.on('change', function(){
    input.val('');
  });
}

$('.js-color-input').each(function(){
  inputColor($(this));
});
