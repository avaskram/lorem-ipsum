///--- Start function
var partsUI = {
  init: function(){
  	/////--- THEME GLOBAL VARIABLES
  	var themeName = 'lorem';
  	var sendMailFilePath = '';
  	

  	/////--- PARTS UI BASE
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
  	
  	/// touch and mobile device detect
  	var isMobile = {
  	  Android: function() {
  	  	return navigator.userAgent.match(/Android/i);
  	  },
  	  BlackBerry: function() {
  	  	return navigator.userAgent.match(/BlackBerry/i);
  	  },
  	  iOS: function() {
  	  	return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  	  },
  	  Opera: function() {
  	  	return navigator.userAgent.match(/Opera Mini/i);
  	  },
  	  Windows: function() {
  	  	return navigator.userAgent.match(/IEMobile/i);
  	  },
  	  any: function(){
  	  	return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  	  }
  	}
  	
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
  	

    ////////--- Layouts / UI Core / Components
    /////////////--- layout
    (function pageIsLoaded(){
    	window.addEventListener('load',function(){
    		document.body.classList.add(pageLoadedClassName);
    		document.body.classList.remove(pageLoadingClassName);
    	});
    })();
    
    ///// clear down footer
    var clearDownFooter = (function(el){
      var init = function(){
        var clearfixName = pageClassName+'__clearfix',
            clearfixEl = '.'+clearfixName,
            $clearfix = $(clearfixEl),
            $page = $body.children(pageEl).not(pageEl+'--fullscreen'),
            footerHeight = el.outerHeight(),
            noClearfix = $clearfix.length == 0,
            clearfixTemplate = $('<div class="'+clearfixName+'"></div>');
    
        if (noClearfix){
          $page.css({
              "margin-bottom": -footerHeight+'px'
            }).append(clearfixTemplate);
        }
        var $clearfix = $body.find(clearfixEl);
    
        $page.css({
          "margin-bottom": -footerHeight+'px'
        });
        $clearfix.css({
          "height": footerHeight+'px'
        });
      }
      $window.on('load resize',function(){
        init();
        if (typeof checkHasScrollbar !== 'undefined') {
          checkHasScrollbar();
        }
      });
    })($(footerEl));
    
    var headerStick = function(){
      var $header = $(headerEl),
          $target = $($header.data('stick-target')),
          stickOffset = $header.data('stick-offset'),
          stickMod = headerClassName+'--stick',
          stickedMod = headerClassName+'--sticked',
          isStick = $header.hasClass(stickMod);
    
      if ($header.hasClass(stickMod)){
        if ($target.length){
          targetPos = $target.offset().top;
          stickOffset = stickOffset + targetPos;
    
          if ($window.scrollTop() >= stickOffset) {
            $header.addClass(stickedMod);
          }
          else {
            $header.removeClass(stickedMod);
          }
        }
        else {
          if ($window.scrollTop() >= stickOffset) {
            $header.addClass(stickedMod);
          }
          else {
            $header.removeClass(stickedMod);
          }
        }
      }
    }
    window.addEventListener('load', headerStick);
    window.addEventListener('scroll', headerStick);
    

    /////--- PARTS UI SCRIPTS
  	///// toggle
  	$.fn.toggleSwitch = function(){
  		var init = function(el){
  			var el = $(this),
  					type = el.data('toggle-type'),
  					currentGroup = el.data('toggle-link'),
  					$toggleGroup = $('[data-toggle-group="'+currentGroup+'"]'),
  					$toggleLinks = $('[data-toggle-link="'+currentGroup+'"]'),
  					$target = $(el.data('toggle-target')),
  					className = el.data('toggle-class'),
  					selectedItem = el.find('option:selected'),
  					active = null;
  	
  			if (className == undefined) {
  				active = activeClassName;
  			}
  			else {
  				active = className;
  			}
  			var toggleIn = function(){
  				if (el.attr('data-toggle-target')){
  					if (el.attr('data-toggle-link')){
  						$toggleGroup.removeClass(active);
  						$toggleLinks.removeClass(active);
  						$target.addClass(active);
  						el.addClass(active);
  					}
  					else {
  						el.addClass(active);
  						$target.addClass(active);
  					}
  				}
  				else {
  					el.addClass(active);
  				}
  			}
  			var toggleOut = function(){
  				if (el.attr('data-toggle-target')) {
  					if (el.attr('data-toggle-link')){
  						$toggleGroup.removeClass(active);
  						$toggleLinks.removeClass(active);
  						$target.removeClass(active);
  					}
  					$target.removeClass(active);
  				}
  				el.removeClass(active);
  			}
  	
  			var toggleRemove = function(){
  				el.remove();
  			}
  	
  			if (type == 'hover') {
  				el.hover((toggleIn), toggleOut);
  			}
  	
  			if (type == 'remove'){
  				el.on('click',toggleRemove);
  			}
  	
  			if (type == 'parent'){
  				var target = el.data('toggle-target'),
  						$target = el.parents(target);
  	
  				el.on('click', function(){
  					if ($target.hasClass(active)) {
  						$target.removeClass(active);
  					}
  					else {
  						$target.addClass(active);
  					}
  				});
  			}
  	
  			if (el.prop('tagName') == "SELECT") {
  				var target = selectedItem.data('toggle-target'),
  						$target = $(target);
  				el.on('change',toggleIn);
  			}
  	
  			if (el.prop('tagName') == "INPUT") {
  				el.on('change',function(){
  					if ($target.hasClass(active)) {
  						$target.removeClass(active);
  					}
  					else {
  						$target.addClass(active);
  					}
  				});
  			}
  	
  			if (type == 'choice') {
  				el.on('click',toggleIn);
  			}
  	
  			else {
  				el.on('click', function(){
  					if (el.hasClass(active)){
  						toggleOut();
  					}
  					else {
  						toggleIn();
  					}
  				});
  			}
  		}
  		return this.each(init);
  	}
  	
  	$('.js-toggle').toggleSwitch();
  	
    $.fn.toggleOutside = function(options){
    	var options = $.extend({
        exceptions: null,
        className: activeClassName,
    		callback: function(){}
      },options);
    
    	var init = function(el){
    		var el = $(this);
    
    		$document.on('click','body',function(event){
    			var exceptions = options.exceptions;
    			var className = options.className;
    
    			if (el.attr('data-toggle-exceptions')){
    				var exceptions = el.data('toggle-exceptions');
    			}
    			if (el.attr('data-toggle-class')){
    				var className = el.data('toggle-class');
    			}
    			function clickOutsideEvent(){
    				options.callback();
    				el.removeClass(className);
    				event.stopPropagation();
    			}
    			if (!$(event.target).closest(el).length && !$(event.target).closest(exceptions).length){
    				clickOutsideEvent();
    			}
    		});
    	}
    	return this.each(init);
    }
    
    $('.js-toggle-outside').toggleOutside();
    


    /////--- PARTS UI Components
    ///// select customization
    function selectBoxInit(select){
    
    	///// class names
    	//////// elements names
    	var selectFieldClassName = selectBoxClassName+'__field',
    			selectArrowClassName = selectBoxClassName+'__arrow',
    			selectValueClassName = selectBoxClassName+'__value',
    			selectDropdownClassName = selectBoxClassName+'__dropdown',
    			selectOptionsListClassName = selectBoxClassName+'__list',
    			selectOptionClassName = selectBoxClassName+'__option',
    			selectOptionTextClassName = selectBoxClassName+'__text',
    			selectValueIconClassName = selectBoxClassName+'__icon',
    
    			selectFieldEl = '.'+selectFieldClassName,
    			selectOptionEl = '.'+selectOptionClassName,
    			selectDropdownEl = '.'+selectDropdownClassName,
    			iconEl = '.'+selectValueIconClassName,
    
    			//////// modifiers / states
    			placeholderMod = selectBoxClassName+'--placeholder',
    			openedMod = selectBoxClassName+'--opened',
    			iconsMod = selectBoxClassName+'--icons',
    
    
    			currentMod = selectOptionClassName+'--current',
    
    			//////// initialize types of class names
    			placeholderValue = selectValueClassName+'--placeholder',
    			optionsIcons = selectClassName+'--icons',
    			dataIcon = 'icon';
    
    	///// initialize
    	select.each(function(){
    		///// base
    		var $this = $(this),
    				$option = $this.children('option'),
    				$firstOption = $option.eq(0),
    				$selectedOption = $this.find(':selected'),
    
    				selectedOptionText = $selectedOption.text(),
    				selectedOptionVal = $selectedOption.val(),
    				selectedOptionIndex = $selectedOption.index(),
    				selectedOptionIcon = $selectedOption.data(dataIcon),
    				firstOptionText = $firstOption.text(),
    
    				optionsNumber = $option.length,
    				placeholderText = $this.data('placeholder'),
    				optionIcon = $option.data(dataIcon),
    				selectModifiers = $this.data('modifier');
    
    				///// html templates
    				selectBoxTemplate ='<div class="'+selectBoxClassName+'"></div>',
    				selectFieldTemplate =
    					'<div class="' + selectFieldClassName+'">'+
    						'<div class="' + selectValueClassName + '"></div>'+
    						'<div class="' + selectArrowClassName + '"></div>'+
    					'</div>',
    				selectDropdownTemplate = '<div class="' + selectDropdownClassName+'"></div>',
    				selectOptionsListTemplate = '<ul class="'+selectOptionsListClassName+'"/>',
    				selectOptionTemplate = '<li>',
    				selectOptionTextTemplate = '<div class="'+selectOptionTextClassName+'">',
    				selectIconTemplate = '<div class="'+selectValueIconClassName+'"></div>',
    				selectedIconTemplate = '<div class="'+selectValueIconClassName+'" style="background-image: url('+selectedOptionIcon+');">';
    
    
    		if (!$this.parent().hasClass(selectBoxClassName)){
    			//////// create html structure
    			///////////// create box
    			$this.wrap(selectBoxTemplate);
    			$this.after(selectFieldTemplate);
    
    			var $selectBox = $this.parents(selectBoxEl),
    					$selectField = $selectBox.find(selectFieldEl),
    					$selectValue = $selectBox.find('.'+selectValueClassName);
    
    
    
    			///////////// options dropdown list
    			$selectBox.append(selectDropdownTemplate);
    
    			var $selectDropdown = $selectBox.find(selectDropdownEl),
    					$selectOptionsList = $(selectOptionsListTemplate).appendTo($selectDropdown);
    
    			for (var i = 0; i < optionsNumber; i++) {
    				if ($this.hasClass(optionsIcons)) {
    					$(selectOptionTemplate, {
    						text: $option.eq(i).text(),
    						class: selectOptionClassName,
    						'data-icon': $option.eq(i).data(dataIcon)
    					}).appendTo($selectOptionsList);
    				}
    				else {
    					$(selectOptionTemplate,{
    						text: $option.eq(i).text(),
    						class: selectOptionClassName
    					}).appendTo($selectOptionsList);
    				}
    			}
    
    
    			var $selectOption = $selectOptionsList.find(selectOptionEl),
    					$selectOptionFirst = $selectOptionsList.find(selectOptionEl+':first');
    
    			$selectOption.wrapInner(selectOptionTextTemplate)
    			$selectOption.eq(selectedOptionIndex).addClass(currentMod);
    
    
    			var $selectOptionFirstText = $selectOptionFirst.find('.'+selectOptionTextClassName)
    
    
    			if ($.trim($selectOptionFirstText.text()) == '') {
    				$selectOptionFirst.remove();
    			}
    
    			///// modify types
    			///////////// if has placeholder
    			if (placeholderText) {
    				$selectBox.addClass(placeholderMod);
    
    				if (selectedOptionIndex > 0) {
    					$selectValue.text(selectedOptionVal).removeClass(placeholderValue);
    				}
    				else {
    					$selectValue.text(placeholderText).addClass(placeholderValue);
    				}
    			}
    			else {
    				$selectValue.text(selectedOptionVal);
    			}
    			///// options with icons
    			if ($this.hasClass(optionsIcons)){
    				$selectBox.addClass(iconsMod);
    				$selectField.prepend(selectedIconTemplate);
    				$selectOption.each(function(){
    					var $this = $(this),
    							icon = $this.data(dataIcon);
    
    					$this.prepend(selectIconTemplate);
    					$this.find('.'+selectValueIconClassName).attr('style','background-image: url('+icon+');');
    				});
    			}
    			if (selectModifiers){
    				$selectBox.addClass(selectModifiers);
    			}
    		}
    	});
    
    
    	///// select dropdown resize
    	var selectDropdownSize = function(){
    		$dropdown = $(selectDropdownEl);
    		$dropdown.each(function(){
    			var $this = $(this),
    					$list = $this.find('.'+selectOptionsListClassName),
    					dropPosTop = $this.offset().top,
    					windowScroll = $window.scrollTop(),
    					dropPos = dropPosTop - windowScroll,
    					windowHeight = $window.height(),
    					listHeight = $list.height(),
    					thisHeight = windowHeight - dropPos;
    
    				if (listHeight > thisHeight) {
    					$this.css({
    						height: thisHeight-14+'px'
    					});
    				}
    				else {
    					$this.css({
    						height: 'auto'
    					});
    				}
    		});
    	}
    	window.addEventListener('resize',selectDropdownSize);
    
    	$body.on('click',selectOptionEl,function(){
    		var $this = $(this),
    				$box = $this.parents(selectBoxEl),
    				$field = $box.find(selectFieldEl),
    				$value = $box.find('.'+selectValueClassName),
    
    				$text = $this.find('.'+selectOptionTextClassName),
    				$items = $box.find(selectOptionEl),
    				$select = $box.find('select'),
    				text = $text.text(),
    				optionValue = $select.find('option:contains("'+text+'")').val();
    				placeholderText = $select.data('placeholder');
    
    		$select.val(optionValue).change();
    		$value.text(text).removeClass(placeholderValue);
    
    		if ($select.hasClass(optionsIcons)) {
    			iconValue = $field.find('.'+selectValueIconClassName),
    			icon = $this.data(dataIcon);
    			iconValue.attr('style','background-image: url('+icon+');');
    		}
    
    		$box.removeClass(openedMod);
    		$items.removeClass(currentMod);
    		$this.addClass(currentMod);
    	});
    
    	$body.on('click',selectFieldEl,function(){
    		var $this = $(this),
    				$items = $(selectBoxEl),
    				$item = $(this).parents(selectBoxEl);
    
    		if ($item.hasClass(openedMod)){
    			$items.removeClass(openedMod);
    		}
    		else {
    			$items.removeClass(openedMod);
    			$item.addClass(openedMod);
    		}
    		selectDropdownSize();
    	});
    
    	$body.on('change', select, function() {
    		var $this = $(this),
    				$value = $this.parents(selectBoxEl).find('.'+selectValueClassName),
    				value = $this.val();
    
    		if (value == "") {
    			$value.addClass(placeholderValue);
    		}
    		else {
    			$value.removeClass(placeholderValue);
    		}
    	});
    
    	$(selectBoxEl).toggleOutside({
    		className: openedMod,
    		exceptions: selectFieldEl+', '+selectBoxEl
    	});
    };
    selectBoxInit($(selectEl));
    
    /// forms validate (used form validation plugin http://www.formvalidator.net)
    var formsValidate = function(callbackLoading,callbackPost,callbackSuccess,callbackError){
      var defaultOptions = {
        errorMessageClass: inputClassName+'__error',
        validateOnBlur: false,
        scrollToTopOnError: false,
        modules: 'all',
        onSuccess: function(form){
          successHanlder(form);
          return false;
        }
      }
    
      $.validate(defaultOptions);
    
      function successHanlder(form){
        var sendUrl = '',
            formData = form.serialize(),
            $formItem = form.parents(formEl),
            $formReset = $(formEl+'__reset'),
            $formButton = $formItem.find('[type="submit"]'),
            $formResponse = $formItem.find(formEl+'__response'),
            successMod = formClassName+bem.mod.success,
            errorMod = formClassName+bem.mod.error;
    
        if (sendMailFilePath == null) {
          sendUrl = form.attr('action');
        }
        var sendForm = function(){
          $.ajax({
            url: sendUrl,
            type: "POST",
            data: formData,
            success: function(){
              if (callbackSuccess != null) {
                callbackSuccess();
              }
              else {
                if (callbackLoading != null) {
                  $.when(callbackLoading()).then(function(){
                    $formItem.addClass(successMod);
                  });
                }
                else {
                  $formItem.addClass(successMod);
                }
              }
            },
            error: function(data){
              if (callbackLoading != null){
                $.when(callbackLoading()).then(function(){
                  $formItem.addClass(errorMod);
                });
              }
              else {
                $formItem.addClass(errorMod);
              }
            },
            statusCode: {
              400: function(){
                $formItem.addClass(errorMod);
              },
              404: function(){
                $formItem.addClass(errorMod);
              },
              500: function(){
                $formItem.addClass(errorMod);
              }
            }
          });
        }
    
        if (callbackPost != null) {
          callbackPost();
          $.when(callbackPost()).then(function(){
            sendForm();
          });
        }
    
        else {
          sendForm();
        }
    
        $formReset.on('click',function(){
          form.trigger('reset');
          form.find('input,textarea,select').val('');
          form.find(inputEl).removeClass(inputClassName+bem.mod.value+' '+inputClassName+bem.mod.focus);
          $formItem.removeClass(successMod+' '+errorMod);
        });
      }
    }
    window.addEventListener('load',formsValidate);
    

  	/////--- THEME SCRIPTS
    //// range slider
    (function rangeSlider(){
      var $rangeSlider = $('.js-range-slider'),
    			instance,
    			min,
    			max,
    			from = $rangeSlider.data('from'),
    			step = 1
    
    	$rangeSlider.ionRangeSlider({
        min: $rangeSlider.data('min'),
        max: $rangeSlider.data('max'),
        step: $rangeSlider.data('step'),
        onChange: function(data) {
          from = data.from
        }
      });
    
      $rangeSlider.each(function(){
        var $this = $(this),
            $target = $($this.data('target')),
            minVal = $this.data('min'),
            maxVal = $this.data('max');
    
    
        $this.on('change',function(){
          var from = $this.data('from'),
              to = $this.data('to'),
              postfix = $this.data('postfix'),
              value = $this.prop('value');
    
          if (postfix == undefined) {
            if ($target.prop('tagName') != "INPUT") {
              $target.text(value);
            }
            else {
              $target.val(value);
            }
          }
          else {
            if ($target.prop('tagName') != "INPUT") {
              $target.text(value+postfix);
            }
            else {
              $target.val(value+postfix);
            }
          }
        });
    
        var instance = $this.data('ionRangeSlider');
    
        $target.on('input',function(){
          var val = $target.prop('value');
          val = val.replace(/,/g, '.');
          $target.val(val);
          console.log(val,minVal);
          if (val < minVal) {
            val = minVal;
          } else if (val > maxVal) {
            val = maxVal;
          }
          instance.update({
            from: val
          });
        });
    
      });
    })();
    
    ///// file name for uploader
    (function fileUploader(){
      $body.on('change', 'input[type="file"]', function(event, files, label) {
        var fileNameText = this.value.replace(/\\/g,'/').replace(/.*\//,''),
            $fileName = $(formEl+'__file');
        $fileName.text(fileNameText);
      });
    })();
    

  	////////--- vendors initialize

  }
}
partsUI.init();
