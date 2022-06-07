///--- Start function
var partsUI = {
  init: function(){
  	/////--- THEME GLOBAL VARIABLES
  	//= require src/scripts/vars.js

  	/////--- PARTS UI BASE
  	//= require vendors/parts-ui-beta/js/base/global.js
    //= require vendors/parts-ui-beta/js/base/bem.js
  	//= require vendors/parts-ui-beta/js/base/names.js
  	//= require vendors/parts-ui-beta/js/base/mobile-detect.js
  	//= require vendors/parts-ui-beta/js/base/mobile-init.js

    ////////--- Layouts / UI Core / Components
    /////////////--- layout
    //= require body/body.js
    //= require footer/footer.js
    //= require header/header-stick.js

    /////--- PARTS UI SCRIPTS
  	//= require scripts/toggle/toggle.js
    //= require scripts/toggle/toggle-outside.js


    /////--- PARTS UI Components
    //= require form/selectbox/selectbox.js
    //= require form/validate.js

  	/////--- THEME SCRIPTS
    //= require src/components/range/range.js
    //= require src/components/uploader/uploader.js

  	////////--- vendors initialize

  }
}
partsUI.init();
