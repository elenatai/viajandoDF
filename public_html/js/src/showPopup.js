/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
function initPopup(){
	container = document.getElementById('popup');
	content = document.getElementById('popup-content');
	closer = document.getElementById('popup-closer');

	closer.onclick = function() {
	  overlay.setPosition(undefined);
	  closer.blur();
	  return false;
	};
}
*/
function nonEmpty(variable){
	if( variable !== null && variable !== undefined){
		return true;
	}else{
		return false;
	}
}

function displayType(type){
	d3.select("#popup-content")
		.append("center")
		.append("b")
		.text(type)
		.append("br");
}

function showEcobici(nombre,pixel){
	clearPopup();
	displayType("Ecobici");
	if( nonEmpty(nombre)){
		d3.select("#popup-content")
			.append("b")
			.text("Nombre: ");
		d3.select("#popup-content")
			.append("span")
			.text(nombre)
			.append("br");
	}
	$("#popup").position(pixel);
	tooglePopup(true);
}


function showMetro(linea, nombre,pixel){
	clearPopup();

	displayType("Metro");
	if( nonEmpty(linea)){
		d3.select("#popup-content")
			.append("b")
			.text("Linea: ");
		d3.select("#popup-content")
			.append("span")
			.text(linea)
			.append("br");
	}
	if( nonEmpty(nombre)){
		d3.select("#popup-content")
			.append("b")
			.text("Nombre: ");
		d3.select("#popup-content")
			.append("span")
			.text(nombre)
			.append("br");
	}
	$("#popup").position(pixel);
	tooglePopup(true);
}


function showBus(idRuta, origen, destino, costo, pixel){
	clearPopup();

	displayType("Camion");
	if( nonEmpty(idRuta)){
		d3.select("#popup-content")
			.append("b")
			.text("Ruta: ");
		d3.select("#popup-content")
			.append("span")
			.text(idRuta)
			.append("br");
	}
	if( nonEmpty(origen)){
		d3.select("#popup-content")
			.append("b")
			.text("Origen: ");
		d3.select("#popup-content")
			.append("span")
			.text(origen)
			.append("br");
	}
	if( nonEmpty(destino)){
		d3.select("#popup-content")
			.append("b")
			.text("Destino: ");
		d3.select("#popup-content")
			.append("span")
			.text(destino)
			.append("br");
	}
	if( nonEmpty(costo)){
		d3.select("#popup-content")
			.append("b")
			.text("Costo: $");
		d3.select("#popup-content")
			.append("span")
			.text(costo)
			.append("br");
	}
	$("#popup").position(pixel);
	tooglePopup(true);
}

function clearPopup(){
	$("#popup-content").text("");
}

function tooglePopup(on){
	if(on){
		$("#popup").show();
	}else{
		$("#popup").hide();
	}
}