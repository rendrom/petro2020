import { loadJs, loadCss, detectLanguage } from './utils';

import './calendar.css';

export function createCalendar(options, onCreate) {


  loadJs('https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.js');
  loadCss('https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.css');

  loadJs('https://unpkg.com/popper.js@1');

  var intervalId = setInterval(function () {
    if (window.Calendar) {
      loadJs('https://unpkg.com/js-year-calendar@latest/locales/js-year-calendar.ru.js');
    }
    if (window.Popper) {
      loadJs('https://unpkg.com/tippy.js@4');
    }
    if (window.Calendar && window.Calendar.locales.ru && window.Popper) {
      _init(options, onCreate);
      clearInterval(intervalId);
    }
  }, 10)
}

function _init(options, onCreate) {
  var elem = document.getElementById('extra');
  options = options || {};
  options.language = detectLanguage();

  options.mouseOnDay = options.mouseOnDay || function (e) {
    if (e.events.length > 0) {
      var html = '';

      for (var fry = 0; fry < e.events.length; fry++) {
        var event = e.events[fry];
        html += '<div class="event-tooltip-content">'
          + '<div class="event-name" style="color:' + event.color + '">' + event.name + '</div>'
          + '</div>';
      }
      var tooltip = window.tippy(e.element);
      if (tooltip) {
        tooltip.set({
          content: html,
          arrow: true,
          followCursor: true,
          theme: 'light',
          animateFill: false,
          duration: 0,
          delay: [0, 10]
        });
        tooltip.show();
      }
    }
  };

  var calendar = new window.Calendar(elem, options)
  if (onCreate) {
    onCreate(calendar);
  }
}

