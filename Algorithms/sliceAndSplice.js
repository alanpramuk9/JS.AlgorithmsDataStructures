function frankenSplice(arr1, arr2, n) {
    let x = arr1.slice(0);
    let shortArray = arr2.slice(0, n); //4
    let afterArray = arr2.slice(n); //5, 6
    let newArray = shortArray.concat(arr1, afterArray);
    console.log(newArray);
    return newArray;
  }
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


//another solution
function frankenSplice2(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      console.log(localArray);
      n++;
    }
    return localArray;
}

console.log(frankenSplice2([1, 2, 3], [4, 5, 6], 1));