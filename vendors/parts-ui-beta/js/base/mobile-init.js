///// touch & mobile devices initialize
if (isMobile.any()) {
	document.body.classList.add(touchDeviceClassName);
	///// remove hover effects
  try { ///// prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;
      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;
        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
if (isMobile.iOS()){
	document.body.setAttribute('style','cursor: pointer;');
}
