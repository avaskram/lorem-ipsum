/////// input number plus-minus change buttons
var inputCounter = function(plus,minus){
  var $plus = $(plus),
      $minus = $(minus);

  var hasCounter = $plus.length > 0 || $minus.length > 0;

  if (hasCounter){
    $body.on('click',minus,function(){
      var $this = $(this),
          $counter = $this.data('counter'),
          $container = $this.parents($counter),
          $input = $container.find('input');

      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count).change();
    });

    $body.on('click',plus,function(){
      var $this = $(this),
          $counter = $this.data('counter'),
          $container = $this.parents($counter),
          $input = $container.find('input');

      count = parseInt($input.val()) + 1
      $input.val(count).change();
    });
  }
}('.js-input-plus','.js-input-minus');
