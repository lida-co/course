$('.page-scroll').on('click',function(e){
	var destination = $(this).attr('href');
	var elmDestination = $(destination);

	$('body, html').animate({
		scrollTop: elmDestination.offset().top
	}, 1000);

	e.preventDefault();
});