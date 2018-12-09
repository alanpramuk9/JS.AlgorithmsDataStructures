/*
    divide-and-conquer, recursive methodology
    Time Complexity: O(nlog(n))
    Space Complexity: O(n)
    TO DO: 
        1. Recursively split the input array in half until a sub-array with only one element is produced
        2. Merge each sorted sub-array together to produce the final sorted array

        -Divide:  We break the array from the middle using recusion until we’re left with 1 element
        -Conquer: Then we sort these small arrays.
        -Combine: Finally, we merge these small arrays into one sorted array and keep doing it until we combine all the arrays.

        
    Hint: 
        Merge function which is responsible for merging two sorted arrays
        MergeSort function which is responsible for the recursion that produces single-item arrays to feed into merge.

    Resources: 
        Video: https://www.youtube.com/watch?v=KF2j-9iSf4Q

*/


//Merger function, which merges 2 sorted array into 1 sorted array
function merger(arr1, arr2){
    let i = 0, j = 0, mergedArr = [];
    while (i < arr1.length && j < arr2.length){
      if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]);
      else mergedArr.push(arr1[i++]);
    }
    while (i < arr1.length){
      mergedArr.push(arr1[i++]);
    }
    while (j < arr2.length){
      mergedArr.push(arr2[j++]);
    }
    return mergedArr;
  }
  function mergeSort(array) {
    //Array of length 1 is sorted so we return the same array back
    if (array.length == 1) return array;
    
    //Break down the array to half from middle into left and right
    let middle = Math.floor(array.length/2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));  
    
    //Return the merged sorted array
    return merger(left, right);
  }