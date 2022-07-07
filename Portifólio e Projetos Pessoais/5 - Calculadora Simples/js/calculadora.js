//variáveis auxiliares para fazer as operações
var term1 = [];
var term2 = [];
var operation = "";
var operationParcial;
var historic;
var valor1 = "0";
var valor2 = "";
var num  = "";
var result;

//variáveis mostradas no histórico de contas
var historic1 = "";
var historic2 = "";

//variável mostrada no visor principal
var text;

function createTerm1() {
    term1.push(num);
    valor1 = term1.join("");
    text = valor1;
    showView();
}

function createTerm2() {
    term2.push(num);
    valor2 = term2.join("");
    text = valor2;
    showView();
}

function zero() {
    num = parseInt(0);
    operation == "" ? createTerm1() : createTerm2();
}
function one() {
    num = parseInt(1);
    operation == "" ? createTerm1() : createTerm2();
}
function two() {
    num = parseInt(2);
    operation == "" ? createTerm1() : createTerm2();
}
function three() {
    num = parseInt(3);
    operation == "" ? createTerm1() : createTerm2();
}
function four() {
    num = parseInt(4);
    operation == "" ? createTerm1() : createTerm2();
}
function five() {
    num = parseInt(5);
    operation == "" ? createTerm1() : createTerm2();
}
function six() {
    num = parseInt(6);
    operation == "" ? createTerm1() : createTerm2();
}
function seven() {
    num = parseInt(7);
    operation == "" ? createTerm1() : createTerm2();
}
function eight() {
    num = parseInt(8);
    operation == "" ? createTerm1() : createTerm2();
}
function nine() {
    num = parseInt(9);
    operation == "" ? createTerm1() : createTerm2();
}

function point() {
    num = ".";
    operation == "" ? createTerm1() : createTerm2();
}

function potency() {
    operationParcial = "^";
    operationCheck();
    text = operation;
    showView();
}

function multiply() {
    operationParcial = "x";
    operationCheck();
    text = operation;
    showView();
}

function share() {
    operationParcial = ":";
    operationCheck();
    text = operation;
    showView();
}

function plus() {
    operationParcial = "+";
    operationCheck();
    text = operation;
    showView();
}

function decrease() {
    operationParcial = "-";
    operationCheck();
    text = operation;
    showView();
}

//operatioCheck verifica se já existe resultados parciais na memória
function operationCheck() {
    operation == "" ? operation = operationParcial : resultParcial();
}

function resultParcial() {
    equal()
    operation = operationParcial
}


//start reinicia todos os valores
function start() {
    operation = "";
    valor1 = "0";
    valor2 = "";
    result = "";
    term1 = [];
    term2 = [];
    text = 0;
    result = 0;
    showView();
}

function equal() {
    switch (operation) {
        case "+":
            text = (parseFloat(valor1) + parseFloat(valor2))
            break;
        case "-":
            text = (parseFloat(valor1) - parseFloat(valor2))
            break;
        case ":":
            text = (parseFloat(valor1) / parseFloat(valor2))
            break;
        case "x":
            text = (parseFloat(valor1) * parseFloat(valor2))
            break;
        case "^":
            text = (parseFloat(valor1) ** parseFloat(valor2))
            break;
    }
    result = text;
    showView()
    showHistoric()
    valor1 = result;
    valor2 = 0;
    operation = "";
    term2 = [];
}

function showView() {
    document.querySelector(".view").innerHTML = text;
}

function showHistoric() {
    historic = valor1 + operation + valor2 + "=" + result;
    historic2 = historic1
    historic1 = historic
    document.querySelector(".historic1").innerHTML = historic1;
    document.querySelector(".historic2").innerHTML = historic2;
} 
