
// Assignment Code

// generateBtn is associated with the id = "generate" in the corresponding html 
var generateBtn = document.querySelector("#generate");

// these criteria are made so there is a base property for each variable within the object. They are global so they can be used throughout the script.
var passwordCriteria = {
  length: 8,
  lowercase: true,
  uppercase: true,
  numeric: true,
  specialCharacters: true,
};


// Create variables for computer to use
let alphaLower = "abcdefghijklmnopqrstuvwxyz";
let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let number = "0123456789";;

// Functions 
function generatePassword() {

// when I input the right amount of characters, I am asked to include special characters, lower, upper, & numeric. The input from the alerts are stored in the object variables.
    passwordCriteria.specialCharacters = confirm("Would you like to include special characters?");
    passwordCriteria.numeric = confirm("Would you like to include numeric characters.");
    passwordCriteria.lowercase = confirm("Would you like to include lowercase characters.");
    passwordCriteria.uppercase = confirm("Would you like to include uppercase characters.");

    // if else statements for what the user wanted to include in their password. now that the answers are stored, if they are true, they are incorporated into the variable of characters able to be used in the new password. 
   let passwordCriteriaCharacters = '';
   let createdPassword = '';

   if (passwordCriteria.specialCharacters == true){
    passwordCriteriaCharacters += special;
   }
   if (passwordCriteria.numeric){
    passwordCriteriaCharacters += number;
   }
   if (passwordCriteria.lowercase){
    passwordCriteriaCharacters += alphaLower;
   }
   if (passwordCriteria.uppercase){
    passwordCriteriaCharacters += alphaUpper;
   }

    // loop to add random characters to the password. for the length of the users chosen password, a for loop will be ran to create random values from the length of the passwordCriteriaCharacters. Once the loop is finished, the values are put into the created password which is then called to create the final password. I used charAt so I could add the random characters to the createdPassword like you would add an index from an array.
   for (let i = 0; i < passwordCriteria.length; i++){
    let randomCharPosition = Math.floor(Math.random() * passwordCriteriaCharacters.length + 1);
    createdPassword += passwordCriteriaCharacters.charAt(randomCharPosition);
   }

   return createdPassword;
  }
    
/* Write password to the #password input. 
writePassword has a variable called password that is initially blank. When writePassword is called, a prompt asks how many characters the user would like to contain. It has to be between 8 to 128 characters, so if it outside of that the password will not generate and an alert generated. If it is, the function generatePassword will be called. */
function writePassword() {

  var password = '';
    // when I click the button, I am presented with a prompt for the length of the password
  passwordCriteria.length = prompt("How many characters would you like your password to contain?");
  if (passwordCriteria.length >= 8 && passwordCriteria.length <= 128){
    password = generatePassword();
  }else{
    alert("Password must contain between 8 to 128 characters.");
   };

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button. When the button is clicked, the function writePassword is called.
generateBtn.addEventListener("click", writePassword);

