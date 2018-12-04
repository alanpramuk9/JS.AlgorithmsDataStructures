/*
    Assumes that array is divided in two parts:
        -Sorted (Initially the first elemen)
        -Unsorted
    To Do: 
        -Each pass, we select an element, and check it against the sorted array.
        -If the selected element is smaller than the last element of the sorted array then we shift 
        the sorted array by 1 until we find the spot to insert the selected element

    Time Complexity: quadratic time complexity in the average and worst cases.
*/

function insertionSort(array) {
    for (let i = 1; i < array.length; i++){
        let curr = array[i];
        for (var j = i-1; j >= 0 && array[j] > curr; j--){
          array[j+1] = array[j];
        }
        array[j+1] = curr;
      }
      return array;

}

console.log(insertionSort([1,5,7,3,4]))