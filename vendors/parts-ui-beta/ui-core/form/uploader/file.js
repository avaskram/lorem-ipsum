///// file name for uploader
(function fileUploader(){
  var = loadedMod = inputName+'--uploaded',
        emptyMod = inputName+'--empty';

  $body.on('change', 'input[type="file"]', function(event, files, label) {
    var fileNameText = this.value.replace(/\\/g,'/').replace(/.*\//,''),
        $container = $(inputEl+'--file'),
        $fileName = $(inputEl+'__name'),
        $remove = $(inputEl+'__remove');

    $fileName.text(fileNameText);
    $container.addClass(loadedMod).removeClass(emptyMod);
  });

  $remove.on('click', function(){
    var $container = $(inputEl+'--file'),
        $input = $container.find('input[type="file"]');

    $container.removeClass(uploadedMod).addClass(emptyMod);
    $input.val('');
  });
})();
