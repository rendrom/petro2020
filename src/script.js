/**
 * @author e-mail:rendrom@gmail.com
 * @link https://github.com/rendrom/petro2020
 */

// LOAD 3rd PARTY LIBRARIES

loadCss('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
loadCss('https://unpkg.com/bulma@0.7.5/css/bulma.min.css');
loadCss('https://use.fontawesome.com/releases/v5.5.0/css/all.css');

// UPDATE HEADER

addMeta('viewport', 'width=device-width, initial-scale=1');

// MAIN
var LANGUAGE = 'ru';
var MENU_ITEMS;
var MOBILE_SIZE = 768;
var MOBILE_MENU;
var ACTIVE_LINK;

var onDomLoaded;
if (window.Tapestry) {
  onDomLoaded = Tapestry.onDOMLoaded;
} else {
  onDomLoaded = function (fun) {
    document.addEventListener('DOMContentLoaded', fun);
  }
}

window.addEventListener('load', function () {
  updateNavMenu();
});

onDomLoaded(function () {
  addNavbarFixedTop();
  updateMenuItems();
  updateAside();
  i18n();

  if (window.location.pathname.indexOf('/place') !== -1) {
    createMap();
  }

  MOBILE_MENU = document.getElementById('js-mobile-menu');

  hideMobileMenu();
  updateMobileMenu();
  addBurgerListener(); // to show/hide mobile menu

});


window.addEventListener('resize', function () {
  updateAside();
  updateNavMenu();
  hideMobileMenu();
});


function updateMenuItems() {
  var menuItemsLinks = document.getElementsByClassName("menu-list")[0];
  MENU_ITEMS = menuItemsLinks.getElementsByTagName('a');
  for (var fry = 0; fry < MENU_ITEMS.length; fry++) {
    var link = MENU_ITEMS[fry];
    if (link.href.indexOf(window.location.pathname) !== -1) {
      link.className += ' has-text-primary';
      ACTIVE_LINK = link;
      break;
    }
  }
}

function updateNavMenu() {
  var navItems = [];
  for (var fry = 0; fry < MENU_ITEMS.length; fry++) {
    var link = MENU_ITEMS[fry];
    var navItem = _createNavItem(link);
    navItems.push(navItem);
  }

  var navMenu = document.getElementById('app-navbar');
  var navElement = document.getElementById('js-navbar-items');

  var dropDownItems = [];

  navElement.innerHTML = ''

  var navElementWidth = navElement.clientWidth;
  var menuEndWidth = _calculateMenuEndWidth();
  var allowedWidth = navMenu.clientWidth - menuEndWidth - 52; // 52 is a show more menu width

  var placeInDropDownMenu = navElementWidth > allowedWidth;
  for (var fry = 0; fry < navItems.length; fry++) {
    var item = navItems[fry];
    if (!placeInDropDownMenu) {
      navElement.appendChild(item);
      navElementWidth += item.clientWidth;
      placeInDropDownMenu = navElementWidth > allowedWidth;
    }
    if (placeInDropDownMenu) {
      dropDownItems.push(item);
      if (item.parentNode === navElement) {
        navElement.removeChild(item);
      }
    }
  }
  if (dropDownItems.length) {
    var navDropDown = document.createElement('div');
    navDropDown.className = 'navbar-item has-dropdown is-hoverable';
    navDropDown.innerHTML = [
      '<a class="navbar-link is-arrowless"><i class="fas fa-ellipsis-h"></i></a>',
      '<div class="navbar-dropdown"></div>'
    ].join('');
    var navDropDownItems = navDropDown.getElementsByClassName('navbar-dropdown')[0];
    for (var fry = 0; fry < dropDownItems.length; fry++) {
      var item = dropDownItems[fry];
      navDropDownItems.appendChild(item);
    }
    navElement.appendChild(navDropDown);
  }

}

function updateAside() {
  var menuItemsLinks = document.getElementsByClassName("menu-list")[0];
  if (window.innerWidth < MOBILE_SIZE) {
    menuItemsLinks.style.display = 'none';
  } else {
    menuItemsLinks.style.display = 'block';
  }
  for (var fry = 0; fry < MENU_ITEMS.length; fry++) {
    var menu = MENU_ITEMS[fry];
    menu.className = menu.className.replace(' tags', '');
    if (window.innerWidth < MOBILE_SIZE) {
      menu.className = menu.className + ' tags';
    }
  }
}

function updateMobileMenu() {
  for (var fry = 0; fry < MENU_ITEMS.length; fry++) {
    var menu = MENU_ITEMS[fry];
    var item = _createNavItem(menu);
    MOBILE_MENU.appendChild(item);
  }
}

function hideMobileMenu() {
  toggleMobileMenu(false);
}

function showMobileMenu() {
  toggleMobileMenu(true);
}

function toggleMobileMenu(status) {
  if (MOBILE_MENU) {
    var burger = document.getElementById('js-navbar-burger');
    status = status !== undefined ? status : MOBILE_MENU.className.indexOf('is-active') === -1;
    MOBILE_MENU.className = MOBILE_MENU.className.replace(' is-active', '');
    burger.className = burger.className.replace(' is-active', '');
    if (status) {
      burger.className = burger.className + ' is-active';
      MOBILE_MENU.className = MOBILE_MENU.className + ' is-active';
      MOBILE_MENU.style.display = 'block';
    } else {
      MOBILE_MENU.style.display = 'none';
    }
  }
}

function addBurgerListener() {
  var burger = document.getElementById('js-navbar-burger');
  burger.addEventListener('click', function () {
    toggleMobileMenu();
  })
}

// HELPERS

function loadCss(href) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  var links = document.head.getElementsByTagName('link');
  document.head.insertBefore(link, links[0]);
}

function loadJs(src) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  document.head.appendChild(script);
}

function addMeta(name, content) {
  var meta = document.createElement('meta');
  meta.name = name;
  meta.content = content;
  document.head.appendChild(meta);
}

function addNavbarFixedTop() {
  document.body.className = document.body.className + ' has-navbar-fixed-top';
}

function detectLanguage() {
  var switcherLink = document.getElementById('js-language-switcher');
  if (switcherLink) {
    LANGUAGE = switcherLink.href.indexOf(':ru') !== -1 ? 'en' : 'ru';
  }
}

function i18n() {
  detectLanguage();

  var messages = {
    en: {
      'language-switcher': 'РУ'
    },
    ru: {
      'language-switcher': 'EN'
    }
  }

  var toTranslateElements = document.getElementsByClassName('i18n');
  var locale = messages[LANGUAGE];
  for (var fry = 0; fry < toTranslateElements.length; fry++) {
    var elem = toTranslateElements[fry];
    var message = elem.className.match(/i18n-([A-z1-9-]+)/, '$1')[1];
    elem.innerHTML = locale[message] || elem.innerHTML;
  }
}

function _calculateMenuEndWidth() {
  var menuEnd = document.getElementById('js-navbar-end');
  // var menuEndWidth = 0;
  // for (var fry = 0; fry < menuEnd.childNodes.length; fry++) {
  //   const child = menuEnd.childNodes[fry];
  //   menuEndWidth += child.clientWidth;
  // }
  // return menuEndWidth
  return menuEnd.clientWidth;
}

function _createNavItem(link) {
  var navItem = document.createElement('a');
  navItem.className = 'navbar-item';
  navItem.href = link.href;
  navItem.innerHTML = link.innerHTML;
  if (link === ACTIVE_LINK) {
    navItem.className += ' is-active';
  }
  return navItem
}


////////////////////////////////////////////////////////////////////////
// MAP
////////////////////////////////////////////////////////////////////////

function createMap() {

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
  mapboxgl.accessToken = 'pk.eyJ1IjoicmVuZHJvbSIsImEiOiJjano5cTQ5ZHUwMWIzM29tbW44eHRiZnZ0In0.ySxxfs_Fi6Ny85rarvwuNA';
  var map = new mapboxgl.Map({
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

    map.addSource("highlighted-buildings", {
      "type": "geojson",
      "data": JSON.parse('{"type": "FeatureCollection","features": []}')
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

    var igc =  '{"type": "Feature","properties": {"extrude": "true","height": 40,"min_height": 0,"type": "building","underground": "false"},"geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 104.268622398376465, 52.243466789686352 ], [ 104.268257617950439, 52.244164777218856 ], [ 104.268249571323395, 52.244171346461087 ], [ 104.268549978733063, 52.244230469597738 ], [ 104.268917441368103, 52.243524271427418 ], [ 104.268622398376465, 52.243466789686352 ] ] ] ] }}';
    map.getSource("highlighted-buildings").setData(JSON.parse(igc));

  });

}

