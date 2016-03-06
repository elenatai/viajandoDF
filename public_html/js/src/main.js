
var ol3_layers = new Array();
var _map;
var main_view;
var layercanvas;

var current_requests = new Array();

function geoLocation(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(centerMap);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function centerMap(position){
	var view = _map.getView();
	var coordsObj = position.coords;
	var coords =  [coordsObj.longitude, coordsObj.latitude];
	view.setCenter(coords);
	view.setZoom(14);

	var tempSource = new ol.source.Vector({
		features: [new ol.Feature({
			geometry: new ol.geom.Point(coords)
					}) ]
				});

	var currLayer = new ol.layer.Vector({ 
		source:tempSource ,
		style: new ol.style.Style({
			image: new ol.style.Icon({
				src:"http://98.230.117.107:8383/viajandoDF/public_html/logos/Android.png"
				}) })
	});
	
	_map.addLayer(currLayer);
	_map.render();
}

function runApp(){
	initLayers();
	initMap();
	$(window).resize(resizeMaps);
	readDataMapa();
	geoLocation();
}

function initMap(){

	resizeMaps();
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
		var coordinate = e.coordinate;
		
		clearPopup();
		 _map.forEachFeatureAtPixel(pixel, function (feature, layer) {
			 try{
				 if(feature.getId().indexOf("metrobus") !== -1){
					 var linea = feature.get("linea");
					 if(nonEmpty(linea)){
						 showMetroBus(linea, null, pixel);
					 }
				 }else{
					 //Verify it is a bus
					 var idRuta = feature.get("id_ruta");
					 if(nonEmpty(idRuta)){
						 var origen = feature.get("routes_ori");
						 var destino = feature.get("routes_des");
						 var costo = feature.get("fare_attri");
						 showBus(idRuta, origen, destino, costo, pixel);
					 }else{
						 //Verify it is a metro
						 var linea = feature.get("linea");
						 if(nonEmpty(linea)){
							 var nombre = feature.get("nombre");
							 showMetro(linea, nombre, pixel);
						 }else{
							 if(feature.getId().indexOf("ecobici") !== -1){
								 var nombre = feature.get("nombre");
								 showEcobici(nombre, pixel);
							 }
						 }
					 }
				 }
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
	 
	 ol3_layers[0] =  new ol.layer.Tile({ source: new ol.source.OSM() });
//	 ol3_layers[0] =  new ol.layer.Tile({source: new ol.source.MapQuest({layer: 'osm'})})
 }
 
 
 function resizeMaps(){
	 var vpw = $(window).width();
	 var vph = $(window).height();
	 
	 var mapHeight = vph-180;
	 $("#mainMap").css("height",mapHeight+'px');
	 
 }