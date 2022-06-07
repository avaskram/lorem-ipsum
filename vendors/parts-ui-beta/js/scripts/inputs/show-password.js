///// show password value in input
var showPasswordValue = function(el,container){
  $body.on('click',el,function(){
    var $this = $(this),
        containerEl = $this.parents(container),
        $container = $(containerEl),
        $input = $container.find('input'),
        visibleMod = inputvisibleMod+bem.mod.visible;

    if ($container.hasClass(visibleMod)){
      $input.attr('type','password');
      $container.removeClass(visibleMod);
    }
    else {
      $input.attr('type','text');
      $container.addClass(visibleMod);
    }
  });
  
}('.js-show-password',inputEl);
 

 
