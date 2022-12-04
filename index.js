const smallLettersSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const capsLettersSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbersSet = ["0", "1", "2", "3",
    "4", "5", "6", "7", "8", "9"];
const specialCharsSet = ["~", "`", "!", "@", "#", "$", "%", "^", "&",
    "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";",
    "<", ">", ".", "?", "/"];
const MIN_LENGTH = 5;
const MAX_LENGTH = 20;
const DEFAULT_PASSWORD_LENGTH = 15;

let characters = [];

let password1El = document.getElementById("password-1");
let password2El = document.getElementById("password-2");
let passwordLengthEl = document.getElementById("length-input");
let smallLettersEl = document.getElementById("small-letters");
let capsLettersEl = document.getElementById("caps-letters");
let numbersEl = document.getElementById("numbers");
let specialCharEl = document.getElementById("special-characters");
let generatorBtnEl = document.getElementById("generator-btn");
let clearFieldsBtnEl = document.getElementById("clear-fields-btn")

let password1 = "";
let password2 = "";

passwordLengthEl.value = DEFAULT_PASSWORD_LENGTH;

passwordLengthEl.addEventListener("change", function () {
    let v = parseInt(this.value);
    if (v < MIN_LENGTH) this.value = MIN_LENGTH;
    if (v > MAX_LENGTH) this.value = MAX_LENGTH;
});

function generatePasswords() {
    password1 = "";
    password2 = "";
    characters = [];
    let passwordLength = passwordLengthEl.value;
    setCharactersSet();
    for (let i = 0; i < passwordLength; i++) {
        password1 += getRandomCharacter();
        password2 += getRandomCharacter();
    }
    password1El.textContent = password1;
    password2El.textContent = password2;
}

function setCharactersSet() {
    if (smallLettersEl.checked) {
        characters.push(...smallLettersSet);
    }
    if (capsLettersEl.checked) {
        characters.push(...capsLettersSet);
    }
    if (numbersEl.checked) {
        characters.push(...numbersSet);
    }
    if (specialCharEl.checked) {
        characters.push(...specialCharsSet);
    }
}

function toggleBtn() {
    if (smallLettersEl.checked || capsLettersEl.checked || numbersEl.checked || specialCharEl.checked) {
        generatorBtnEl.disabled = false;
        generatorBtnEl.setAttribute('title', 'Click to generate passwords');
    } else {
        generatorBtnEl.disabled = true;
        generatorBtnEl.setAttribute('title', 'Select the character type(s) to be used');
    }
}

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function copyToClipboard(id) {
    var range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

function clearFields() {
    passwordLengthEl.value = DEFAULT_PASSWORD_LENGTH;
    password1El.textContent = "";
    password2El.textContent = "";
    smallLettersEl.checked = false;
    capsLettersEl.checked = false;
    numbersEl.checked = false;
    specialCharEl.checked = false;
    generatorBtnEl.disabled = true;
}
