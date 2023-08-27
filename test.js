var specialChars = ["+", "!", "#"];
var numericChars = ["1", "2", "3",];
var lowerCaseChar = ["a", "b", "c"];
var upperCaseChar = ["A", "B", "C"];


function random(arr) {
    //using Math.floor and Math.random --> pick one arrayy 
  // arr = ["+", "!", "#"]
  
  var randomIndex = Math.floor(Math.random() * arr.length);


  var randomChar = arr[randomIndex];

  console.log(randomChar);
  
  } 

  random(specialChars);
  random(numericChars);
  random(lowerCaseChar);
  random(upperCaseChar);