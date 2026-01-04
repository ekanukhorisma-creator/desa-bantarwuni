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
var format_DesaTambaksariKidul_2 = new ol.format.GeoJSON();
var features_DesaTambaksariKidul_2 = format_DesaTambaksariKidul_2.readFeatures(json_DesaTambaksariKidul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaTambaksariKidul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaTambaksariKidul_2.addFeatures(features_DesaTambaksariKidul_2);
var lyr_DesaTambaksariKidul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaTambaksariKidul_2,
maxResolution:28.00446615226196,
 
                style: style_DesaTambaksariKidul_2,
                popuplayertitle: 'Desa Tambaksari Kidul',
                interactive: false,
                title: '<img src="styles/legend/DesaTambaksariKidul_2.png" /> Desa Tambaksari Kidul'
            });
var format_point_3 = new ol.format.GeoJSON();
var features_point_3 = format_point_3.readFeatures(json_point_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_3.addFeatures(features_point_3);
var lyr_point_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_3, 
                style: style_point_3,
                popuplayertitle: 'point',
                interactive: true,
    title: 'point<br />\
    <img src="styles/legend/point_3_0.png" /> Ahli Gzi<br />\
    <img src="styles/legend/point_3_1.png" /> Balai Desa Tambaksari<br />\
    <img src="styles/legend/point_3_2.png" /> Curug Pangkon<br />\
    <img src="styles/legend/point_3_3.png" /> Masjid Umar bin Khattab<br />\
    <img src="styles/legend/point_3_4.png" /> Pemotongan Hewan (RPH)<br />\
    <img src="styles/legend/point_3_5.png" /> Pondok Pesantren<br />\
    <img src="styles/legend/point_3_6.png" /> SD Negeri Tambaksari<br />\
    <img src="styles/legend/point_3_7.png" /> Shean Studio<br />\
    <img src="styles/legend/point_3_8.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_DesaTambaksariKidul_2.setVisible(true);lyr_point_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_DesaTambaksariKidul_2,lyr_point_3];
lyr_DesaTambaksariKidul_2.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_point_3.set('fieldAliases', {'Nama': 'Nama', 'Alamat': 'Alamat', 'No.Tlp': 'No.Tlp', 'Kode Pos': 'Kode Pos', });
lyr_DesaTambaksariKidul_2.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_point_3.set('fieldImages', {'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'No.Tlp': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaTambaksariKidul_2.set('fieldLabels', {'Nama': 'no label', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_point_3.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Alamat': 'no label', 'No.Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_point_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});