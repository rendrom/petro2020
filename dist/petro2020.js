/*! petro2020 - 0.0.3 | Mon, 02 Mar 2020 08:35:40 GMT | rendrom@gmail.com | ISC | https://github.com/rendrom/petro2020#readme */!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=10)}([function(e,n,t){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},a=[],r=0;r<e.length;r++){var o=e[r],s=n.base?o[0]+n.base:o[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=c(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:h(p,n),references:1}),a.push(d)}return a}function l(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=t.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,t,a){var r=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(n,r);else{var o=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function m(e,n,t){var a=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var g=null,f=0;function h(e,n){var t,a,r;if(n.singleton){var o=f++;t=g||(g=l(n)),a=p.bind(null,t,o,!1),r=p.bind(null,t,o,!0)}else t=l(n),a=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var r=c(t[a]);i[r].references--}for(var o=s(e,n),l=0;l<t.length;l++){var d=c(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=o}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var r=(i=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([r]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e){e.exports=JSON.parse('{"en":{"language-switcher":"РУ","title-main":"XIII NATIONAL PETROGRAPHIC CONFERENCE","title-foreign":"(with foreign scientists invited)","title-name":"«PETROLOGY AND GEODYNAMICS OF GEOLOGICAL PROCESSES»","title-city":"IRKUTSK","title-date":"September 07-14, 2020","org_ran":"RUSSIAN ACADEMY OF SCIENCES","org_scie":"DEPARTMENT OF EARTH SCIENCES","org_petr":"NATIONAL PETROGRAPHIC COMMITTEE","org_soran":"SIBERIAN BRANCH OF RUSSIAN ACADEMY OF SCIENCES","org_min":"MINISTRY OF SCIENCE AND HIGHER EDUCATION","org_rffi":"RUSSIAN FOUNDATION FOR BASIC RESEARCH","org_igc":"INSTITUTE OF GEOCHEMISTRY SB RAS","org_crust":"INSTITUTE OF THE EARTH’S CRUST SB RAS","tech-support":"With technical support","footer-contacts":"Contacts:","footer-address":"Institute of Geochemistry, 1A Favorsky Street, Irkutsk 664033, Russia","footer-org":"Organizing Committee «PETROLOGY AND GEODYNAMICS OF GEOLOGICAL PROCESSES»","footer-sec":"Secretary of Org Committee: Natalia Alymova, phone +7 9149100158"},"ru":{"language-switcher":"EN"}}')},function(e,n,t){var a=t(0),r=t(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},function(e,n,t){(n=t(1)(!1)).push([e.i,"body, html {\n  background: #f2f2f2;\n}\n\npre, .message {\n  max-width: 960px;\n}\n\nli {\n  margin: 10px\n}\n\n.logo2020 {\n  color: #524ad0;\n}\n\n.hero.is-primary {\n  background: linear-gradient(to top right, #524ad0 10%, #D099FA);\n}\n\n.box {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.box span.icon {\n  float: right;\n  font-size: 1.7em;\n  padding: 2rem 2rem 0 0;\n}\n\n.is-large.fab {\n  font-size: 7em;\n}\n\n.is-large.fas {\n  font-size: 5em;\n  margin-left: 0.2em;\n}\n\n.media-content {\n  overflow: hidden;\n}\n\n.menu-list li a:hover {\n  background: #d9d9d9;\n}\n\n.token.number {\n  display: inline;\n  padding: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  text-align: inherit;\n  vertical-align: inherit;\n  border-radius: inherit;\n  font-weight: inherit;\n  white-space: inherit;\n  background: inherit;\n  margin: inherit;\n}\n\n.footer {\n  background-color: white;\n}\n\n/* .content.is-medium {\n  font-size: 18px!important;\n} */\n\n#page-settings {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 10px;\n}\n\n.menu-list a {\n  color: #0F1D38;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.login-link a, .logout-user a {\n  color: inherit !important;\n}\n\n#map.active {\n  width: 100%;\n  height: 600px;\n}\n\n.navbar-brand>.navbar-brand {\n  cursor: pointer;\n}\n\n.info-panel {\n  max-height: 560px;\n  overflow: scroll;\n}\n\n#loginWindow_content {\n  height: inherit!important;\n}\n",""]),e.exports=n},function(e,n,t){var a=t(0),r=t(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},function(e,n,t){(n=t(1)(!1)).push([e.i,".navbar.is-fixed-top {\n  z-index: 2000!important;\n}\n\n.header-text {\n  color: #0e0965;\n}\n\n.love-science-robots {\n  padding-top: 10px;\n}\n\n.org-hero .hero-body {\n  padding: 1rem 1.5rem;\n}\n\n.org-icon {\n  padding: 0 0.1rem;\n  transition: all .2s ease-in-out;\n}\n\n.org-icon:hover {\n  transform: scale(1.1);\n}\n\n.org-ico_container {\n  padding-top: 0.3rem;\n}\n\n.main-hero {\n  min-height: 300px;\n  max-height: 350px;\n  /* background: url('http://127.0.0.1:5500/conferences/petro/data/header-low.jpg') center center; */\n  background-image: url('https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/header-low.jpg');\n  background-position: center center;\n  background-size: cover;\n}\n\n/* body {\n  background-image: url('https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/background.jpg');\n} */\n\n.org-link {\n  /* white-space: nowrap; */\n  color: #4a4a4a;\n}\n\n.org-link:hover, .org-link.active {\n  color: #b9983f;\n}\n\n.org-links_container .divider {\n  padding: 0 1rem;\n}\n\n.org-links_container .divider::before {\n  content: '/'\n}\n\n.box.cta {\n  border-radius: 0;\n  border-left: none;\n  border-right: none;\n}\n\n.date-tile {\n  font-size: 42pt;\n  text-align: center;\n}\n\n/* .tile.notification {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n} */\n\n.is-shady {\n  animation: flyintoright .4s backwards;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, .1) 0 1px 0;\n  border-radius: 4px;\n  display: inline-block;\n  margin: 10px;\n  position: relative;\n  transition: all .2s ease-in-out;\n}\n\n.is-shady:hover {\n  box-shadow: 0 10px 16px rgba(0, 0, 0, .13), 0 6px 6px rgba(0, 0, 0, .19);\n}\n\n#tile-map {\n  width: 100%;\n  height: 100%;\n  min-width: 225px;\n  min-height: 300px;\n}\n",""]),e.exports=n},function(e,n){window.CONF_URL="http://petro2020.igc.irk.ru"},function(e,n,t){var a=t(0),r=t(9);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},function(e,n,t){(n=t(1)(!1)).push([e.i,".calendar table {\n  width: auto!important;\n}\n\n#extra.calendar {\n  height: 1000px;\n}\n\n.month-container {\n  margin-top: 20px;\n}\n\n/* .calendar .calendar-header {\n  background-color: #CC251F;\n  color: white;\n  border: 0;\n} */\n\n/* .calendar .calendar-header .year-title:hover, .calendar .calendar-header .prev:hover, .calendar .calendar-header .next:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.calendar .calendar-header .year-neighbor {\n  color: inherit;\n  opacity: 0.7;\n}\n\n.calendar .calendar-header .year-neighbor2 {\n  color: inherit;\n  opacity: 0.4;\n}\n\n.calendar .month-container {\n  height: 210px;\n}\n\n.calendar table.month {\n  height: 100%;\n}\n\n.calendar table.month .month-title {\n  background-color: #CC251F;\n  color: white;\n  padding: 5px;\n}\n\n.calendar table.month .day-header {\n  padding-top: 8px;\n  border-bottom: 2px solid #CC251F;\n}\n\n.calendar table.month td.day .day-content {\n  padding: 5px 8px;\n} */\n",""]),e.exports=n},function(e,n,t){"use strict";t.r(n);t(3),t(5),t(7);var a,r="ru";function o(){var e=document.getElementById("js-language-switcher");return e&&(r=-1!==e.href.indexOf(":ru")?"en":"ru"),r}function i(e){var n=document.createElement("link");n.rel="stylesheet",n.href=e;var t=document.head.getElementsByTagName("link");document.head.insertBefore(n,t[0])}function c(e){var n=document.createElement("script");n.type="text/javascript",n.src=e,document.head.appendChild(n)}a=window.Tapestry?window.Tapestry.onDOMLoaded:function(e){document.addEventListener("DOMContentLoaded",e)};var s,l,d,u,p,m,g=t(2);i("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"),i("https://unpkg.com/bulma@0.7.5/css/bulma.min.css"),i("https://use.fontawesome.com/releases/v5.5.0/css/all.css"),s="viewport",l="width=device-width, initial-scale=1",(d=document.createElement("meta")).name=s,d.content=l,document.head.appendChild(d);var f,h=window.CONF_URL;function v(){var e,n,t=[];for(e=0;e<u.length;e++){var a=y(u[e]);t.push(a)}var r=document.getElementById("app-navbar"),o=document.getElementById("js-navbar-items"),i=[];o.innerHTML="";var c=o.clientWidth,s=document.getElementById("js-navbar-end").clientWidth,l=r.clientWidth-s-52,d=c>l;for(e=0;e<t.length;e++)n=t[e],d||(o.appendChild(n),d=(c+=n.clientWidth)>l),d&&(i.push(n),n.parentNode===o&&o.removeChild(n));if(i.length){var p=document.createElement("div");p.className="navbar-item has-dropdown is-hoverable",p.innerHTML=['<a class="navbar-link is-arrowless"><i class="fas fa-ellipsis-h"></i></a>','<div class="navbar-dropdown"></div>'].join("");var m=p.getElementsByClassName("navbar-dropdown")[0];for(e=0;e<i.length;e++)n=i[e],m.appendChild(n);o.appendChild(p)}}function b(){w(!1)}function w(e){if(p){var n=document.getElementById("js-navbar-burger");e=void 0!==e?e:-1===p.className.indexOf("is-active"),p.className=p.className.replace(" is-active",""),n.className=n.className.replace(" is-active",""),e?(n.className=n.className+" is-active",p.className=p.className+" is-active",p.style.display="block"):p.style.display="none"}}function y(e){var n=document.createElement("a");return n.className="navbar-item",n.href=e.href,n.innerHTML=e.innerHTML,e===m&&(n.className+=" is-active"),n}function x(e,n){e.className=e.className?" "+n:n}function E(e,n){for(var t=0;t<e.length;t++)n(e[t])}window.addEventListener("load",(function(){v()})),a((function(){var e,n,t;document.body.className=document.body.className+" has-navbar-fixed-top",function(){for(var e=document.getElementsByClassName("menu-list")[0],n=(u=e.getElementsByTagName("a")).length;n--;){var t=u[n];if(-1!==t.href.indexOf(window.location.pathname)){t.className+=" has-text-primary",m=t;break}}}(),function(){o();for(var e=g,n=document.getElementsByClassName("i18n"),t=e[r],a=0;a<n.length;a++){var i=n[a],c=i.className.match(/i18n-([A-z1-9-]+)/,"$1")[1];i.innerHTML=t[c]||i.innerHTML}}(),e=document.getElementsByTagName("h2"),n="title is-3",E(e,(function(e){x(e,n)})),E(document.getElementsByTagName("input"),(function(e){"submit"===e.type?x(e,"button"):-1!==["text","password","email","tel"].indexOf(e.type)&&x(e,"input")})),p=document.getElementById("js-mobile-menu"),b(),function(){for(var e=0;e<u.length;e++){var n=y(u[e]);p.appendChild(n)}}(),document.getElementById("js-navbar-burger").addEventListener("click",(function(){w()})),(t=document.getElementById("js-navbar-brand"))&&(t.onclick=function(){window.open(h||window.location.origin,"_self")})})),window.addEventListener("resize",(function(){v(),b()}));var N={};function C(e,n){f=e.geojson,e&&e.ngwMapOptions&&(N=e.ngwMapOptions),c("https://unpkg.com/@nextgis/ngw-mapbox");var t=setInterval((function(){window.NgwMapbox&&(!function(e){const n={style:"mapbox://styles/mapbox/light-v10",center:[104.269397,52.243519],zoom:15.5,target:"map",accessToken:"pk.eyJ1IjoicmVuZHJvbSIsImEiOiJjano5cTQ5ZHUwMWIzM29tbW44eHRiZnZ0In0.ySxxfs_Fi6Ny85rarvwuNA",pitch:45,bearing:-17.6,antialias:!0};for(var t in N)n[t]=N[t];var a=new window.NgwMapbox(n);a.onLoad().then((function(){var n=a.mapAdapter.map;e&&e(n,a);for(var t,r=n.getStyle().layers,o=0;o<r.length;o++)if("symbol"===r[o].type&&r[o].layout["text-field"]){t=r[o].id;break}n.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},t),n.addSource("highlighted-buildings",{type:"geojson",data:f}),n.addLayer({id:"3d-buildings-highlighted",source:"highlighted-buildings",filter:["==","extrude","true"],type:"fill-extrusion",paint:{"fill-extrusion-color":"red","fill-extrusion-height":["interpolate",["linear"],["zoom"],1,1,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},t)}))}(n),clearInterval(t))}),10)}function I(){c("https://unpkg.com/@nextgis/ngw-leaflet");var e=setInterval((function(){window.NgwMap&&(new window.NgwMap({baseUrl:"http://geonote.nextgis.com",center:[104.269397,52.243519],zoom:15.5,target:"tile-map",qmsId:487,controls:["ATTRIBUTION"]}).addNgwLayer({resourceId:347,fit:!0}),clearInterval(e))}),10)}t(8);function O(e,n){c("https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.js"),i("https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.css"),c("https://unpkg.com/popper.js@1");var t=setInterval((function(){window.Calendar&&c("https://unpkg.com/js-year-calendar@latest/locales/js-year-calendar.ru.js"),window.Popper&&c("https://unpkg.com/tippy.js@4"),window.Calendar&&window.Calendar.locales.ru&&window.Popper&&(!function(e,n){var t=document.getElementById("extra");(e=e||{}).language=o(),e.mouseOnDay=e.mouseOnDay||function(e){if(e.events.length>0){for(var n="",t=0;t<e.events.length;t++){var a=e.events[t];n+='<div class="event-tooltip-content"><div class="event-name" style="color:'+a.color+'">'+a.name+"</div></div>"}var r=window.tippy(e.element);r&&(r.set({content:n,arrow:!0,followCursor:!0,theme:"light",animateFill:!1,duration:0,delay:[0,10]}),r.show())}};var a=new window.Calendar(t,e);n&&n(a)}(e,n),clearInterval(t))}),10)}var S={en:{registration:"Registration for participation at the conference",abstracts:"Reception of abstracts",excursions_registration:"Registration for excursions",circular1:"1nd Circular",circular2:"2nd Circular",circular3:"3rd Circular (program)",conference:"Conference",excursions:"Excursions"},ru:{registration:"Регистрация участников",abstracts:"Прием тезисов докладов",excursions_registration:"Запись на экскурсии",circular1:"1-й Циркуляр",circular2:"2-й Циркуляр",circular3:"3-й Циркуляр (программа)",conference:"Совещание",excursions:"Экскурсии"}};a((function(){var e="https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/header.jpg",n=document.getElementsByClassName("main-hero")[0],t=new Image;t.src=e,t.onload=function(){n.style.backgroundImage="url('https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/header.jpg')"}})),a((function(){document.getElementById("tile-map")&&I()})),-1!==window.location.pathname.indexOf("/place")&&a((function(){var e=document.getElementById("map");e.className=(e.className?e.className+" ":"")+"active",C({geojson:"https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/place.geojson",ngwMapOptions:{zoom:17,baseUrl:"http://geonote.nextgis.com",resources:[],controlsOptions:{ZOOM:{showCompass:!0}}}},(function(e){e.setPitch(45),function(e){var n,t=!1;function a(n){if(!t){var a=n;e.rotateTo(a+90,{duration:2e3,easing:function(e){return e}})}}e.on("moveend",(function(){a(e.getBearing())})),e.on("click",(function(){t=!0})),e.on("mouseover",(function(){window.clearTimeout(n),t=!0,e.rotateTo(e.getBearing())})),e.on("mouseout",(function(){n=setTimeout((function(){t=!1,e.setCenter([104.269397,52.243519]),e.setZoom(15.5),e.setPitch(45),a(e.getBearing())}),1e4)})),a(e.getBearing())}(e),function(e){e.addSource("places",{type:"geojson",data:"https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/label.geojson"});for(var n=["logo_igc","logo_crust"],t=0,a=0;a<n.length;a++){var r=n[a],o=new Image;o.crossOrigin="Anonymous",o.src="https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/"+r+".png",o.onload=i(r)}function i(a){return function(r){t+=1,e.addImage(a,r.target),function(e){t===n.length&&e.addLayer({id:"poi-labels",type:"symbol",source:"places",layout:{"text-variable-anchor":["top","bottom","left","right"],"text-radial-offset":.5,"text-justify":"auto","icon-image":["get","icon"]}})}(e)}}}(e)}))})),-1!==window.location.pathname.indexOf("/imp_dates")&&a((function(){var e=S[o()];O({dataSource:[{id:1,name:e.registration,startDate:new Date,endDate:new Date(2020,2,16),color:"yellow"},{id:2,name:e.abstracts,startDate:new Date,endDate:new Date(2020,3,30),color:"lightgreen"},{id:6,name:e.excursions_registration,startDate:new Date,endDate:new Date(2020,3,30),color:"#00d1b2"},{id:0,name:e.circular1,startDate:new Date(2019,9,1),endDate:new Date(2019,8,22),color:"red"},{id:3,name:e.circular2,startDate:new Date(2020,1,17),endDate:new Date(2020,1,17),color:"red"},{id:3,name:e.circular3,startDate:new Date(2020,6,20),endDate:new Date(2020,6,20),color:"red"},{id:4,name:e.conference,startDate:new Date(2020,8,7),endDate:new Date(2020,8,10),color:"#524ad0"},{id:5,name:e.excursions,startDate:new Date(2020,8,11),endDate:new Date(2020,8,14),color:"#00d1b2"}],minDate:new Date((new Date).setDate((new Date).getDate()-1)),maxDate:new Date(2020,8,14),style:"border"})}))}]);
//# sourceMappingURL=petro2020.js.map