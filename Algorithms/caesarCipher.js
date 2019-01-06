/*
    Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. 
    If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
        Ex. caesarCipher('ABC', 1) - this will return the string with all the letter shifted up 1 letter
            = 'BCD'
*/

//1.
const caesarCipher = (string, number) => {
    //alphabet characters in order to calculate the result of shifting a character
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const input = string.toLowerCase();
    let output = "";

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];

        //if it isn't an alphabet character then do not shift the unicode by @number
        if (alphabet.indexOf(letter) === -1) {
            output += letter;
            continue;
        }

        //use the modulus operator to mimic the behavior of wrapping around to the beginning
        // or end of the alphabet array when the shifting @number paramater + character index # is more than 26
        let index = alphabet.indexOf(letter) + number % 26;
         //console.log(index); this logs the index of the alphabet array for the character we will be shifting to
        if (index > 25) index -= 26;
        if (index < 0) index += 26;

        output +=
            string[i] === string[i].toUpperCase()
                ? alphabet[index].toUpperCase()
                : alphabet[index];
    }

    return output;
};
console.log(caesarCipher("AbC", 2)) //CdE

//2.
function caesarCipher2(str, n) {
    let result = Array(str.length);
    for (let i = 0; i < str.length; i++) {
        //this is the unicode keyboard character encoding number. a = 97, b = 98, etc
        let code = str.charCodeAt(i);
        let lower = "a".charCodeAt(0); //97
        if (code >= lower && code < lower + 26)
            //by giving each character a number, we can shift them numerically by @n param and then encode it back to alphabet character
            code = (code - lower + n) % 26 + lower;
        //need to check for case sensitivity. 'A' = 65 but 'a' = 97
        let upper = "A".charCodeAt(0);
        if (code >= upper && code < upper + 26)
            code = (code - upper + n) % 26 + upper;
        //convert unicode to character
        result[i] = String.fromCharCode(code);
    }
    return result.join("");
}

console.log(caesarCipher2("Abc", 2)) //Cde