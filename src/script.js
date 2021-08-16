/**
 * @author e-mail:rendrom@gmail.com
 * @link https://github.com/rendrom/petro2020
 */
import { loadCss, onDomLoaded, addMeta, LANGUAGE, detectLanguage } from './utils';
import I18N from './i18n.json';

// LOAD 3rd PARTY LIBRARIES

loadCss('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
loadCss('https://unpkg.com/bulma@0.9.2/css/bulma.min.css');
loadCss('https://cdn.jsdelivr.net/npm/@creativebulma/bulma-divider@1.1.0/dist/bulma-divider.min.css');
loadCss('https://use.fontawesome.com/releases/v5.15.2/css/all.css');

// UPDATE HEADER

addMeta('viewport', 'width=device-width, initial-scale=1');

// MAIN
var MENU_ITEMS;
// var MOBILE_SIZE = 768;
var MOBILE_MENU;
var ACTIVE_LINK;
var CONF_URL = window.CONF_URL;

window.addEventListener('load', function () {
  updateNavMenu();
});

onDomLoaded(function () {
  addNavbarFixedTop();
  updateMenuItems();
  updateAside();
  i18n();
  updateDomElements();

  MOBILE_MENU = document.getElementById('js-mobile-menu');

  hideMobileMenu();
  updateMobileMenu();
  addBurgerListener(); // to show/hide mobile menu
  addNavBrandClickEvent();

});


window.addEventListener('resize', function () {
  updateAside();
  updateNavMenu();
  hideMobileMenu();
});

function addNavBrandClickEvent() {
  var navBarBrand = document.getElementById('js-navbar-brand');
  if (navBarBrand) {
    navBarBrand.onclick = function () {
      window.open(CONF_URL || window.location.origin, '_self');
    }
  }
}

function updateMenuItems() {
  var menuItemsLinks = document.getElementsByClassName("menu-list")[0];
  MENU_ITEMS = menuItemsLinks.getElementsByTagName('a');
  for (var fry = MENU_ITEMS.length; fry--;) {
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
  var fry;
  var item;
  for (fry = 0; fry < MENU_ITEMS.length; fry++) {
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
  for (fry = 0; fry < navItems.length; fry++) {
    item = navItems[fry];
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
    for (fry = 0; fry < dropDownItems.length; fry++) {
      item = dropDownItems[fry];
      navDropDownItems.appendChild(item);
    }
    navElement.appendChild(navDropDown);
  }

}

function updateAside() {
  // var menuItemsLinks = document.getElementsByClassName("menu-list")[0];
  // if (window.innerWidth < MOBILE_SIZE) {
  //   menuItemsLinks.style.display = 'none';
  // } else {
  //   menuItemsLinks.style.display = 'block';
  // }
  // for (var fry = 0; fry < MENU_ITEMS.length; fry++) {
  //   var menu = MENU_ITEMS[fry];
  //   menu.className = menu.className.replace(' tags', '');
  //   if (window.innerWidth < MOBILE_SIZE) {
  //     menu.className = menu.className + ' tags';
  //   }
  // }
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

// function showMobileMenu() {
//   toggleMobileMenu(true);
// }

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

function addNavbarFixedTop() {
  document.body.className = document.body.className + ' has-navbar-fixed-top';
}

function i18n() {
  detectLanguage();

  var messages = I18N;

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

function updateDomElements() {
  elemsAddClassName(document.getElementsByTagName('h2'), 'title is-3');
  forEach(document.getElementsByTagName('input'), function (elem) {
    if (elem.type === 'submit') {
      addClass(elem, 'button');
    } else if (['text', 'password', 'email', 'tel'].indexOf(elem.type) !== -1) {
      addClass(elem, 'input');
    }
  });
}

function addClass(e, addClass) {
  e.className = e.className ? ' ' + addClass : addClass;
}

function elemsAddClassName(elems, addClassName) {
  forEach(elems, function (e) {
    addClass(e, addClassName);
  });
}

function forEach(elems, fun) {
  for (var fry = 0; fry < elems.length; fry++) {
    fun(elems[fry]);
  }
}
