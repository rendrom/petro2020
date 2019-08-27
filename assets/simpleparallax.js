//  Simple Parallax
//  Author Piers Rueb
//  https://github.com/piersrueb/simpleparallax

export function simpleParallax(elem, modifier) {
  var paraId = elem instanceof HTMLElement ? elem : document.getElementById(elem);
  // paraId.setAttribute('style', 'background-repeat: no-repeat; background-attachment: fixed; background-size: cover;background-position: center center;');
  paraId.style.backgroundRepeat = 'no-repeat';
  paraId.style.backgroundAttachment = 'fixed';
  paraId.style.backgroundSize = 'cover';
  paraId.style.backgroundPosition = 'center center';
  var sp = function() {
    var x = paraId.getBoundingClientRect().top / modifier;
    var y = Math.round(x * 100) / 100;
    paraId.style.backgroundPosition = 'center ' + y + 'px';
  }
  sp();
  window.addEventListener('scroll', function () { sp(); });
}
