var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([20.019056, -33.600791]), // Coordinates of New York
          zoom: 8 //Initial Zoom Level
        })
      });
