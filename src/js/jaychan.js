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



// Interactions
+ (function($){

	// Header animations
	$(document).on("scroll",function(){
  	if ($(document).width() > 490){
	  	if ($(document).scrollTop() > 20){
				$("#jc-header").removeClass("large").addClass("small");
	  	}
			else { 
				$("#jc-header").removeClass("small").addClass("large");
			}
	 	}
		if ($(document).scrollTop() > 400){
			$('.backtotop').addClass("on");
		}
		else {
			$('.backtotop').removeClass("on");
		}
	})


	//Site Scroll
	$('#jc-nav a').bind('click',function(event){
			var $anchor = $(this);
		  	$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top-50
			}, 400,'easeOutQuart');
	 		event.preventDefault();
	 	});
	 	$('.backtotop').bind('click',function(event){
	 		console.log("hit")
		  	$('html, body').stop().animate({
				scrollTop:"0px"
			}, 400,'easeOutQuart');
	 		event.preventDefault();
	 	});
})(jQuery)




////////////////////////////////////////////////////////////
///// js structure template
////////////////////////////////////////////////////////////


/*(function($, NAMESPACE){
	NAMESPACE.test = function(){
		console.log("testing");
	};

	NAMESPACE.tryThis = function(a, b){
		var result = trySomething(a, b);
	}

	function trySomething(a, b){

		return console.log(a+b);
		
	}

})(jQuery, jc);

(function($, NAMESPACE){
	NAMESPACE.foo = function(){
		console.log("foo");
	}
})(jQuery, jc);

+ function(){
	jc.tryThis("foo", "bar");
}()*/



