var contentTableWrap = (function(){
  var contentName = themeName+"-content",
      $content = $('.'+contentName),
      $table = $content.find('table'),
      wrapEl = contentName+"__wrap";

  $table.each(function(){
    var $this = $(this);
    $this.wrap('<div class="'+wrapEl+'">');
  });
  
})();
