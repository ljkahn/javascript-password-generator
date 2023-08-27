// Assignment code here
var specialChars = ["+", "!", "#"];
var numericChars = ["1", "2", "3",];
var lowerCaseChar = ["a", "b", "c"];
var upperCaseChar = ["A", "B", "C"];

//A PROMPT FOR HOW MANY CHARACTERS THEY WANT



// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // storing a reference to an element


//this functions purpose is getting a random element from an array

function random(arr) {
  //using Math.floor and Math.random --> pick one arrayy 
// arr = ["+", "!", "#"]

var randomIndex = Math.floor(Math.random() * arr.length);


var randomChar = arr[randomIndex];

} 


function generatePassword() {
  //captures user length for password
 var userCharsLength = prompt("How many characters would you like your password to contain?");
 if (userCharsLength< 8 || userCharsLength >128) {
  prompt("Try Again!");
 }
 
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

var password = [];
if (userOptions.willHaveSpecChars) {
  //lets randomly grab a member from the special characters array
  //push into the result array
  random(specialChars);


}

if (userOptions.willHaveNumChars) {
  //lets randomly grab a member from the numerical characters array
  //push into the result array
  random(numericChars);


}
if (userOptions.willHaveLowChars) {
  //lets randomly grab a member from the lowercase characters array
  //push into the result array
  random(lowerCaseChar);

}
if (userOptions.willHaveUppChars) {
  //lets randomly grab a member from the uppercase characters array
  //push into the result array
random(upperCaseChar);
  
}



}


//eventually this array will store the random generated password. i will use push method to add to this array and this is what i will return to the user.







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} 
//storing a reference to the text area element





// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
