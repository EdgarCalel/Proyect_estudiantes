window.addEventListener('load', function(){
	new Glider(document.querySelector('.carouselList'), {
		slidesToShow: 12,
		slidesToScroll: 1,
        draggable: true,
		dots: '.Indicadores',
	});
});