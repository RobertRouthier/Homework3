var passwordLength = 8;
var choice = []

var specialChar = [
  '`',
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '-',
  '_',
  '|',
]
var lowLetter = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
var upLetter = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]
var getNumbers = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
]

// Assignment Code
var generateBtn = document.querySelector("#generate");
var bodyElement = document.querySelector("body");
 var printEl = document.querySelector("#print");


bodyElement.onresize = function (){
  console.log("I'm movingggggg")
}

 printEl.onclick = function () {
   print();
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var correctPrompt = getPrompt();
  var passwordText = document.querySelector("#password");
  if (correctPrompt) {
    var newPassword = generatePassword();


    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

//Prompts after click
function generatePassword() {

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * choice.length);
    password = password + choice[randomIndex];
  }
  return password
}

// Edge Cases

//All prompt questions
function getPrompt() {
  choice = []
  passwordLength = parseInt(prompt("How many characters would you like to use? It must be at least 8 and no more than 128."))

  if (isNaN(passwordLength)) {
    alert("Please enter a real number");
    return false;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Character length has to be between 8 - 128");
    return false;
  }

  const isLowLetter = confirm("Would you like lowercase letters in your password?");
  const isUpLetterconfirm = confirm("Would you like uppercase letters in your password?");
  const isSpecialCharacter = confirm("Would you like special characters in your password?");
  const isNumbers = confirm("Would you like numbers in your password?");
  if (isLowLetter) {
    choice = choice.concat(lowLetter);
  }
  if (isUpLetterconfirm) {
    choice = choice.concat(upLetter);
  }
  if (isSpecialCharacter) {
    choice = choice.concat(specialChar);

  }
  if (isNumbers) {
    choice = choice.concat(getNumbers);

  }

  if (isLowLetter == false && isUpLetterconfirm === false && isSpecialCharacter === false && isNumbers === false) {
    alert("You must select one of the options");
    return false;
  }
  return true;
}

