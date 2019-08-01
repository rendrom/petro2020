// loadCss('https://code.getmdl.io/1.3.0/material.indigo-pink.min.css');
loadCss('https://code.getmdl.io/1.3.0/material.cyan-light_green.min.css');
loadCss('https://fonts.googleapis.com/icon?family=Material+Icons');
loadCss('https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en');

// loadJs('https://code.getmdl.io/1.3.0/material.min.js')

Tapestry.onDOMLoaded(function () {
  var menuItems = document.getElementsByClassName('menu-items')[0];
  var menuItemsLinks = menuItems.getElementsByTagName('a');

  for (var fry = 0; fry < menuItemsLinks.length; fry++) {
    var item = menuItemsLinks[fry];
    item.className = 'mdl-navigation__link';
  }
});



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
