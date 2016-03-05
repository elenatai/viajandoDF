function displayData(geoJSONdata, layerId, visible) {
	
	var data = geoJSONdata.features;//Reads the data
	//Reads the projection of the layer from the returned JSON data
	var projection = geoJSONdata.crs.type+":"+geoJSONdata.crs.properties.name;
	
	//Creates the vector source from the data and the projection
	var vectorSource = new ol.source.Vector({
		features: data ,
		format: new ol.format.GeoJSON()});

	var currLayer = new ol.layer.Vector( { 
		source: vectorSource,
		style: styles.Point}); 

	_map.addLayer(currLayer);
	_map.render();
}

var image = new ol.style.Circle({
    radius: 5,
    stroke: null,
    fill: new ol.style.Stroke({
        color: 'red',
        width: 1
    })
});
var styles = {
    'Point': [new ol.style.Style({
        image: image
    })],
    'LineString': [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'green',
            width: 1
        })
    })],
    'MultiLineString': [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'green',
            width: 1
        })
    })],
    'MultiPoint': [new ol.style.Style({
        image: image
    })],
    'MultiPolygon': [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'yellow',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 0, 0.1)'
        })
    })],
    'Polygon': [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            lineDash: [4],
            width: 3
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.1)'
        })
    })],
    'GeometryCollection': [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'magenta',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'magenta'
        }),
        image: new ol.style.Circle({
            radius: 10,
            fill: null,
            stroke: new ol.style.Stroke({
                color: 'magenta'
            })
        })
    })],
    'Circle': [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'red',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.2)'
        })
    })]
};

var styleFunction = function(feature, resolution) {
    return styles[feature.getGeometry().getType()];
};
