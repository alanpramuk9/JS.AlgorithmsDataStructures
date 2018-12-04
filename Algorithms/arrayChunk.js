function chunkArrayInGroups(arr, size) {
    let newArray = [];
    while(arr.length >= size) {
        
        let split = arr.splice(0, size);
        //console.log('sdf', i)
        newArray.push(split);
    }
    if(arr.length != 0) {
        newArray.push(arr);
    }
    
    return newArray;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
  