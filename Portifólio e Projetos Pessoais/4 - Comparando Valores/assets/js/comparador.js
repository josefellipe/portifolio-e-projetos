function calcular() {
    var termoCub = parseFloat(document.getElementById("termoCubico").value);
    var termoQua = parseFloat(document.getElementById("termoQuadratico").value);
    var termoLin = parseFloat(document.getElementById("termoLinear").value);
    var termoInd = parseFloat(document.getElementById("termoIndependente").value);
    var raiz;
    var resultd;
    var resulte;
    var i = 1;
    var xd;
    var xe;
    var aux;

    if (termoInd == 0) {
        raiz = 0;
    }
    else {
        var resultaux = parseFloat(termoCub * i ** 3) + parseFloat(termoQua * i ** 2) + parseFloat(termoLin * i) + parseFloat(termoInd);
        if (resultaux == 0) {
            raiz = i;
        }
        else {
            resultd = parseFloat(termoCub * i ** 3) + parseFloat(termoQua * i ** 2) + parseFloat(termoLin * i) + parseFloat(termoInd);
            resulte = parseFloat(termoCub * (-i) ** 3) + parseFloat(termoQua * (-i) ** 2) + parseFloat(termoLin * (-i)) + parseFloat(termoInd);

            while (-resulte * resultd < 0) {
                if (resulte == 0) {
                    raiz = -i;
                }
                else {
                    if (resultd == 0) {
                        raiz = i;
                    }
                    else {
                        i = parseFloat(i) + 1;
                        resultd = parseFloat(termoCub * i ** 3) + parseFloat(termoQua * i ** 2) + parseFloat(termoLin * i) + parseFloat(termoInd);
                        resulte = parseFloat(termoCub * (-i) ** 3) + parseFloat(termoQua * (-i) ** 2) + parseFloat(termoLin * (-i)) + parseFloat(termoInd);
                    }
                }
            }

            resultaux = termoInd;
            xd = i;
            xe = -i;
            aux = 0;

            if (resultd == 0) {
                raiz = i;
            }
            else {
                if (resulte == 0) {
                    raiz = -i;
                }
                else {
                    while ((parseFloat(xd) - parseFloat(xe)) ** 2 >= 0.0001) {
                        resultd = parseFloat(termoCub * xd ** 3) + parseFloat(termoQua * xd ** 2) + parseFloat(termoLin * xd) + parseFloat(termoInd);
                        resulte = parseFloat(termoCub * xe ** 3) + parseFloat(termoQua * xe ** 2) + parseFloat(termoLin * xe) + parseFloat(termoInd);
                        resultaux = parseFloat(termoCub * aux ** 3) + parseFloat(termoQua * aux ** 2) + parseFloat(termoLin * aux) + parseFloat(termoInd);
                        if (resultaux * resultd < 0) {
                            xe = aux;
                            aux = (parseFloat(aux) + parseFloat(xd)) / 2;
                            raiz = xd
                        }
                        else {
                            xd = aux;
                            aux = (parseFloat(aux) + parseFloat(xe)) / 2;
                            raiz = xd
                        }
                    }
                }
            }
        }
    }
    document.querySelector(".raiz").innerHTML = raiz.toFixed(3);
}