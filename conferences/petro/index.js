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
      zoom: 17,
      baseUrl: baseUrl,
      resources: [],
      controlsOptions: {
        ZOOM: {
          showCompass: true
        }
      }
    }
  }, onMap);

  function onMap(map) {
    map.setPitch(45);

    createRotateAnimation(map);

    addLabel(map);

  }

  function addLabel(map) {
    var geojson = 'https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/label.geojson';

    map.addSource("places", {
      "type": "geojson",
      "data": geojson
    });

    var logos = ['logo_igc', 'logo_crust'];
    var loaded = 0;
    // var url = 'http://127.0.0.1:5500/conferences/petro/data/';
    var url = 'https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/';

    for (var fry = 0; fry < logos.length; fry++) {
      var logo = logos[fry];
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url + logo + '.png';
      img.onload = onImageLoad(logo);

    }

    function onImageLoad(logo) {
      return function (e) {
        loaded += 1;
        map.addImage(logo, e.target);
        addLabelLayer(map);
      }
    }

    function addLabelLayer(map) {
      if (loaded === logos.length) {
        map.addLayer({
          "id": "poi-labels",
          "type": "symbol",
          "source": "places",
          "layout": {
            "text-variable-anchor": ["top", "bottom", "left", "right"],
            "text-radial-offset": 0.5,
            "text-justify": "auto",
            "icon-image": ["get", "icon"]
          }
        });
      }
    }
  }
}

function createRotateAnimation(map) {
  var timeout;
  var stop = false;
  // every time the rotation animation is complete,
  // fire it up again!
  map.on('moveend', function () {
    rotateBy(map.getBearing());
  });

  map.on('click', function () {
    stop = true;
  });
  map.on('mouseover', function () {
    window.clearTimeout(timeout);
    stop = true;
    map.rotateTo(map.getBearing());
  });
  map.on('mouseout', function () {
    timeout = setTimeout(function () {
      stop = false;
      fit();
      rotateBy(map.getBearing());
    }, 10000);
  });

  rotateBy(map.getBearing());

  // add 90 degrees to the current bearing
  function rotateBy(current) {
    if (!stop) {
      var rotateNumber = current;
      map.rotateTo(rotateNumber + 90, { duration: 2000, easing: function (t) { return t; } });
    }
  }
  function fit() {
    map.setCenter([104.269397, 52.243519]);
    map.setZoom(15.5);
    map.setPitch(45);
  }
}

if (window.location.pathname.indexOf('/place') !== -1) {
  onDomLoaded(_createMap);
}
onDomLoaded(_createMap);
