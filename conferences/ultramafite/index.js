import '../../src/style.css';
import './style.css';
import './config';
import '../../src/script';
import { onDomLoaded } from '../../src/utils';
import { createMap } from '../../src/ngwMap';

onDomLoaded(function () {
  // var url = 'http://127.0.0.1:5500/conferences/ultramafite/data/header.jpg';
  var url = 'https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/ultramafite/data/header.jpg'
  var hero = document.getElementsByClassName('hero')[0];
  var img = new Image();
  img.src = url;
  // Once image is loaded replace the src of the HTML element
  img.onload = function() {
    var background = "linear-gradient(to top right, #524ad0 10%, #D099FA), url('" + url + "')";
    hero.style.backgroundImage = background;
  };

})

var baseUrl = 'http://geonote.nextgis.com';
var _createMap = function () {
  createMap({
    geojson: 'https://raw.githubusercontent.com/rendrom/petro2020/master/conferences/ultramafite/data/place.geojson',

    ngwMapOptions: {
      center: [106.878039, 53.023219],
      zoom: 16,
      // baseUrl: 'https://demo.nextgis.com',
      baseUrl: baseUrl,
      resources: [
        {
          // resourceId: 4248,
          resourceId: 20,
          id: 'points',
          selectable: true,
          paint: { color: '#524ad0', radius: 6, opacity: 0.6, stroke: true, strokeColor: 'white', strokeOpacity: 1 },
          selectedPaint: { color: '#524ad0', radius: 8, opacity: 1, stroke: true, strokeColor: 'white', strokeOpacity: 1 }
        }
      ],
      pitch: 45,
      bearing: -17.6,
    }
  }, onMap);

  function onMap(map, ngwMap) {
    ngwMap.emitter.on('layer:click', function (e) {
      hideInfo();
      if (ngwMap) {
        var vectorLayer = ngwMap.getLayer('points');

        if (vectorLayer.getSelected && e.layer.id === vectorLayer.id) {
          var selected = vectorLayer.getSelected();
          var feature = selected[0].feature;
          ngwMap.connector.get('feature_layer.feature.item', null, { fid: feature.id, id: vectorLayer.options.resourceId }).then(function (x) {
            console.log(x);
            showInfo(x, vectorLayer.options.resourceId, feature.id);
          });
        }
      }
    });

    var infoPanel = document.createElement('div');

    var hideInfo = function () {
      infoPanel.innerHTML = '';
    }

    var showInfo = function (item, resourceId, featureId) {

      var html = '<div class="box info-panel">' +
        '<div>Точка №' + item.fields.name + '</div>';
      if (item.fields.rock) {
        html += '<div>Порода: ' + item.fields.rock + '</div>'
      }
      if (item.extensions && item.extensions.attachment) {
        for (var fry = 0; fry < item.extensions.attachment.length; fry++) {
          var img = item.extensions.attachment[fry];
          const url = getImageUrl(img, resourceId, featureId, 128, 128);
          var figure = '<figure class="image is-128x72">' +
            '<img src="' + url + '">' +
            '</figure>';
          html += figure;
        }
      }
      html += '</div>';
      infoPanel.innerHTML = html;
    }

    var getImageUrl = function (img, resourceId, featureId, width, height) {
      const url = baseUrl + '/api/resource/' +
        resourceId + '/feature/' + featureId +
        '/attachment/' + img.id + '/image' +
        ((width && height) ? '?size=' + width + 'x' + height : '');
      return url;
    }

    var infoPanelControl = ngwMap.createControl({
      onAdd: function () {
        return infoPanel;
      }
    }, { margin: true });

    ngwMap.addControl(infoPanelControl, 'top-right');
  }
}

if (window.location.pathname.indexOf('/place') !== -1) {
  onDomLoaded(_createMap);
}
// onDomLoaded(_createMap);
