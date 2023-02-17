$('.mark_book').select2();

$(window).on('resize', function(){

	var slider_work = $('.similar_items').data('init-slider');

	if(window.innerWidth < 768){

		if(slider_work != 1){

			$('.similar_items').slick({
				arrows: false,
				dots: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}).data({'init-slider': 1});
		}
	}

	else {
		if(slider_work == 1){

			$('.similar_items').slick('unslick').data({'init-slider': 0});
		}
	}

}).trigger('resize');