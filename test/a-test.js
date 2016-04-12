/* jslint esversion: 6 */
/* jshint node: true   */

'use strict';

let test = require('tape');
let a = require('../lib/a');

test('A should a', (expect) => {

  expect.equal(a(), 'a');
  expect.end();

});