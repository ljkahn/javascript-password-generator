// Assignment code here
var specialChars = ["+", "!", "#"];
var numericChars = ["1", "2", "3",];
var lowerCaseChar = ["a", "b", "c"];
var upperCaseChar = ["A", "B", "C"];

//A PROMPT FOR HOW MANY CHARACTERS THEY WANT



// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // storing a reference to an element




function generatePassword() {
  //captures user length for password
 var userCharsLength = prompt("How many characters would you like your password to contain?");
 
 var specialCharacters= confirm("Click OK to confirm including special characters.");

 var numericCharacters= confirm("Click OK to confirm including numeric characters.");

 var lowerCaseCharacters= confirm("Click OK to confirm including lowercase characters.");

 var upperCaseCharacters= confirm("Click OK to confirm including uppercase characters.");


 //created an object for userOptions

var userOptions = {
  length: userCharsLength,
  willHaveSpecChars :specialCharacters,
  willHaveNumChars: numericCharacters,
  willHaveLowChars: lowerCaseCharacters,
  willHaveUppChars: upperCaseCharacters


}

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} //storing a reference to the text area element


// passwordText.value = password;

// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
