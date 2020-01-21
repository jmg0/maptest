var wms_layers = [];


        var lyr_DarkMatter_0 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_Klobuchar_b1_1 = new ol.format.GeoJSON();
var features_Klobuchar_b1_1 = format_Klobuchar_b1_1.readFeatures(json_Klobuchar_b1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Klobuchar_b1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klobuchar_b1_1.addFeatures(features_Klobuchar_b1_1);
var lyr_Klobuchar_b1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Klobuchar_b1_1, 
                style: style_Klobuchar_b1_1,
                interactive: false,
    title: 'Klobuchar_b1<br />\
    <img src="styles/legend/Klobuchar_b1_1_0.png" /> 0 - 150<br />\
    <img src="styles/legend/Klobuchar_b1_1_1.png" /> 150 - 350<br />\
    <img src="styles/legend/Klobuchar_b1_1_2.png" /> 350 - 600<br />\
    <img src="styles/legend/Klobuchar_b1_1_3.png" /> 600 - 1000<br />\
    <img src="styles/legend/Klobuchar_b1_1_4.png" /> 1000 - 2800<br />'
        });

lyr_DarkMatter_0.setVisible(true);lyr_Klobuchar_b1_1.setVisible(true);
var layersList = [lyr_DarkMatter_0,lyr_Klobuchar_b1_1];
lyr_Klobuchar_b1_1.set('fieldAliases', {'Contribution': 'Contribution', 'Num_Contributions': 'Num_Contributions', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Klobuchar_b1_1.set('fieldImages', {'Contribution': '', 'Num_Contributions': '', 'Latitude': '', 'Longitude': '', });
lyr_Klobuchar_b1_1.set('fieldLabels', {'Contribution': 'no label', 'Num_Contributions': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Klobuchar_b1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});