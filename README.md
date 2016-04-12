# automatic-pancake

[![Build Status](https://travis-ci.org/bucharest-gold/automatic-pancake.svg?branch=master)](https://travis-ci.org/bucharest-gold/automatic-pancake)

Focus on ES6 features.

**travis:**

* Starting keycloak on travis-ci via node.
* Running multiple test files with tape.

**local:**
* Using Makefile for automatic lint, tests, coverage.
  

### All tasks - local development:

_keycloak running on port 8080 is required_

```
make
```

### Individual tasks - local development:

```
npm run lint
```

```
npm test
```

```
npm run coverage
```

### CI:

CI will use node instead Makefile.

### Simulating CI tests locally: 

_keycloak on current directory is required_

```
node test-ci.js
```