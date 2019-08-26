import { loadJs, loadCss } from './utils';
import './calendar.css';

export function createCalendar(options, onCreate) {


  loadJs('https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.js');

  loadCss('https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.css');

  var intervalId = setInterval(function () {
    if (window.Calendar) {
      loadJs('https://unpkg.com/js-year-calendar@latest/locales/js-year-calendar.ru.js');
    }
    if (window.Calendar && window.Calendar.locales.ru) {
      _init(options, onCreate);
      clearInterval(intervalId);
    }
  }, 10)
}

function _init(options, onCreate) {
  var elem = document.getElementById('extra');
  options = options || {};
  options.language = 'ru';
  var calendar = new window.Calendar(elem, options)
  if (onCreate) {
    onCreate(calendar);
  }
}

