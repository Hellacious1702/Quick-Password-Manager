let Passworbox = document.getElementById('password');
let GenerateButton = document.getElementById('generateButton');
let NumberofCharacters = document.getElementById('characters');
let PassowordFor = document.getElementById('PassowordFor');
let SavePassoword = document.getElementById('save');
let RetrievePassoword = document.getElementById('retrieve');


const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "!@#$%^&*~_-+=?<>|/"

let length = NumberofCharacters.value;

const allChars = UpperCase + LowerCase + Numbers + Symbols;

function passwordGenerate(){
    setPasswordLength();
    let password = '';
    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
    password += Numbers[Math.floor(Math.random() * Numbers.length)];
    password += Symbols[Math.floor(Math.random() * Symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    Passworbox.value = password;
    
    console.log(password.length)
}

function setPasswordLength(){
    length = NumberofCharacters.value;
}

function CopyPassword(){
    Passworbox.select();
    document.execCommand('copy');
}

function SavePassword(){
    let PassowordForLower = PassowordFor.value.toLowerCase();
    localStorage.setItem(PassowordForLower , Passworbox.value);
}

function retrievePassword(){
    let PassowordForLower = PassowordFor.value.toLowerCase();
    let retrievedPassword = localStorage.getItem(PassowordForLower , Passworbox.value);
    Passworbox.value = retrievedPassword;
    console.log(retrievedPassword);
}
