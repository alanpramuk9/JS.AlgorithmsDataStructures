/*
    Given an array and a size, split the array items into a list of arrays of the given size.
        For example: chunk([1, 2, 3, 4], 2  ----> [[1, 2], [3, 4]]  
                     chunk([1, 2, 3, 4], 3) ----> [[1, 2, 3], [4]]
*/

//1.
function chunkArrayInGroups(arr, size) {
    let newArray = [];
    while(arr.length >= size) {
        let split = arr.splice(0, size);
        newArray.push(split);
    }
    if(arr.length != 0) {
        newArray.push(arr);
    }
    
    return newArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //[ [ 0, 1, 2, 3 ], [ 4, 5 ] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //[ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]

//2.
const chunk = (array, size) => {
    const chunks = [];
    let index = 0;

    while (index < array.length) {
        chunks.push(array.slice(index, index + size));
        index += size;
    }
    return chunks;
};

console.log(chunk([0, 1, 2, 3, 4, 5], 4)); //[ [ 0, 1, 2, 3 ], [ 4, 5 ] ]

//3,
//less elegant: keep a reference to the last “chunk” and check its size as we loop through the array items
const chunker = (array, size) => {
    const chunks = [];

    for (let item of array) {
        const lastChunk = chunks[chunks.length - 1];
        if (!lastChunk || lastChunk.length === size) {
            chunks.push([item]);
        } 
        else lastChunk.push(item);
    }
    return chunks;
};
console.log(chunker([0, 1, 2, 3, 4, 5], 4)); //[ [ 0, 1, 2, 3 ], [ 4, 5 ] ]


//future tests 
// describe("Array Chunking", () => {
//     it("Should implement array chunking", () => {
//         assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
//         assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
//         assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
//     })
// })