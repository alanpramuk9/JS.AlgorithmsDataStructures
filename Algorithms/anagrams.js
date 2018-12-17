/*
    Anagrams are words or phrases that contain the same number of characters
    Ex. "Room" and "moor"
*/

/*Approach 1
    -create a character map that tallies the number of characters for each input string.
    -compare the maps to see if they are identical
            Time complexity: linear (O(n + m) bc two different strings are checked)
            Space Complexity: constant
*/

const charCount = string => {
    const table = {};

    for (let char of string.replace(/\W/g, "").toLowerCase()) {  //remove all non-alphabetic characters and spaces and make lowercase too
        if(table[char]){
            table[char]++;
        }else{
            table[char] = 1;
        }
    }
    return table;
};


function anagrams (stringA, stringB)  {
    const charCountA = charCount(stringA); //{ d: 1, o: 2, r: 2, m: 1, i: 1, t: 1, y: 1 }
    const charCountB = charCount(stringB); //{ d: 1, i: 1, r: 2, t: 1, y: 1, o: 2, m: 1 }

    if (Object.keys(charCountA).length !== Object.keys(charCountB).length)
        return false;

    for (let char in charCountA)
        if (charCountA[char] !== charCountB[char]) return false;

    return true;
};

console.log(anagrams("Dormitory", "dirty room")) //true



/* Approach 2 
    -more elegant: simply sort the input strings and then check for equality
        -downside is that sorting usually requires linearithmic time
*/

const sorter = string => string.replace(/\W/g, "").toLowerCase().split("").sort().join("");
const anagrams2 = (stringA, stringB) => sorter(stringA) === sorter(stringB);

console.log(anagrams("Dormitory", "dirty room")) //true

//unrelated. But count the number of vowels
const vowels = string => {
    let count = 0;
    const choices = "aeiou"; // or ['a', 'e', 'i', 'o', 'u']
    
    for (let character of string.toLowerCase()) {
        if (choices.includes(character)) {
             count++;
        }
    }
    return count;
};

console.log(vowels("Hello")); //2
    

//module.exports = {anagrams: anagrams}
export { anagrams};



//future tests
// describe("Anagrams", () => {
//     it("Should implement anagrams", () => {
//      assert.equal(anagrams("hello world", "world hello"), true);
//      assert.equal(anagrams("hellow world", "hello there"), false);
//      assert.equal(anagrams("hellow world", "hello there!"), false);
//     });
//    });
