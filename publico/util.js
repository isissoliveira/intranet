"use strict";
console.log("============== INÍCIO util.JS =================");
$(document).ready(function () {
    const formBolsa = document.getElementById("formBolsa")
    
    formBolsa.addEventListener('submit', (evento) => {
        $("#card_bolsa_valor").html('Buscando dados...')

        evento.preventDefault() // O SUBMIT NÃO VAI REALIZAR SUA AÇÃO DEFAULT (NÃO VAI ATUALIZAR A PÁGINA)
        const simb = document.getElementById("inputSimbolo").value

        fetch(`http://localhost:3000/bolsavalores?simbolo=${simb}`).then((response) => {
            response.json().then((data) => {
                if (data.erro_) {
                    console.log(`Há algo errado ${data.erro_.mensagem} codigo ${data.erro_.codigo}`)
                    $("#card_bolsa_valor").html(` ${data.erro_.mensagem}`)
                }
                else {
                    //  console.log(data);

                    $("#card_bolsa_valor").html('<table>' +
                        '<thead>' +
                        '<tr>' +
                        '<th>Símbolo</th>' +
                        '<th>Nome</th>' +
                        '<th>País</th>' +
                        '</tr>' +
                        '</thead>' +
                        '<tbody >' +
                        formata(data) +
                        '</tbody>' +
                        '</table>'
                    );

                }

            });
        });

    });

});

function formata(strDados) {
    var objDados = JSON.parse(JSON.stringify(strDados));
    var linhasTabela = '';

    // linhasTabela += "<tr><td>" + objDados["symbol"] + "</td><td>" + objDados["name"] + "</td><td>" + objDados["pais"] + "</td></tr>";
    for (let ativo of strDados) {
        linhasTabela += "<tr><td>" + ativo.symbol + "</td><td>" + ativo.name + "</td><td>" + ativo.pais + "</td></tr>";
    }

    return linhasTabela;
}


