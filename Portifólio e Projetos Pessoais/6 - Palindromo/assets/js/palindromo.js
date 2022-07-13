var textPalindromo = [];
var textPalindromoReverse = [];
var checkPalindromo;
var entrada;
var result;


//get the text and transform for array eliminate the spaces
function inPalindromo() {
    entrada = document.getElementById("inText").value;
    arrayTransform();
}

function arrayTransform() {
    textPalindromo = entrada.split(" ").join("");
    textPalindromoReverse = textPalindromo.split("").reverse().join("");
    testPalindromo();
    show();
}

function testPalindromo() {
    const verified = "";
    const noVerified = "não";
    textPalindromo == textPalindromoReverse ? checkPalindromo = verified : checkPalindromo = noVerified;
    result = `A frase que você escreveu ${checkPalindromo} é um palindromo!`;
}


function show() {
    document.querySelector(".saidaPalindromo").innerHTML = result;
    console.log(entrada);
    console.log(textPalindromo);
    console.log(textPalindromoReverse);
    console.log(checkPalindromo);
}