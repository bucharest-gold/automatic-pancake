'use strict';

const test = require('tape');
const abar = require('../../lib/bar');

test('Should bar', t => {
  abar.bar().then(x => {
    t.equal(x.statusCode, 200);
    t.equal(x.body.includes('fidelity'), true);
  })
  .catch(e => {
    console.error(e);
    t.fail();
  });
  t.end();
});
