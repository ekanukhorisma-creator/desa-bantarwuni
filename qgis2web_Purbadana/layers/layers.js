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
var format_DesaPurbadana_2 = new ol.format.GeoJSON();
var features_DesaPurbadana_2 = format_DesaPurbadana_2.readFeatures(json_DesaPurbadana_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaPurbadana_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaPurbadana_2.addFeatures(features_DesaPurbadana_2);
var lyr_DesaPurbadana_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaPurbadana_2,
maxResolution:28.00446615226196,
 
                style: style_DesaPurbadana_2,
                popuplayertitle: 'Desa Purbadana',
                interactive: true,
                title: '<img src="styles/legend/DesaPurbadana_2.png" /> Desa Purbadana'
            });
var group_polydesakecamatan = new ol.layer.Group({
                                layers: [lyr_DesaPurbadana_2,],
                                fold: 'open',
                                title: 'poly desa kecamatan'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_DesaPurbadana_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,group_polydesakecamatan];
lyr_DesaPurbadana_2.set('fieldAliases', {'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', 'Jumlah RW': 'Jumlah RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaPurbadana_2.set('fieldImages', {'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', 'Jumlah RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaPurbadana_2.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jumlah RT': 'no label', 'Jumlah RW': 'no label', 'Kode Pos': 'no label', });
lyr_DesaPurbadana_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});