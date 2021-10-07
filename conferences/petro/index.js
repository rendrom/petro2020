import '../../src/style.css';
import './style.css';
import './config';
import '../../src/script';
import { onDomLoaded } from '../../src/utils';
import { createPetroMap } from './createPetroMap';
import { createTileMap } from './createTileMap';
import { createPetroCalendar } from './createPetroCalendar';
// import { createParallax } from '../../src/parallax';


onDomLoaded(function () {
  // var url = 'http://127.0.0.1:5500/conferences/petro/data/header.jpg';
  var url = 'https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/header.jpg'
  var hero = document.getElementsByClassName('main-hero')[0];
  var img = new Image();
  img.src = url;
  // Once image is loaded replace the src of the HTML element
  img.onload = function () {
    var background = "url('" + url + "')";
    hero.style.backgroundImage = background;
  };
  // createParallax();
});


onDomLoaded(function () {
  var tileMapContainer = document.getElementById('tile-map');
  if (tileMapContainer) {
    createTileMap();
  }
});

onDomLoaded(function () {
  var collectivePhoto = document.getElementsByClassName('collective-photo')[0];
  if (collectivePhoto) {
    var url = 'http://conf.ict.nsc.ru/files/conferences/petro2020/669776/_DSC5815_1_low.jpg';
    var img = new Image();
    img.src = url;
    // Once image is loaded replace the src of the HTML element
    img.onload = function () {
      var background = "url('" + url + "')";
      collectivePhoto.style.backgroundImage = background;
    };
  }
});

if (window.location.pathname.indexOf('/place') !== -1) {
  onDomLoaded(createPetroMap);
}
if (window.location.pathname.indexOf('/imp_dates') !== -1) {
  onDomLoaded(createPetroCalendar);
}
// onDomLoaded(createTileMap);
// onDomLoaded(createPetroMap);
// onDomLoaded(createPetroCalendar);


