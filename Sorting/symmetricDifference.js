/*
    Create a function that takes two or more arrays and returns an array of the 
    symmetric difference (△ or ⊕) of the provided arrays.

    "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both


*/

function sym() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    function symDiff(arrayOne, arrayTwo) {
      var result = [];

      arrayOne.forEach(function(item) {
        if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });

      arrayTwo.forEach(function(item) {
        if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });

      return result;
    }

    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
  }

 
console.log( sym([1, 2, 3], [5, 2, 1, 4]));