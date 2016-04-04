var jc = jc || {};

// plugins init 
(function($){

	'use strict';

	//Isotop plugin
	var $container = $('.portfolioContainer');
	$container.isotope({
		itemSelector : 'article',
		layoutMode: 'fitRows',
	  	filter: '*',
	  	animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
	 	}
 	});
	$('.portfolioFilter a').click(function(){
		$('.portfolioFilter .current').removeClass('current');
	  	$(this).addClass('current');
	  	var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions:{
				 duration: 750,
				 easing: 'linear',
				 queue: false
			}
		});
		return false;
 	}); 


	// Accordion
	$('#testamony').accordion({
		active: false,
		collapsible: true,
		alwaysOpen:false,
		heightStyle: "content"
 	});
 	$('.ui-accordion-header').click(function(){
		$(this.testamony_arrow).rotate(90);
 	})


 	//Fancybox
 	$('.fancybox').fancybox({
		autoScale:true,
		helpers : {
			title : {
				type : 'over'
			}
		}
		})
	$("#flash_1").fancybox({
  		width:960,
  		height:600,
  		autoScale:true,
		helpers: {
			  title : {
					type : 'over'
			  }
		 }
	});


	//BX slider
	$('.slider1').bxSlider({
		slideWidth: 940,
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
	});

})(jQuery);