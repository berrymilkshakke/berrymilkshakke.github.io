$('.sidebar ul > li').click(function() {
	$(this).toggleClass('active');
});

$('header .logo').click(function() {
	location.href = '/mlm/';
});