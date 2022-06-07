/// forms validate (used form validation plugin http://www.formvalidator.net)
var formsValidate = function(callbackLoading,callbackPost,callbackSuccess,callbackError){
  var defaultOptions = {
    errorMessageClass: inputClassName+'__error',
    validateOnBlur: false,
    scrollToTopOnError: false,
    modules: 'all',
    onSuccess: function(form){
      successHanlder(form);
      return false;
    }
  }

  $.validate(defaultOptions);

  function successHanlder(form){
    var sendUrl = '',
        formData = form.serialize(),
        $formItem = form.parents(formEl),
        $formReset = $(formEl+'__reset'),
        $formButton = $formItem.find('[type="submit"]'),
        $formResponse = $formItem.find(formEl+'__response'),
        successMod = formClassName+bem.mod.success,
        errorMod = formClassName+bem.mod.error;

    if (sendMailFilePath == null) {
      sendUrl = form.attr('action');
    }
    var sendForm = function(){
      $.ajax({
        url: sendUrl,
        type: "POST",
        data: formData,
        success: function(){
          if (callbackSuccess != null) {
            callbackSuccess();
          }
          else {
            if (callbackLoading != null) {
              $.when(callbackLoading()).then(function(){
                $formItem.addClass(successMod);
              });
            }
            else {
              $formItem.addClass(successMod);
            }
          }
        },
        error: function(data){
          if (callbackLoading != null){
            $.when(callbackLoading()).then(function(){
              $formItem.addClass(errorMod);
            });
          }
          else {
            $formItem.addClass(errorMod);
          }
        },
        statusCode: {
          400: function(){
            $formItem.addClass(errorMod);
          },
          404: function(){
            $formItem.addClass(errorMod);
          },
          500: function(){
            $formItem.addClass(errorMod);
          }
        }
      });
    }

    if (callbackPost != null) {
      callbackPost();
      $.when(callbackPost()).then(function(){
        sendForm();
      });
    }

    else {
      sendForm();
    }

    $formReset.on('click',function(){
      form.trigger('reset');
      form.find('input,textarea,select').val('');
      form.find(inputEl).removeClass(inputClassName+bem.mod.value+' '+inputClassName+bem.mod.focus);
      $formItem.removeClass(successMod+' '+errorMod);
    });
  }
}
window.addEventListener('load',formsValidate);
