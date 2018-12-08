let reverse = require('./Algorithms/reverse')

// Require the built in 'assertion' library
var assert = require('assert');
// Create a group of tests about Arrays
describe('String Reversal', function() {
  // Within our Array group, Create a group of tests for indexOf
  describe('reverse4', function() {
    // A string explanation of what we're testing
    it('Should be the string in reverse', function(){
      // Our actual test: -1 should equal indexOf(...)
      assert.equal('oT', reverse.reverse4('To'));
    });
  });
});