import { simpleParallax } from '../assets/simpleparallax';


export function createParallax(options) {


  var intervalId = setInterval(function () {
    if (simpleParallax) {
      _createParallax(options);

      clearInterval(intervalId);
    }
  }, 10)
}

function _createParallax(options) {
  var scene = document.getElementsByClassName('hero')[0];
  simpleParallax(scene);
  if (options && options.onLoad) {
    options.onLoad();
  }
}



