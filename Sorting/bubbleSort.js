/*
    TO DO: Write a function bubbleSort which takes an array of integers as input and returns 
        an array of these integers in sorted order from least to greatest
    Time Complexity: O(n^2)
    HOW IT WORKS: 
        -starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted
            - comparing adjacent items and swapping them if they are out of order
        -The method continues looping through the array until no swaps occur at which point the array is sorted
    
    Compare each element to the one ahead of it, if the element before is smaller, we swap their places
*/

function bubbleSort(array) {
    for(let i =0; i < array.length; i++) {
        for(let j =0; j<array.length-1-i; j++) { //// -i because the largest element will be bubbled at the end so we don't have to compare
            if(array[j] > array[j+1]) {
                swap(j, j+1, array);
            }
        }
    }
    return array
}

function swap(a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

console.log(bubbleSort([3,6,5,2,1]));


//ARRAY DESTRUCTURING
function bubbleSort2(array) {
    for (let i = 0; i < array.length; i++){
      for (let j = 0; j < array.length-1-i; j++){
        if (array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]]; // Using ES6 array destructuring to swap
      }
    }
    return array;
  }
  console.log(bubbleSort2([3,6,5,2,1]));