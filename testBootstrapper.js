if (typeof window === 'undefined') {
  global.document = require('jsdom').jsdom('<!doctype html><html><body></body></html>');
  global.window = document.defaultView;
  global.navigator = window.navigator;
}
