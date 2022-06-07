var popUpInit = function(callback){
  var popUpAjaxMod = popUpClassName+'--ajax',
      popUpInlineMod = popUpClassName+'--inline',
      popUpOpenedMod = activeClassName,
      popUpActiveMod = activeClassName,
      popUpItem = popUpEl+bem.el.item,
      popUpContent = popUpEl+bem.el.content,
      template = '<div class="'+popUpClassName+' '+popUpAjaxMod+'">'
                  +'<div class="'+popUpClassName+bem.el.container+'">'
                    +'<div class="'+popUpClassName+bem.el.content+'">'

                    +'</div>'
                  +'</div>'
                +'</div>';

  var elements = {
    container: popUpEl,
    content: popUpContent,
    item: popUpItem,
    open: '.js-popup-open',
    close:'.js-popup-close'
  }

  var container = $(elements.container);
  var item = $(elements.item);
  var contentType = null;
  var popUpAjaxPath = null;


  (function checkContentType(){
    if (container.length>0){
      container.addClass(popUpInlineMod);
      contentType = 'inline';
    }
    else {
      container.addClass(popUpAjaxMod);
      contentType = 'ajax';
      elements.open.attr('data-popup-ajax');
    }
    return contentType;
  })();

  var init = {
    close: function(el){
      var container = $body.find(elements.container),
          item = $body.find(elements.item);

      $body.removeClass(pageFixClassName);
      $html.removeClass(scrollbarCompensateClassName);

      var url = window.location.href;

      if (window.location.hash) {
        var name = window.location.hash;
        if ($(name).length > 0) {
          page = url.replace(name,'');
          window.history.pushState({path:page},'',page);
        }
      }
      if (contentType == 'inline') {
        container.removeClass(popUpOpenedMod);
        item.removeClass(popUpActiveMod);
      }
      if (contentType == 'ajax'){
        var container = $body.find(popUpEl);
        container.remove();
      }
    },
    open: function(el){
      var target = el.data('popup-target'),
          ajaxUrl = el.data('popup-ajax'),
          mod = el.data('popup-mod'),
          $target = $(target);

      $body.addClass(pageFixClassName);
      $html.addClass(scrollbarCompensateClassName);

      var url = window.location.href,
          name = null;

      if (window.location.hash){
        name = window.location.hash;
        url = url.replace(name,'');
      }
      else {
        name = target;
      }
      window.history.pushState({path:url+name},'',url+name);


      ///// OPEN INLINE CONTENT
      var openInline = function(){
        container.addClass(popUpOpenedMod);
        item.removeClass(popUpActiveMod);

        setTimeout(function(){
          $target.addClass(popUpActiveMod).trigger('click');
          if (callback != undefined) {
            callback();
          }
        },200);
      }

      ///// OPEN AJAX CONTENT
      var openAjax = function(el){
        var item = $body.find(elements.item),
            isActive = item.hasClass(popUpActiveMod);

        if (item.length == 0){
          $.when($body.append(template)).then(function(){
            var container = $(elements.container);
            container.addClass(popUpOpenedMod);

            if (mod != undefined) {
              container.addClass(mod);
            }
          });
        }
        if (ajaxUrl == undefined) {
          ajaxUrl = popUpAjaxPath;
        }

        $.ajax({
          url: ajaxUrl,
          type:'GET',
          success: function(data){
            var data = $(data).find(name),
                container =  $body.find(elements.container),
                content = $body.find(elements.content);

            if (data.length != 0){
              if (data.hasClass(popUpClassName+bem.el.item) == false) {
                $(data).wrap('<div class='+popUpClassName+bem.el.item+'>');
                data = $(data).parents(elements.item);
              }
              content.append(data);
            }
            else {
              container.remove();
            }
          }
        }).done(function(){
          var container = $body.find(elements.container),
              item = $body.find(elements.item);

          setTimeout(function(){
            item.addClass(popUpActiveMod).trigger('click');

            if (callback != undefined) {
              callback();
            }
          },200);
        });
      }
      if (contentType == 'inline'){openInline()}
      if (contentType == 'ajax'){openAjax()}
    }
  }

  $body.on('click',elements.open,function(){
    var $this = $(this);
    init.open($this);
    return false;
  });

  $body.on('click',elements.close,function(){
    var $this = $(this);
    init.close($this);
    return false;
  });

  $body.on('click',elements.item,function(){
    var $this = $(this);
    if ($this.hasClass(popUpActiveMod)){
      $this.toggleOutside({
        exceptions: elements.open+', '+elements.item,
        callback: init.close
      });
    }
  });

  function hasUrlHash(){
    var url = window.location.href;
    if (window.location.hash){
      var name = window.location.hash,
          errorName = name.replace("##", "#"),
          item = name.replace("##", "#").replace("#", ""),
          $item = $('[data-popup-target="#'+item+'"]');

      if ($item.length == 0) {
        var itemTrigger = '<div data-popup-target="'+item+'"></div>';
        $body.append(itemTrigger);
        var $itemTrigger = $body.find($item);
        init.open($itemTrigger);
        $itemTrigger.remove();
      }
      else {
        init.open($item);
      }
    }
  }
  $window.on('load',hasUrlHash);
  $window.on('popstate', function() {
    init.close();
    hasUrlHash();
  });
}
