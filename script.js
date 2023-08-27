// Assignment code here
var specialChars = ["+", "!", "#"];
var numericChars = ["1", "2", "3",];
var lowerCaseChar = ["a", "b", "c"];
var upperCaseChar = ["A", "B", "C"];

//A PROMPT FOR HOW MANY CHARACTERS THEY WANT



// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // storing a reference to an element


//this functions purpose is getting a random element from an array




function generatePassword() {
  //captures user length for password
 var useCharsLength = prompt("How many characters would you like your password to contain? Pick a number between 8 and 128.");
 if (useCharsLength< 8 || useCharsLength >128) {
  prompt("Try Again!");
 }
 
 var useSpecialCharacters= confirm("Click OK to confirm including special characters.");

 var useNumericCharacters= confirm("Click OK to confirm including numeric characters.");

 var useLowerCaseCharacters= confirm("Click OK to confirm including lowercase characters.");

 var useUpperCaseCharacters= confirm("Click OK to confirm including uppercase characters.");


 //created an object for userOptions

var userOptions = {
willHaveSpecChars: useSpecialCharacters,
willHaveNumChars: useNumericCharacters,
willHaveLowChars:useLowerCaseCharacters,
willHaveUppChars:useUpperCaseCharacters,




};

var password = [];
if (userOptions.willHaveSpecChars) {
  //lets randomly grab a member from the special characters array
  //push into the result array
  randomChar(specialChars);


}

var result = [];
var possibleChars =[];

function randomChar(arr) {
  //using Math.floor and Math.random --> pick one arrayy 
// arr = ["+", "!", "#"]

var randomIndex = Math.floor(Math.random() * arr.length);
return arr[randomIndex];


var randomChar = arr[randomIndex];

} 

if (userOptions.willHaveNumChars) {
  //lets randomly grab a member from the numerical characters array
  //push into the result array
possibleChars = possibleChars.concat(specialChars);


}
if (userOptions.willHaveLowChars) {
  //lets randomly grab a member from the lowercase characters array
  //push into the result array
  possibleChars = possibleChars.concat(lowerCaseChar);

}
if (userOptions.willHaveUppChars) {
  //lets randomly grab a member from the uppercase characters array
  //push into the result array
  possibleChars = possibleChars.concat(upperCaseChar);
  
}

for(i = 0; i <useCharsLength; i++) {
  var selectedChar = randomChar (possibleChars);
  console.log(selectedChar);
  result.push(selectedChar);
}




  // Construct the final password by joining the characters in the password array
  var finalPassword = result.join(" ");

  return finalPassword; // Return the generated password
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
