var zoom=5;
	var latstart=22.76;
	var longstart=78;
	var markers;
	var map = L.map('map').setView([latstart,longstart],zoom);

googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
