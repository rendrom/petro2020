import { loadJs } from './utils';

var geojson;
var ngwMapOptions = {};

export function createMap(options, onMapCreate) {
  geojson = options.geojson;
  if (options && options.ngwMapOptions) {
    ngwMapOptions = options.ngwMapOptions;
  }
  loadJs('https://unpkg.com/@nextgis/ngw-mapbox');

  var intervalId = setInterval(function () {
    if (window.NgwMapbox) {
      _initMap(onMapCreate);
      clearInterval(intervalId);
    }
  }, 10)
}

function _initMap(onMapCreate) {
  const opt = {
    style: 'mapbox://styles/mapbox/light-v10',
    center: [104.269397, 52.243519],
    zoom: 15.5,
    target: 'map',
    accessToken: 'pk.eyJ1IjoicmVuZHJvbSIsImEiOiJjano5cTQ5ZHUwMWIzM29tbW44eHRiZnZ0In0.ySxxfs_Fi6Ny85rarvwuNA',
    pitch: 45,
    bearing: -17.6,
    antialias: true
  }
  for (var o in ngwMapOptions) {
    opt[o] = ngwMapOptions[o];
  }
  var ngwMap = new window.NgwMapbox(opt);

  ngwMap.onLoad().then(function () {
    var map = ngwMap.mapAdapter.map;
    if (onMapCreate) {
      onMapCreate(map, ngwMap);
    }
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
      // 'minzoom': 15,
      'paint': {
        'fill-extrusion-color': 'red',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
          "interpolate", ["linear"], ["zoom"],
          1, 1,
          15.05, ["get", "height"],
        ],
        'fill-extrusion-base': [
          "interpolate", ["linear"], ["zoom"],
          15, 0,
          15.05, ["get", "min_height"]
        ],
        'fill-extrusion-opacity': .6
      }

    }, labelLayerId);

    // map.on('click', function (e) {
      // set bbox as 5px reactangle area around clicked point
      // var bbox = [[e.point.x - 5, e.point.y - 5], [e.point.x + 5, e.point.y + 5]];
      // var features = map.queryRenderedFeatures(bbox, { layers: ['3d-buildings'] });


      // var feature = features[0];
      // console.log(JSON.stringify({ type: 'Feature', properties: feature.properties, geometry: feature.geometry }));
      // map.getSource("highlighted-buildings").setData(features[0]);

    // });

  });

}

