/*The following program will accept an integer and convert it to the roman numeral equivalent.*/

function convertToRoman(num) {
    //define and initialise a variable to hold the roman numeral string
    //also creating two arrays which we will use to compare numerical values to their roman numeral
    let romanString = "";
    const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const normalIntegers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    //iterate over the numerals array, check if the stored number is higher than the current array integer
    //if higher, subtract the corresponding numerical value and append romanString with the matching roman numeral
    for(let i = 0; i < romanNumerals.length; i++){
        while(num >= normalIntegers[i]){
            num-= normalIntegers[i];
            romanString+= romanNumerals[i];
        }
    }
    //return the new string
 return romanString;
}

convertToRoman(36);