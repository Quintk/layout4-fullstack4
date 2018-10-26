// Main
$(document).ready(function () {
	// Phần Slider
	$('.home-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	});
	$(".home-ceo .owl-carousel").owlCarousel(
		{
			loop:true,
			items:1,
			rtl:true,
			autoplay:true,
			autoplayHoverPause:true,
			autoplaySpeed:2000,
			dots:true,
		}
	);
	$(".slider .slide .owl-carousel").owlCarousel(
		{
		loop:true,
		margin:10,
		autoplay:true,
		rtl:true,
		autoplaySpeed: 2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:3,
				dots:true,
			},
			600:{
				items:4,
				dots:true,
			},
			1025:{
				items:5,
				dots: false,
				nav:true,
				navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
			}
		}
	});

  });
