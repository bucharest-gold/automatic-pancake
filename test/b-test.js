/* jslint esversion: 6 */
/* jshint node: true   */

'use strict';

let test = require('tape');
let b = require('../lib/b');

test('B should b', (expect) => {

  // b('http://localhost:8080/auth/')
  // .then((data) => expect.equal(data.indexOf('Welcome to Keycloak') > 0, true), expect.end())
  // .catch((error) => console.log(error));

  // the kc-swarm version does a redirect on /auth so just checking the server running...
  let isGood404 = '<html><head><title>Error</title></head><body>404 - Not Found</body></html>';
  b('http://localhost:8080')
    .then((data) => expect.equal(data, isGood404), expect.end())
    .catch((error) => console.log(error));

});