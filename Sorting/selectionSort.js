/*

    Time Complexity: O(n^2) always
    HOW IT WORKS: 
        -selecting the minimum value in a list and swapping it with the first value in the list
        -starts at the second position, selects the smallest value in the remaining list, and swaps it with the second elemen
        -continues iterating through the list and swapping elements until it reaches the end of the list
        
        
*/

function swap(a, b, arr){
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  function selectionSort(array) {
    for (let i = 0; i < array.length-1; i++){
      let min = i;
      for (let j = i+1; j < array.length; j++){
        if (array[min] > array[j]) {
            min = j;
        } 
      }
      swap(i, min, array);
    }
    return array;
}

console.log(selectionSort([5,2,9,3]))