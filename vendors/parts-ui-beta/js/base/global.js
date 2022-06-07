/// global variables
//////// CSS class names
var $window = $(window),
		$document = $(document),
		$body = $('body'),
		$html = $('html'),
		$bodyHtml = $('body,html'),

		///// document and body conditions
		pageLoadingClassName = 'page-is-loading',
		pageLoadedClassName = 'page-is-loaded',
		pageFixClassName = 'page-is-fixed',

		scrollbarCompensateClassName = 'scrollbar-compensate',
		documentWithoutScrollbarClassName = 'document-without-scroll',
		documentHasScrollbarClassName = 'document-has-scroll',
		scrollDirectionUpClassName = 'scroll-direction-up',
		scrollDirectionDownClassName = 'scroll-direction-down',
		touchDeviceClassName = 'touch-device';
