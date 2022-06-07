/// load json data to html
var loadJsonData = function(list){
  var dataUrl = list.data('dataurl'),
      dataName = list.data('dataname'),

      itemsList = list.find('.json-list-container'),
      item = list.find('.json-list-item'),
      itemClass = item.attr('class'),

      itemTemplateExample = $('.json-item-template'),
      itemTemplate = list.find(itemTemplateExample),

      keyname = list.find('[data-keyname]'),
      keynames = keyname.map(function(){
        return $(this).data('keyname');
      }).get(),

      keynamesArr = $.makeArray(keynames),
      valuesNum = keynamesArr.length;


  $.getJSON(dataUrl, function(data){
    var currentData = data[dataName],
        itemsNum = currentData.length;

    $.each(currentData,function(key,val){
      var items = []
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
          list.addClass('loaded');
        },1300);
      });
    });
  });

}($('.js-json-list'));
