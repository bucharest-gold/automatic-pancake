'use strict';

const roi = require('roi');

module.exports = {
  bar: bar
};

function bar (url) {
  const options = {
    'endpoint': 'http://bucharest-gold.github.io/fidelity'
  };

  return roi.get(options);
}
