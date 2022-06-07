///// image uploader
(function imageUploader(){
  var uploaderArea = uploaderClassName+'--area',
      uploaderPreview = uploaderClassName+'__image',
      uploadedClass = uploaderClassName+'--uploaded';

  function imageUploaderArea(input){
    var $input = $(input)
        $container = $input.parents('.'+uploaderArea),
        $target = $($container.find('.'+uploaderPreview));
        $mirror = $($input.data('mirror'));

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        var image = e.target.result;
        $target.attr('style', 'background-image: url("'+image+'")');
        $mirror.attr('style', 'background-image: url("'+image+'")');
      }
      reader.readAsDataURL(input.files[0]);

      setTimeout(function() {
        $container.addClass(uploadedClass);
      }, 200);
    }
  }

  $body.on('change','.js-uploader-area',function(){
    imageUploaderArea(this);
  });


  function clearUploadArea(el){
    var $container = $(el.parents('.'+uploaderArea)),
        $target = $($container.find('.'+uploaderPreview)),
        $input = $container.find('input');
        $mirror = $($input.data('mirror'));
    $input.val('').change();
    $container.removeClass(uploadedClass);

    setTimeout(function() {
      $target.removeAttr('style');
      $mirror.removeAttr('style');
    }, 500);
  }
  $body.on('click', '.js-clear-upload-area', function(){
    var $this = $(this);
    clearUploadArea($this);
  });
})();
