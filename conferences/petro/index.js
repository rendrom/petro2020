import '../../src/style.css';

import '../../src/script';
import { onDomLoaded } from '../../src/utils';
import { createMap } from '../../src/map';

if (window.location.pathname.indexOf('/place') !== -1) {
  onDomLoaded(createMap({ geojson: 'https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/place.geojson'}));
}
