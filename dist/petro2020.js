/*! petro2020 - 0.0.3 | Thu, 18 Feb 2021 02:44:23 GMT | rendrom@gmail.com | ISC | https://github.com/rendrom/petro2020#readme */!function(){var n={617:function(){window.CONF_URL="http://petro2020.igc.irk.ru"},150:function(n,e,t){"use strict";var a,r=t(379),o=t.n(r),i=t(426),c={insert:"head",singleton:!1},s=(o()(i.Z,c),i.Z.locals,t(542)),l={insert:"head",singleton:!1},d=(o()(s.Z,l),s.Z.locals,t(617),"ru");function u(){var n=document.getElementById("js-language-switcher");return n&&(d=-1!==n.href.indexOf(":ru")?"en":"ru"),d}function m(n){var e=document.createElement("link");e.rel="stylesheet",e.href=n;var t=document.head.getElementsByTagName("link");document.head.insertBefore(e,t[0])}function p(n){var e=document.createElement("script");e.type="text/javascript",e.src=n,document.head.appendChild(e)}a=window.Tapestry?window.Tapestry.onDOMLoaded:function(n){document.addEventListener("DOMContentLoaded",n)};var g,h,f,v,b,w,y=JSON.parse('{"en":{"language-switcher":"РУ","title-main":"XIII NATIONAL PETROGRAPHIC CONFERENCE","title-foreign":"(with foreign scientists invited)","title-name":"«PETROLOGY AND GEODYNAMICS OF GEOLOGICAL PROCESSES»","title-city":"IRKUTSK","title-date":"September 06-12, 2021","org_ran":"RUSSIAN ACADEMY OF SCIENCES","org_scie":"DEPARTMENT OF EARTH SCIENCES","org_petr":"NATIONAL PETROGRAPHIC COMMITTEE","org_soran":"SIBERIAN BRANCH OF RUSSIAN ACADEMY OF SCIENCES","org_min":"MINISTRY OF SCIENCE AND HIGHER EDUCATION","org_rffi":"RUSSIAN FOUNDATION FOR BASIC RESEARCH","org_igc":"INSTITUTE OF GEOCHEMISTRY SB RAS","org_crust":"INSTITUTE OF THE EARTH’S CRUST SB RAS","tech-support":"With technical support","footer-contacts":"Contacts:","footer-address":"Institute of Geochemistry, 1A Favorsky Street, Irkutsk 664033, Russia","footer-org":"Organizing Committee «PETROLOGY AND GEODYNAMICS OF GEOLOGICAL PROCESSES»","footer-sec":"Secretary of Org Committee: Natalia Alymova, phone +7 9149100158"},"ru":{"language-switcher":"EN"}}');m("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"),m("https://unpkg.com/bulma@0.7.5/css/bulma.min.css"),m("https://use.fontawesome.com/releases/v5.5.0/css/all.css"),g="viewport",h="width=device-width, initial-scale=1",(f=document.createElement("meta")).name=g,f.content=h,document.head.appendChild(f);var x,E=window.CONF_URL;function N(){var n,e,t=[];for(n=0;n<v.length;n++){var a=O(v[n]);t.push(a)}var r=document.getElementById("app-navbar"),o=document.getElementById("js-navbar-items"),i=[];o.innerHTML="";var c=o.clientWidth,s=document.getElementById("js-navbar-end").clientWidth,l=r.clientWidth-s-52,d=c>l;for(n=0;n<t.length;n++)e=t[n],d||(o.appendChild(e),d=(c+=e.clientWidth)>l),d&&(i.push(e),e.parentNode===o&&o.removeChild(e));if(i.length){var u=document.createElement("div");u.className="navbar-item has-dropdown is-hoverable",u.innerHTML=['<a class="navbar-link is-arrowless"><i class="fas fa-ellipsis-h"></i></a>','<div class="navbar-dropdown"></div>'].join("");var m=u.getElementsByClassName("navbar-dropdown")[0];for(n=0;n<i.length;n++)e=i[n],m.appendChild(e);o.appendChild(u)}}function C(){I(!1)}function I(n){if(b){var e=document.getElementById("js-navbar-burger");n=void 0!==n?n:-1===b.className.indexOf("is-active"),b.className=b.className.replace(" is-active",""),e.className=e.className.replace(" is-active",""),n?(e.className=e.className+" is-active",b.className=b.className+" is-active",b.style.display="block"):b.style.display="none"}}function O(n){var e=document.createElement("a");return e.className="navbar-item",e.href=n.href,e.innerHTML=n.innerHTML,n===w&&(e.className+=" is-active"),e}function D(n,e){n.className=n.className?" "+e:e}function S(n,e){for(var t=0;t<n.length;t++)e(n[t])}window.addEventListener("load",(function(){N()})),a((function(){var n,e,t;document.body.className=document.body.className+" has-navbar-fixed-top",function(){for(var n=document.getElementsByClassName("menu-list")[0],e=(v=n.getElementsByTagName("a")).length;e--;){var t=v[e];if(-1!==t.href.indexOf(window.location.pathname)){t.className+=" has-text-primary",w=t;break}}}(),function(){u();for(var n=y,e=document.getElementsByClassName("i18n"),t=n[d],a=0;a<e.length;a++){var r=e[a],o=r.className.match(/i18n-([A-z1-9-]+)/,"$1")[1];r.innerHTML=t[o]||r.innerHTML}}(),n=document.getElementsByTagName("h2"),e="title is-3",S(n,(function(n){D(n,e)})),S(document.getElementsByTagName("input"),(function(n){"submit"===n.type?D(n,"button"):-1!==["text","password","email","tel"].indexOf(n.type)&&D(n,"input")})),b=document.getElementById("js-mobile-menu"),C(),function(){for(var n=0;n<v.length;n++){var e=O(v[n]);b.appendChild(e)}}(),document.getElementById("js-navbar-burger").addEventListener("click",(function(){I()})),(t=document.getElementById("js-navbar-brand"))&&(t.onclick=function(){window.open(E||window.location.origin,"_self")})})),window.addEventListener("resize",(function(){N(),C()}));var T={};function k(n,e){x=n.geojson,n&&n.ngwMapOptions&&(T=n.ngwMapOptions),p("https://unpkg.com/@nextgis/ngw-mapbox");var t=setInterval((function(){window.NgwMapbox&&(!function(n){const e={style:"mapbox://styles/mapbox/light-v10",center:[104.269397,52.243519],zoom:15.5,target:"map",accessToken:"pk.eyJ1IjoicmVuZHJvbSIsImEiOiJjano5cTQ5ZHUwMWIzM29tbW44eHRiZnZ0In0.ySxxfs_Fi6Ny85rarvwuNA",pitch:45,bearing:-17.6,antialias:!0};for(var t in T)e[t]=T[t];var a=new window.NgwMapbox(e);a.onLoad().then((function(){var e=a.mapAdapter.map;n&&n(e,a);for(var t,r=e.getStyle().layers,o=0;o<r.length;o++)if("symbol"===r[o].type&&r[o].layout["text-field"]){t=r[o].id;break}var i={id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}};e.addLayer(i,t),e.addSource("highlighted-buildings",{type:"geojson",data:x}),e.addLayer({id:"3d-buildings-highlighted",source:"highlighted-buildings",filter:["==","extrude","true"],type:"fill-extrusion",paint:{"fill-extrusion-color":"red","fill-extrusion-height":["interpolate",["linear"],["zoom"],1,1,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},t)}))}(e),clearInterval(t))}),10)}function j(){p("https://unpkg.com/@nextgis/ngw-leaflet");var n=setInterval((function(){window.NgwMap&&(!function(){const n={baseUrl:"http://geonote.nextgis.com",center:[104.269397,52.243519],zoom:15.5,target:"tile-map",qmsId:487,controls:["ATTRIBUTION"]};new window.NgwMap(n).addNgwLayer({resourceId:347,fit:!0})}(),clearInterval(n))}),10)}var A=t(382),R={insert:"head",singleton:!1};o()(A.Z,R),A.Z.locals;function M(n,e){p("https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.js"),m("https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.css"),p("https://unpkg.com/popper.js@1");var t=setInterval((function(){window.Calendar&&p("https://unpkg.com/js-year-calendar@latest/locales/js-year-calendar.ru.js"),window.Popper&&p("https://unpkg.com/tippy.js@4"),window.Calendar&&window.Calendar.locales.ru&&window.Popper&&(!function(n,e){var t=document.getElementById("extra");(n=n||{}).language=u(),n.mouseOnDay=n.mouseOnDay||function(n){if(n.events.length>0){for(var e="",t=0;t<n.events.length;t++){var a=n.events[t];e+='<div class="event-tooltip-content"><div class="event-name" style="color:'+a.color+'">'+a.name+"</div></div>"}var r=window.tippy(n.element);r&&(r.set({content:e,arrow:!0,followCursor:!0,theme:"light",animateFill:!1,duration:0,delay:[0,10]}),r.show())}};var a=new window.Calendar(t,n);e&&e(a)}(n,e),clearInterval(t))}),10)}var B={en:{registration:"Registration for participation at the conference",abstracts:"Reception of abstracts",excursions_registration:"Registration for excursions",circular1:"1nd Circular",circular2:"2nd Circular",circular3:"3rd Circular (program)",conference:"Conference",excursions:"Excursions"},ru:{registration:"Регистрация участников",abstracts:"Прием тезисов докладов",excursions_registration:"Запись на экскурсии",circular1:"1-й Циркуляр",circular2:"2-й Циркуляр",circular3:"3-й Циркуляр (программа)",conference:"Совещание",excursions:"Экскурсии"}};a((function(){var n="https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/header.jpg",e=document.getElementsByClassName("main-hero")[0],t=new Image;t.src=n,t.onload=function(){e.style.backgroundImage="url('https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/header.jpg')"}})),a((function(){document.getElementById("tile-map")&&j()})),-1!==window.location.pathname.indexOf("/place")&&a((function(){var n=document.getElementById("map");n.className=(n.className?n.className+" ":"")+"active",k({geojson:"https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/place.geojson",ngwMapOptions:{zoom:17,baseUrl:"http://geonote.nextgis.com",resources:[],controlsOptions:{ZOOM:{showCompass:!0}}}},(function(n){n.setPitch(45),function(n){var e,t=!1;function a(e){if(!t){var a=e;n.rotateTo(a+90,{duration:2e3,easing:function(n){return n}})}}function r(){n.setCenter([104.269397,52.243519]),n.setZoom(15.5),n.setPitch(45)}n.on("moveend",(function(){a(n.getBearing())})),n.on("click",(function(){t=!0})),n.on("mouseover",(function(){window.clearTimeout(e),t=!0,n.rotateTo(n.getBearing())})),n.on("mouseout",(function(){e=setTimeout((function(){t=!1,r(),a(n.getBearing())}),1e4)})),a(n.getBearing())}(n),function(n){var e="https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/label.geojson";n.addSource("places",{type:"geojson",data:e});for(var t=["logo_igc","logo_crust"],a=0,r="https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/",o=0;o<t.length;o++){var i=t[o],c=new Image;c.crossOrigin="Anonymous",c.src=r+i+".png",c.onload=s(i)}function s(e){return function(t){a+=1,n.addImage(e,t.target),l(n)}}function l(n){a===t.length&&n.addLayer({id:"poi-labels",type:"symbol",source:"places",layout:{"text-variable-anchor":["top","bottom","left","right"],"text-radial-offset":.5,"text-justify":"auto","icon-image":["get","icon"]}})}}(n)}))})),-1!==window.location.pathname.indexOf("/imp_dates")&&a((function(){var n=B[u()];M({dataSource:[{id:1,name:n.registration,startDate:new Date,endDate:new Date(2021,4,30),color:"yellow"},{id:2,name:n.abstracts,startDate:new Date,endDate:new Date(2021,6,30),color:"lightgreen"},{id:6,name:n.excursions_registration,startDate:new Date,endDate:new Date(2021,6,30),color:"#00d1b2"},{id:3,name:n.circular2,startDate:new Date(2021,5,5),endDate:new Date(2021,5,5),color:"red"},{id:3,name:n.circular3,startDate:new Date(2021,5,21),endDate:new Date(2021,5,21),color:"red"},{id:4,name:n.conference,startDate:new Date(2021,8,6),endDate:new Date(2021,8,12),color:"#524ad0"},{id:5,name:n.excursions,startDate:new Date(2021,8,10),endDate:new Date(2021,8,12),color:"#00d1b2"}],minDate:new Date((new Date).setDate((new Date).getDate()-1)),maxDate:new Date(2021,8,14),style:"border"})}))},542:function(n,e,t){"use strict";var a=t(645),r=t.n(a)()((function(n){return n[1]}));r.push([n.id,".navbar.is-fixed-top {\n  z-index: 2000!important;\n}\n\n.header-text {\n  color: #0e0965;\n}\n\n.love-science-robots {\n  padding-top: 10px;\n}\n\n.org-hero .hero-body {\n  padding: 1rem 1.5rem;\n}\n\n.org-icon {\n  padding: 0 0.1rem;\n  transition: all .2s ease-in-out;\n}\n\n.org-icon:hover {\n  transform: scale(1.1);\n}\n\n.org-ico_container {\n  padding-top: 0.3rem;\n}\n\n.main-hero {\n  min-height: 300px;\n  max-height: 350px;\n  /* background: url('http://127.0.0.1:5500/conferences/petro/data/header-low.jpg') center center; */\n  background-image: url('https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/header-low.jpg');\n  background-position: center center;\n  background-size: cover;\n}\n\n/* body {\n  background-image: url('https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/petro/data/background.jpg');\n} */\n\n.org-link {\n  /* white-space: nowrap; */\n  color: #4a4a4a;\n}\n\n.org-link:hover, .org-link.active {\n  color: #b9983f;\n}\n\n.org-links_container .divider {\n  padding: 0 1rem;\n}\n\n.org-links_container .divider::before {\n  content: '/'\n}\n\n.box.cta {\n  border-radius: 0;\n  border-left: none;\n  border-right: none;\n}\n\n.date-tile {\n  font-size: 42pt;\n  text-align: center;\n}\n\n/* .tile.notification {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n} */\n\n.is-shady {\n  animation: flyintoright .4s backwards;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, .1) 0 1px 0;\n  border-radius: 4px;\n  display: inline-block;\n  margin: 10px;\n  position: relative;\n  transition: all .2s ease-in-out;\n}\n\n.is-shady:hover {\n  box-shadow: 0 10px 16px rgba(0, 0, 0, .13), 0 6px 6px rgba(0, 0, 0, .19);\n}\n\n#tile-map {\n  width: 100%;\n  height: 100%;\n  min-width: 225px;\n  min-height: 300px;\n}\n",""]),e.Z=r},382:function(n,e,t){"use strict";var a=t(645),r=t.n(a)()((function(n){return n[1]}));r.push([n.id,".calendar table {\n  width: auto!important;\n}\n\n#extra.calendar {\n  height: 1000px;\n}\n\n.month-container {\n  margin-top: 20px;\n}\n\n/* .calendar .calendar-header {\n  background-color: #CC251F;\n  color: white;\n  border: 0;\n} */\n\n/* .calendar .calendar-header .year-title:hover, .calendar .calendar-header .prev:hover, .calendar .calendar-header .next:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.calendar .calendar-header .year-neighbor {\n  color: inherit;\n  opacity: 0.7;\n}\n\n.calendar .calendar-header .year-neighbor2 {\n  color: inherit;\n  opacity: 0.4;\n}\n\n.calendar .month-container {\n  height: 210px;\n}\n\n.calendar table.month {\n  height: 100%;\n}\n\n.calendar table.month .month-title {\n  background-color: #CC251F;\n  color: white;\n  padding: 5px;\n}\n\n.calendar table.month .day-header {\n  padding-top: 8px;\n  border-bottom: 2px solid #CC251F;\n}\n\n.calendar table.month td.day .day-content {\n  padding: 5px 8px;\n} */\n",""]),e.Z=r},426:function(n,e,t){"use strict";var a=t(645),r=t.n(a)()((function(n){return n[1]}));r.push([n.id,"body, html {\n  background: #f2f2f2;\n}\n\npre, .message {\n  max-width: 960px;\n}\n\nli {\n  margin: 10px\n}\n\n.logo2020 {\n  color: #524ad0;\n}\n\n.hero.is-primary {\n  background: linear-gradient(to top right, #524ad0 10%, #D099FA);\n}\n\n.box {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.box span.icon {\n  float: right;\n  font-size: 1.7em;\n  padding: 2rem 2rem 0 0;\n}\n\n.is-large.fab {\n  font-size: 7em;\n}\n\n.is-large.fas {\n  font-size: 5em;\n  margin-left: 0.2em;\n}\n\n.media-content {\n  overflow: hidden;\n}\n\n.menu-list li a:hover {\n  background: #d9d9d9;\n}\n\n.token.number {\n  display: inline;\n  padding: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  text-align: inherit;\n  vertical-align: inherit;\n  border-radius: inherit;\n  font-weight: inherit;\n  white-space: inherit;\n  background: inherit;\n  margin: inherit;\n}\n\n.footer {\n  background-color: white;\n}\n\n/* .content.is-medium {\n  font-size: 18px!important;\n} */\n\n#page-settings {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 10px;\n}\n\n.menu-list a {\n  color: #0F1D38;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.login-link a, .logout-user a {\n  color: inherit !important;\n}\n\n#map.active {\n  width: 100%;\n  height: 600px;\n}\n\n.navbar-brand>.navbar-brand {\n  cursor: pointer;\n}\n\n.info-panel {\n  max-height: 560px;\n  overflow: scroll;\n}\n\n#loginWindow_content {\n  height: inherit!important;\n}\n",""]),e.Z=r},645:function(n){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);a&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:function(n,e,t){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function c(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},a=[],r=0;r<n.length;r++){var o=n[r],s=e.base?o[0]+e.base:o[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=c(d),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:d,updater:f(m,e),references:1}),a.push(d)}return a}function l(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var r=t.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function m(n,e,t,a){var r=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=u(e,r);else{var o=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(o,i[e]):n.appendChild(o)}}function p(n,e,t){var a=t.css,r=t.media,o=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var g=null,h=0;function f(n,e){var t,a,r;if(e.singleton){var o=h++;t=g||(g=l(e)),a=m.bind(null,t,o,!1),r=m.bind(null,t,o,!0)}else t=l(e),a=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<t.length;a++){var r=c(t[a]);i[r].references--}for(var o=s(n,e),l=0;l<t.length;l++){var d=c(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=o}}}}},e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)};t(150)}();