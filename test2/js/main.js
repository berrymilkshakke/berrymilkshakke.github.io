const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	centeredSlides: true,
	loop: true,
	loopedSlides: 2,
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
});

$(".main_button").click(function(){
	$(".main-1").show();
});

$(".pop-up-window-closer img").click(function(){
	$( ".main-1" ).toggle();
});

$(".menu_hide").click(function() {
	$(".side_menu").css("display", "block");
	$(".menu_hide").hide();
	$("body").css("overflow-y", "hidden");
});


$(".hide-closer").click(function() {
	$(".side_menu").css("display", "none");
	$(".menu_hide").show();
	$("body").css("overflow-y", "auto");
});

$('form').submit(function() {
	client_name = $(this).find('.client-name').val();
	client_email = $(this).find('.client-email').val();
	client_question = $(this).find('.client-question').val();

	$.ajax({
		url: 'listener.php',
		method: 'post',
		data: {
			client_name: client_name,
			client_email: client_email,
			client_question: client_question
		},
		success: function(data) {
			$('form button').html('Sended');
			$('form')[0].reset();
			alert(data);
		},
		error: function(data) {
			$('form button').html('Sended');
			$('form')[0].reset();
			alert("Получен ответ от сервера.");
		}
	});

});
