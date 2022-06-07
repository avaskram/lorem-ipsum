///// file name for uploader
(function fileUploader(){
  $body.on('change', 'input[type="file"]', function(event, files, label) {
    var fileNameText = this.value.replace(/\\/g,'/').replace(/.*\//,''),
        $fileName = $(formEl+'__file');
    $fileName.text(fileNameText);
  });
})();
