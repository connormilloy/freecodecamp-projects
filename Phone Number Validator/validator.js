/*The following program will accept a US phone number and test it against a regex pattern to ensure it is valid.*/

function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\(\d{3}\)|\d{3})[\s\-]?(\(\d{4}\)|\d{4})$|^\d{10}$/g;
  return regex.test(str);
}

telephoneCheck("555-555-5555");