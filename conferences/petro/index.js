import '../../src/style.css';

import '../../src/script';
import { onDomLoaded } from '../../src/utils';
import { createMap } from '../../src/map';

if (window.location.pathname.indexOf('/place') !== -1) {
  onDomLoaded(createMap());
}
