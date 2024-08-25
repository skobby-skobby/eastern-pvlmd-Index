var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_index_labels_1 = new ol.format.GeoJSON();
var features_index_labels_1 = format_index_labels_1.readFeatures(json_index_labels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_index_labels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_index_labels_1.addFeatures(features_index_labels_1);
var lyr_index_labels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_index_labels_1, 
                style: style_index_labels_1,
                popuplayertitle: "index_labels",
                interactive: true,
                    title: '<img src="styles/legend/index_labels_1.png" /> index_labels'
                });
var format_index_2 = new ol.format.GeoJSON();
var features_index_2 = format_index_2.readFeatures(json_index_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_index_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_index_2.addFeatures(features_index_2);
var lyr_index_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_index_2, 
                style: style_index_2,
                popuplayertitle: "index",
                interactive: true,
                    title: '<img src="styles/legend/index_2.png" /> index'
                });
var format_ghana_16_regions_3 = new ol.format.GeoJSON();
var features_ghana_16_regions_3 = format_ghana_16_regions_3.readFeatures(json_ghana_16_regions_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ghana_16_regions_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ghana_16_regions_3.addFeatures(features_ghana_16_regions_3);
var lyr_ghana_16_regions_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ghana_16_regions_3, 
                style: style_ghana_16_regions_3,
                popuplayertitle: "ghana_16_regions",
                interactive: true,
                    title: '<img src="styles/legend/ghana_16_regions_3.png" /> ghana_16_regions'
                });

lyr_OSMStandard_0.setVisible(true);lyr_index_labels_1.setVisible(true);lyr_index_2.setVisible(true);lyr_ghana_16_regions_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_index_labels_1,lyr_index_2,lyr_ghana_16_regions_3];
lyr_index_labels_1.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'Text': 'Text', });
lyr_index_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'Text': 'Text', });
lyr_ghana_16_regions_3.set('fieldAliases', {'REGION': 'REGION', 'FID': 'FID', });
lyr_index_labels_1.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'Text': 'TextEdit', });
lyr_index_2.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'Text': 'TextEdit', });
lyr_ghana_16_regions_3.set('fieldImages', {'REGION': 'TextEdit', 'FID': 'TextEdit', });
lyr_index_labels_1.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'Text': 'inline label - always visible', });
lyr_index_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'Text': 'no label', });
lyr_ghana_16_regions_3.set('fieldLabels', {'REGION': 'inline label - always visible', 'FID': 'no label', });
lyr_ghana_16_regions_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});