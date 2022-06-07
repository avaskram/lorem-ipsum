var scrollbarInitialize = function(p,r){
  var scrollbarWidth = 0,
      parent = '.' + scrollbarCompensateClassName,
      styles = '',
      elements = ''
      paddings = '',
      rights = '';

  var init = {
    getSize: function() {
      var block = $('<div>').css({'height': '50px','width': '50px'}),
        indicator = $('<div>').css({'height': '200px'});
      $body.append(block.append(indicator));
      var w1 = $('div', block).innerWidth();
      block.css('overflow-y', 'scroll');
      var w2 = $('div', block).innerWidth();
      $(block).remove();
      return (scrollbarWidth = (w1 - w2)), paddingStyles = '{padding-right:' + scrollbarWidth + 'px;}', rightStyles = '{right:' + scrollbarWidth + 'px;}';
    }(),
    getPaddings: function(items){
      for (item in items){
        if (item == (items.length-1)) {
          elements = items[item]
        }
        else {
          elements = items[item]+','
        }
        paddings += parent+' '+[elements];
      }
      return paddings
    }(p),
    getRights: function(items){
      for (item in items){
        if (item == (items.length-1)) {
          elements = items[item]
        }
        else {
          elements = items[item]+','
        }
        rights += parent+' '+[elements];
      }
      return rights
    }(r),
    css: {
      margin: parent+'{margin-right:' + scrollbarWidth + 'px;}',
      padding: paddings+paddingStyles,
      right: rights+rightStyles
    }
  }
  for (rules in init.css) {
    styles += init.css[rules]
  };
  var template = '<style type="text/css">' + styles + '</style>';
  var $template = $(template);
  $template.appendTo('head');
}(
  [bannerEl],
  [headerEl]
);
