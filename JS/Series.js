window.addEventListener('load', function(){
	new Glider(document.querySelector('.carouselList'), {
		slidesToShow: 12,
		slidesToScroll: 1,
        draggable: true,
		dots: '.Indicadores',
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 3.6,
		slidesToScroll: 1,
        draggable: true,
		dots: '',

	});
});