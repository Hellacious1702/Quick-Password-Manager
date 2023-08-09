// Adding the elements using assigned ID from index.html
let Passworbox = document.getElementById('password');
let GenerateButton = document.getElementById('generateButton');
let NumberofCharacters = document.getElementById('characters');
let PassowordFor = document.getElementById('PassowordFor');
let SavePassoword = document.getElementById('save');
let RetrievePassoword = document.getElementById('retrieve');

// Making constants that will be used to create a password
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "!@#$%^&*~_-+=?<>|/"

// Making a length variable that will hold what the length of the password will be
let length = NumberofCharacters.value;

// final constant holding how the password will be formed and ordered
const allChars = UpperCase + LowerCase + Numbers + Symbols;

// Creating function to Generate Password+
function passwordGenerate(){
    // Calling the function setPasswordLength() to decide the length of the password based on user-input
    setPasswordLength();
    // creating a password empty variable that will later be converted into a random password
    let password = '';
    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
    password += Numbers[Math.floor(Math.random() * Numbers.length)];
    password += Symbols[Math.floor(Math.random() * Symbols.length)];

    // a while function to check if the password matches the user-input password length
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    // Adding the Generated complete password value to the password box that will be dispalyed on the website
    Passworbox.value = password;
}

// Creating a function to update the length of password the user wants into the length variable
function setPasswordLength(){
    length = NumberofCharacters.value;
}

// Creating a Function to copy the generated password to the clipboard
function CopyPassword(){
    Passworbox.select();
    document.execCommand('copy');
}

// Creating a function that will store the generated password to the local storage
function SavePassword(){
    // converting any type of string to lowercase so it will be easier to search
    let PassowordForLower = PassowordFor.value.toLowerCase();
    localStorage.setItem(PassowordForLower , Passworbox.value);
    // Clearing the Generated password display on the website
    Passworbox.value = "";
}

// Creating a function to retrieve a saved password from the local storage
function retrievePassword(){
    // converting anytime of string to lowercase because the key in saved password is in lowercase
    let PassowordForLower = PassowordFor.value.toLowerCase();
    let retrievedPassword = localStorage.getItem(PassowordForLower , Passworbox.value);
    // Displaying the Retrieved Password to Website in PasswordBox
    Passworbox.value = retrievedPassword;
}
