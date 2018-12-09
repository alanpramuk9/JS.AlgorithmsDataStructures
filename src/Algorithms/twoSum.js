/*
    Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once
        Example: twoSum([1, 2, 2, 3, 4], 4)  ----> [[2, 2], [3, 1]]
*/


//nested loops that check each number against every other number in the same array. 
//Those that add up to the given sum can be pushed to a solution array as pairs. 
//However, this nesting causes a quadratic time complexity O(n^2)
function twoSumBad(arr, S) {
    var sums = [];
    for (var i = 0; i < arr.length; i++) {
        // check each other element in the array
        for (var j = i + 1; j < arr.length; j++) {
            // determine if these two elements sum to S
            if (arr[i] + arr[j] === S) {
                sums.push([arr[i], arr[j]]);
            }
        }
    }
    return sums;
}

//trick is to maintain an array that contains the “counterpart” of each number when iterating 
//through the input array, while simultaneously checking for the existence of each number’s counterpart
//hash table has constant lookup time
const twoSum = (array, sum) => {
    const pairs = [];
    const hashTable = [];

    for (let part1 of array) {
        const part2 = sum - part1;
        if (hashTable.indexOf(part2) !== -1) {
            pairs.push([part1, part2]);
        }
        hashTable.push(part1);
    }

    return pairs;
};

console.log(twoSum([1, 2, 2, 3, 4], 4)); //[[2, 2], [3, 1]]


