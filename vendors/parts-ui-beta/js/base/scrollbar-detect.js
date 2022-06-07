///// window scrollbar detect
var checkHasScrollbar = function(){
	var hasVerticalScroll = document.body.scrollHeight > document.body.clientHeight;
	if (hasVerticalScroll) {
		$html.removeClass(documentWithoutScrollbarClassName).addClass(documentHasScrollbarClassName);
	}
	else {
		$html.removeClass(documentHasScrollbarClassName).addClass(documentWithoutScrollbarClassName);
	}
}
$window.on('load resize', checkHasScrollbar);
