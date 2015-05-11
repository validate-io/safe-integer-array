'use strict';

var isSafeIntegerArray = require( './../lib' );

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
