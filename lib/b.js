'use strict';

let http = require('http');

let b = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      const body = [];
      response.on('data', (chunk) => body.push(chunk));
      response.on('end', () => resolve(body.join('')));
    })
    .on('error', (error) => reject(error));
  });
};

module.exports = b;
