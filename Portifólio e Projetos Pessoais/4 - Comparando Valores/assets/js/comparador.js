function calcular() {
    //variáveis do input, são os termos da equação cubica
    var termoCub = parseFloat(document.getElementById("termoCubico").value);
    var termoQua = parseFloat(document.getElementById("termoQuadratico").value);
    var termoLin = parseFloat(document.getElementById("termoLinear").value);
    var termoInd = parseFloat(document.getElementById("termoIndependente").value);
    //variável de saída, é o valor que desejamos encontrar
    var raiz;
    //variáveis auxiliáres para usar no calculo
    var resultd;
    var resulte;
    var i = 1;
    var xd;
    var xe;
    var aux;

    //verificar se a raíz é zero
    if (termoInd == 0) {
        raiz = 0;
    }
    else {
        //varificar se o primeiro intervalo não é o próprio valor da raíz
        var resultaux = parseFloat(termoCub * i ** 3) + parseFloat(termoQua * i ** 2) + parseFloat(termoLin * i) + parseFloat(termoInd);
        if (resultaux == 0) {
            raiz = i;
        }
        else {
            //verificar se a raíz está no primeiro intervalo de i=1
            resultd = parseFloat(termoCub * i ** 3) + parseFloat(termoQua * i ** 2) + parseFloat(termoLin * i) + parseFloat(termoInd);
            resulte = parseFloat(termoCub * (-i) ** 3) + parseFloat(termoQua * (-i) ** 2) + parseFloat(termoLin * (-i)) + parseFloat(termoInd);

            while (resulte * resultd > 0) {
                //enquanto o produto for maior que zero a raíz ainda não está contida no intervalo
                if (resulte == 0) {
                    //verificar se a raíz não é o valor do intervalo (primeiro o valor da esquerda)
                    raiz = -i;
                }
                else {
                    if (resultd == 0) {
                        raiz = i;
                    }
                    else {
                        //aumentando o valor do intervalo e atribuindo os novos resultados dos extremos
                        i = parseFloat(i) + 1;
                        resultd = parseFloat(termoCub * i ** 3) + parseFloat(termoQua * i ** 2) + parseFloat(termoLin * i) + parseFloat(termoInd);
                        resulte = parseFloat(termoCub * (-i) ** 3) + parseFloat(termoQua * (-i) ** 2) + parseFloat(termoLin * (-i)) + parseFloat(termoInd);
                    }
                }
            }
            //quando encontramos o valor do intervalo que contem a raíz começamos a comparar em qual metade do intervalo a raíz está
            resultaux = termoInd;
            xd = i;
            xe = -i;
            aux = 0;

            while ((parseFloat(xd) - parseFloat(xe)) ** 2 >= 0.0001) {
                //enquanto o intervalo for maior que a tolerancia desejada
                resultd = parseFloat(termoCub * xd ** 3) + parseFloat(termoQua * xd ** 2) + parseFloat(termoLin * xd) + parseFloat(termoInd);
                resulte = parseFloat(termoCub * xe ** 3) + parseFloat(termoQua * xe ** 2) + parseFloat(termoLin * xe) + parseFloat(termoInd);
                resultaux = parseFloat(termoCub * aux ** 3) + parseFloat(termoQua * aux ** 2) + parseFloat(termoLin * aux) + parseFloat(termoInd);
                //procurando em qual metade do intervalo a raíz está e parametrizando um novo valor auxiliar
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
    //imprimindo o valor no html de destino com 3 casas decimais
    document.querySelector(".raiz").innerHTML = raiz.toFixed(3);
}