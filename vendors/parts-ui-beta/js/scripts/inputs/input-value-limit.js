///// input count
var inputValueLimit = function(el){
  var container = inputEl,
      countEl = container+'__counter',
      totalEl = container+'__total';

  var inputValueEvent = function(){
    $(el).each(function () {
      var $this = $(this),
          $counter = $this.parents(container).find(countEl),
          $total = $this.parents(container).find(totalEl),
          totalNum = $this.attr('maxlength'),
          inputValue = $this.val(),
          symbNum = inputValue.length;

      $total.text(totalNum);
      $counter.text(totalNum - symbNum);
    });
  }
  inputValueEvent();

  $body.on('input keypress', el, function () {
    inputValueEvent();
  });
}
inputValueLimit('.js-input-limit');
