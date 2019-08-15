import '../../src/style.css';

import { onDomLoaded } from '../../src/script';
import { createMap } from '../../src/map';

if (window.location.pathname.indexOf('/place') !== -1) {
  onDomLoaded(createMap());
}
