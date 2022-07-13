var inTerm;
var memoryTerm = [];
var outroVetor = [];

function push() {
    inTerm = document.getElementById("inTerm").value;
    memoryTerm.push(inTerm);
    showNumbers();
}

function changeEvenForZero() {
    let i = 0
    while (i < memoryTerm.length) {
        let term = memoryTerm.slice(i, i + 1).join("");
        term % 2 == 1 ? outroVetor.push(term) : outroVetor.push("0");
        i = parseInt(1) + parseInt(i);
    }
    showNumbers();
    outroVetor = [];
}

function erase() {
    memoryTerm = [];
    outroVetor = [];
    inTerm = "";
    showNumbers();
}

function showNumbers() {
    document.querySelector(".arrayIn").innerHTML = inTerm;
    document.querySelector(".memoryTerm").innerHTML = memoryTerm;
    document.querySelector(".message").innerHTML = outroVetor;
}