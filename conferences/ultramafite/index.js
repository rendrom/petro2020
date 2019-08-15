import '../../src/style.css';

import '../../src/script';
import { onDomLoaded } from '../../src/utils';
import { createMap } from '../../src/ngwMap';

var _createMap = createMap({
  geojson: 'https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/ultramafite/data/place.geojson',

  ngwMapOptions: {
    center: [106.878039, 53.023219],
    zoom: 16,
    baseUrl: 'https://demo.nextgis.com',
    resources: [
      {
        resourceId: 4248,
        id: 'points',
        selectable: true,
        paint: { color: '#524ad0', radius: 6, opacity: 0.6, stroke: true, strokeColor: 'white', strokeOpacity: 1},
        selectedPaint: { color: '#524ad0', radius: 8, opacity: 1, stroke: true, strokeColor: 'white', strokeOpacity: 1}
      }
    ],
    pitch: 45,
    bearing: -17.6,
  }
}, onMap);

function onMap(map, ngwMap) {
  ngwMap.emitter.on('layer:click', function (e) {
    if (ngwMap) {
      var vectorLayer = ngwMap.getLayer('points');

      if (vectorLayer.getSelected && e.layer.id === vectorLayer.id) {
        var selected = vectorLayer.getSelected();
        var feature = selected[0].feature;
        ngwMap.connector.get('feature_layer.feature.item', null, { fid: feature.id, id: vectorLayer.options.resourceId }).then(function (x) {
          console.log(x);
        });
      }
    }
  });
}

if (window.location.pathname.indexOf('/place') !== -1) {
  onDomLoaded(createMap(_createMap));
}
// onDomLoaded(_createMap);
