/*Refactored version of the original rot13.js project. Less clunky.*/

function rot13(str){
    return(str + '').replace(/[a-zA-Z]/g, function(cipher){
        return String.fromCharCode(cipher.charCodeAt(0)+(cipher < 'n' ? 13 : -13));
    })
}

console.log(rot13("Hello World!"));