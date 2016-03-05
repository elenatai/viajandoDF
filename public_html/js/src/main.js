var ol3_layers = new Array();
var _map;
var main_view;
var layercanvas;

var current_requests = new Array();

function runApp(){
	initLayers();
	initMap();
	$(window).resize(resizeMaps);
	var coord = readData();
}

function initMap(){
	main_view = new ol.View({
		projection: 'EPSG:4326',
		center: [0,0],
		zoom: 3
	});
	var view_northpole = new ol.View({
		center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
		//		center: ol.proj.transform([0, 90], 'EPSG:4326', 'EPSG:3857'),
		zoom: 4
	});
	var view_antarctica = new ol.View({
		center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
		//		center: ol.proj.transform([0, -90], 'EPSG:4326', 'EPSG:3857'),
		zoom: 4
	});
	
	var projection = ol.proj.get('EPSG:4326');
	var projectionExtent = projection.getExtent();
	
	var attribution = new ol.Attribution({
		html: "<a href='https://olmozavala.com'>Olmo Zavala</a>"
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
	
}

function initLayers(){
	ol3_layers[0] =  new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://ncwms.coaps.fsu.edu/geoserver/wms',
			params: {
				'LAYERS': 'comm:pyrResult512'
			}
		})
	});
	
}


function resizeMaps(){
	var vpw = $(window).width();
	var vph = $(window).height();
	
	var mapHeight = Math.ceil(2*vph/3); 
	$("#mainMap").css({'height':mapHeight+'px'});
	
}