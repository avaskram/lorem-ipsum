(function pageIsLoaded(){
	window.addEventListener('load',function(){
		document.body.classList.add(pageLoadedClassName);
		document.body.classList.remove(pageLoadingClassName);
	});
})();
