const map = L.map('map').setView([49.9928, 8.2315], 16);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{ maxZoom: 19 }
).addTo(map);


const markers = {};


/* Wohnheim */

markers.k3 = L.marker([49.9928, 8.2315])
.addTo(map)
.bindPopup("Wohnheim K3");


/* Supermärkte */

markers.rewe = L.marker([49.9938, 8.2336])
.addTo(map)
.bindPopup(
'<b>Rewe</b><br><a href="https://maps.app.goo.gl/ntU4sbNSgzqDGLgY9" target="_blank">Navigation</a>'
);

markers.kaufland = L.marker([49.9896, 8.2334])
.addTo(map)
.bindPopup(
'<b>Kaufland</b><br><a href="https://maps.app.goo.gl/4GW1Nb7KvPjhub4S8" target="_blank">Navigation</a>'
);

markers.aldi = L.marker([49.9910, 8.2351])
.addTo(map)
.bindPopup(
'<b>Aldi</b><br><a href="https://maps.app.goo.gl/BMJULPtabRRKrw1u5" target="_blank">Navigation</a>'
);

markers.lidl = L.marker([49.9934, 8.2359])
.addTo(map)
.bindPopup(
'<b>Lidl</b><br><a href="https://maps.app.goo.gl/JeB9m2sFwfDjzw4Y9" target="_blank">Navigation</a>'
);


/* Drogerie */

markers.mueller = L.marker([49.9921, 8.2339])
.addTo(map)
.bindPopup('<b>Müller</b><br><a href="https://maps.app.goo.gl/Vq3vQME3mYdN821H9" target="_blank">Navigation</a>');

markers.dm = L.marker([49.9924, 8.2332])
.addTo(map)
.bindPopup('<b>DM</b><br><a href="https://maps.app.goo.gl/HVDbV9bvBaMuUfPJ9" target="_blank">Navigation</a>');


/* Apotheke */

markers.apo = L.marker([49.9933, 8.2342])
.addTo(map)
.bindPopup('<b>Sonnen-Apotheke</b><br><a href="https://maps.app.goo.gl/gMguMHt1U1276bnaA" target="_blank">Navigation</a>');


/* Haltestellen */

markers.arena = L.marker([49.9941, 8.2299])
.addTo(map)
.bindPopup("Tram: Bretzenheim J.-H.-Str / Arena");

markers.campusbruecke = L.marker([49.9913, 8.2267])
.addTo(map)
.bindPopup("Bus: Campusbrücke");

markers.kisselberg = L.marker([49.9879, 8.2314])
.addTo(map)
.bindPopup("Bus & Tram: Kisselberg");


/* Studierendenwerk */

markers.sw = L.marker([49.9893, 8.2362])
.addTo(map)
.bindPopup(
'<b>Studierendenwerk Mainz</b><br><a href="https://www.studierendenwerk-mainz.de/" target="_blank">Website</a>'
);


/* Marker fokussieren */

function focusMarker(id){

const marker = markers[id];

if(marker){

map.setView(marker.getLatLng(),17);

marker.openPopup();

}

}


const groceries = L.layerGroup([
markers.rewe,
markers.kaufland,
markers.aldi,
markers.lidl
]);

const transport = L.layerGroup([
markers.arena,
markers.campusbruecke,
markers.kisselberg
]);

L.control.layers(null,{
"Lebensmittel":groceries,
"Transport":transport
}).addTo(map);

const busIcon = L.icon({
iconUrl:'icons/bus.png',
iconSize:[28,28]
});
L.marker([lat,lng],{icon:busIcon})