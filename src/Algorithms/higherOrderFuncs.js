/*
    NATIVELY support implement map,filter,reduce functionality  
*/


// the global Array
var s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback){
  var newArray = [];
  this.forEach(a => newArray.push(callback(a)));
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s);

//Filter with for loop
var d = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  for (let i=0; i<this.length;i++){
    if(callback(this[i])=== true ){
 newArray.push(this[i]);
    }
  }
  // Add your code above this line
  return newArray;

};

var new_d = d.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_d);

//filter with a forEach loop
// the global Array
var dd = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  })
  // Add your code above this line
  return newArray;

};