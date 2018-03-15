'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nocss = require('./nocss');

Object.keys(_nocss).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _nocss[key];
    }
  });
});

require('bulma/css/bulma.css');