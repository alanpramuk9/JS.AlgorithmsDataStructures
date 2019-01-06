/*
  Determine if a target string is the last character sequence of a given string
    Ex. string: "World", target: "ld"
      returns true because 'ld' is the last 2 characters of world
*/

//1. simple solution
function confirmEnding(str, target) {
    let temp = str.length -1;
    return str[temp] == target ? true : false;
  }
  
console.log(confirmEnding("elevation", 'n')) //true. the last letter is 'n'


//2. Allows for you to check for a target string greater than just one character 
function confirmEnding3(str, target) {
    let tempTarget = target.length;
    let temp = str.length;
    let start = temp - tempTarget; //character index to start checking target against
    let solution = str.slice(start, temp);
    return solution == target ? true : false;
  }
 console.log(confirmEnding3("Bastian", "ian")) //true



//shorter solution 
function confirmEnding2(str, target) {
    //console.log(str.slice(-target.length)); //this works too
    return str.slice(str.length - target.length) === target;
  }

 console.log(confirmEnding2("Bastian", "ian"))

