ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.246134, -7.408583, 109.297129, -7.383869]);
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
var format_Sawah_2 = new ol.format.GeoJSON();
var features_Sawah_2 = format_Sawah_2.readFeatures(json_Sawah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sawah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_2.addFeatures(features_Sawah_2);
var lyr_Sawah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_2,
maxResolution:28.00446615226196,
 
                style: style_Sawah_2,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_2.png" /> Sawah'
            });
var format_polyrumah_3 = new ol.format.GeoJSON();
var features_polyrumah_3 = format_polyrumah_3.readFeatures(json_polyrumah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_polyrumah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polyrumah_3.addFeatures(features_polyrumah_3);
var lyr_polyrumah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polyrumah_3, 
                style: style_polyrumah_3,
                popuplayertitle: 'poly rumah',
                interactive: true,
                title: '<img src="styles/legend/polyrumah_3.png" /> poly rumah'
            });
var format_Rw05_4 = new ol.format.GeoJSON();
var features_Rw05_4 = format_Rw05_4.readFeatures(json_Rw05_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rw05_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rw05_4.addFeatures(features_Rw05_4);
var lyr_Rw05_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rw05_4, 
                style: style_Rw05_4,
                popuplayertitle: 'Rw 05',
                interactive: true,
                title: '<img src="styles/legend/Rw05_4.png" /> Rw 05'
            });
var format_Rw04_5 = new ol.format.GeoJSON();
var features_Rw04_5 = format_Rw04_5.readFeatures(json_Rw04_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rw04_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rw04_5.addFeatures(features_Rw04_5);
var lyr_Rw04_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rw04_5, 
                style: style_Rw04_5,
                popuplayertitle: 'Rw 04',
                interactive: true,
                title: '<img src="styles/legend/Rw04_5.png" /> Rw 04'
            });
var format_Rw03_6 = new ol.format.GeoJSON();
var features_Rw03_6 = format_Rw03_6.readFeatures(json_Rw03_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rw03_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rw03_6.addFeatures(features_Rw03_6);
var lyr_Rw03_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rw03_6, 
                style: style_Rw03_6,
                popuplayertitle: 'Rw 03',
                interactive: true,
                title: '<img src="styles/legend/Rw03_6.png" /> Rw 03'
            });
var format_Rw02_7 = new ol.format.GeoJSON();
var features_Rw02_7 = format_Rw02_7.readFeatures(json_Rw02_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rw02_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rw02_7.addFeatures(features_Rw02_7);
var lyr_Rw02_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rw02_7, 
                style: style_Rw02_7,
                popuplayertitle: 'Rw 02',
                interactive: true,
                title: '<img src="styles/legend/Rw02_7.png" /> Rw 02'
            });
var format_RW01_8 = new ol.format.GeoJSON();
var features_RW01_8 = format_RW01_8.readFeatures(json_RW01_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RW01_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW01_8.addFeatures(features_RW01_8);
var lyr_RW01_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW01_8, 
                style: style_RW01_8,
                popuplayertitle: 'RW 01',
                interactive: true,
                title: '<img src="styles/legend/RW01_8.png" /> RW 01'
            });
var format_RW050103_9 = new ol.format.GeoJSON();
var features_RW050103_9 = format_RW050103_9.readFeatures(json_RW050103_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RW050103_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW050103_9.addFeatures(features_RW050103_9);
var lyr_RW050103_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW050103_9, 
                style: style_RW050103_9,
                popuplayertitle: 'RW 05 (01-03)',
                interactive: true,
                title: '<img src="styles/legend/RW050103_9.png" /> RW 05 (01-03)'
            });
var format_RW040104_10 = new ol.format.GeoJSON();
var features_RW040104_10 = format_RW040104_10.readFeatures(json_RW040104_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RW040104_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW040104_10.addFeatures(features_RW040104_10);
var lyr_RW040104_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW040104_10, 
                style: style_RW040104_10,
                popuplayertitle: 'RW 04 (01-04)',
                interactive: true,
                title: '<img src="styles/legend/RW040104_10.png" /> RW 04 (01-04)'
            });
var format_RW030105_11 = new ol.format.GeoJSON();
var features_RW030105_11 = format_RW030105_11.readFeatures(json_RW030105_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RW030105_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW030105_11.addFeatures(features_RW030105_11);
var lyr_RW030105_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW030105_11, 
                style: style_RW030105_11,
                popuplayertitle: 'RW 03 (01-05)',
                interactive: true,
                title: '<img src="styles/legend/RW030105_11.png" /> RW 03 (01-05)'
            });
var format_RW020107_12 = new ol.format.GeoJSON();
var features_RW020107_12 = format_RW020107_12.readFeatures(json_RW020107_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RW020107_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW020107_12.addFeatures(features_RW020107_12);
var lyr_RW020107_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW020107_12, 
                style: style_RW020107_12,
                popuplayertitle: 'RW 02 (01-07)',
                interactive: true,
                title: '<img src="styles/legend/RW020107_12.png" /> RW 02 (01-07)'
            });
var format_RW010107_13 = new ol.format.GeoJSON();
var features_RW010107_13 = format_RW010107_13.readFeatures(json_RW010107_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RW010107_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW010107_13.addFeatures(features_RW010107_13);
var lyr_RW010107_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW010107_13, 
                style: style_RW010107_13,
                popuplayertitle: 'RW 01 (01-07)',
                interactive: true,
                title: '<img src="styles/legend/RW010107_13.png" /> RW 01 (01-07)'
            });
var format_sungai_14 = new ol.format.GeoJSON();
var features_sungai_14 = format_sungai_14.readFeatures(json_sungai_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sungai_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_14.addFeatures(features_sungai_14);
var lyr_sungai_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_14, 
                style: style_sungai_14,
                popuplayertitle: 'sungai',
                interactive: true,
                title: '<img src="styles/legend/sungai_14.png" /> sungai'
            });
var format_Gang_15 = new ol.format.GeoJSON();
var features_Gang_15 = format_Gang_15.readFeatures(json_Gang_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gang_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gang_15.addFeatures(features_Gang_15);
var lyr_Gang_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gang_15, 
                style: style_Gang_15,
                popuplayertitle: 'Gang',
                interactive: true,
                title: '<img src="styles/legend/Gang_15.png" /> Gang'
            });
var format_JlPerumahan_16 = new ol.format.GeoJSON();
var features_JlPerumahan_16 = format_JlPerumahan_16.readFeatures(json_JlPerumahan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JlPerumahan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlPerumahan_16.addFeatures(features_JlPerumahan_16);
var lyr_JlPerumahan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlPerumahan_16, 
                style: style_JlPerumahan_16,
                popuplayertitle: 'Jl.Perumahan',
                interactive: true,
                title: '<img src="styles/legend/JlPerumahan_16.png" /> Jl.Perumahan'
            });
var format_JlDesa_17 = new ol.format.GeoJSON();
var features_JlDesa_17 = format_JlDesa_17.readFeatures(json_JlDesa_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JlDesa_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlDesa_17.addFeatures(features_JlDesa_17);
var lyr_JlDesa_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlDesa_17, 
                style: style_JlDesa_17,
                popuplayertitle: 'Jl.Desa',
                interactive: true,
                title: '<img src="styles/legend/JlDesa_17.png" /> Jl.Desa'
            });
var format_JlUtama_18 = new ol.format.GeoJSON();
var features_JlUtama_18 = format_JlUtama_18.readFeatures(json_JlUtama_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JlUtama_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlUtama_18.addFeatures(features_JlUtama_18);
var lyr_JlUtama_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlUtama_18, 
                style: style_JlUtama_18,
                popuplayertitle: 'Jl.Utama',
                interactive: true,
                title: '<img src="styles/legend/JlUtama_18.png" /> Jl.Utama'
            });
var format_RumahEka_19 = new ol.format.GeoJSON();
var features_RumahEka_19 = format_RumahEka_19.readFeatures(json_RumahEka_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RumahEka_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahEka_19.addFeatures(features_RumahEka_19);
var lyr_RumahEka_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahEka_19, 
                style: style_RumahEka_19,
                popuplayertitle: 'Rumah Eka',
                interactive: true,
                title: '<img src="styles/legend/RumahEka_19.png" /> Rumah Eka'
            });
var format_RumahWarga_20 = new ol.format.GeoJSON();
var features_RumahWarga_20 = format_RumahWarga_20.readFeatures(json_RumahWarga_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RumahWarga_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahWarga_20.addFeatures(features_RumahWarga_20);
var lyr_RumahWarga_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahWarga_20, 
                style: style_RumahWarga_20,
                popuplayertitle: 'Rumah Warga',
                interactive: true,
                title: '<img src="styles/legend/RumahWarga_20.png" /> Rumah Warga'
            });
var format_RumahKetuaRT06_21 = new ol.format.GeoJSON();
var features_RumahKetuaRT06_21 = format_RumahKetuaRT06_21.readFeatures(json_RumahKetuaRT06_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RumahKetuaRT06_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahKetuaRT06_21.addFeatures(features_RumahKetuaRT06_21);
var lyr_RumahKetuaRT06_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahKetuaRT06_21, 
                style: style_RumahKetuaRT06_21,
                popuplayertitle: 'Rumah Ketua RT 06',
                interactive: true,
                title: '<img src="styles/legend/RumahKetuaRT06_21.png" /> Rumah Ketua RT 06'
            });
var format_RumahKetuaRW02_22 = new ol.format.GeoJSON();
var features_RumahKetuaRW02_22 = format_RumahKetuaRW02_22.readFeatures(json_RumahKetuaRW02_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RumahKetuaRW02_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahKetuaRW02_22.addFeatures(features_RumahKetuaRW02_22);
var lyr_RumahKetuaRW02_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahKetuaRW02_22, 
                style: style_RumahKetuaRW02_22,
                popuplayertitle: 'Rumah Ketua RW 02',
                interactive: true,
                title: '<img src="styles/legend/RumahKetuaRW02_22.png" /> Rumah Ketua RW 02'
            });
var format_RumahKepalaDesa_23 = new ol.format.GeoJSON();
var features_RumahKepalaDesa_23 = format_RumahKepalaDesa_23.readFeatures(json_RumahKepalaDesa_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RumahKepalaDesa_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahKepalaDesa_23.addFeatures(features_RumahKepalaDesa_23);
var lyr_RumahKepalaDesa_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahKepalaDesa_23, 
                style: style_RumahKepalaDesa_23,
                popuplayertitle: 'Rumah Kepala Desa',
                interactive: true,
                title: '<img src="styles/legend/RumahKepalaDesa_23.png" /> Rumah Kepala Desa'
            });
var format_UMKM_24 = new ol.format.GeoJSON();
var features_UMKM_24 = format_UMKM_24.readFeatures(json_UMKM_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UMKM_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_24.addFeatures(features_UMKM_24);
var lyr_UMKM_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKM_24, 
                style: style_UMKM_24,
                popuplayertitle: 'UMKM',
                interactive: true,
                title: '<img src="styles/legend/UMKM_24.png" /> UMKM'
            });
var format_TPU_25 = new ol.format.GeoJSON();
var features_TPU_25 = format_TPU_25.readFeatures(json_TPU_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TPU_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPU_25.addFeatures(features_TPU_25);
var lyr_TPU_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPU_25, 
                style: style_TPU_25,
                popuplayertitle: 'TPU',
                interactive: true,
                title: '<img src="styles/legend/TPU_25.png" /> TPU'
            });
var format_KantorBalaiDesa_26 = new ol.format.GeoJSON();
var features_KantorBalaiDesa_26 = format_KantorBalaiDesa_26.readFeatures(json_KantorBalaiDesa_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KantorBalaiDesa_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorBalaiDesa_26.addFeatures(features_KantorBalaiDesa_26);
var lyr_KantorBalaiDesa_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorBalaiDesa_26, 
                style: style_KantorBalaiDesa_26,
                popuplayertitle: 'Kantor Balai Desa',
                interactive: true,
                title: '<img src="styles/legend/KantorBalaiDesa_26.png" /> Kantor Balai Desa'
            });
var format_TempatIbadah_27 = new ol.format.GeoJSON();
var features_TempatIbadah_27 = format_TempatIbadah_27.readFeatures(json_TempatIbadah_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TempatIbadah_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_27.addFeatures(features_TempatIbadah_27);
var lyr_TempatIbadah_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_27, 
                style: style_TempatIbadah_27,
                popuplayertitle: 'Tempat Ibadah',
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_27.png" /> Tempat Ibadah'
            });
var format_FasilitasLain_28 = new ol.format.GeoJSON();
var features_FasilitasLain_28 = format_FasilitasLain_28.readFeatures(json_FasilitasLain_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FasilitasLain_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasLain_28.addFeatures(features_FasilitasLain_28);
var lyr_FasilitasLain_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasLain_28, 
                style: style_FasilitasLain_28,
                popuplayertitle: 'Fasilitas Lain',
                interactive: true,
                title: '<img src="styles/legend/FasilitasLain_28.png" /> Fasilitas Lain'
            });
var format_FasilitasPendidikan_29 = new ol.format.GeoJSON();
var features_FasilitasPendidikan_29 = format_FasilitasPendidikan_29.readFeatures(json_FasilitasPendidikan_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FasilitasPendidikan_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasPendidikan_29.addFeatures(features_FasilitasPendidikan_29);
var lyr_FasilitasPendidikan_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasPendidikan_29, 
                style: style_FasilitasPendidikan_29,
                popuplayertitle: 'Fasilitas Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/FasilitasPendidikan_29.png" /> Fasilitas Pendidikan'
            });
var format_FasilitasKesehatan_30 = new ol.format.GeoJSON();
var features_FasilitasKesehatan_30 = format_FasilitasKesehatan_30.readFeatures(json_FasilitasKesehatan_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FasilitasKesehatan_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasKesehatan_30.addFeatures(features_FasilitasKesehatan_30);
var lyr_FasilitasKesehatan_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasKesehatan_30, 
                style: style_FasilitasKesehatan_30,
                popuplayertitle: 'Fasilitas Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/FasilitasKesehatan_30.png" /> Fasilitas Kesehatan'
            });
var format_Lapangan_31 = new ol.format.GeoJSON();
var features_Lapangan_31 = format_Lapangan_31.readFeatures(json_Lapangan_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lapangan_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_31.addFeatures(features_Lapangan_31);
var lyr_Lapangan_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_31,
maxResolution:28.00446615226196,
 
                style: style_Lapangan_31,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_31.png" /> Lapangan'
            });
var format_bataswilayahdesabantarwuni_32 = new ol.format.GeoJSON();
var features_bataswilayahdesabantarwuni_32 = format_bataswilayahdesabantarwuni_32.readFeatures(json_bataswilayahdesabantarwuni_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_bataswilayahdesabantarwuni_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataswilayahdesabantarwuni_32.addFeatures(features_bataswilayahdesabantarwuni_32);
var lyr_bataswilayahdesabantarwuni_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataswilayahdesabantarwuni_32, 
                style: style_bataswilayahdesabantarwuni_32,
                popuplayertitle: 'batas wilayah desa bantarwuni',
                interactive: true,
                title: '<img src="styles/legend/bataswilayahdesabantarwuni_32.png" /> batas wilayah desa bantarwuni'
            });
var group_Point = new ol.layer.Group({
                                layers: [lyr_RumahEka_19,lyr_RumahWarga_20,lyr_RumahKetuaRT06_21,lyr_RumahKetuaRW02_22,lyr_RumahKepalaDesa_23,lyr_UMKM_24,lyr_TPU_25,lyr_KantorBalaiDesa_26,lyr_TempatIbadah_27,lyr_FasilitasLain_28,lyr_FasilitasPendidikan_29,lyr_FasilitasKesehatan_30,],
                                fold: 'close',
                                title: 'Point'});
var group_Line = new ol.layer.Group({
                                layers: [lyr_sungai_14,lyr_Gang_15,lyr_JlPerumahan_16,lyr_JlDesa_17,lyr_JlUtama_18,],
                                fold: 'close',
                                title: 'Line'});
var group_Polygon = new ol.layer.Group({
                                layers: [lyr_RW050103_9,lyr_RW040104_10,lyr_RW030105_11,lyr_RW020107_12,lyr_RW010107_13,],
                                fold: 'close',
                                title: 'Polygon'});
var group_RW = new ol.layer.Group({
                                layers: [lyr_Rw05_4,lyr_Rw04_5,lyr_Rw03_6,lyr_Rw02_7,lyr_RW01_8,],
                                fold: 'close',
                                title: 'RW'});
var group_Desa = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Desa'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Sawah_2.setVisible(true);lyr_polyrumah_3.setVisible(true);lyr_Rw05_4.setVisible(true);lyr_Rw04_5.setVisible(true);lyr_Rw03_6.setVisible(true);lyr_Rw02_7.setVisible(true);lyr_RW01_8.setVisible(true);lyr_RW050103_9.setVisible(true);lyr_RW040104_10.setVisible(true);lyr_RW030105_11.setVisible(true);lyr_RW020107_12.setVisible(true);lyr_RW010107_13.setVisible(true);lyr_sungai_14.setVisible(true);lyr_Gang_15.setVisible(true);lyr_JlPerumahan_16.setVisible(true);lyr_JlDesa_17.setVisible(true);lyr_JlUtama_18.setVisible(true);lyr_RumahEka_19.setVisible(true);lyr_RumahWarga_20.setVisible(true);lyr_RumahKetuaRT06_21.setVisible(true);lyr_RumahKetuaRW02_22.setVisible(true);lyr_RumahKepalaDesa_23.setVisible(true);lyr_UMKM_24.setVisible(true);lyr_TPU_25.setVisible(true);lyr_KantorBalaiDesa_26.setVisible(true);lyr_TempatIbadah_27.setVisible(true);lyr_FasilitasLain_28.setVisible(true);lyr_FasilitasPendidikan_29.setVisible(true);lyr_FasilitasKesehatan_30.setVisible(true);lyr_Lapangan_31.setVisible(true);lyr_bataswilayahdesabantarwuni_32.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_Sawah_2,lyr_polyrumah_3,group_RW,group_Polygon,group_Line,group_Point,lyr_Lapangan_31,lyr_bataswilayahdesabantarwuni_32];
lyr_Sawah_2.set('fieldAliases', {'id': 'id', 'Pemilik': 'Pemilik', 'Luas': 'Luas', });
lyr_polyrumah_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'access_roo': 'access_roo', 'name': 'name', 'roof_mater': 'roof_mater', 'building_m': 'building_m', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', });
lyr_Rw05_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah Rt': 'Jumlah Rt', });
lyr_Rw04_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', });
lyr_Rw03_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', });
lyr_Rw02_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah rt': 'Jumlah rt', });
lyr_RW01_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', });
lyr_RW050103_9.set('fieldAliases', {'RW': 'RW', 'Nama': 'Nama', });
lyr_RW040104_10.set('fieldAliases', {'Nama': 'Nama', 'RW': 'RW', });
lyr_RW030105_11.set('fieldAliases', {'RW': 'RW', 'Nama': 'Nama', });
lyr_RW020107_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Rw': 'Rw', });
lyr_RW010107_13.set('fieldAliases', {'Nama': 'Nama', 'Rw': 'Rw', });
lyr_sungai_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_Gang_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JlPerumahan_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JlDesa_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JlUtama_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_RumahEka_19.set('fieldAliases', {'id': 'id', 'Alamat': 'Alamat', });
lyr_RumahWarga_20.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RumahKetuaRT06_21.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', });
lyr_RumahKetuaRW02_22.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', });
lyr_RumahKepalaDesa_23.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'No. Tlp': 'No. Tlp', 'Kode Pos': 'Kode Pos', });
lyr_UMKM_24.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', 'Kode Pos': 'Kode Pos', });
lyr_TPU_25.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', });
lyr_KantorBalaiDesa_26.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', 'Kode Pos': 'Kode Pos', });
lyr_TempatIbadah_27.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', });
lyr_FasilitasLain_28.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', });
lyr_FasilitasPendidikan_29.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp.': 'No Tlp.', 'Kode Pos': 'Kode Pos', });
lyr_FasilitasKesehatan_30.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', 'Kode Pos': 'Kode Pos', });
lyr_Lapangan_31.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_bataswilayahdesabantarwuni_32.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', 'Kode Pos': 'Kode Pos', });
lyr_Sawah_2.set('fieldImages', {'id': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas': 'TextEdit', });
lyr_polyrumah_3.set('fieldImages', {'osm_id': '', 'osm_type': '', 'building': '', 'access_roo': '', 'name': '', 'roof_mater': '', 'building_m': '', 'addr_house': '', 'addr_stree': '', });
lyr_Rw05_4.set('fieldImages', {'id': '', 'Nama': '', 'Jumlah Rt': '', });
lyr_Rw04_5.set('fieldImages', {'id': '', 'Nama': '', 'Jumlah RT': '', });
lyr_Rw03_6.set('fieldImages', {'id': '', 'Nama': '', 'Jumlah RT': '', });
lyr_Rw02_7.set('fieldImages', {'id': '', 'Nama': '', 'Jumlah rt': '', });
lyr_RW01_8.set('fieldImages', {'id': '', 'Nama': '', 'Jumlah RT': '', });
lyr_RW050103_9.set('fieldImages', {'RW': '', 'Nama': '', });
lyr_RW040104_10.set('fieldImages', {'Nama': '', 'RW': '', });
lyr_RW030105_11.set('fieldImages', {'RW': '', 'Nama': '', });
lyr_RW020107_12.set('fieldImages', {'id': '', 'Nama': '', 'Rw': '', });
lyr_RW010107_13.set('fieldImages', {'Nama': 'TextEdit', 'Rw': 'TextEdit', });
lyr_sungai_14.set('fieldImages', {'id': '', 'Nama': '', 'Lebar': '', });
lyr_Gang_15.set('fieldImages', {'id': '', 'Nama': '', 'Lebar': '', });
lyr_JlPerumahan_16.set('fieldImages', {'id': '', 'Nama': '', 'Lebar': '', });
lyr_JlDesa_17.set('fieldImages', {'id': '', 'Nama': '', 'Lebar': '', });
lyr_JlUtama_18.set('fieldImages', {'id': '', 'Nama': '', 'Lebar': '', });
lyr_RumahEka_19.set('fieldImages', {'id': '', 'Alamat': '', });
lyr_RumahWarga_20.set('fieldImages', {'id': '', 'Nama': '', });
lyr_RumahKetuaRT06_21.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'Kode Pos': '', });
lyr_RumahKetuaRW02_22.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'Kode Pos': '', });
lyr_RumahKepalaDesa_23.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'No. Tlp': '', 'Kode Pos': '', });
lyr_UMKM_24.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'Email': '', 'No Tlp': '', 'Kode Pos': '', });
lyr_TPU_25.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', });
lyr_KantorBalaiDesa_26.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'Email': '', 'No Tlp': '', 'Kode Pos': '', });
lyr_TempatIbadah_27.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'Kode Pos': '', });
lyr_FasilitasLain_28.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'Email': '', 'No Tlp': '', });
lyr_FasilitasPendidikan_29.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'Email': '', 'No Tlp.': '', 'Kode Pos': '', });
lyr_FasilitasKesehatan_30.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'Email': '', 'No Tlp': '', 'Kode Pos': '', });
lyr_Lapangan_31.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_bataswilayahdesabantarwuni_32.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_Sawah_2.set('fieldLabels', {'id': 'no label', 'Pemilik': 'no label', 'Luas': 'no label', });
lyr_polyrumah_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'access_roo': 'no label', 'name': 'no label', 'roof_mater': 'no label', 'building_m': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', });
lyr_Rw05_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah Rt': 'no label', });
lyr_Rw04_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah RT': 'no label', });
lyr_Rw03_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah RT': 'no label', });
lyr_Rw02_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah rt': 'no label', });
lyr_RW01_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah RT': 'no label', });
lyr_RW050103_9.set('fieldLabels', {'RW': 'no label', 'Nama': 'no label', });
lyr_RW040104_10.set('fieldLabels', {'Nama': 'no label', 'RW': 'no label', });
lyr_RW030105_11.set('fieldLabels', {'RW': 'no label', 'Nama': 'no label', });
lyr_RW020107_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Rw': 'no label', });
lyr_RW010107_13.set('fieldLabels', {'Nama': 'no label', 'Rw': 'no label', });
lyr_sungai_14.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_Gang_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JlPerumahan_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JlDesa_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JlUtama_18.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_RumahEka_19.set('fieldLabels', {'id': 'no label', 'Alamat': 'no label', });
lyr_RumahWarga_20.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RumahKetuaRT06_21.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', });
lyr_RumahKetuaRW02_22.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', });
lyr_RumahKepalaDesa_23.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'No. Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_UMKM_24.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_TPU_25.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', });
lyr_KantorBalaiDesa_26.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_TempatIbadah_27.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', });
lyr_FasilitasLain_28.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', });
lyr_FasilitasPendidikan_29.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp.': 'no label', 'Kode Pos': 'no label', });
lyr_FasilitasKesehatan_30.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_Lapangan_31.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_bataswilayahdesabantarwuni_32.set('fieldLabels', {'Nama': 'no label', 'Kecamatan': 'no label', 'Kode Pos': 'no label', });
lyr_bataswilayahdesabantarwuni_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});