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
    console.log(newString);
    return newString;
  }
  
  console.log(reverseString("Greetings from Earth"));
  

//easy way
function reverseString10(str) {
    return str.split('').reverse().join('');
}

function reverseStringTwo(str) {
    
}