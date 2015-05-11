/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isSafeIntegerArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-safe-integer-array', function tests() {

	it( 'should export a function', function test() {
		expect( isSafeIntegerArray ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isSafeIntegerArray( [1,2,3] );
		assert.ok( bool, 'primitive array' );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			function(){},
			[],
			{},
			['1','2','3'],
			[1,'2',3],
			[[],[]],
			[Math.pow( 2, 53 )]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isSafeIntegerArray( value );
		}
	});

});
