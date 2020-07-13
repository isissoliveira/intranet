console.log("============ INÍCIO SCRIPT_CLASS.JS ==============");

class Poligono {
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    get area(){
        return this.largura * this.altura;
    }
    toString(){
        return "Esse é o polígono de área " + this.area;
    }
}

const quadrado = new Poligono(10,10);
console.log(quadrado.toString());

class PoligonoColorido extends Poligono{
    constructor(x, y, cor){
        super(x, y); // CHAMA O CONSTRUTOR PAI
        this.cor = cor;
    }
    toString(){
        return super.toString() + " cor " + this.cor ;
    }   
}

const quadradoRosa = new PoligonoColorido(20, 20, "rosa");
console.log(quadradoRosa.toString());


console.log("============ FIM SCRIPT_CLASS.JS ==============");