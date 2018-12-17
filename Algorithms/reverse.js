/*
    Reverse a string
*/

let reverse = [];

function reverseString(str) {
    //converts a string to an array
    let tempArray = str.split('');
    let newArray =[];
    let arrayLength = tempArray.length;
    for (let xx = 0; xx < arrayLength; xx++ ) {
        let x = tempArray.pop();
        newArray.push(x);
    }
    let newString = newArray.join('');
    return newString;
  }
  console.log(reverseString("Greetings from Earth")); //htraE morf sgniteerG
  

//with builtin JS methods
function reverseString10(str) {
    return str.split('').reverse().join('');
}

//adding current letter being looped to beginning of accumulated result
const reverse3 = string => {
    let result = "";
    for (let character of string) {
        result = character + result;
    }
    return result;
};

console.log(reverse3("My name")); //eman yM

//using reduce
reverse.reverse4 = string => {
    return string.split("").reduce((result, character) => character + result);
}
console.log(reverse.reverse4("Dog")); //goD

//could also loop through the string backwards and store result in temporary variable
const reverse5 = string => {
    const wordsReversed = [];

    string.split(" ").forEach(word => {
        let wordReversed = "";
        for (let i = word.length - 1; i >= 0; i--) {
            wordReversed += word[i];
        }
        wordsReversed.push(wordReversed);
    });

    return wordsReversed.join(" ");
};

console.log(reverse5("Alan")) //nalA

module.exports = reverse; //export modules to allow test script to use functions 


/*
    Let's elegantly reverse an array now. 
        -simply loop through one half of the array and swap the beginning with the end
*/

const reverseArray = array => {
    for (let i = 0; i < array.length / 2; i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
};

console.log('Reversed array', reverseArray([1,2,3]));

//can use destructuring assignment with array matching to circumvent temporarily storing one of the items in memory
const reverseArray2 = array => {
    for (let i = 0; i < array.length / 2; i++) {
        [array[i], array[array.length - 1 - i]] = [
            array[array.length - 1 - i],
            array[i]
        ];
    }
    return array;
};

console.log(reverseArray2([1,2,3]));