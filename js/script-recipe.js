$(document).ready( function(){
	// Etapa 1
	$('.js-menu').hide();

	// Etapa 7
	console.log('El documento HTML está listo');
});

// Etapa 8 y 9
$('.js-show-recipe').on('click', function() {
	$('.page.recipe').removeClass('make');

	$(this).addClass('active');
	$('.js-show-make').removeClass('active');
});
$('.js-show-make').on('click', function() {
	$('.page.recipe').addClass('make');

	$(this).addClass('active');
	$('.js-show-recipe').removeClass('active');
});

// Etapa 10
$('.js-back').on('click', function() {
	window.location = './index.html'
});
