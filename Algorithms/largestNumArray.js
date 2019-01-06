/*
  Return an array consisting of the largest number from each provided sub-array. For simplicity, 
  the provided array will contain exactly 4 sub-arrays.
*/

//1. 
console.time("x"); 
function largestOfFour(arr) {
    let maxNum = [];
    for(let i = 0; i < arr.length; i++){
      let sortedArray = arr[i].sort(function(a,b) {return a-b} );
      //let high = sortedArray.slice(-1);// would create an array of the value at each index
      let high = sortedArray.pop();
      maxNum.push(high); 
    }
    return maxNum;
  }
  
  console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
  console.timeEnd("x");

//2.  alternative approach
  function myArrayMax2(arr) {
    var len = arr.length
    var max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

// // myArrayMax2([-7,1,5,3]);
  console.log(myArrayMax2([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
  
//3. procedural approach
console.time("y");
function largestOfFive(arr) {
    var results = [];
    for (var n = 0; n < arr.length; n++) {
      let largestNumber = arr[n][0];
      for (var sb = 1; sb < arr[n].length; sb++) {
        if (arr[n][sb] > largestNumber) {
          largestNumber = arr[n][sb];
         // console.log('inner', largestNumber);
        }
      }
      results[n] = largestNumber;
    }
    return results;
  }
  
  console.log(largestOfFive([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])) //should return [9, 35, 97, 1000000].
  console.timeEnd("y");


//4. declarative approach
//if the current value is higher than the previous value we set it as the new previous value for 
//comparison with the next item within the array or returns it to the map method callback if it’s 
//the last item
function largestOfSix(arr) {
    return arr.map(function(group){
      return group.reduce(function(prev, current) {
        return (current > prev) ? current : prev;
      });
    });
  }

  console.log(largestOfSix([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])) //should return [9, 35, 97, 1000000].



//advanced example
function largestOfSeven(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
  }
