var ol3_layers = new Array();
var _map;
var main_view;
var layercanvas;

var current_requests = new Array();

function runApp(){
	initLayers();
	initMap();
	$(window).resize(resizeMaps);
	readDataMetro();
	var ROOT = 'https://mapathon-1337.appspot.com/_ah/api';
	gapi.client.load('dashboardAPI', 'v1', function() {
		loadBuses("");
	}
	, ROOT);
}

function initMap(){
	main_view = new ol.View({
		projection: 'EPSG:4326',
		center: [-99.1325,19.4075],
		zoom:12 
	});
	
	
	_map = new ol.Map({
		controls: ol.control.defaults().extend([
			new ol.control.ScaleLine({
				units: 'degrees'
			})
		]),
		target: "mainMap",
		layers: ol3_layers,
		view: main_view});
	
	$(_map.getViewport()).on('mousemove', function (e) {
		var pixel = _map.getEventPixel(e.originalEvent);
		 _map.forEachFeatureAtPixel(pixel, function (feature, layer) {
			 try{
				 feature.set("size",5);
			 }catch(err){
				 console.log("Not a line");
			 }
		});
	});
}

function initLayers(){
	/*
	ol3_layers[0] =  new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://ncwms.coaps.fsu.edu/geoserver/wms',
			params: {
				'LAYERS': 'comm:pyrResult512'
			}
		})
	});
	ol3_layers[0] = new ol.layer.Tile({
		source: new ol.source.BingMaps({
		key: 'Your Bing Maps Key from http://bingmapsportal.com/ here',
			imagerySet: 'Road'
		})});
	 */

	ol3_layers[0] =  new ol.layer.Tile({
		source: new ol.source.OSM()
	});
}


function resizeMaps(){
	var vpw = $(window).width();
	var vph = $(window).height();
	
	var mapHeight = Math.ceil(2*vph/3); 
	$("#mainMap").css({'height':mapHeight+'px'});
	
}