/*The following program will accept a string and return a boolean value based on whether or not the inputted string was a palindrome.*/

function palindrome(str) {
    //replace all whitespace in the string and convert to lower case
    str = str.replace(/[\W_]/g, "").toLowerCase();
  
    //reverse the passed in string and split it, then store to a variable
    const reversedString = str.split("").reverse();
    console.log(reversedString);
  
    //join the reversed string back together, if it matches the passed in
    //string we know that it's a palindrome and returns true, else false
    if(reversedString.join("") === str){
      return true;
    } else {
      return false;
    }
  }
  
  palindrome("not a palindrome");