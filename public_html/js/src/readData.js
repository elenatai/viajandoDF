/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

globalCallback = function(geoJSON){ 
	console.log("Inside CALLBACK");
	displayData(geoJSON);
};

function readData(){
	var url = "http://98.230.117.107:8080/geoserver/datafest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=datafest:albergues&maxFeatures=50&outputFormat=text%2Fjavascript&FORMAT_OPTIONS=callback:globalCallback";

	$.ajax({
		url: url,
		dataType: "jsonp",
		error: function (err) {
		},
		success: function () {
		}
	});
}