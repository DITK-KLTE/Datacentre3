var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Ikkebygget_1 = new ol.format.GeoJSON();
var features_Ikkebygget_1 = format_Ikkebygget_1.readFeatures(json_Ikkebygget_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ikkebygget_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ikkebygget_1.addFeatures(features_Ikkebygget_1);
var lyr_Ikkebygget_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ikkebygget_1, 
                style: style_Ikkebygget_1,
                popuplayertitle: 'Ikke bygget',
                interactive: true,
                title: '<img src="styles/legend/Ikkebygget_1.png" /> Ikke bygget'
            });
var format_Bygget_2 = new ol.format.GeoJSON();
var features_Bygget_2 = format_Bygget_2.readFeatures(json_Bygget_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bygget_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bygget_2.addFeatures(features_Bygget_2);
var lyr_Bygget_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bygget_2, 
                style: style_Bygget_2,
                popuplayertitle: 'Bygget',
                interactive: true,
                title: '<img src="styles/legend/Bygget_2.png" /> Bygget'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_Ikkebygget_1.setVisible(true);lyr_Bygget_2.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Ikkebygget_1,lyr_Bygget_2];
lyr_Ikkebygget_1.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'Kommune': 'Kommune', 'Navn': 'Navn', 'Firma': 'Firma', 'Størrelse (hektar)': 'Størrelse (hektar)', 'Kapacitet MW': 'Kapacitet MW', 'Status': 'Status', 'Url': 'Url', 'Kommune i zotero': 'Kommune i zotero', 'osm_type': 'osm_type', 'display_name': 'display_name', 'place_id': 'place_id', 'class': 'class', 'type': 'type', 'road': 'road', 'village': 'village', 'city_district': 'city_district', 'town': 'town', 'city': 'city', 'state': 'state', 'country': 'country', 'postcode': 'postcode', });
lyr_Bygget_2.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'Kommune': 'Kommune', 'Navn': 'Navn', 'Firma': 'Firma', 'Størrelse (hektar)': 'Størrelse (hektar)', 'Kapacitet MW': 'Kapacitet MW', 'Status': 'Status', 'Url': 'Url', 'Kommune i zotero': 'Kommune i zotero', 'osm_type': 'osm_type', 'display_name': 'display_name', 'place_id': 'place_id', 'class': 'class', 'type': 'type', 'road': 'road', 'village': 'village', 'city_district': 'city_district', 'town': 'town', 'city': 'city', 'state': 'state', 'country': 'country', 'postcode': 'postcode', });
lyr_Ikkebygget_1.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'Kommune': 'TextEdit', 'Navn': 'TextEdit', 'Firma': 'TextEdit', 'Størrelse (hektar)': 'TextEdit', 'Kapacitet MW': 'TextEdit', 'Status': 'TextEdit', 'Url': 'TextEdit', 'Kommune i zotero': 'TextEdit', 'osm_type': 'TextEdit', 'display_name': 'TextEdit', 'place_id': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'road': 'TextEdit', 'village': 'TextEdit', 'city_district': 'TextEdit', 'town': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'country': 'TextEdit', 'postcode': 'TextEdit', });
lyr_Bygget_2.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'Kommune': 'TextEdit', 'Navn': 'TextEdit', 'Firma': 'TextEdit', 'Størrelse (hektar)': 'TextEdit', 'Kapacitet MW': 'TextEdit', 'Status': 'TextEdit', 'Url': 'TextEdit', 'Kommune i zotero': 'TextEdit', 'osm_type': 'TextEdit', 'display_name': 'TextEdit', 'place_id': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'road': 'TextEdit', 'village': 'TextEdit', 'city_district': 'TextEdit', 'town': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'country': 'TextEdit', 'postcode': 'TextEdit', });
lyr_Ikkebygget_1.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'hidden field', 'Kommune': 'inline label - visible with data', 'Navn': 'inline label - visible with data', 'Firma': 'inline label - visible with data', 'Størrelse (hektar)': 'inline label - visible with data', 'Kapacitet MW': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Url': 'inline label - visible with data', 'Kommune i zotero': 'hidden field', 'osm_type': 'hidden field', 'display_name': 'hidden field', 'place_id': 'hidden field', 'class': 'hidden field', 'type': 'hidden field', 'road': 'hidden field', 'village': 'hidden field', 'city_district': 'hidden field', 'town': 'hidden field', 'city': 'hidden field', 'state': 'hidden field', 'country': 'hidden field', 'postcode': 'hidden field', });
lyr_Bygget_2.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'hidden field', 'Kommune': 'inline label - visible with data', 'Navn': 'inline label - visible with data', 'Firma': 'inline label - visible with data', 'Størrelse (hektar)': 'inline label - visible with data', 'Kapacitet MW': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Url': 'inline label - visible with data', 'Kommune i zotero': 'hidden field', 'osm_type': 'hidden field', 'display_name': 'hidden field', 'place_id': 'hidden field', 'class': 'hidden field', 'type': 'hidden field', 'road': 'hidden field', 'village': 'hidden field', 'city_district': 'hidden field', 'town': 'hidden field', 'city': 'hidden field', 'state': 'hidden field', 'country': 'hidden field', 'postcode': 'hidden field', });
lyr_Bygget_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});