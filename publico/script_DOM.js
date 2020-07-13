console.log("============== INÍCIO SCRIPT_DOM.JS =================");
function resize(){
    document.getElementById("novoParagrafo").innerHTML = `Altura${window.innerHeight} Largura ${window.innerWidth}`;
}
function validaCampos(){
    var valEmail = document.getElementById("email").value;
    if (valEmail.length < 5)
        document.querySelector("#spamEmail").innerHTML="E-mail muito curto";
    return false;
}
function repeteEmail(){
    var valEmail = document.getElementById("email").value;
    document.querySelector("#spamEmail").innerHTML=valEmail;
}

function principal (){
    var fs= document.querySelector("#fs");
    fs.addEventListener("mouseover",fsOver);
    fs.addEventListener("mouseout",fsOut);
}
function fsOver(){
    document.querySelector("#fs").style.backgroundColor="azure";
}
function fsOut(){
    document.querySelector("#fs").style.backgroundColor="white";
}

var imagem = document.getElementById("imgFicaEmCasa");
console.log(imagem);

var titulo = document.getElementsByTagName("h1");
console.log(titulo);


var paragrafos = document.getElementsByTagName("p");
console.log(paragrafos[0]);

var primeiroParagrafo = document.querySelector("p");
console.log(primeiroParagrafo);

var segundoParagrafo = document.querySelector("#p2");
console.log(segundoParagrafo);

segundoParagrafo.innerHTML="CONTEÚDO E BORDA DO PARÁGRAFO ALTERADOS VIA JAVASCRIPT";
segundoParagrafo.style.border='thick solid purple';
 
var novoParagrafoJavascript = document.createElement("p");
novoParagrafoJavascript.setAttribute("id","novoParagrafo");
novoParagrafoJavascript.innerHTML =">>> Novo parágrafo CRIADO via Javascript <<<"
 
//var body = document.querySelector("body");
//body.appendChild(novoParagrafoJavascript); 

primeiroParagrafo.appendChild(novoParagrafoJavascript);

console.log(s);// variável criada no script anterior

console.log("================ FIM SCRIPT_DOM.JS =================");