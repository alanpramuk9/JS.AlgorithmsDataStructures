function titleCase(str) {
    let undercase = str.toLowerCase();
    let split = undercase.split(" ");
   
    //let result = "";
    for(var i =0; i < split.length; i++){
        let y = split[i].charAt(0).toUpperCase();
        
        //let months = ["feb", "mar"]
        yy[i] = split[i].splice(0,1,y);
        console.log(yy);
        
    }
    return yy;
  }

console.log(titleCase("I'm atalt"));

//solution using map 
function titleCaseTwo(str){
    let strArray = str.toLowerCase().split(" ");
    //console.log(strArray);
    let newArray = strArray.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    })
    return newArray;
    console.log(newArray)
}
console.log(titleCaseTwo("I'm atalt hEy"));


//basic solution. MY FAVORITE
function titleCaseThree(str){
    let strArray = str.toLowerCase().split(" ");
    
    let updatedTitle = [];
    for (var x in strArray) {
        updatedTitle[x] = strArray[x].replace(strArray[x].charAt(0), strArray[x].charAt(0).toUpperCase())
       
    }
    return updatedTitle.join(" ");
    //console.log(updatedTitle);
}

console.log(titleCaseThree("I'm atalt hEy"));


//MOST COMPLEX
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


//REGULAR EXPRESSIONS
function titleCaseFive(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  }