///// LAYOUT ELEMENTS
//////// names
if (themeName == undefined) {
	var themeName = 'parts';
}
else {
	var themeName = themeName;
}

var themeEl = '.'+themeName,
		///// LAYOUTS
		pageClassName = themeName + '-page',
		headerClassName = themeName + '-header',
		footerClassName = themeName + '-footer',
		sectionClassName = themeName + '-section',
		bannerClassName = themeName + '-banner',

		//////// jquery elements
		pageEl = '.' + pageClassName,
		headerEl = '.' + headerClassName,
		footerEl = '.' + footerClassName,
		sectionEl = '.' + sectionClassName,
		bannerEl = '.' + bannerClassName,

		///// COMPONENTS
		//////// names
		menuClassName = themeName + '-menu',
		popUpClassName = themeName + '-popup',
		formClassName = themeName + '-form',
		fieldClassName = themeName + '-field',
		inputClassName = themeName + '-input',
		selectClassName = themeName + '-select',
		selectBoxClassName = themeName + '-selectbox',
		uploaderClassName = themeName + '-uploader',
		burgerClassName = themeName + '-burger',
		btnClassName = themeName + '-btn',
		cardClassName = themeName + '-card',

		//////// jquery elements
		menuEl = '.' + menuClassName,
		popUpEl = '.' + popUpClassName,
		formEl = '.' + formClassName,
		inputEl = '.' + inputClassName,
		selectEl = '.' + selectClassName,
		selectBoxEl = '.' + selectBoxClassName,
		uploaderEl = '.' + uploaderClassName,
		burgerEl = '.' + burgerClassName,
		btnEl = '.' + btnClassName,
		cardEl = '.' + cardClassName,

		///// STATES
		activeClassName = themeName + '-active',
		inactiveClassName = themeName + '-inactive';
