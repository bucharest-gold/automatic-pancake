'use strict';

const ci = require('./index');

const arrayArgs = [
  'run',
  '-i',
  '-p',
  '8080:8080',
  '-p',
  '8443:8443',
  'apiman/on-wildfly10:1.2.7.Final'
];

ci.pull('apiman/on-wildfly10:1.2.7.Final');

ci.startServer('docker', arrayArgs, 'apiman-es started');
