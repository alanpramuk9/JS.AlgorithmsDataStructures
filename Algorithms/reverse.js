let reverse = [];

function reverseString(str) {
    //converts a string to an array
    let tempArray = str.split('');
    let newArray =[];
    let arrayLength = tempArray.length;
    for (let xx = 0; xx < arrayLength; xx++ ) {
        let x = tempArray.pop();
        //console.log('letter', x);
        newArray.push(x);
        //console.log('value of new array', newArray);
    }
    let newString = newArray.join('');
    return newString;
  }
  
  console.log(reverseString("Greetings from Earth")); //htraE morf sgniteerG
  

//easy way
function reverseString10(str) {
    return str.split('').reverse().join('');
}

function reverseStringTwo(str) {
    
}

const reverse3 = string => {
    let result = "";
    for (let character of string) result = character + result;
    return result;
};

console.log(reverse3("My name")); //eman yM

reverse.reverse4 = string => {
    return string.split("").reduce((result, character) => character + result);
}

console.log(reverse.reverse4("Dog")); //goD


module.exports = reverse;