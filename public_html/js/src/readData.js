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

	var rutasMetro = ['viajandodf:metro_ruta1','viajandodf:metro_ruta2','viajandodf:metro_ruta3','viajandodf:metro_ruta4','viajandodf:metro_ruta5','viajandodf:metro_ruta6','viajandodf:metro_ruta7','viajandodf:metro_ruta8'];
	for(var idx = 0; idx < rutasMetro.length; idx++){
		var url = "http://98.230.117.107:8080/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature\n\
			&typeName="+rutasMetro[idx]+"&maxFeatures=1000&outputFormat=text%2Fjavascript\n\
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
        var estacionesMetro = ['viajandodf:metro_linea1','viajandodf:metro_linea2','viajandodf:metro_linea3','viajandodf:metro_linea4',
		'viajandodf:metro_linea5','viajandodf:metro_linea6','viajandodf:metro_linea7','viajandodf:metro_linea8',
	'viajandodf:metro_linea9','viajandodf:metro_lineaa','viajandodf:metro_lineab','viajandodf:metro_linea12'];
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
function readDataEcobici(){

	var rutasEcobici = ['viajandodf:ecobici'];
	for(var idx = 0; idx < rutasEcobici.length; idx++){
		var url = "http://98.230.117.107:8080/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature\n\
			&typeName="+rutasEcobici[idx]+"&maxFeatures=1000&outputFormat=text%2Fjavascript\n\
			&FORMAT_OPTIONS=callback:globalCallbackEcobici"+idx;
		
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
function readDataMapa(){
	var rutasMapa = ['rutas_mapathon3'];
	for(var idx = 0; idx < rutasMapa.length; idx++){
		var url = "http://98.230.117.107:8080/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature\n\
			&typeName="+rutasMapa[idx]+"&maxFeatures=2000&outputFormat=text%2Fjavascript\n\
			&FORMAT_OPTIONS=callback:globalCallbackRutas_mapathon2";
		
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
function readDataMetroBus(){
	var rutasMapa = ['metrobus_ruta1','metrobus_ruta2','metrobus_ruta3','metrobus_ruta4'];
	for(var idx = 0; idx < rutasMapa.length; idx++){
		var url = "http://98.230.117.107:8080/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature\n\
			&typeName="+rutasMapa[idx]+"&maxFeatures=2000&outputFormat=text%2Fjavascript\n\
			&FORMAT_OPTIONS=callback:globalCallbackMetrobus"+idx;
		
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
var globalCallbackMetro2 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['linea3']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetro3 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['linea4']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetro4 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['linea5']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetro5 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['linea6']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetro6 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['linea7']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetro7 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['linea8']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetro8 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['linea9']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetro9 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['linea9']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetro10 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['lineaa']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetro11 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['lineab']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetro12 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePoints(geoJSONdata),
		style: stylesEstacionesMetro['linea12']
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
var globalCallbackMetroRuta2 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetro['ruta3']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetroRuta3 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetro['ruta4']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetroRuta4 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetro['ruta5']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetroRuta5 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetro['ruta6']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetroRuta6 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetro['ruta7']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetroRuta7 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetro['ruta6']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetroRuta8 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetro['ruta7']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetroRuta9 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetro['ruta8']
	});
	
	_map.addLayer(currLayer);
};

var globalCallbackRutas_mapathon2 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePointsCamiones(geoJSONdata),
		style: stylesRutasCamion['camion']
	});
	
	_map.addLayer(currLayer);
};

var globalCallbackEcobici0 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourcePointsCamiones(geoJSONdata),
		style: stylesEcobici['ecobici']
	});
	
	_map.addLayer(currLayer);
};
function createSourcePointsCamiones(geoJSONdata){
	var tempSource = new ol.source.Vector({
		features: format.readFeatures(geoJSONdata,
		{featureProjection: 'EPSG:4326'})
	});

	return tempSource;
}

var globalCallbackMetrobus0 = function(geoJSONdata){ 
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetrobus['ruta1']
	});
	
	_map.addLayer(currLayer);

};
var globalCallbackMetrobus1 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetrobus['ruta2']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetrobus2 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetrobus['ruta3']
	});
	
	_map.addLayer(currLayer);
};
var globalCallbackMetrobus3 = function(geoJSONdata){ 
	
	var currLayer = new ol.layer.Vector({ 
		source: createSourceLines(geoJSONdata),
		style: stylesRutasMetrobus['ruta4']
	});
	
	_map.addLayer(currLayer);
};