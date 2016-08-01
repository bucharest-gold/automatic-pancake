'use strict';

const test = require('tape');
const a = require('../lib/a');

module.exports = () => {
  test('A should a', t => {
    t.equal(a(), 'a');
    t.end();
  });
}