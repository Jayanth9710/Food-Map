var zoom=5;
	var latstart=22.76;
	var longstart=78;
	var markers;
	var map = L.map('map').setView([latstart,longstart],zoom);
var googleLayer = new L.Google('HYBRID');
	map.addLayer(googleLayer,true);
