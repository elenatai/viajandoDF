/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var allBuses = new Array();
var fields = "(trailId,transportType,maxTariff,schedule)";
var maxRecLev = 3;
var currRecLev = 1;
var blockSize = 10;
var trailsByBus = new Array();

function loadBuses(CURSOR){
	if(_.isUndefined(CURSOR)){
		CURSOR = "";
	}
	var url = "https://mapaton-public.appspot.com/_ah/api/dashboardAPI/v1/getAllTrails?fields=cursor,trails"+fields;
//	console.log(CURSOR);
	d3.xhr(url)
		.header("Content-Type","application/json")
		.post(JSON.stringify({numberOfElements: blockSize, cursor:CURSOR}),
		function(error, json) {
			if (error) return console.warn(error);
			var data = JSON.parse(json.response);

			allBuses = allBuses.concat(data.trails);
//			console.log(allBuses);
//			console.log(data.cursor);
			if(currRecLev < maxRecLev){
				currRecLev ++;
				loadBuses(data.cursor);
			}else{
				loadAllPoints();
			}
	});

}

function loadAllPoints(){
	currRecLev = 1;
	for(var idx = 0; idx < allBuses.length;idx++){
		loadTrailPoints(idx, allBuses[idx].trailId,"");
	}
}

function trailPath(trailId, path) {
	this.trailId = trailId;
	this.path = path;
};

var bussesColor = d3.scale.category20b();

function drawTrail(idxTrail){
	var coordinates = new Array();
	var prevLoc = trailsByBus[idxTrail].path[0].location;

	for(var idx = 1; idx < trailsByBus[idxTrail].path.length; idx++){
		var currLocation = trailsByBus[idxTrail].path[idx].location;

		coordinates[idx-1] = [[prevLoc.longitude, prevLoc.latitude],
					[currLocation.longitude, currLocation.latitude]];

		prevLoc = trailsByBus[idxTrail].path[idx].location;
	}


	var lineFeature = new ol.Feature({
		geometry: new ol.geom.MultiLineString(coordinates),
		idoz: idxTrail,
		size: 3
	});

	var tempSource = new ol.source.Vector({
		features: [lineFeature]
	});

	var currLayer = new ol.layer.Vector({ 
		source: tempSource,
		style:customStyle,
		type: '',
	});

	_map.addLayer(currLayer);
}

function customStyle(feature, resolution){
	//Setting the style
	var currStyle = stylesRutasCamion['camion'];
	var newColor = bussesColor(feature.get("idoz"));
//	console.log(newColor);
	currStyle.getStroke().setColor(newColor);
	currStyle.getStroke().setWidth(feature.get("size"));
	return currStyle;

//	return stylesRutasCamion;
}

function customStyleHighLighted(feature, resolution){
	//Setting the style
	var currStyle = stylesRutasCamion['camion'];
	var newColor = bussesColor(feature.get("idoz"));
//	console.log(newColor);
	currStyle.getStroke().setColor(newColor);
	currStyle.getStroke().setWidth(feature.get("size")+5);
	return currStyle;
}

function loadTrailPoints(idxTrail, trailId,CURSOR){
	var general_url = "https://mapaton-public.appspot.com/_ah/api/dashboardAPI/v1/getTrailSnappedPoints?fields=cursor,points";
	d3.xhr(general_url)
		.header("Content-Type","application/json")
		.post(JSON.stringify({trailId: trailId, numberOfElements: blockSize, cursor:CURSOR}),
		function(error, json) {
			if (error) return console.warn(error);
			var data = JSON.parse(json.response);
			
			if(_.isUndefined(trailsByBus[idxTrail])){
				trailsByBus[idxTrail] = new trailPath(trailId, data.points);
			}else{
				trailsByBus[idxTrail].trailId =  trailId;
				trailsByBus[idxTrail].path = trailsByBus[idxTrail].path.concat(data.points); 
			}
			
//			console.log(trailsByBus[idxTrail]);
//			console.log(data.cursor);
			if(currRecLev < maxRecLev){
				currRecLev ++;
				loadTrailPoints(idxTrail,trailId, data.cursor);
			}else{
				drawTrail(idxTrail);
			}
		});
}
	
	
	/*
	gapi.client.dashboardAPI.getAllTrails(
		{"numberOfElements":5,	
			"cursor": CURSOR }}
	).execute(function(json) {
		if (error) return console.warn(error);
		var data = JSON.parse(json.response);
		allBuses.push(data.trails);
		console.log(allBuses);
		console.log(data.cursor);
		loadBuses(data.cursor);
		console.log(resp);
		}
	);*/
