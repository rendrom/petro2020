import '../../src/style.css';

import '../../src/script';
import { onDomLoaded } from '../../src/utils';
import { createMap } from '../../src/ngwMap';

if (window.location.pathname.indexOf('/place') !== -1) {
  onDomLoaded(createMap({ geojson: 'https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/place.geojson' }));
}
onDomLoaded(createMap({
  geojson: 'https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/ultramafic/data/place.geojson',
  ngwMapOptions: {
    center: [106.878039, 53.023219],
    zoom: 15,
    baseUrl: 'https://demo.nextgis.com',
    resources: [{ 'resourceId': 4249 }]
  }
}));