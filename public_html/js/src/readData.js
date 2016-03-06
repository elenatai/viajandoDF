var format = new ol.format.GeoJSON();

function createSourcePoints(geoJSONdata){
	var tempSource = new ol.source.Vector({
		features: format.readFeatures(geoJSONdata,
		{featureProjection: 'EPSG:4326'})
	});

	return tempSource;
}

function createSourceLines(geoJSONdata){
	var tempSource = new ol.source.Vector({
		features: format.readFeatures(geoJSONdata,
		{featureProjection: 'EPSG:4326'})
	});

	return tempSource;
}


function readDataMetro(){

	var rutasMetro = ['viajandodf:metro_ruta1','viajandodf:metro_ruta2'];
	for(var idx = 0; idx < rutasMetro.length; idx++){
		var url = "http://98.230.117.107:8080/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature\n\
			&typeName="+rutasMetro[idx]+"&maxFeatures=100&outputFormat=text%2Fjavascript\n\
			&FORMAT_OPTIONS=callback:globalCallbackMetroRuta"+idx;
		
		$.ajax({
			url: url,
			dataType: "jsonp",
			error: function (err) {
			},
			success: function () {
			}
		});
	}
	
	var estacionesMetro = ['viajandodf:metro_linea1','viajandodf:metro_linea2'];
	for(var idx = 0; idx < estacionesMetro.length; idx++){
		var url = "http://98.230.117.107:8080/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature\n\
			&typeName="+estacionesMetro[idx]+"&maxFeatures=100&outputFormat=text%2Fjavascript\n\
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


var drawStylePoints = function(feature, resolution) {
	var color = 'green';
	if (feature.getGeometry().getCoordinates().length > 2) {
		color = 'red';
	}
	return [
		new ol.style.Style({
			image: new ol.style.Circle({
				radius: 7,
				fill: new ol.style.Fill({
					color: color
				}),
				stroke: new ol.style.Stroke({
				color: '#ff0000',
				width: 2})
			}) }) ];
};

var drawStyleLines = function(feature, resolution) {
	var color = 'green';
	if (feature.getGeometry().getCoordinates().length > 2) {
		color = 'red';
	}
	return [new ol.style.Style({
			stroke: new ol.style.Stroke({
				color: color,
				width: 2
			}),
			image: new ol.style.Circle({
				radius: 4,
				fill: new ol.style.Fill({
					color: color
				})
			})
		})];
};

var globalCallbackMetro0 = function(geoJSONdata){ 
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['linea1']
	});
	
	_map.addLayer(currLayer);

};
var globalCallbackMetro1 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['linea2']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetroRuta0 = function(geoJSONdata){ 
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetro['ruta1']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetroRuta1 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetro['ruta2']
	});
	
	_map.addLayer(currLayer);
};