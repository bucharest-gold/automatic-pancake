/* jslint esversion: 6 */
/* jshint node: true   */
/* author: Lance Ball */

'use strict';

const test = require('tape'),
  spawn = require('child_process').spawn,
  path = require('path'),
  fs = require('fs'),
  files = testFiles();

// Uncomment this for local development
// runTests();

// Comment this out for local development
startServer(runTests);

function startServer(f) {
  const server = spawn('java', ['-jar', '-Djava.net.preferIPv4Stack=true', 'keycloak-1.0.0.Beta7-swarm.jar'], { stdio: ['ignore', null, null] });

  console.log("Server PID", server.pid);
  server.stdout.on('data', (b) => {
    console.log(b.toString());
    if (b.includes('services are lazy, passive or on-demand')) {
      console.log('Starting tests...');
      f(server);
    }
  });
  server.on('error', (e) => {
    console.log('WTF an error', e);
    server.kill();
    process.exit();
  });
}

function runTests(server) {

  var p = Promise.all(files.map((f) => {
    return Promise.resolve(require(path.join(process.cwd(), 'test', f)));
  }));
  
  p.then(()=> {
     server.kill();  
  });

}

// Name all test files with a -test suffix. E.g. foo-test.js
function testFiles() {
  let files = fs.readdirSync('./test');
  return files.filter((f) => f.substr(-8) === '-test.js');
}

