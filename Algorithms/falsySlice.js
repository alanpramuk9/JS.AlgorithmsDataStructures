/*
    return the truthy values of an array
        -because of JavaScript's type coersion, items like 0, Nan, undefined, "" are falsy
*/


function bouncer(arr) {
    let newestArray = [];
    for(let x =0; x < arr.length; x++) {
        if(Boolean(arr[x]) === true) {
            newestArray.push(arr[x])
        }
    }
    return newestArray;
  }
  
  //great way to do it
  function bouncer2(arr) {
      let bouncing = arr.filter(function(val){
          return Boolean(val) === true;
      })
      return bouncing;

  }

  console.log(bouncer2([7, "ate", "",undefined, 0, 1, NaN, false, ])); //[ 7, 'ate', 1 ]