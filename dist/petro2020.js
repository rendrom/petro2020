/*! petro2020 - 0.0.2 | Wed, 21 Aug 2019 05:50:20 GMT | rendrom@gmail.com | ISC | https://github.com/rendrom/petro2020#readme */!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=7)}([function(n,e,t){"use strict";var r;function a(n){var e=document.createElement("link");e.rel="stylesheet",e.href=n;var t=document.head.getElementsByTagName("link");document.head.insertBefore(e,t[0])}function i(n){var e=document.createElement("script");e.type="text/javascript",e.src=n,document.head.appendChild(e)}function o(n,e){var t=document.createElement("meta");t.name=n,t.content=e,document.head.appendChild(t)}t.d(e,"d",function(){return r}),t.d(e,"b",function(){return a}),t.d(e,"c",function(){return i}),t.d(e,"a",function(){return o}),r=window.Tapestry?Tapestry.onDOMLoaded:function(n){document.addEventListener("DOMContentLoaded",n)}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var a=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[t].concat(i).concat([a]).join("\n")}var o,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var o=0;o<n.length;o++){var s=n[o];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(n,e,t){"use strict";var r,a={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function s(n,e){for(var t=[],r={},a=0;a<n.length;a++){var i=n[a],o=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(s):t.push(r[o]={id:o,parts:[s]})}return t}function c(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=a[r.id],o=0;if(i){for(i.refs++;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(h(r.parts[o],e))}else{for(var s=[];o<r.parts.length;o++)s.push(h(r.parts[o],e));a[r.id]={id:r.id,refs:1,parts:s}}}}function l(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var r=t.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach(function(t){e.setAttribute(t,n.attributes[t])}),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,r){var a=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,a);else{var i=document.createTextNode(a),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}var f=null,m=0;function h(n,e){var t,r,a;if(e.singleton){var i=m++;t=f||(f=l(e)),r=p.bind(null,t,i,!1),a=p.bind(null,t,i,!0)}else t=l(e),r=function(n,e,t){var r=t.css,a=t.media,i=t.sourceMap;if(a&&n.setAttribute("media",a),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=s(n,e);return c(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var o=t[i],l=a[o.id];l&&(l.refs--,r.push(l))}n&&c(s(n,e),e);for(var d=0;d<r.length;d++){var u=r[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete a[u.id]}}}}},function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r,a=t(0),i={};function o(n,e){r=n.geojson,n&&n.ngwMapOptions&&(i=n.ngwMapOptions),Object(a.c)("https://unpkg.com/@nextgis/ngw-mapbox");var t=setInterval(function(){window.NgwMap&&(!function(n){const e={style:"mapbox://styles/mapbox/light-v10",center:[104.269397,52.243519],zoom:15.5,target:"map",accessToken:"pk.eyJ1IjoicmVuZHJvbSIsImEiOiJjano5cTQ5ZHUwMWIzM29tbW44eHRiZnZ0In0.ySxxfs_Fi6Ny85rarvwuNA",pitch:45,bearing:-17.6,antialias:!0};for(var t in i)e[t]=i[t];var a=new window.NgwMap(e),o=a.mapAdapter.map;o.on("load",function(){n&&n(o,a);for(var e,t=o.getStyle().layers,i=0;i<t.length;i++)if("symbol"===t[i].type&&t[i].layout["text-field"]){e=t[i].id;break}o.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},e),o.addSource("highlighted-buildings",{type:"geojson",data:r}),o.addLayer({id:"3d-buildings-highlighted",source:"highlighted-buildings",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"red","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},e)})}(e),clearInterval(t))},10)}},function(n,e,t){var r=t(5);"string"==typeof r&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1};t(2)(r,a);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(1)(!1)).push([n.i,"body, html {\n  background: #f2f2f2;\n}\n\n\npre, .message {\n  max-width: 960px;\n}\n\nli {\n  margin: 10px\n}\n\n.logo2020 {\n  color:  #524ad0;\n}\n\n.hero.is-primary {\n  background: linear-gradient(to top right, #524ad0 10%, #D099FA);\n}\n\n.box {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.box span.icon {\n  float: right;\n  font-size: 1.7em;\n  padding: 2rem 2rem 0 0;\n}\n\n.is-large.fab {\n  font-size: 7em;\n}\n\n.is-large.fas {\n  font-size: 5em;\n  margin-left: 0.2em;\n}\n\n.media-content {\n  overflow: hidden;\n}\n\n.menu-list li a:hover {\n  background: #d9d9d9;\n}\n\n.token.number {\n  display: inline;\n  padding: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  text-align: inherit;\n  vertical-align: inherit;\n  border-radius: inherit;\n  font-weight: inherit;\n  white-space: inherit;\n  background: inherit;\n  margin: inherit;\n}\n\n.footer {\n  background-color: white;\n}\n\n#page-settings {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 10px;\n}\n\n.menu-list a {\n  color: #0F1D38;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.login-link a, .logout-user a {\n  color: inherit !important;\n}\n\n#map {\n  width: 100%;\n  height: 600px;\n}\n\n.navbar-brand > .navbar-brand {\n  cursor: pointer;\n}\n\n.info-panel {\n  max-height: 560px;\n  overflow: scroll;\n}\n",""])},function(n,e,t){"use strict";var r=t(0);Object(r.b)("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"),Object(r.b)("https://unpkg.com/bulma@0.7.5/css/bulma.min.css"),Object(r.b)("https://use.fontawesome.com/releases/v5.5.0/css/all.css"),Object(r.a)("viewport","width=device-width, initial-scale=1");var a,i,o,s="ru",c=768,l=window.CONF_URL;function d(){var n,e,t=[];for(n=0;n<a.length;n++){var r=m(a[n]);t.push(r)}var i=document.getElementById("app-navbar"),o=document.getElementById("js-navbar-items"),s=[];o.innerHTML="";var c=o.clientWidth,l=document.getElementById("js-navbar-end").clientWidth,d=i.clientWidth-l-52,u=c>d;for(n=0;n<t.length;n++)e=t[n],u||(o.appendChild(e),u=(c+=e.clientWidth)>d),u&&(s.push(e),e.parentNode===o&&o.removeChild(e));if(s.length){var p=document.createElement("div");p.className="navbar-item has-dropdown is-hoverable",p.innerHTML=['<a class="navbar-link is-arrowless"><i class="fas fa-ellipsis-h"></i></a>','<div class="navbar-dropdown"></div>'].join("");var f=p.getElementsByClassName("navbar-dropdown")[0];for(n=0;n<s.length;n++)e=s[n],f.appendChild(e);o.appendChild(p)}}function u(){var n=document.getElementsByClassName("menu-list")[0];window.innerWidth<c?n.style.display="none":n.style.display="block";for(var e=0;e<a.length;e++){var t=a[e];t.className=t.className.replace(" tags",""),window.innerWidth<c&&(t.className=t.className+" tags")}}function p(){f(!1)}function f(n){if(i){var e=document.getElementById("js-navbar-burger");n=void 0!==n?n:-1===i.className.indexOf("is-active"),i.className=i.className.replace(" is-active",""),e.className=e.className.replace(" is-active",""),n?(e.className=e.className+" is-active",i.className=i.className+" is-active",i.style.display="block"):i.style.display="none"}}function m(n){var e=document.createElement("a");return e.className="navbar-item",e.href=n.href,e.innerHTML=n.innerHTML,n===o&&(e.className+=" is-active"),e}window.addEventListener("load",function(){d()}),Object(r.d)(function(){var n;document.body.className=document.body.className+" has-navbar-fixed-top",function(){var n=document.getElementsByClassName("menu-list")[0];a=n.getElementsByTagName("a");for(var e=0;e<a.length;e++){var t=a[e];if(-1!==t.href.indexOf(window.location.pathname)){t.className+=" has-text-primary",o=t;break}}}(),u(),function(){n=document.getElementById("js-language-switcher"),n&&(s=-1!==n.href.indexOf(":ru")?"en":"ru");var n;for(var e=document.getElementsByClassName("i18n"),t={en:{"language-switcher":"РУ"},ru:{"language-switcher":"EN"}}[s],r=0;r<e.length;r++){var a=e[r],i=a.className.match(/i18n-([A-z1-9-]+)/,"$1")[1];a.innerHTML=t[i]||a.innerHTML}}(),i=document.getElementById("js-mobile-menu"),p(),function(){for(var n=0;n<a.length;n++){var e=m(a[n]);i.appendChild(e)}}(),document.getElementById("js-navbar-burger").addEventListener("click",function(){f()}),(n=document.getElementById("js-navbar-brand"))&&(n.onclick=function(){window.open(l||window.location.origin,"_self")})}),window.addEventListener("resize",function(){u(),d(),p()})},function(n,e,t){"use strict";t.r(e);t(4),t(8),t(10),t(6);var r=t(0),a=t(3);Object(r.d)(function(){var n="https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/header.jpg",e=document.getElementsByClassName("hero-before")[0],t=new Image;t.src=n,t.onload=function(){e.style.background="url('https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/header.jpg') center center"}});-1!==window.location.pathname.indexOf("/place")&&Object(r.d)(function(){Object(a.a)({geojson:"https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/place.geojson",ngwMapOptions:{baseUrl:"http://geonote.nextgis.com",resources:[],pitch:45,bearing:-17.6}},function(){})})},function(n,e,t){var r=t(9);"string"==typeof r&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1};t(2)(r,a);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(1)(!1)).push([n.i,"\n.header-text {\n  color: #0e0965;\n}\n\n.love-science-robots {\n  padding-top: 10px;\n}\n\n\n\n/*************************************************************\n  PARALLAX\n**************************************************************/\n\nhtml {\n  overflow: hidden!important;\n  height: 100%!important;\n}\n\nbody {\n  overflow-x: hidden!important;\n  overflow-y: scroll!important;\n  height: 100%!important;\n  perspective: 1px!important;\n  transform-style: preserve-3d!important;\n}\n\n\n/*************************************************************\n  HEADER\n**************************************************************/\n.hero {\n  position: relative;\n  min-height: 55vh;\n  max-height: 65vh;\n  width: 100%;\n  transform-style: inherit;\n  z-index: -1;\n}\n\n\n\n.hero-before {\n  content: '';\n  position: absolute;\n  top: 0; left: 0; right: 0; bottom: 0;\n  display: block;\n  /* background: url('http://127.0.0.1:5500/conferences/petro/data/header-low.jpg') center center; */\n  background: url('https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/header-low.jpg') center center;\n  background-size: cover;\n  transform:  translateZ(-1px) scale(2) translate(-0%, -10%);\n  min-height: 100%;\n  z-index: -2;\n}\n\n\n/*************************************************************\n  SECTIONS\n**************************************************************/\n.section {\n  position: relative;\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  transform-style: inherit;\n}\n\n.section {\n  background: #fafafa;\n  box-shadow: 0 0 10px #333;\n  z-index: 1;\n}\n\n\n/*************************************************************\n  HEADINGS\n**************************************************************/\n.hero-body {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateZ(-1px) scale(2) translate(-25%, -35%);\n}\n\n",""])},function(n,e){window.CONF_URL="http://petro2020.igc.irk.ru"}]);
//# sourceMappingURL=petro2020.js.map