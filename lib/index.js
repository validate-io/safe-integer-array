'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isSafeInteger = require( 'validate.io-safe-integer' );


// IS SAFE INTEGER ARRAY //

/**
* FUNCTION: isSafeIntegerArray( value )
*	Validates if a value is an array of safe integers.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an array of safe integers
*/
function isSafeIntegerArray( value ) {
	var len;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		if ( !isSafeInteger( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isSafeIntegerArray()


// EXPORTS //

module.exports = isSafeIntegerArray;

