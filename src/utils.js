export var onDomLoaded;
export var ALLOWED_LANGUAGES = ['ru', 'en'];
export var LANGUAGE = 'ru';

if (window.Tapestry) {
  onDomLoaded = window.Tapestry.onDOMLoaded;
} else {
  onDomLoaded = function (fun) {
    document.addEventListener('DOMContentLoaded', fun);
  };
}

export function detectLanguage() {
  var switcherLink = document.getElementById('js-language-switcher');
  if (switcherLink) {
    LANGUAGE = switcherLink.href.indexOf(':ru') !== -1 ? 'en' : 'ru';
  }

  return LANGUAGE;
}

export function loadCss(href) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  var links = document.head.getElementsByTagName('link');
  document.head.insertBefore(link, links[0]);
}

export function loadJs(src) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  document.head.appendChild(script);
}

export function addMeta(name, content) {
  var meta = document.createElement('meta');
  meta.name = name;
  meta.content = content;
  document.head.appendChild(meta);
}
