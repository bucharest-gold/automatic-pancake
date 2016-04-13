/* jslint esversion: 6 */
/* jshint node: true   */

'use strict';

let test = require('tape');
let b = require('../lib/b');

test('B should b', (expect) => {

  b('http://localhost:8080/auth/')
  .then((data) => expect.equal(data.indexOf('Welcome to Keycloak') > 0, true), expect.end())
  .catch((error) => console.log(error));
  
  //test.end();
  test.onFinish(() => {
    console.log('Test with ---> promise <--- finished.');
  });

});