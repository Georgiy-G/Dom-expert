$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	//Scroll
		$("a[href*='#']").mPageScroll2id({ scrollSpeed: 500 });

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	

	//sidebar
		$(".categories-link").click(function (e) {
			e.preventDefault;
			$(".categories__inline").toggle();
			$(".categories-icon").toggleClass("categories-icon-active");

		})
	//sidebar768
		$(".services__inline").click(function (e) {
			e.preventDefault;
			$(".sidebar768").toggle();
		})
		$(".categories768-link").click(function (e) {
			e.preventDefault;
			$(".categories768__inline").toggle();
			$(".categories768-icon").toggleClass("categories768-icon-active");

		})
		$(".menu__inline").click(function (e) {
			e.preventDefault;
			$(".sidebar768-menu").toggle();
		})
	//show-text768
		$(".show-text768-link").click(function (e) {
			e.preventDefault;
			$(".content-info").css("overflow","auto");
			$(".content-info").css("height","auto");
			$(".show-text768").css("display","none")
		})
	//slider
		$( document ).ready(function( $ ) {
		$( '.slider-pro' ).sliderPro({
			width: "100%",
			fade: true,
			arrows: true,
			fadeArrows: false,
			buttons: false,
			fullScreen: false,
			shuffle: false,
			smallSize: 500,
			mediumSize: 1000,
			largeSize: 3000,
			autoplay: false,
			autoplayDelay: 3000,
			thumbnailsPosition: "top",
			thumbnailArrows: true,
			fadeThumbnailArrows: false,
			thumbnailTouchSwipe: true,
			// thumbnailPointer: true,
			thumbnailWidth: 136,
			thumbnailHeight: 54,
		});
	});
	//slider-2
  $('.slick-wrap').slick({
	 	speed: 800,
		infinite: true,
		arrows: true,
		slidesToShow: 4,
		prevArrow: '<div class="slick-arrow slick-prev"></div>',
		nextArrow: '<div class="slick-arrow slick-next"></div>',
		slidesToScroll: 1,
		// autoplay: true,
		autoplaySpeed: 3000
	});

});
