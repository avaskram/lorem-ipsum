var getJsonData = function(path,callback){
  var jsonPath = path;
  $.getJSON(jsonPath,function(data){
    if (callback != undefined) {
      $.each(data,function(key,val){
        callback();
      });
    }
  });
}
