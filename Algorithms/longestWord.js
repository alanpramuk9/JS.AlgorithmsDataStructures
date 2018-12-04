
//1. returns the length of the longest word
function findLongestWordLength(str) {
    let newArray = str.split(" "); //takes the string and convert it into an array of words
    let longestWord = 0;
    let index = 0;
    for(let i =0; i < newArray.length; i++) {
        let x = newArray[i].length;
        if (x > longestWord) {
            longestWord = x;
            index = i; //so that we can grab index later;
        }
    }
    //return the word not the length of the longest word
    let stringWord = newArray[index];
    return stringWord;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");


//2. USING REDUCE
function findLongestWordLength2(s) {
    return s.split(' ')
      .reduce(function(x, y) {
        return Math.max(x, y.length)
      }, 0); //gives the initial value of x to 0 so that Math.max knows where to start
}
console.log(findLongestWordLength2("The quick brown fox jumped over the lazy dog"));


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