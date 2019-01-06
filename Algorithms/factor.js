/*
  Return the factorial of the provided integer, n
    -a factorial is the product of all positive integers less than or equal to n.
    -Ex. Factorialize 5
       = 5 * 4 * 3 * 2 * 1
*/

//1. Iterative approach
function factorialize(num) {
  //watch out for edge cases where number is 0 or 1
  if (num === 0 || num === 1)
    return 1;
  let product = 1;
  for (let x = 1; x <= num; x++) {
    product *= x;
    //console.log(product); shows the sum of the products through each iteration
  }
  return product;
}
console.log(factorialize(3)); //6 

//2. Recursive approach
function factorRecursion(num) {
  if(num === 0) 
    return 1 //important to prevent infinite loop
  return num * factorRecursion(num-1);
}

console.log(factorRecursion(4)); //24 