/* 
  Find the longest word in a string
    Ex. "I love JavaScript"
      returns 'JavaScript'
*/



//1. returns the length of the longest word
function findLongestWordLength(str) {
    let newArray = str.split(" "); //takes the string and convert it into an array of words
    let longestWord = 0;
    let index = 0;
    for(let i =0; i < newArray.length; i++) {
        let x = newArray[i].length; //this is the length of the word being iterated over
        if (x > longestWord) {
            longestWord = x;
            index = i; //just in case we want to grab index later of the word in the array later;
        }
    }
    //return the word not the length of the longest word
    let stringWord = newArray[index];
    return stringWord;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //jumped


//2a USING REDUCE 
function findLongestWord2(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
console.log(findLongestWord2("The quick brown fox jumped over the lazy dog"));

//2b. USING REDUCE and Math.max
function findLongestWordLength2(s) {
    return s.split(' ')
      .reduce(function(longest, currentWord) {
        //returns the length of the longest word
        return Math.max(longest, currentWord.length)
      }, 0); //gives the initial value of x to 0 so that Math.max knows where to start
}
console.log(findLongestWordLength2("The quick brown fox jumped over the lazy dog")); //6


//3. USING RECURSION
function findLongestWordLength3(str) {
    //split the string into individual words 
    str = str.split(" ");
  
    //str only has 1 element left that is the longest element, 
    //return the length of that element
    if(str.length == 1){
      return str[0].length;
    }
  
    //if the first element's length is greater than the second element's (or equal) 
    //remove the second element and recursively call the function)
    if(str[0].length >= str[1].length){
      str.splice(1,1);
      return findLongestWordLength(str.join(" "));
    }
  
    //if the second element's length is greater thant the first element's start 
    //call the function past the first element 
    if(str[0].length <= str[1].length){
      // from the first element to the last element inclusive.
      return findLongestWordLength(str.slice(1,str.length).join(" "));
    }
  }
  console.log(findLongestWordLength3("The quick brown fox jumped over the lazy dog"));


//4. Could also use Sort() method
function findLongestWord4(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
console.log(findLongestWord4("The quick brown fox jumped over the lazy dog"));