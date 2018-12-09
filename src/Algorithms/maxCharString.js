/*
    Find the character that appears most often in a string
*/

//
const max = string => {
    const characters = {};

    for (let character of string) {
        if(characters[character]){
            characters[character]++;
        }else{
            characters[character] = 1;
        }
    }
    //console.log(characters); // { H: 1, e: 1, l: 2, o: 1 }
    let maxCount = 0;
    let maxCharacter = null;

    for (let character in characters) {
        if (characters[character] > maxCount) {
            maxCount = characters[character];
            maxCharacter = character;
        }
    }

    return maxCharacter;
};

console.log(max("Hello")); // l

//functional way
function getMostRepeatedCharacter(string) {
    return string.split('').reduce((acc,char)=>{
        let len = string.split(char).length - 1;
        return len > acc[1] ? [char,len] : acc
    },['',0])[0]
}

console.log(getMostRepeatedCharacter('wediuaududddd')); //x


//using map and object
function solution(N) {
    var textToArr = N.split('');
    var newObj = {};
    var newArr = [];

    textToArr.map((letter) => {
        if(letter in newObj){
            newObj[letter] = newObj[letter]+1;
        } else {
            if(letter !== ' '){
               newObj = Object.assign(newObj, {[letter]: 1})
            }
        }
    });

    for(let i in newObj){
        newArr.push({name: i, value: newObj[i]})
    }

    var res = newArr.sort((a,b) => b.value-a.value)[0];
    return res.name+':'+res.value
}

solution("hello world");



//future tests 
// describe("Max Character", () => {
//     it("Should return max character", () => {
//      assert.equal(max("Hello World!"), "l");
//     });
//    });