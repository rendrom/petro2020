/*! petro2020 - 0.0.0 | Thu, 15 Aug 2019 17:17:36 GMT | rendrom@gmail.com | ISC | https://github.com/rendrom/petro2020#readme */!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=10)}([function(e,n,t){"use strict";var r;function a(e){var n=document.createElement("link");n.rel="stylesheet",n.href=e;var t=document.head.getElementsByTagName("link");document.head.insertBefore(n,t[0])}function i(e){var n=document.createElement("script");n.type="text/javascript",n.src=e,document.head.appendChild(n)}function o(e,n){var t=document.createElement("meta");t.name=e,t.content=n,document.head.appendChild(t)}t.d(n,"d",function(){return r}),t.d(n,"b",function(){return a}),t.d(n,"c",function(){return i}),t.d(n,"a",function(){return o}),r=window.Tapestry?Tapestry.onDOMLoaded:function(e){document.addEventListener("DOMContentLoaded",e)}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[t].concat(i).concat([a]).join("\n")}var o,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},function(e,n,t){"use strict";var r,a={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function s(e,n){for(var t=[],r={},a=0;a<e.length;a++){var i=e[a],o=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(s):t.push(r[o]={id:o,parts:[s]})}return t}function c(e,n){for(var t=0;t<e.length;t++){var r=e[t],i=a[r.id],o=0;if(i){for(i.refs++;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(h(r.parts[o],n))}else{for(var s=[];o<r.parts.length;o++)s.push(h(r.parts[o],n));a[r.id]={id:r.id,refs:1,parts:s}}}}function l(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var r=t.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach(function(t){n.setAttribute(t,e.attributes[t])}),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function f(e,n,t,r){var a=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,a);else{var i=document.createTextNode(a),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}var p=null,m=0;function h(e,n){var t,r,a;if(n.singleton){var i=m++;t=p||(p=l(n)),r=f.bind(null,t,i,!1),a=f.bind(null,t,i,!0)}else t=l(n),r=function(e,n,t){var r=t.css,a=t.media,i=t.sourceMap;if(a&&e.setAttribute("media",a),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=s(e,n);return c(t,n),function(e){for(var r=[],i=0;i<t.length;i++){var o=t[i],l=a[o.id];l&&(l.refs--,r.push(l))}e&&c(s(e,n),n);for(var d=0;d<r.length;d++){var u=r[d];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete a[u.id]}}}}},function(e,n,t){var r=t(4);"string"==typeof r&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};t(2)(r,a);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(1)(!1)).push([e.i,"body, html {\n  background: #f2f2f2;\n}\n\n\npre, .message {\n  max-width: 960px;\n}\n\nli {\n  margin: 10px\n}\n\n.logo2020 {\n  color:  #524ad0;\n}\n\n.hero.is-primary {\n  background: linear-gradient(to top right, #524ad0 10%, #D099FA);\n}\n\n.box {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.box span.icon {\n  float: right;\n  font-size: 1.7em;\n  padding: 2rem 2rem 0 0;\n}\n\n.is-large.fab {\n  font-size: 7em;\n}\n\n.is-large.fas {\n  font-size: 5em;\n  margin-left: 0.2em;\n}\n\n.media-content {\n  overflow: hidden;\n}\n\n.menu-list li a:hover {\n  background: #d9d9d9;\n}\n\n.token.number {\n  display: inline;\n  padding: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  text-align: inherit;\n  vertical-align: inherit;\n  border-radius: inherit;\n  font-weight: inherit;\n  white-space: inherit;\n  background: inherit;\n  margin: inherit;\n}\n\n.footer {\n  background-color: white;\n}\n\n#page-settings {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 10px;\n}\n\n.menu-list a {\n  color: #0F1D38;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.login-link a, .logout-user a {\n  color: inherit !important;\n}\n\n#map {\n  width: 100%;\n  height: 600px;\n}\n\n.navbar-brand > .navbar-brand {\n  cursor: pointer;\n}\n\n.info-panel {\n  max-height: 560px;\n  overflow: scroll;\n}\n",""])},function(e,n,t){"use strict";var r=t(0);Object(r.b)("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"),Object(r.b)("https://unpkg.com/bulma@0.7.5/css/bulma.min.css"),Object(r.b)("https://use.fontawesome.com/releases/v5.5.0/css/all.css"),Object(r.a)("viewport","width=device-width, initial-scale=1");var a,i,o,s="ru",c=768,l=window.CONF_URL;function d(){var e,n,t=[];for(e=0;e<a.length;e++){var r=m(a[e]);t.push(r)}var i=document.getElementById("app-navbar"),o=document.getElementById("js-navbar-items"),s=[];o.innerHTML="";var c=o.clientWidth,l=document.getElementById("js-navbar-end").clientWidth,d=i.clientWidth-l-52,u=c>d;for(e=0;e<t.length;e++)n=t[e],u||(o.appendChild(n),u=(c+=n.clientWidth)>d),u&&(s.push(n),n.parentNode===o&&o.removeChild(n));if(s.length){var f=document.createElement("div");f.className="navbar-item has-dropdown is-hoverable",f.innerHTML=['<a class="navbar-link is-arrowless"><i class="fas fa-ellipsis-h"></i></a>','<div class="navbar-dropdown"></div>'].join("");var p=f.getElementsByClassName("navbar-dropdown")[0];for(e=0;e<s.length;e++)n=s[e],p.appendChild(n);o.appendChild(f)}}function u(){var e=document.getElementsByClassName("menu-list")[0];window.innerWidth<c?e.style.display="none":e.style.display="block";for(var n=0;n<a.length;n++){var t=a[n];t.className=t.className.replace(" tags",""),window.innerWidth<c&&(t.className=t.className+" tags")}}function f(){p(!1)}function p(e){if(i){var n=document.getElementById("js-navbar-burger");e=void 0!==e?e:-1===i.className.indexOf("is-active"),i.className=i.className.replace(" is-active",""),n.className=n.className.replace(" is-active",""),e?(n.className=n.className+" is-active",i.className=i.className+" is-active",i.style.display="block"):i.style.display="none"}}function m(e){var n=document.createElement("a");return n.className="navbar-item",n.href=e.href,n.innerHTML=e.innerHTML,e===o&&(n.className+=" is-active"),n}window.addEventListener("load",function(){d()}),Object(r.d)(function(){var e;document.body.className=document.body.className+" has-navbar-fixed-top",function(){var e=document.getElementsByClassName("menu-list")[0];a=e.getElementsByTagName("a");for(var n=0;n<a.length;n++){var t=a[n];if(-1!==t.href.indexOf(window.location.pathname)){t.className+=" has-text-primary",o=t;break}}}(),u(),function(){e=document.getElementById("js-language-switcher"),e&&(s=-1!==e.href.indexOf(":ru")?"en":"ru");var e;for(var n=document.getElementsByClassName("i18n"),t={en:{"language-switcher":"РУ"},ru:{"language-switcher":"EN"}}[s],r=0;r<n.length;r++){var a=n[r],i=a.className.match(/i18n-([A-z1-9-]+)/,"$1")[1];a.innerHTML=t[i]||a.innerHTML}}(),i=document.getElementById("js-mobile-menu"),f(),function(){for(var e=0;e<a.length;e++){var n=m(a[e]);i.appendChild(n)}}(),document.getElementById("js-navbar-burger").addEventListener("click",function(){p()}),(e=document.getElementById("js-vavbar-brand"))&&(e.onclick=function(){window.open(l||window.location.origin)})}),window.addEventListener("resize",function(){u(),d(),f()})},function(e,n,t){var r=t(7);"string"==typeof r&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};t(2)(r,a);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(1)(!1)).push([e.i,".hero.is-primary {\n  /* background: linear-gradient(to top right, #524ad0 10%, #D099FA); */\n  background-image: linear-gradient(to top right, #524ad0 10%, #D099FA), url('https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/ultramafite/data/header-low.jpg');\n  /* background-image: linear-gradient(to top right, #524ad0 10%, #D099FA), url('http://127.0.0.1:5500/conferences/ultramafite/data/header-low.jpg'); */\n  background-size: cover;\n  background-blend-mode: multiply;\n}\n",""])},function(e,n){window.CONF_URL="http://ultramafite2019.igc.irk.ru"},,function(e,n,t){"use strict";t.r(n);t(3),t(6),t(8),t(5);var r,a=t(0),i={};function o(e,n){r=e.geojson,e&&e.ngwMapOptions&&(i=e.ngwMapOptions),Object(a.c)("https://unpkg.com/@nextgis/ngw-mapbox");var t=setInterval(function(){window.NgwMap&&(!function(e){const n={style:"mapbox://styles/mapbox/light-v10",center:[104.269397,52.243519],zoom:15.5,target:"map",accessToken:"pk.eyJ1IjoicmVuZHJvbSIsImEiOiJjano5cTQ5ZHUwMWIzM29tbW44eHRiZnZ0In0.ySxxfs_Fi6Ny85rarvwuNA",pitch:45,bearing:-17.6,antialias:!0};for(var t in i)n[t]=i[t];var a=new window.NgwMap(n),o=a.mapAdapter.map;o.on("load",function(){e&&e(o,a);for(var n,t=o.getStyle().layers,i=0;i<t.length;i++)if("symbol"===t[i].type&&t[i].layout["text-field"]){n=t[i].id;break}o.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},n),o.addSource("highlighted-buildings",{type:"geojson",data:r}),o.addLayer({id:"3d-buildings-highlighted",source:"highlighted-buildings",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"red","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},n)})}(n),clearInterval(t))},10)}Object(a.d)(function(){var e="https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/ultramafite/data/header.jpg",n=document.getElementsByClassName("hero")[0],t=new Image;t.src=e,t.onload=function(){n.style.backgroundImage="linear-gradient(to top right, #524ad0 10%, #D099FA), url('https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/ultramafite/data/header.jpg')"}});var s="http://geonote.nextgis.com";-1!==window.location.pathname.indexOf("/place")&&Object(a.d)(function(){o({geojson:"https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/ultramafite/data/place.geojson",ngwMapOptions:{center:[106.878039,53.023219],zoom:16,baseUrl:s,resources:[{resourceId:20,id:"points",selectable:!0,paint:{color:"#524ad0",radius:6,opacity:.6,stroke:!0,strokeColor:"white",strokeOpacity:1},selectedPaint:{color:"#524ad0",radius:8,opacity:1,stroke:!0,strokeColor:"white",strokeOpacity:1}}],pitch:45,bearing:-17.6}},function(e,n){n.emitter.on("layer:click",function(e){if(r(),n){var t=n.getLayer("points");if(t.getSelected&&e.layer.id===t.id){var i=t.getSelected()[0].feature;n.connector.get("feature_layer.feature.item",null,{fid:i.id,id:t.options.resourceId}).then(function(e){console.log(e),a(e,t.options.resourceId,i.id)})}}});var t=document.createElement("div"),r=function(){t.innerHTML=""},a=function(e,n,r){var a='<div class="box info-panel"><div>Точка №'+e.fields.name+"</div>";if(e.fields.rock&&(a+="<div>Порода: "+e.fields.rock+"</div>"),e.extensions&&e.extensions.attachment)for(var o=0;o<e.extensions.attachment.length;o++){var s=e.extensions.attachment[o];a+='<figure class="image is-128x72"><img src="'+i(s,n,r,128,128)+'"></figure>'}a+="</div>",t.innerHTML=a},i=function(e,n,t,r,a){return s+"/api/resource/"+n+"/feature/"+t+"/attachment/"+e.id+"/image"+(r&&a?"?size="+r+"x"+a:"")},o=n.createControl({onAdd:function(){return t}},{margin:!0});n.addControl(o,"top-right")})})}]);
//# sourceMappingURL=ultramafite2019.js.map