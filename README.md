# automatic-pancake

[![Build Status](https://travis-ci.org/bucharest-gold/automatic-pancake.svg?branch=master)](https://travis-ci.org/bucharest-gold/automatic-pancake)
[![dependencies Status](https://david-dm.org/bucharest-gold/automatic-pancake/status.svg)](https://david-dm.org/bucharest-gold/automatic-pancake)

A kind of blank project.

|                 | Project Info  |
| --------------- | ------------- |
| License:        | Apache-2.0 |
| Build:          | make |
| Documentation:  | N/A |
| Issue tracker:  | https://github.com/bucharest-gold/automatic-pancake/issues |
| Engines:        | Node.js 4.x, 5.x, 6.x |

## Usage

```
node index.js
```

## Running unit tests

```
make test
```

## Running integration tests

```
./scripts/start-server.sh
make integration
./scripts/stop-server.sh
```

## Running all tests

```
./scripts/start-server.sh
make ci
./scripts/stop-server.sh
```
