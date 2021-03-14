/*The following program will accept an integer and convert it to the roman numeral equivalent.*/

function convertToRoman(num) {
    //define and initialise a variable to hold the roman numeral string
    //also creating two arrays which we will use to compare numerical values to their roman numeral
    let romanString = "";
    const numbers = {
        "M":1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1
    }

    //iterate over the numerals array, check if the stored number is higher than the current array integer
    //if higher, subtract the corresponding numerical value and append romanString with the matching roman numeral

    for(let key in numbers){
        while(num >= numbers[key]){
            num-=numbers[key];
            romanString+=key;
        }
    }
    //return the new string
    return romanString;
}

convertToRoman(36);
