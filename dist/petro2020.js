/*! petro2020 - 0.0.0 | Thu, 15 Aug 2019 12:05:25 GMT | rendrom@gmail.com | ISC | https://github.com/rendrom/petro2020#readme */!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=6)}([function(e,n,t){"use strict";var r;function i(e){var n=document.createElement("link");n.rel="stylesheet",n.href=e;var t=document.head.getElementsByTagName("link");document.head.insertBefore(n,t[0])}function a(e){var n=document.createElement("script");n.type="text/javascript",n.src=e,document.head.appendChild(n)}function o(e,n){var t=document.createElement("meta");t.name=e,t.content=n,document.head.appendChild(t)}t.d(n,"d",function(){return r}),t.d(n,"b",function(){return i}),t.d(n,"c",function(){return a}),t.d(n,"a",function(){return o}),r=window.Tapestry?Tapestry.onDOMLoaded:function(e){document.addEventListener("DOMContentLoaded",e)}},function(e,n,t){var r=t(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};t(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(3)(!1)).push([e.i,"body, html {\r\n  background: #f2f2f2;\r\n}\r\n\r\npre, .message {\r\n  max-width: 960px;\r\n}\r\n\r\nli {\r\n  margin: 10px\r\n}\r\n\r\n.logo2020 {\r\n  color:  #524ad0;\r\n}\r\n\r\n.hero.is-primary {\r\n  background: linear-gradient(to top right, #524ad0 10%, #D099FA);\r\n}\r\n\r\n.box {\r\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.box span.icon {\r\n  float: right;\r\n  font-size: 1.7em;\r\n  padding: 2rem 2rem 0 0;\r\n}\r\n\r\n.is-large.fab {\r\n  font-size: 7em;\r\n}\r\n\r\n.is-large.fas {\r\n  font-size: 5em;\r\n  margin-left: 0.2em;\r\n}\r\n\r\n.media-content {\r\n  overflow: hidden;\r\n}\r\n\r\n.menu-list li a:hover {\r\n  background: #d9d9d9;\r\n}\r\n\r\n.token.number {\r\n  display: inline;\r\n  padding: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  text-align: inherit;\r\n  vertical-align: inherit;\r\n  border-radius: inherit;\r\n  font-weight: inherit;\r\n  white-space: inherit;\r\n  background: inherit;\r\n  margin: inherit;\r\n}\r\n\r\n.footer {\r\n  background-color: white;\r\n}\r\n\r\n#page-settings {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  padding: 10px;\r\n}\r\n\r\n.menu-list a {\r\n  color: #0F1D38;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n\r\n.login-link a, .logout-user a {\r\n  color: inherit !important;\r\n}\r\n\r\n#map {\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[t].concat(a).concat([i]).join("\n")}var o,s,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},function(e,n,t){"use strict";var r,i={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function s(e,n){for(var t=[],r={},i=0;i<e.length;i++){var a=e[i],o=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):t.push(r[o]={id:o,parts:[s]})}return t}function l(e,n){for(var t=0;t<e.length;t++){var r=e[t],a=i[r.id],o=0;if(a){for(a.refs++;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(h(r.parts[o],n))}else{for(var s=[];o<r.parts.length;o++)s.push(h(r.parts[o],n));i[r.id]={id:r.id,refs:1,parts:s}}}}function c(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var r=t.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach(function(t){n.setAttribute(t,e.attributes[t])}),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var a=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}var p=null,m=0;function h(e,n){var t,r,i;if(n.singleton){var a=m++;t=p||(p=c(n)),r=f.bind(null,t,a,!1),i=f.bind(null,t,a,!0)}else t=c(n),r=function(e,n,t){var r=t.css,i=t.media,a=t.sourceMap;if(i&&e.setAttribute("media",i),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=s(e,n);return l(t,n),function(e){for(var r=[],a=0;a<t.length;a++){var o=t[a],c=i[o.id];c&&(c.refs--,r.push(c))}e&&l(s(e,n),n);for(var u=0;u<r.length;u++){var d=r[u];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete i[d.id]}}}}},function(e,n,t){"use strict";var r=t(0);Object(r.b)("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"),Object(r.b)("https://unpkg.com/bulma@0.7.5/css/bulma.min.css"),Object(r.b)("https://use.fontawesome.com/releases/v5.5.0/css/all.css"),Object(r.a)("viewport","width=device-width, initial-scale=1");var i,a,o,s="ru",l=768;function c(){for(var e=[],n=0;n<i.length;n++){var t=p(i[n]);e.push(t)}var r=document.getElementById("app-navbar"),a=document.getElementById("js-navbar-items"),o=[];a.innerHTML="";var s=a.clientWidth,l=document.getElementById("js-navbar-end").clientWidth,c=r.clientWidth-l-52,u=s>c;for(n=0;n<e.length;n++){var d=e[n];u||(a.appendChild(d),u=(s+=d.clientWidth)>c),u&&(o.push(d),d.parentNode===a&&a.removeChild(d))}if(o.length){var f=document.createElement("div");f.className="navbar-item has-dropdown is-hoverable",f.innerHTML=['<a class="navbar-link is-arrowless"><i class="fas fa-ellipsis-h"></i></a>','<div class="navbar-dropdown"></div>'].join("");var m=f.getElementsByClassName("navbar-dropdown")[0];for(n=0;n<o.length;n++){d=o[n];m.appendChild(d)}a.appendChild(f)}}function u(){var e=document.getElementsByClassName("menu-list")[0];window.innerWidth<l?e.style.display="none":e.style.display="block";for(var n=0;n<i.length;n++){var t=i[n];t.className=t.className.replace(" tags",""),window.innerWidth<l&&(t.className=t.className+" tags")}}function d(){f(!1)}function f(e){if(a){var n=document.getElementById("js-navbar-burger");e=void 0!==e?e:-1===a.className.indexOf("is-active"),a.className=a.className.replace(" is-active",""),n.className=n.className.replace(" is-active",""),e?(n.className=n.className+" is-active",a.className=a.className+" is-active",a.style.display="block"):a.style.display="none"}}function p(e){var n=document.createElement("a");return n.className="navbar-item",n.href=e.href,n.innerHTML=e.innerHTML,e===o&&(n.className+=" is-active"),n}window.addEventListener("load",function(){c()}),Object(r.d)(function(){document.body.className=document.body.className+" has-navbar-fixed-top",function(){var e=document.getElementsByClassName("menu-list")[0];i=e.getElementsByTagName("a");for(var n=0;n<i.length;n++){var t=i[n];if(-1!==t.href.indexOf(window.location.pathname)){t.className+=" has-text-primary",o=t;break}}}(),u(),function(){e=document.getElementById("js-language-switcher"),e&&(s=-1!==e.href.indexOf(":ru")?"en":"ru");var e;for(var n=document.getElementsByClassName("i18n"),t={en:{"language-switcher":"РУ"},ru:{"language-switcher":"EN"}}[s],r=0;r<n.length;r++){var i=n[r],a=i.className.match(/i18n-([A-z1-9-]+)/,"$1")[1];i.innerHTML=t[a]||i.innerHTML}}(),a=document.getElementById("js-mobile-menu"),d(),function(){for(var e=0;e<i.length;e++){var n=p(i[e]);a.appendChild(n)}}(),document.getElementById("js-navbar-burger").addEventListener("click",function(){f()})}),window.addEventListener("resize",function(){u(),c(),d()})},function(e,n,t){"use strict";t.r(n);t(1),t(5);var r,i=t(0);-1!==window.location.pathname.indexOf("/place")&&Object(i.d)(function(e){r=e.geojson,Object(i.c)("https://api.tiles.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.js"),Object(i.b)("https://api.tiles.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.css");var n=setInterval(function(){window.mapboxgl&&(!function(){mapboxgl.accessToken="pk.eyJ1IjoicmVuZHJvbSIsImEiOiJjano5cTQ5ZHUwMWIzM29tbW44eHRiZnZ0In0.ySxxfs_Fi6Ny85rarvwuNA";var e=new mapboxgl.Map({style:"mapbox://styles/mapbox/light-v10",center:[104.269397,52.243519],zoom:15.5,pitch:45,bearing:-17.6,container:"map",antialias:!0});e.on("load",function(){for(var n,t=e.getStyle().layers,i=0;i<t.length;i++)if("symbol"===t[i].type&&t[i].layout["text-field"]){n=t[i].id;break}e.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},n),e.addSource("highlighted-buildings",{type:"geojson",data:r}),e.addLayer({id:"3d-buildings-highlighted",source:"highlighted-buildings",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"red","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},n),e.on("click",function(n){var t=[[n.point.x-5,n.point.y-5],[n.point.x+5,n.point.y+5]],r=e.queryRenderedFeatures(t,{layers:["3d-buildings"]})[0];console.log(JSON.stringify({type:"Feature",properties:r.properties,geometry:r.geometry}))})})}(),clearInterval(n))},10)}({geojson:"https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/place.geojson"}))}]);
//# sourceMappingURL=petro2020.js.map