var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PARROQUIAS_1 = new ol.format.GeoJSON();
var features_PARROQUIAS_1 = format_PARROQUIAS_1.readFeatures(json_PARROQUIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARROQUIAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARROQUIAS_1.addFeatures(features_PARROQUIAS_1);
var lyr_PARROQUIAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARROQUIAS_1, 
                style: style_PARROQUIAS_1,
                popuplayertitle: "PARROQUIAS",
                interactive: true,
                title: '<img src="styles/legend/PARROQUIAS_1.png" /> PARROQUIAS'
            });
var format_PUNTOSDELADERECHA_2 = new ol.format.GeoJSON();
var features_PUNTOSDELADERECHA_2 = format_PUNTOSDELADERECHA_2.readFeatures(json_PUNTOSDELADERECHA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTOSDELADERECHA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOSDELADERECHA_2.addFeatures(features_PUNTOSDELADERECHA_2);
var lyr_PUNTOSDELADERECHA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTOSDELADERECHA_2, 
                style: style_PUNTOSDELADERECHA_2,
                popuplayertitle: "PUNTOS DE LA DERECHA",
                interactive: true,
                title: '<img src="styles/legend/PUNTOSDELADERECHA_2.png" /> PUNTOS DE LA DERECHA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PARROQUIAS_1.setVisible(true);lyr_PUNTOSDELADERECHA_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PARROQUIAS_1,lyr_PUNTOSDELADERECHA_2];
lyr_PARROQUIAS_1.set('fieldAliases', {'PARROQUIAS': 'PARROQUIAS', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', });
lyr_PUNTOSDELADERECHA_2.set('fieldAliases', {'id': 'id', 'PARROQUIA': 'PARROQUIA', 'DIRECCION': 'DIRECCION', 'OBSERVACIO': 'OBSERVACION', });
lyr_PARROQUIAS_1.set('fieldImages', {'PARROQUIAS': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', 'auxiliary_storage_labeling_labelrotation': 'Hidden', });
lyr_PUNTOSDELADERECHA_2.set('fieldImages', {'id': 'TextEdit', 'PARROQUIA': 'TextEdit', 'DIRECCION': 'TextEdit', 'OBSERVACIO': 'TextEdit', });
lyr_PARROQUIAS_1.set('fieldLabels', {'PARROQUIAS': 'inline label - always visible', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_PUNTOSDELADERECHA_2.set('fieldLabels', {'id': 'hidden field', 'PARROQUIA': 'inline label - always visible', 'DIRECCION': 'inline label - always visible', 'OBSERVACIO': 'inline label - always visible', });
lyr_PUNTOSDELADERECHA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});