window.addEventListener('resize', () => {
  var divs = document.querySelectorAll(".menu-list");
  if (window.innerWidth < 768){
    divs.forEach(div => div.classList.add("tags"));
  }
  else {
    divs.forEach(div => div.classList.remove("tags"));
  }
});

loadCss('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
loadCss('https://unpkg.com/bulma@0.7.5/css/bulma.min.css');
loadCss('https://use.fontawesome.com/releases/v5.5.0/css/all.css');


Tapestry.onDOMLoaded(function () {
  var menuItems = document.getElementsByClassName('menu-list')[0];
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
