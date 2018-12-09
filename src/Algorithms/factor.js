/*
  a factorial is the product of all positive integers less than or equal to n
*/

function factorialize(num) {
    let product = 1;
    for(let x = 1; x <= num; x++) {
      product *= x;
      console.log(product);
    }
    
    return product;
  }
  
  //factorialize(5);
  console.log(factorialize(5));

//using recursion
function factorRecursion(num) {
  if(num === 0) {return 1;}
  return num * factorRecursion(num-1);
}

console.log(factorRecursion(5));