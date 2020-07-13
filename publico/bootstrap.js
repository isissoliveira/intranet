console.log("============== INÍCIO BOOTSTRAP.JS =================");


function alteraNavActive( strProximaDiv ){
    // ALTERA ABA ATIVA
    document.querySelector(".nav-link.active").className ="nav-link" ;
    document.activeElement.className = "nav-link active";

    var divAntiga = document.querySelector(".conteudoVisivel");
    divAntiga.removeAttribute("class");
    divAntiga.removeAttribute("style");
    divAntiga.setAttribute("style","display:none");
    divAntiga.setAttribute("class","conteudoInvisivel");
    
   document.getElementById(strProximaDiv).removeAttribute("class");
   document.getElementById(strProximaDiv).removeAttribute("style");
   document.getElementById(strProximaDiv).setAttribute("class","conteudoVisivel");
    
}

function menuDropVisivel(  ){

    let menuDrop = document.getElementById("menuDropdown");
    let estilo = menuDrop.getAttribute("style");
    if (estilo== "display:none"){
        menuDrop.setAttribute("style","display:block");
    }
    else{
        menuDrop.setAttribute("style","display:none");
    } 
}


console.log("================ FIM BOOTSTRAP.JS =================");