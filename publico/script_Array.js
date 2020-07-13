console.log("========== INÍCIO SCRIPT_ARRAY.JS ==========");

var pessoa = new Array("Joana","Cláudia","Pedro");

pessoa.push("Isis");
pessoa.unshift("Aurora");

for (let p of pessoa )
    console.log(p);

pessoa.forEach( function(f){
    console.log("Foreach:" + f );
});

var numero = [1,2,3,4]
var soma = numero.reduce(
    function(a,b){
        return a+b;
});
console.log(soma);


function Bichinho( ){
    var self = this;
    self.tipo ="cacatua";
    self.cor = "amarelo";
}
var cao = new Bichinho();
console.log(cao)

Bichinho.prototype.nomeCompleto = function(){
    return this.tipo +" "+ this.cor;
}
console.log(cao.nomeCompleto())

cao.tipo="cachorro"
console.log(cao.nomeCompleto());

console.log("============ FIM SCRIPT_ARRAY.JS ============");