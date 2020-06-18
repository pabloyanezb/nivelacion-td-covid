$(document).ready( function(){
	// Etapa 1
	$('.js-menu').hide();

	// Etapa 7
	console.log('El documento HTML está listo');
});

// Etapa 8
$('.js-show-recipe').on('click', function() {
	$('.page.recipe').removeClass('make');
});
$('.js-show-make').on('click', function() {
	$('.page.recipe').addClass('make');
});
