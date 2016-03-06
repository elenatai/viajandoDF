var stylesEstacionesMetroLogo = new ol.style.Style({
			image: new ol.style.Icon({
				src:"http://98.230.117.107:8383/viajandoDF/public_html/logos/metro/LogoR.png"
				}) });

var stylesEstacionesEcobicoLogo = new ol.style.Style({
			image: new ol.style.Icon({
				src:"http://98.230.117.107:8383/viajandoDF/public_html/logos/BiciR.png"
				}) });


var stylesEstacionesMetro = {'linea1': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#F56394'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})}),
	'linea2': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#1267AA'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})}),
	'linea3': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#B19F2F'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})}),
	'linea4': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#79BAB2'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})}),
	'linea5': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#FDDF01'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})}),
	'linea6': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#FF6308'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})}),
	'linea7': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#FF6308'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})}),
	'linea8': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#018748'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})}),
	'linea9': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#018748'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})}),
	'lineaa': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#018748'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})}),
	'lineab': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#018748'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})}),
	'linea12': new ol.style.Style({
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#018748'
			}),
			stroke: new ol.style.Stroke({
				color: '#222224',
				width: 1})
		})})
};



var stylesRutasCamion = {'camion': new ol.style.Style({
			 stroke: new ol.style.Stroke({
				color: '#3BB8C4',
				width: 1
			}) }) };

var stylesRutasMetro = {'ruta1': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#F56394',
			width: 2
		})}),
	'ruta2': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#1267AA',
			width: 2
		})}),
	'ruta3': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#B19F2F',
			width: 2
		})}),
	'ruta4': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#79BAB2',
			width: 2
		})}),
	'ruta5': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#FDDF01',
			width: 2
		})}),
	'ruta6': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#FF6308',
			width: 2
		})}),
	'ruta7': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#FF6308',
			width: 2
		})}),
	'ruta8': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '018748',
			width: 2
		})})

};

var stylesEcobici= {'ecobici':new ol.style.Style({
			image: new ol.style.Circle({
				radius: 4,
				fill: new ol.style.Fill({
					color: '#00FF00'
				}),
				stroke: new ol.style.Stroke({
				color: '#00AA00',
				width: 1})
			}) })} ;

var stylesRutasMetrobus = {'ruta1': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#F56394',
			width: 2,
			lineDash: [4, 4]
		}) }),
	'ruta2': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#1267AA',
			width: 2,
			lineDash: [4, 4]
		}) }),
	'ruta3': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#B19F2F',
			width: 2,
			lineDash: [4, 4]
		}) }),
	'ruta4': new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#79BAB2',
			width: 2,
			lineDash: [4, 4]
		}) }) 	
};