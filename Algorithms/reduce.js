/* LETS GET FAMILIAR WITH REDUCE */

//1. Count the number of times a name is in an array
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var numbers = [2,5,10];
var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames); // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


//2. sum the values of an array
let sum = numbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0)
console.log(sum); //17

//the the values in an object array
var initialValue = 0;
var sumObject = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sumObject) // logs 6


//3. flatten an array of arrays
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
    },
    []
  );
//flattened is [0, 1, 2, 3, 4, 5]


//4. grouping objects by people
var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  
  var groupedPeople = groupBy(people, 'age');
  // groupedPeople is:
  // { 
  //   20: [
  //     { name: 'Max', age: 20 }, 
  //     { name: 'Jane', age: 20 }
  //   ], 
  //   21: [{ name: 'Alice', age: 21 }] 
  // }



//5. removing duplicate items in an array
let arr = ['a', 'b', 'a', 'b', 'c', 'e', 'd', 'e', 'c', 'd', 'd', 'd', 'd'];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length;
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(result); //['a','b','c','d','e']