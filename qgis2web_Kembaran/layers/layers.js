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
var format_DesaKembaran_2 = new ol.format.GeoJSON();
var features_DesaKembaran_2 = format_DesaKembaran_2.readFeatures(json_DesaKembaran_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKembaran_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKembaran_2.addFeatures(features_DesaKembaran_2);
var lyr_DesaKembaran_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKembaran_2,
maxResolution:28.00446615226196,
 
                style: style_DesaKembaran_2,
                popuplayertitle: 'Desa Kembaran',
                interactive: true,
                title: '<img src="styles/legend/DesaKembaran_2.png" /> Desa Kembaran'
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
    <img src="styles/legend/point_3_0.png" /> Apotek Kwmbaran<br />\
    <img src="styles/legend/point_3_1.png" /> Balai Penyuluhan KB Kecamatan Kembaran<br />\
    <img src="styles/legend/point_3_2.png" /> Kantor Kecamatan Kembaran<br />\
    <img src="styles/legend/point_3_3.png" /> Kementrian Agama<br />\
    <img src="styles/legend/point_3_4.png" /> Koramil 06<br />\
    <img src="styles/legend/point_3_5.png" /> Korwil Dindik Kembaran <br />\
    <img src="styles/legend/point_3_6.png" /> KUA<br />\
    <img src="styles/legend/point_3_7.png" /> Masjid Al Iman<br />\
    <img src="styles/legend/point_3_8.png" /> Masjid Darul Ullum<br />\
    <img src="styles/legend/point_3_9.png" /> Masjid Fastabiqul Khoirot<br />\
    <img src="styles/legend/point_3_10.png" /> Polsek Kembaran<br />\
    <img src="styles/legend/point_3_11.png" /> Pos Pemadam Kebakaran<br />\
    <img src="styles/legend/point_3_12.png" /> Puskesmasa I Kembaran<br />\
    <img src="styles/legend/point_3_13.png" /> SD Negeri Larangan<br />\
    <img src="styles/legend/point_3_14.png" /> SMP Negeri 1 Kembaran<br />\
    <img src="styles/legend/point_3_15.png" /> UPK Kembaran<br />\
    <img src="styles/legend/point_3_16.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_DesaKembaran_2.setVisible(true);lyr_point_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_DesaKembaran_2,lyr_point_3];
lyr_DesaKembaran_2.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_point_3.set('fieldAliases', {'Nama': 'Nama', 'Alamat': 'Alamat', 'No.Telp': 'No.Telp', 'Kode Pos': 'Kode Pos', });
lyr_DesaKembaran_2.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_point_3.set('fieldImages', {'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'No.Telp': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaKembaran_2.set('fieldLabels', {'Nama': 'no label', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_point_3.set('fieldLabels', {'Nama': 'no label', 'Alamat': 'no label', 'No.Telp': 'no label', 'Kode Pos': 'no label', });
lyr_point_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});