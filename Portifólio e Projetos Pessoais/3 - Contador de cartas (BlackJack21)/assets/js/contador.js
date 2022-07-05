//Variáveis para contagem do número de cartas

var currentNumber1Wrapper = document.getElementById('currentNumber1');
var currentNumber2Wrapper = document.getElementById('currentNumber2');
var currentNumber3Wrapper = document.getElementById('currentNumber3');
var currentNumber1 = 0;
var currentNumber2 = 0;
var currentNumber3 = 0;
var baralhoWrapper = document.getElementById('baralho');
var baralho = 0;
var resultWrapper = document.getElementById('result');
var result = 0;

//Variáveis para contagem do número de baralhos

var baralhoWrapper = document.getElementById('baralho');


//Funções para contar o número de cartas

function increment1() {
    currentNumber1 = currentNumber1 + 1;
    currentNumber1Wrapper.innerHTML = currentNumber1;
    result = result + 1;
    resultWrapper.innerHTML = (result / baralho).toFixed(2);
}

function decrement1() {
    currentNumber1 = currentNumber1 - 1;
    currentNumber1Wrapper.innerHTML = currentNumber1;
    result = result - 1;
    resultWrapper.innerHTML = (result / baralho).toFixed(2);
}

function increment2() {
    currentNumber2 = currentNumber2 + 1;
    currentNumber2Wrapper.innerHTML = currentNumber2;
    result = result;
    resultWrapper.innerHTML = (result / baralho).toFixed(2);
}

function decrement2() {
    currentNumber2 = currentNumber2 - 1;
    currentNumber2Wrapper.innerHTML = currentNumber2;
    result = result;
    resultWrapper.innerHTML = (result / baralho).toFixed(2);
}

function increment3() {
    currentNumber3 = currentNumber3 + 1;
    currentNumber3Wrapper.innerHTML = currentNumber3;
    result = result - 1;
    resultWrapper.innerHTML = (result / baralho).toFixed(2);
}

function decrement3() {
    currentNumber3 = currentNumber3 - 1;
    currentNumber3Wrapper.innerHTML = currentNumber3;
    result = result + 1;
    resultWrapper.innerHTML = (result / baralho).toFixed(2);
}

//Função para contar o número de baralhos

function increment4() {
    baralho = baralho + 1;
    baralhoWrapper.innerHTML = baralho;
}

function decrement4() {
    baralho = baralho - 1;
    baralhoWrapper.innerHTML = baralho;
}

//Limpar todos os valores

function resetNum() {
    currentNumber1 = 0;
    currentNumber1Wrapper.innerHTML = 0;
    currentNumber2 = 0;
    currentNumber2Wrapper.innerHTML = 0;
    currentNumber3 = 0;
    currentNumber3Wrapper.innerHTML = 0;
    baralho = 0;
    baralhoWrapper.innerHTML = 0;
    result = 0;
    resultWrapper.innerHTML = 0;
}
