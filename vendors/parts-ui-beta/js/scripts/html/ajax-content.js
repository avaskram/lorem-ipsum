
var getAjaxContent = function(dataUrl){
  $.getJSON(dataUrl,function(data){
    var currentData = data[dataName],
        itemsNum = currentData.length,
        loadedMod = 'loaded';

    $.each(currentData,function(key,val){
      var items = [];

      for (var i=0; i<valuesNum; i++){
        var dataItem = itemTemplate.find('[data-keyname="'+keynamesArr[i]+'"]'),
            dataTag = dataItem.prop('tagName').toLowerCase(),
            dataClass = dataItem.attr('class');

        items.push('<'+dataTag+' class="'+dataClass+'" data-keyname="'+keynamesArr[i]+'">'+val[keynamesArr[i]]+'</'+dataTag+'>');
      }
      var itemsHtml = $('<'+itemTag+' class="'+itemClass+'">'+items.join('')+'</'+itemTag+'>');

      $.when(itemsList.append(itemsHtml)).then(function(){
        itemTemplateExample.remove();

        setTimeout(function(){
          list.addClass(loadedMod);
        },1300);
      });
    });
  });
}
