'use strict';

const test = require('tape');
const b = require('../lib/b');

test('B should b', t => {
  b('http://localhost:8080/apiman')
    .then(x => {
      console.log(x);
      t.equal(JSON.parse(x).name, 'API Manager REST API');
      t.end();
    })
    .catch(e => {
      console.error(e);
      t.fail();
    });
});

module.exports = () => {
  return new Promise((resolve, reject) => {
    test.onFinish(resolve);
  });
};
