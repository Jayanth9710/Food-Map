var zoom=5;
	var latstart=22.76;
	var longstart=78;
	var markers;

	var map = L.map('map').setView([latstart, longstart], zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);