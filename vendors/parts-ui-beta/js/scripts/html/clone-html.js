/// UPDATE CONTENT ACTIONS
///// clone html content
var cloneHtml = function(el){
  var clonesList = 'clones-list',
      cloneItem = '<div class="'+clonesList+'__item"></div>',
      cloneExample = '<div class="'+clonesList+'__example"></div>',
      $target = $(el.data('clone-target')),
      $clone = $target.clone(),
      $item = $clone.removeAttr('id'),
      $container = $(el.data('clone-container'));

  $item.appendTo('body').wrap(cloneItem);

  var $cloneItem = $body.find('.'+clonesList+'__item');

  $cloneItem.wrap(cloneExample);

  var $example = $body.find('.'+clonesList+'__example'),
      cloneTemplate = $example.html();

  $example.remove();

  $body.on('click', el, function(){
    $.when($container.append(cloneTemplate)).then(function(){
      var $current = $('.'+clonesList+'__item');
      $current.addClass(clonesList+'__item--updated');
    });
  });
}('.js-clone-html');
