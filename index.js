'use strict';

const afoo = require('./lib/foo.js');
const abar = require('./lib/bar.js');

console.log(afoo.foo());

abar.bar()
.then(x => console.log(x))
.catch(e => console.log(e));
