///// LAYOUT ELEMENTS
//////// names
if (themeName == undefined) {
	var themeName = 'parts';
}
else {
	var themeName = themeName;
}

var partsUI = {
	names: {
		layout: {
			page: "page",
			header: "header",
			banner: "banner",
			section: "section",
			footer: "footer"
		},
		components: {
			button: "btn",
			menu: "menu",
			popup: "popup",
			input: "input",
			form: "form",
			field: "field",
			card: "card",
			select: "select",
			selectBox: "selectbox"
		},
		states: {
			active: "active",
			inactive: "inactive"
		}
	}
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
		fieldEl = '.' + fieldClassName,
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
