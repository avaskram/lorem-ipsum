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


var bem = {
	el: {
		body: '__body',
		container: '__container',
		content: '__content',
		section: '__section',
		bg: '__bg',
		list: '__list',
		item: '__item',
		link: '__link',
		name: '__name',
		icon: '__icon',
		title: '__title',
		text: '__text',
		note: '__note',
		value: '__value',
		number: '__number',
		image: '__image',
		toggle: '__toggle',
		close: '__close'
	},
	mod: {
		active: '--active',
		inactive: '--inactive',
		error: '--error',
		success: '--success',
		disabled: '--disabled',
		loading: '--loading',
		loaded: '--loaded',
		init: '--init',
		hover: '--hover',
		focus: '--focus',
		color: '--color',
		hidden: '--hidden',
		visible: '--visible',
		invisible: '--invisble',
		selected: '--selected',
		opened: '--opened',
		value: '--value',
		fixed: '--fixed',
		colored: '--colored',
		current: '--current',
		bg: '--bg',
		xs: '--xs',
		sm: '--sm',
		md: '--md',
		lg: '--lg',
		xl: '--xl'
	}
}
