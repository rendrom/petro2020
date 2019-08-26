import { loadJs, loadCss } from './utils';

var geojson;

export function createMap(options) {
  geojson = options.geojson;
  loadJs('https://api.tiles.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.js');
  loadCss('https://api.tiles.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.css');

  var intervalId = setInterval(function () {
    if (window.mapboxgl) {
      _initMap();
      clearInterval(intervalId);
    }
  }, 10)
}

function _initMap() {
  window.mapboxgl.accessToken = 'pk.eyJ1IjoicmVuZHJvbSIsImEiOiJjano5cTQ5ZHUwMWIzM29tbW44eHRiZnZ0In0.ySxxfs_Fi6Ny85rarvwuNA';
  var map = new window.mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v10',
    center: [104.269397, 52.243519],
    zoom: 15.5,
    pitch: 45,
    bearing: -17.6,
    container: 'map',
    antialias: true
  });

  // The 'building' layer in the mapbox-streets vector source contains building-height
  // data from OpenStreetMap.
  map.on('load', function () {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
        labelLayerId = layers[i].id;
        break;
      }
    }

    var layerOptions = {
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
        'fill-extrusion-color': '#aaa',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
          "interpolate", ["linear"], ["zoom"],
          15, 0,
          15.05, ["get", "height"]
        ],
        'fill-extrusion-base': [
          "interpolate", ["linear"], ["zoom"],
          15, 0,
          15.05, ["get", "min_height"]
        ],
        'fill-extrusion-opacity': .6
      }
    }

    map.addLayer(layerOptions, labelLayerId);

    map.addSource('highlighted-buildings', {
      type: 'geojson',
      data: geojson
    });

    map.addLayer({

      'id': '3d-buildings-highlighted',
      'source': 'highlighted-buildings',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
        'fill-extrusion-color': 'red',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
          "interpolate", ["linear"], ["zoom"],
          15, 0,
          15.05, ["get", "height"]
        ],
        'fill-extrusion-base': [
          "interpolate", ["linear"], ["zoom"],
          15, 0,
          15.05, ["get", "min_height"]
        ],
        'fill-extrusion-opacity': .6
      }

    }, labelLayerId);

    map.on('click', function (e) {
      // set bbox as 5px reactangle area around clicked point
      var bbox = [[e.point.x - 5, e.point.y - 5], [e.point.x + 5, e.point.y + 5]];
      var features = map.queryRenderedFeatures(bbox, { layers: ['3d-buildings'] });


      var feature = features[0];
      console.log(JSON.stringify({ type: 'Feature', properties: feature.properties, geometry: feature.geometry }));
      // map.getSource("highlighted-buildings").setData(features[0]);

    });

  });

}

