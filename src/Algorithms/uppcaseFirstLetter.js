/*
    Given a sentence, capitalize the first letter of each word
*/

//1. basic solution. MY FAVORITE
function titleCase(str){
    let strArray = str.toLowerCase().split(" ");
    
    let updatedTitle = [];
    for (var x in strArray) {
        updatedTitle[x] = strArray[x].replace(strArray[x].charAt(0), strArray[x].charAt(0).toUpperCase())
    }
    return updatedTitle.join(" ");
}
console.log(titleCase("I'm atalt hEy"));

//2
const titleCaseThree = phrase => {
    const words = [];

    for (let word of phrase.split(" ")) {
        words.push(word[0].toUpperCase() + word.slice(1)); 
    }
    return words.join(" ");
};


//3. solution using map 
function titleCaseTwo(str){
    let strArray = str.toLowerCase().split(" ");
    let newArray = strArray.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    })
    return newArray;
}
console.log(titleCaseTwo("I'm atalt hEy"));


//4. MOST COMPLEX. Changing the prototype of string. Not recommended 
function titleCaseFour(str) {
    let strArray = str.toLowerCase().split(" ");
    let updatedTitle = [];
    for (var x in strArray) {
        updatedTitle[x] = strArray[x].replaceAt(0, strArray[x].charAt(0).toUpperCase())
       
    }
    return updatedTitle.join(" ");
}

String.prototype.replaceAt = function(index, character) {
    //console.log(this.substr(0, index));
    //console.log("character", this.substr(index+character.length));
    return this.substr(0, index) + character + this.substr(index+character.length);
}

console.log(replaceAt(0, "hey"))
console.log(titleCaseFour("I'm atalt hEy"));


//5. REGULAR EXPRESSIONS
function titleCaseFive(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  }

//function titleCase(str) {
//     let undercase = str.toLowerCase();
//     let split = undercase.split(" ");
//     let yy = [];
//     for(var i =0; i < split.length; i++){
//         let y = split[i].charAt(0).toUpperCase();
//         console.log(y);
//         yy[i] = y.splice(0,1,y);
//         console.log(yy);
//     }
//     return yy;
//  