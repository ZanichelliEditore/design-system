'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var library = require('./dist/index.js');

Object.keys(library).forEach(function (key) {
  if (key === 'default' || key === '__esModule') {
    return;
  }
  if (key in exports && exports[key] === library[key]) {
    return;
  }
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return library[key];
    },
  });
});
