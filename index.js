'use strict';

module.exports = {
  startServer: startServer,
  pull: pull
}

const test = require('tape'),
  spawn = require('child_process').spawn,
  spawnSync = require('child_process').spawnSync,
  path = require('path'),
  fs = require('fs');

function pull(image) {
  spawnSync('docker', ['pull', image], { stdio: ['ignore', null, null] });
}

function startServer (command, arrayArgs, breakText) {
  const server = spawn(command, arrayArgs, { stdio: ['ignore', null, null] });

  console.log('Server PID', server.pid);

  server.stdout.on('data', (b) => {
    console.log(b.toString());
    if (b.includes(breakText)) {
      console.log('Starting tests...');
      runTests(server);
    }
  });
  server.on('error', (e) => {
    console.log('WTF an error', e);
    server.kill();
    process.exit();
  });
}

function runTests (server) {
  Promise.all(testFiles().map(f => {
    return Promise.resolve(require(path.join(process.cwd(), 'test', f))());
  })).then(() => {
    server.kill();
  });
}

function testFiles () {
  const files = fs.readdirSync('./test');
  return files.filter((f) => f.substr(-8) === '-test.js');
}
