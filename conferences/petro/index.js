import '../../src/style.css';
import './style.css';
import './config';
import '../../src/script';
import { onDomLoaded } from '../../src/utils';
import { createMap } from '../../src/ngwMap';



onDomLoaded(function () {
  // var url = 'http://127.0.0.1:5500/conferences/petro/data/header.jpg';
  var url = 'https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/header.jpg'
  var hero = document.getElementsByClassName('hero')[0];
  var img = new Image();
  img.src = url;
  // Once image is loaded replace the src of the HTML element
  img.onload = function () {
    // var background = "linear-gradient(to top right, #524ad0 10%, #D099FA), url('" + url + "')";
    var background = "url('" + url + "') ";
    hero.style.backgroundImage = background;
  };

});

var baseUrl = 'http://geonote.nextgis.com';
var _createMap = function () {
  createMap({
    geojson: 'https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/place.geojson',

    ngwMapOptions: {
      baseUrl: baseUrl,
      resources: [],
      pitch: 45,
      bearing: -17.6,
    }
  }, onMap);

  function onMap() {

  }
}

if (window.location.pathname.indexOf('/place') !== -1) {
  onDomLoaded(_createMap);
}
// onDomLoaded(_createMap);
