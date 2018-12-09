/*
    Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and
     create the ransom note from the magazine words.
*/


//create a count of every magazine word, and then check if this “hash table” contains the right number of ransom words
const ransomNote = (note, magazine) => {
    const magazineWords = magazine.split(" ");
    const magazineHash = {};
    
    magazineWords.forEach(word => {
        if (!magazineHash[word]) magazineHash[word] = 0;
        magazineHash[word]++;
    });

    const noteWords = note.split(" ");
    let possible = true;

    noteWords.forEach(word => {
        if (magazineHash[word]) {
            magazineHash[word]--;
            if (magazineHash[word] < 0) possible = false;
        } else possible = false;
    });

    return possible;
};

const magazine = "I am reporting news to inform about the election. There have been no fake entries";

console.log(ransomNote("fake news", magazine)); //true

/* Notes on this solution: 
    -obvious solution is to split the magazine words and ransom words into arrays of individual words, 
    and then check every ransom word against every magazine word
        scales in QUADRATIC time, or O(n * m)
    
    -If we create a table of magazine words first, and then check each ransom word against this table, 
        we can achieve LINEAR time.
            -table lookup in map objects occurs in constant time



*/