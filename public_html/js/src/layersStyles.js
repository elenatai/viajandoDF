
var stylesEstacionesMetro = {'linea1': new ol.style.Style({
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

var stylesRutasMetro = {'ruta1': new ol.style.Style({
			 stroke: new ol.style.Stroke({
				color: '#ff0000',
				width: 2
			}) }) ,
			'ruta2': new ol.style.Style({
			 stroke: new ol.style.Stroke({
				color: '#00ff00',
				width: 2
			}) }) 
			};

var stylesRutasCamion = {'camion': new ol.style.Style({
			 stroke: new ol.style.Stroke({
				color: '#000000',
				width: 3
			}) }) };