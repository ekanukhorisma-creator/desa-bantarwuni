var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DesaSambengWetan_2 = new ol.format.GeoJSON();
var features_DesaSambengWetan_2 = format_DesaSambengWetan_2.readFeatures(json_DesaSambengWetan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaSambengWetan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaSambengWetan_2.addFeatures(features_DesaSambengWetan_2);
var lyr_DesaSambengWetan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaSambengWetan_2,
maxResolution:28.00446615226196,
 
                style: style_DesaSambengWetan_2,
                popuplayertitle: 'Desa Sambeng Wetan',
                interactive: true,
                title: '<img src="styles/legend/DesaSambengWetan_2.png" /> Desa Sambeng Wetan'
            });
var format_DesaSambengKulon_3 = new ol.format.GeoJSON();
var features_DesaSambengKulon_3 = format_DesaSambengKulon_3.readFeatures(json_DesaSambengKulon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaSambengKulon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaSambengKulon_3.addFeatures(features_DesaSambengKulon_3);
var lyr_DesaSambengKulon_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaSambengKulon_3,
maxResolution:28.00446615226196,
 
                style: style_DesaSambengKulon_3,
                popuplayertitle: 'Desa Sambeng Kulon',
                interactive: true,
                title: '<img src="styles/legend/DesaSambengKulon_3.png" /> Desa Sambeng Kulon'
            });
var format_DesaPurwodadi_4 = new ol.format.GeoJSON();
var features_DesaPurwodadi_4 = format_DesaPurwodadi_4.readFeatures(json_DesaPurwodadi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaPurwodadi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaPurwodadi_4.addFeatures(features_DesaPurwodadi_4);
var lyr_DesaPurwodadi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaPurwodadi_4,
maxResolution:28.00446615226196,
 
                style: style_DesaPurwodadi_4,
                popuplayertitle: 'Desa Purwodadi',
                interactive: true,
                title: '<img src="styles/legend/DesaPurwodadi_4.png" /> Desa Purwodadi'
            });
var format_DesaPurbadana_5 = new ol.format.GeoJSON();
var features_DesaPurbadana_5 = format_DesaPurbadana_5.readFeatures(json_DesaPurbadana_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaPurbadana_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaPurbadana_5.addFeatures(features_DesaPurbadana_5);
var lyr_DesaPurbadana_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaPurbadana_5,
maxResolution:28.00446615226196,
 
                style: style_DesaPurbadana_5,
                popuplayertitle: 'Desa Purbadana',
                interactive: true,
                title: '<img src="styles/legend/DesaPurbadana_5.png" /> Desa Purbadana'
            });
var format_DesaPliken_6 = new ol.format.GeoJSON();
var features_DesaPliken_6 = format_DesaPliken_6.readFeatures(json_DesaPliken_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaPliken_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaPliken_6.addFeatures(features_DesaPliken_6);
var lyr_DesaPliken_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaPliken_6,
maxResolution:28.00446615226196,
 
                style: style_DesaPliken_6,
                popuplayertitle: 'Desa Pliken',
                interactive: true,
                title: '<img src="styles/legend/DesaPliken_6.png" /> Desa Pliken'
            });
var format_DesaLinggasari_7 = new ol.format.GeoJSON();
var features_DesaLinggasari_7 = format_DesaLinggasari_7.readFeatures(json_DesaLinggasari_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaLinggasari_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaLinggasari_7.addFeatures(features_DesaLinggasari_7);
var lyr_DesaLinggasari_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaLinggasari_7,
maxResolution:28.00446615226196,
 
                style: style_DesaLinggasari_7,
                popuplayertitle: 'Desa Linggasari',
                interactive: true,
                title: '<img src="styles/legend/DesaLinggasari_7.png" /> Desa Linggasari'
            });
var format_DesaLedug_8 = new ol.format.GeoJSON();
var features_DesaLedug_8 = format_DesaLedug_8.readFeatures(json_DesaLedug_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaLedug_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaLedug_8.addFeatures(features_DesaLedug_8);
var lyr_DesaLedug_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaLedug_8,
maxResolution:28.00446615226196,
 
                style: style_DesaLedug_8,
                popuplayertitle: 'Desa Ledug',
                interactive: true,
                title: '<img src="styles/legend/DesaLedug_8.png" /> Desa Ledug'
            });
var format_DesaKramat_9 = new ol.format.GeoJSON();
var features_DesaKramat_9 = format_DesaKramat_9.readFeatures(json_DesaKramat_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKramat_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKramat_9.addFeatures(features_DesaKramat_9);
var lyr_DesaKramat_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKramat_9,
maxResolution:28.00446615226196,
 
                style: style_DesaKramat_9,
                popuplayertitle: 'Desa Kramat',
                interactive: true,
                title: '<img src="styles/legend/DesaKramat_9.png" /> Desa Kramat'
            });
var format_DesaKembaran_10 = new ol.format.GeoJSON();
var features_DesaKembaran_10 = format_DesaKembaran_10.readFeatures(json_DesaKembaran_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKembaran_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKembaran_10.addFeatures(features_DesaKembaran_10);
var lyr_DesaKembaran_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKembaran_10,
maxResolution:28.00446615226196,
 
                style: style_DesaKembaran_10,
                popuplayertitle: 'Desa Kembaran',
                interactive: true,
                title: '<img src="styles/legend/DesaKembaran_10.png" /> Desa Kembaran'
            });
var format_DesaKarangtengah_11 = new ol.format.GeoJSON();
var features_DesaKarangtengah_11 = format_DesaKarangtengah_11.readFeatures(json_DesaKarangtengah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKarangtengah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKarangtengah_11.addFeatures(features_DesaKarangtengah_11);
var lyr_DesaKarangtengah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKarangtengah_11,
maxResolution:28.00446615226196,
 
                style: style_DesaKarangtengah_11,
                popuplayertitle: 'Desa Karangtengah',
                interactive: true,
                title: '<img src="styles/legend/DesaKarangtengah_11.png" /> Desa Karangtengah'
            });
var format_DesaKarangsoka_12 = new ol.format.GeoJSON();
var features_DesaKarangsoka_12 = format_DesaKarangsoka_12.readFeatures(json_DesaKarangsoka_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKarangsoka_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKarangsoka_12.addFeatures(features_DesaKarangsoka_12);
var lyr_DesaKarangsoka_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKarangsoka_12,
maxResolution:28.00446615226196,
 
                style: style_DesaKarangsoka_12,
                popuplayertitle: 'Desa Karangsoka',
                interactive: true,
                title: '<img src="styles/legend/DesaKarangsoka_12.png" /> Desa Karangsoka'
            });
var format_DesaKarangsari_13 = new ol.format.GeoJSON();
var features_DesaKarangsari_13 = format_DesaKarangsari_13.readFeatures(json_DesaKarangsari_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKarangsari_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKarangsari_13.addFeatures(features_DesaKarangsari_13);
var lyr_DesaKarangsari_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKarangsari_13,
maxResolution:28.00446615226196,
 
                style: style_DesaKarangsari_13,
                popuplayertitle: 'Desa Karangsari',
                interactive: true,
                title: '<img src="styles/legend/DesaKarangsari_13.png" /> Desa Karangsari'
            });
var format_DesaDukuwaluh_14 = new ol.format.GeoJSON();
var features_DesaDukuwaluh_14 = format_DesaDukuwaluh_14.readFeatures(json_DesaDukuwaluh_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaDukuwaluh_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaDukuwaluh_14.addFeatures(features_DesaDukuwaluh_14);
var lyr_DesaDukuwaluh_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaDukuwaluh_14,
maxResolution:28.00446615226196,
 
                style: style_DesaDukuwaluh_14,
                popuplayertitle: 'Desa Dukuwaluh',
                interactive: true,
                title: '<img src="styles/legend/DesaDukuwaluh_14.png" /> Desa Dukuwaluh'
            });
var format_DesaBojongsari_15 = new ol.format.GeoJSON();
var features_DesaBojongsari_15 = format_DesaBojongsari_15.readFeatures(json_DesaBojongsari_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaBojongsari_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaBojongsari_15.addFeatures(features_DesaBojongsari_15);
var lyr_DesaBojongsari_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaBojongsari_15,
maxResolution:28.00446615226196,
 
                style: style_DesaBojongsari_15,
                popuplayertitle: 'Desa Bojongsari',
                interactive: true,
                title: '<img src="styles/legend/DesaBojongsari_15.png" /> Desa Bojongsari'
            });
var format_DesaTambaksariKidul_16 = new ol.format.GeoJSON();
var features_DesaTambaksariKidul_16 = format_DesaTambaksariKidul_16.readFeatures(json_DesaTambaksariKidul_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaTambaksariKidul_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaTambaksariKidul_16.addFeatures(features_DesaTambaksariKidul_16);
var lyr_DesaTambaksariKidul_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaTambaksariKidul_16,
maxResolution:28.00446615226196,
 
                style: style_DesaTambaksariKidul_16,
                popuplayertitle: 'Desa Tambaksari Kidul',
                interactive: true,
                title: '<img src="styles/legend/DesaTambaksariKidul_16.png" /> Desa Tambaksari Kidul'
            });
var format_DesaBantarwuni_17 = new ol.format.GeoJSON();
var features_DesaBantarwuni_17 = format_DesaBantarwuni_17.readFeatures(json_DesaBantarwuni_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaBantarwuni_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaBantarwuni_17.addFeatures(features_DesaBantarwuni_17);
var lyr_DesaBantarwuni_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaBantarwuni_17,
maxResolution:28.00446615226196,
 
                style: style_DesaBantarwuni_17,
                popuplayertitle: 'Desa Bantarwuni',
                interactive: true,
                title: '<img src="styles/legend/DesaBantarwuni_17.png" /> Desa Bantarwuni'
            });
var format_BatasKecamatan_18 = new ol.format.GeoJSON();
var features_BatasKecamatan_18 = format_BatasKecamatan_18.readFeatures(json_BatasKecamatan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_18.addFeatures(features_BatasKecamatan_18);
var lyr_BatasKecamatan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_18, 
                style: style_BatasKecamatan_18,
                popuplayertitle: 'Batas Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_18.png" /> Batas Kecamatan'
            });
var group_polydesakecamatan = new ol.layer.Group({
                                layers: [lyr_DesaSambengWetan_2,lyr_DesaSambengKulon_3,lyr_DesaPurwodadi_4,lyr_DesaPurbadana_5,lyr_DesaPliken_6,lyr_DesaLinggasari_7,lyr_DesaLedug_8,lyr_DesaKramat_9,lyr_DesaKembaran_10,lyr_DesaKarangtengah_11,lyr_DesaKarangsoka_12,lyr_DesaKarangsari_13,lyr_DesaDukuwaluh_14,lyr_DesaBojongsari_15,lyr_DesaTambaksariKidul_16,lyr_DesaBantarwuni_17,],
                                fold: 'close',
                                title: 'poly desa kecamatan'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_DesaSambengWetan_2.setVisible(true);lyr_DesaSambengKulon_3.setVisible(true);lyr_DesaPurwodadi_4.setVisible(true);lyr_DesaPurbadana_5.setVisible(true);lyr_DesaPliken_6.setVisible(true);lyr_DesaLinggasari_7.setVisible(true);lyr_DesaLedug_8.setVisible(true);lyr_DesaKramat_9.setVisible(true);lyr_DesaKembaran_10.setVisible(true);lyr_DesaKarangtengah_11.setVisible(true);lyr_DesaKarangsoka_12.setVisible(true);lyr_DesaKarangsari_13.setVisible(true);lyr_DesaDukuwaluh_14.setVisible(true);lyr_DesaBojongsari_15.setVisible(true);lyr_DesaTambaksariKidul_16.setVisible(true);lyr_DesaBantarwuni_17.setVisible(true);lyr_BatasKecamatan_18.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,group_polydesakecamatan,lyr_BatasKecamatan_18];
lyr_DesaSambengWetan_2.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaSambengKulon_3.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaPurwodadi_4.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaPurbadana_5.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaPliken_6.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaLinggasari_7.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaLedug_8.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaKramat_9.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaKembaran_10.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaKarangtengah_11.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaKarangsoka_12.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaKarangsari_13.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaDukuwaluh_14.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaBojongsari_15.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaTambaksariKidul_16.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaBantarwuni_17.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_BatasKecamatan_18.set('fieldAliases', {'Nama': 'Nama', 'Desa/Kel.': 'Desa/Kel.', 'Kabupaten': 'Kabupaten', 'Kode Bps': 'Kode Bps', });
lyr_DesaSambengWetan_2.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaSambengKulon_3.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaPurwodadi_4.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaPurbadana_5.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaPliken_6.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaLinggasari_7.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaLedug_8.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaKramat_9.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaKembaran_10.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaKarangtengah_11.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaKarangsoka_12.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaKarangsari_13.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaDukuwaluh_14.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaBojongsari_15.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaTambaksariKidul_16.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaBantarwuni_17.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_BatasKecamatan_18.set('fieldImages', {'Nama': 'TextEdit', 'Desa/Kel.': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kode Bps': 'TextEdit', });
lyr_DesaSambengWetan_2.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaSambengKulon_3.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaPurwodadi_4.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaPurbadana_5.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaPliken_6.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaLinggasari_7.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaLedug_8.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaKramat_9.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaKembaran_10.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaKarangtengah_11.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaKarangsoka_12.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaKarangsari_13.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaDukuwaluh_14.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaBojongsari_15.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaTambaksariKidul_16.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaBantarwuni_17.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_BatasKecamatan_18.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Desa/Kel.': 'no label', 'Kabupaten': 'no label', 'Kode Bps': 'no label', });
lyr_BatasKecamatan_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});