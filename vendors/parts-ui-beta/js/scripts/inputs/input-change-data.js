///// change / update  data attributtes at target element
var inputChangeData = function(el) {
  var $target = $(el.data('target')),
      dataKey = el.data('key'),
      dataValue = el.data('value');

  $target.attr('data-'+dataKey, dataValue).data(dataKey, dataValue);

  $body.on('change', el,function(){
    $target.attr('data-'+dataKey, dataValue).data(dataKey, dataValue);
  });
}

$('.js-change-data').each(function(){
  var $this = $(this);
  inputChangeData($this);
});
