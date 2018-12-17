//1. simple solution
function confirmEnding(str, target) {
    let temp = str.length -1;
    return str[temp] == target ? true : false;
  }
  

//2. 
function confirmEnding3(str, target) {
    let tempTarget = target.length;
    let temp = str.length;
    let start = temp - tempTarget;
    let solution = str.slice(start, temp);
    //console.log(solution);
    return solution == target ? true : false;
  }
  console.log(confirmEnding3("Bastian", "ian")) //true



//shorter solution 
function confirmEnding2(str, target) {
    //console.log(str.slice(-target.length)); //this works too
    return str.slice(str.length - target.length) === target;
  }

  console.log(confirmEnding2("Bastian", "ian"))

