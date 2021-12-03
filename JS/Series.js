window.addEventListener('load', function(){
	new Glider(document.querySelector('.carouselList'), {
		slidesToShow: 6,
		slidesToScroll: 1,
        draggable: true,
		dots: '.Indicadores',
		// arrows: {
		// 	prev: '.Anterior',
		// 	next: '.Siguiente'
		// },
	});
});