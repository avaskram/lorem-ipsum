var inputFocus = function(el){
  var valueMod = inputClassName+bem.mod.value,
      focusMod = inputClassName+bem.mod.focus;

  $body.on('input keypress focus change',el,function(){
    var $this = $(this),
        inputDiv = $this.parents(inputEl),
        inputValue = $this.val();

    inputDiv.addClass(focusMod);

    if (inputValue.length > 0) {
      inputDiv.addClass(valueMod);
    }
    else {
      inputDiv.removeClass(valueMod);
    }
  });

  $body.on('blur',el,function(){
    var $this = $(this),
        inputDiv = $this.parents(inputEl),
        inputValue = $this.val();

    inputDiv.removeClass(focusMod);

    if (inputValue.length == 0) {
      inputDiv.removeClass(valueMod);
    }
  });
}('.js-input-focus');
