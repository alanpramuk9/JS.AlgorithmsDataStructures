let countdownFrom = num => {
    if(num===0) {return 0};
    countdownFrom(num-1);
}

console.log(countdownFrom(10));

/*
    Repeat a given string str (first argument) for num times (second argument). 
    Return an empty string if num is not a positive number

*/
function repeatStringNumTimes(str, num) {
    if(num < 0)
      return "";
    if(num === 1)
      return str;
    else
      return str + repeatStringNumTimes(str, num - 1);
  }

//find all the occurances of an element
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]