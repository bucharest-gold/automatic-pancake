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
  //const server = spawn('java', ['-jar','-Djava.net.preferIPv4Stack=true','keycloak-1.0.0.Alpha8-swarm.jar'], { stdio: ['ignore', null, null] });
  const server = spawn('sh', ['keycloak-1.9.1.Final/bin/standalone.sh'], { stdio: ['ignore', null, null] });
  
  console.log("Server PID", server.pid);
  server.stdout.on('data', (b) => {
    console.log(b.toString());
    if (b.includes('Admin console listening on')) {
      console.log('Starting tests...');
      f();
    }
  });
  server.on('error', (e) => {
    console.log('WTF an error', e);
    server.kill();
    process.exit();
  });
}

function runTests() {
  files.map((f) => {
    console.log('Executing', f);
    require(path.join(process.cwd(), 'test', f));
  });
}

// Name all test files with a -test suffix. E.g. foo-test.js
function testFiles() {
  let files = fs.readdirSync('./test');
  return files.filter((f) => {
    return f.substr(-8) === '-test.js';
  });
}