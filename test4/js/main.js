$(".nav-link").click(function () {
	$(".nav-link").removeClass("active");
	$(this).addClass("active");
});

$(".create_store_button").click(function() {
	$(".pop-up").show();
});

$(".pop-up_closer").click(function() {
	$(".pop-up").hide();
});

$(".button_create").click(function() {
	$(".pop-up").hide();
});

$(".button_cancel").click(function() {
	$(".pop-up").hide();
});

$(document).mouseup( function(e){
	var div = $("#pop-up");
	if (div.has(e.target).length === 0 ) {
		div.hide();
	}
});