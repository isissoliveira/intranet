console.log("============== INÍCIO SCRIPT.JS =================");
var pessoa = {
    nome: "Maria"
    , sobrenome: "Maia"
};
for (p in pessoa) {
    console.log(pessoa[p])
}
try {
    throw "Forçando chamada de catch"
    console.log("DEPOIS DE THROW") // Não foi chamado
}
catch (erro) {
    console.log("Deu erro: " + erro)
}

function testaArgumentos(x) {
    switch (arguments.length) {
    case 0:
        return "SEM ARGUMENTOS"
    case 1:
        return x
    default:
        return "MAIS DE 1 ARGUMENTO"
    }
}
console.log(testaArgumentos())
console.log(testaArgumentos(1))
console.log(testaArgumentos(2, 2, 3))

function somaIndeterminada() {
    let soma = 0;
    for (let i = 0; i <= arguments.length; i++) {
        if (typeof arguments[i] == "number") 
            soma += arguments[i]
    }
    return soma;
}
console.log(somaIndeterminada(1, 2, "a"));
console.log(function (x, y) {
    return x + y
}(10, 20)); // FUNÇÃO DE EXECUÇÃO IMEDIATA
new function () {
    console.log("Chamada direta de função");
}();
var contador = function () {
    var i = 0;
    return {
        get: function () {
            return i;
        }
        , set: function (valor) {
            i = valor;
        }
        , incrementa: function () {
           return i++;
        }
    }
}();
console.log(contador.get());

//-------- EXPRESSÃO REGULAR-----
var exp_regex = /\([0-3]{2}\)/g;
var exp1 = "(45)";// FALSO
var exp2 = "(02)";// VERDADEIRO
console.log(exp_regex.test(exp1));
console.log(exp_regex.test(exp2));

// -------COLEÇÕES -------------

var equipamentos = new Map();
equipamentos.set("A1","Anilha 25lb");
equipamentos.set("A2","Anilha 45lb");
equipamentos.set("C1","Corda de aço");
equipamentos.set("K1","Kettlebell 16kg");
equipamentos.set("D1","Dumbell 10kg");

for(let [cod, descricao] of equipamentos){
    console.log(`Equipamento ${cod} - ${descricao}`);
}

var coaches = new Set();
coaches.add("Saulo");
coaches.add("Samir");
coaches.add("Jamile");

for(let coach of coaches){
    console.log(coach);
}

console.log("==================== FIM SCRIPT.JS ======================");