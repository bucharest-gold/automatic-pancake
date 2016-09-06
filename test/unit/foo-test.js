'use strict';

const test = require('tape');
const afoo = require('../../lib/foo');

test('Should foo', t => {
  t.equal(afoo.foo(), 'foo');
  t.end();
});
