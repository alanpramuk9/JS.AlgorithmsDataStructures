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

  console.log(bouncer2([7, "ate", "", false, 9]));