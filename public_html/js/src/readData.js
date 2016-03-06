var format = new ol.format.GeoJSON();

var stylesLineasMetro = {'linea1': new ol.style.Style({
			image: new ol.style.Circle({
				radius: 7,
				fill: new ol.style.Fill({
					color: '#ffcc33'
				}),
				stroke: new ol.style.Stroke({
				color: '#ff0000',
				width: 2})
			}) }),
			'linea2': new ol.style.Style({
			image: new ol.style.Circle({
				radius: 7,
				fill: new ol.style.Fill({
					color: '#00cc33'
				}),
				stroke: new ol.style.Stroke({
				color: '#ff0000',
				width: 2})
			}) }) };

function createSource(geoJSONdata){
	return new ol.source.Vector({
		features: format.readFeatures(geoJSONdata,
			{featureProjection: 'EPSG:4326'})
			});
}

var globalCallbackMetro0 = function(geoJSONdata){ 

	var currLayer = new ol.layer.Vector({ 
		source: createSource(geoJSONdata),
		style: stylesLineasMetro['linea1']
	});

	_map.addLayer(currLayer);
};

var globalCallbackMetro1 = function(geoJSONdata){ 

	var currLayer = new ol.layer.Vector({ 
		source: createSource(geoJSONdata),
		style: stylesLineasMetro['linea2']
	});

	_map.addLayer(currLayer);
};

function readDataMetro(){

	var layers = ['viajandodf:metro_linea1','viajandodf:metro_linea2'];
	for(var idx = 0; idx < layers.length; idx++){
		var url = "http://98.230.117.107:8080/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature\n\
			&typeName="+layers[idx]+"&maxFeatures=100&outputFormat=text%2Fjavascript\n\
			&FORMAT_OPTIONS=callback:globalCallbackMetro"+idx;

		$.ajax({
			url: url,
			dataType: "jsonp",
			error: function (err) {
			},
			success: function () {
			}
		});
	}

	_map.render();
}