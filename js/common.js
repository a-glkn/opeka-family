$(function() {

	var dots = ($(".slider__item").length > 1) ? true : false; 

	$('.slider:not(.slider_v-2)').slick({
		dots: dots,
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

	if( $('.slider_v-2').length ) {

		$('.slider_v-2').slick({
			dots: dots,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			fade: true,
			arrows: true,
			autoplay: true,
			pauseOnFocus: false,
			pauseOnHover: false,
			  autoplaySpeed: 6000,
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

	}
	

	$('.gallery').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
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
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
			  }
			}
		]
	});

	$('.steps').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		arrows: false,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
			  }
			}
		]
	
	});


	$('.feedback').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
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
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
			  }
			}
		]
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


    $('.form-order__input_tel, .form__input_tel, .test-form__input_tel').inputmask("+7 (999) 999 99 99");

	$('.filter-btn').on('click', function(e) {
		$('.filter').addClass('active');
		$('.form-filter .search-btn').fadeIn(100);
		return false;
	});

	$('.filter .filter__hide').on('click', function(e) {
		$('.filter').removeClass('active');
		$('.form-filter .search-btn').fadeOut(100);
	});

	$('.text-block .btn-more').on('click', function(e) {

		var cont = $(this).parents('.text-block');
		$(cont).addClass('text_hidden');

	});


	$('.block-acc__title').on('click', function(e) {
		var cont = $(this).parents('.block-acc');
		$(cont).toggleClass('active');
	});

	if( $(window).width() < 992 ) {
		var currentSlide = $('.steps').slick('slickCurrentSlide');
		
		$('.step-block input').on('change', function() {
			$('.steps').slick('slickNext');
			
		});
	}

	$('.faq__q').on('click', function(e) {
		var cont = $(this).parents('.faq');
		$(cont).toggleClass('active');
	});
});
