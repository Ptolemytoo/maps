var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([20.019056, -33.600791]), // Coordinates of Western Cape Province, South Africa
          zoom: 8 //Initial Zoom Level
        })
      });

//Adding a marker on the map
var marker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([20.581563413143158,-33.23120285756886])
  ),  // Coordinates of Matjiesfontein
});

//marker.setStyle(new ol.style.Style({
//  image: new ol.style.Icon( ({
//    color: '#ffcd46',
//    crossOrigin: 'anonymous',
//    src: 'dot.png'
//  }))
//}));

var vectorSource = new ol.source.Vector({
  features: [marker]
});
var markerVectorLayer = new ol.layer.Vector({
  source: vectorSource,
});
map.addLayer(markerVectorLayer);
