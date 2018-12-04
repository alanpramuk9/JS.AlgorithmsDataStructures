/*
    Best for already sorted array

*/

const doSearch = function(array, targetValue) {
    var min = 0; 
    var max = array.length -1;
    var guess = Math.floor((min + max) /2);
    while(array[guess] !== targetValue) {
        if(array[guess] === targetValue) {
            return guess;
        }
        else if(array[guess] < targetValue) {
            // min = array[guess];
             min = guess + 1;
             guess = Math.floor((min + max) /2);
        }
        else if(array[guess] > targetValue) {
            max = guess -1;
            guess = Math.floor((min + max) /2);
        }
        
        else if (min > max) {
            return -1;
        }
    }
    return guess;
}

//GUESS VARIABLE ISNT CHANGING
// const doSearch = function(array, targetValue) {
//     var min = 0; 
//     var max = array.length -1;
//     var guess = Math.floor((min + max) /2);
//     while(array[guess] !== targetValue) {
//         if(array[guess] === targetValue) {
//             return guess;
//         }
//         else if(array[guess] < targetValue) {
//             // min = array[guess];
//              min = guess + 1;
//         }
//         else if(array[guess] > targetValue) {
//             max = guess -1;
//         }
        
//         else if (min > max) {
//             return -1;
//         }
//     }
//     return -1;
// }


//returns too early from if else statements
// const doSearch = function(array, targetValue) {
//     var min = 0; 
//     var max = array.length -1;
//     var guess = Math.floor((min + max) /2);
//     while(array[guess] !== targetValue) {
//         if(array[guess] === targetValue) {
//             return guess;
//         }
//         else if(array[guess] < targetValue) {
//             // min = array[guess];
//             return min = guess + 1;
//         }
//         else if(array[guess] > targetValue) {
//             return max = guess -1;
//         }
        
//         else if (min > max) {
//             return -1;
//         }
//     }
//     return -1;
// }


var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log("Found prime at index " + result);