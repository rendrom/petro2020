import '../../src/style.css';
import './style.css';
import './config';
import '../../src/script';
import { onDomLoaded } from '../../src/utils';
import { createPetroMap} from './createPetroMap';
import { createPetroCalendar } from './createPetroCalendar';


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



if (window.location.pathname.indexOf('/place') !== -1) {
  onDomLoaded(createPetroMap);
}
if (window.location.pathname.indexOf('/imp_dates') !== -1) {
  onDomLoaded(createPetroCalendar);
}
// onDomLoaded(createPetroMap);
// onDomLoaded(createPetroCalendar);


