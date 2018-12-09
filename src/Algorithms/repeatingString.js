function truncateString(str, num) {
    if(str.length > num) {
        let newString = str.slice(0,num);
      let ending = "...";
      let finalString = newString.concat("", ending);
      return finalString;
    }
    else {
        return str;
    } 
  }
console.log(truncateString("A-tiskaasdet a-tasket A green and yellow basket", 8));

//2. 
function truncateStringTwo(str, num) {
    if (str.length > num && num > 3) {
      return str.slice(0, (num - 3)) + '...';
    } else if (str.length > num && num <= 3) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  
  }


//3. advanaced solution
function truncateString3(str, num) {
    if (str.length <= num) {
      return str;
    } else {
      return str.slice(0, num > 3 ? num - 3 : num) + '...';
    }
  }