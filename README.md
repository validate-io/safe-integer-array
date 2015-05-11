Safe Integer Array
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an array of [safe integers](http://www.2ality.com/2013/10/safe-integers.html).


## Installation

``` bash
$ npm install validate.io-safe-integer-array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isSafeIntegerArray = require( 'validate.io-safe-integer-array' );
```

#### isSafeIntegerArray( value )

Validates if a value is an `array` of [safe integers](http://www.2ality.com/2013/10/safe-integers.html).

``` javascript
var bool = isSafeIntegerArray( [ -1, 0, 1 ] );
// returns true
```

__Note__: the method will return `false` for an empty `array`.


## Examples

``` javascript
var isSafeIntegerArray = require( 'validate.io-safe-integer-array' );

console.log( isSafeIntegerArray( [ 1, 5, 3 ] ) );
// returns true

console.log( isSafeIntegerArray( [ 1, Math.pow(2,53)-1, 3 ] ) );
// returns true

console.log( isSafeIntegerArray( [ 1, Math.pow(2,53), 3 ] ) );
// returns false

console.log( isSafeIntegerArray( [] ) );
// returns false

console.log( isSafeIntegerArray( [ '1', '2', '3' ] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-safe-integer-array.svg
[npm-url]: https://npmjs.org/package/validate.io-safe-integer-array

[travis-image]: http://img.shields.io/travis/validate-io/safe-integer-array/master.svg
[travis-url]: https://travis-ci.org/validate-io/safe-integer-array

[coveralls-image]: https://img.shields.io/coveralls/validate-io/safe-integer-array/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/safe-integer-array?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/safe-integer-array.svg
[dependencies-url]: https://david-dm.org/validate-io/safe-integer-array

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/safe-integer-array.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/safe-integer-array

[github-issues-image]: http://img.shields.io/github/issues/validate-io/safe-integer-array.svg
[github-issues-url]: https://github.com/validate-io/safe-integer-array/issues
