ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12159402.661913, -830573.774110, 12173677.709007, -823655.540186]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_DesaKarangsoka_2 = new ol.format.GeoJSON();
var features_DesaKarangsoka_2 = format_DesaKarangsoka_2.readFeatures(json_DesaKarangsoka_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKarangsoka_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKarangsoka_2.addFeatures(features_DesaKarangsoka_2);
var lyr_DesaKarangsoka_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKarangsoka_2,
maxResolution:28.00446615226196,
 
                style: style_DesaKarangsoka_2,
                popuplayertitle: 'Desa Karangsoka',
                interactive: false,
                title: '<img src="styles/legend/DesaKarangsoka_2.png" /> Desa Karangsoka'
            });
var format_Point_3 = new ol.format.GeoJSON();
var features_Point_3 = format_Point_3.readFeatures(json_Point_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_3.addFeatures(features_Point_3);
var lyr_Point_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_3, 
                style: style_Point_3,
                popuplayertitle: 'Point',
                interactive: false,
    title: 'Point<br />\
    <img src="styles/legend/Point_3_0.png" /> <br />\
    <img src="styles/legend/Point_3_1.png" /> ALBEAUTY SALON<br />\
    <img src="styles/legend/Point_3_2.png" /> Cafe Langit Senja <br />\
    <img src="styles/legend/Point_3_3.png" /> Kampus 3 UMP<br />\
    <img src="styles/legend/Point_3_4.png" /> Mushola Al Huda Karangsoka<br />\
    <img src="styles/legend/Point_3_5.png" /> Pabrik Soun<br />\
    <img src="styles/legend/Point_3_6.png" /> Pabrik Tahu<br />\
    <img src="styles/legend/Point_3_7.png" /> Pemancingan Soka Jaya Karangsoka<br />\
    <img src="styles/legend/Point_3_8.png" /> Penggilingan Beras<br />\
    <img src="styles/legend/Point_3_9.png" /> Balai Desa Karangsoka<br />\
    <img src="styles/legend/Point_3_10.png" /> Kantor Desa Karangsoka<br />\
    <img src="styles/legend/Point_3_11.png" /> SD Negeri 1 Karangsoka<br />\
    <img src="styles/legend/Point_3_12.png" /> Yayasan Yatim Piatu Karomatul Hikmah<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_DesaKarangsoka_2.setVisible(true);lyr_Point_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_DesaKarangsoka_2,lyr_Point_3];
lyr_DesaKarangsoka_2.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_Point_3.set('fieldAliases', {'Nama': 'Nama', 'Alamat': 'Alamat', 'No. Telp': 'No. Telp', 'Kode Pos': 'Kode Pos', });
lyr_DesaKarangsoka_2.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_Point_3.set('fieldImages', {'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'No. Telp': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaKarangsoka_2.set('fieldLabels', {'Nama': 'no label', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_Point_3.set('fieldLabels', {'Nama': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'No. Telp': 'no label', 'Kode Pos': 'no label', });
lyr_Point_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});