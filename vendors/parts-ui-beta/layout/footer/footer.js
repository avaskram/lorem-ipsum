///// clear down footer
var clearDownFooter = (function(el){
  var init = function(){
    var clearfixName = pageClassName+'__clearfix',
        clearfixEl = '.'+clearfixName,
        $clearfix = $(clearfixEl),
        $page = $body.children(pageEl).not(pageEl+'--fullscreen'),
        footerHeight = el.outerHeight(),
        noClearfix = $clearfix.length == 0,
        clearfixTemplate = $('<div class="'+clearfixName+'"></div>');

    if (noClearfix){
      $page.css({
          "margin-bottom": -footerHeight+'px'
        }).append(clearfixTemplate);
    }
    var $clearfix = $body.find(clearfixEl);

    $page.css({
      "margin-bottom": -footerHeight+'px'
    });
    $clearfix.css({
      "height": footerHeight+'px'
    });
  }
  $window.on('load resize',function(){
    init();
    if (typeof checkHasScrollbar !== 'undefined') {
      checkHasScrollbar();
    }
  });
})($(footerEl));
