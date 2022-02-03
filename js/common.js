$(function() {

	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: true,
		prevArrow: `<button type="button" class="slick-prev">
		<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.441406 11L9.4414 21.0125L11.5589 18.6568L4.67035 10.9933L11.5589 3.3299L9.4414 0.987549L0.441406 11Z" fill="#D6DBE1"/>
		</svg>		
		</button>`,
		nextArrow: `<button type="button" class="slick-next">
		<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.441406 11L9.4414 21.0125L11.5589 18.6568L4.67035 10.9933L11.5589 3.3299L9.4414 0.987549L0.441406 11Z" fill="#D6DBE1"/>
		</svg>
		</button>`,
	});

	$('.menu-toggler').on("click", function(e) {
		$('body').toggleClass("menu-openned");
	});

	function headerScroll() {
		var sT = $(window).scrollTop();

		if(sT > 0) {
			$('body').addClass("scrolled");
		} else {
			$('body').removeClass("scrolled");
		}
	}
	headerScroll();
	$(window).on("scroll", function() {
		headerScroll();
	});
});
