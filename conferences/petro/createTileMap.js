import { loadJs } from '../../src/utils';

export function createTileMap() {
  loadJs('https://unpkg.com/@nextgis/ngw-leaflet');

  var intervalId = setInterval(function () {
    if (window.NgwMap) {
      _initMap();
      clearInterval(intervalId);
    }
  }, 10)
}
function _initMap() {
  const opt = {
    baseUrl: 'http://geonote.nextgis.com',
    center: [104.269397, 52.243519],
    zoom: 15.5,
    target: 'tile-map',
    qmsId: 487,
    controls: ['ATTRIBUTION'],
    // resources: [{ resourceId: 347, fit: true }]
  }

  var ngwMap = new window.NgwMap(opt);
  ngwMap.addNgwLayer({ resource: 347, fit: true})

}
