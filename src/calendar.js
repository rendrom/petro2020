import { loadJs, loadCss } from './utils';
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
  options.language = 'ru';

  options.mouseOnDay = options.mouseOnDay || function (e) {
    if (e.events.length > 0) {
      var content = '';

      for (var i in e.events) {
        content += '<div class="event-tooltip-content">'
          + '<div class="event-name" style="color:' + e.events[i].color + '">' + e.events[i].name + '</div>'
          + '</div>';
      }
      var tooltip = window.tippy(e.element);
      if (tooltip) {
        tooltip.set({
          content: content,
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

