function mutation(arr) {
    let x = arr[0].toLowerCase();
    let y = arr[1].toLowerCase();
    for(let s =0; s < y.length; s++) {
        if(x.includes(y[s]) !== true) {
            return false
        }
         // console.log(x.includes(y[s])
    }
    return true;
  }
  
  //mutation(["hello", "hey"]);// flase
  //mutation(["hello", "Hello"]);//true
  console.log(mutation(["Mary", "Army"]));// true
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));// true
  console.log(mutation(["hello", "hey"]));// true


  //2. intermediate solution 
  function mutation2(arr) {
    return arr[1].toLowerCase()
      .split('')
      .every(function(letter) {
        return arr[0].toLowerCase()
          .indexOf(letter) != -1;
      });
  }

  console.log(mutation2(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));// true
  console.log(mutation2(["hello", "hey"]));// true

//   let matchedArray = x.filter(function(val){
//     console.log(val);
//     return val.includes(x[s]) == true;
//     //return 
// })
// console.log(x.includes(y));
// return matchedArray ;