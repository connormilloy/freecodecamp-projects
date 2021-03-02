/*The following program will accept either a plaintext string and convert it to ROT13, or a ROT13 string and convert it to plaintext.*/

function rot13(str){
    //creating a variable to store the converted string and converting str to uppercase
    let newString = "";
    str.toUpperCase();
  
    //object containing each letter and the rot13 counterpart
    const rotAlphabet = {
      "A": "N",
      "B": "O",
      "C": "P",
      "D": "Q",
      "E": "R",
      "F": "S",
      "G": "T",
      "H": "U",
      "I": "V",
      "J": "W",
      "K": "X",
      "L": "Y",
      "M": "Z",
      "N": "A",
      "O": "B",
      "P": "C",
      "Q": "D",
      "R": "E",
      "S": "F",
      "T": "G",
      "U": "H",
      "V": "I",
      "W": "J",
      "X": "K",
      "Y": "L",
      "Z": "M"
    }
    //iterate over each letter of the passed in string
    for(let i = 0; i < str.length; i++){
      //check if the character is actually a letter
      if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91){
        //iterate over the entire alphabet object on each pass of the loop
        for(let letter in rotAlphabet){ 
          //find the matching value in the object for the letter at position i of the string, then append the its key to newString
          if(str.charAt(i) === rotAlphabet[letter]){
            newString+=letter;
          }
        }
      } else {
        //if we get here, it means that the character was not an A-Z character, so just append newString with whatever that character was
        newString+=str.charAt(i); 
      }
    }
    //return our newly converted string
    return newString;
  }
  
  rot13("SERR PBQR PNZC");
  