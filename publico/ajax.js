function carregaProdutos(){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        /*
        ready State
        0 - requisição não foi inciada
        1 - conexão com o servidor estabelecida
        2 - requisição foi recebida pelo servidor
        3 - requisição está sendo processada
        4 - resposta pronta
        
        status
        200 -  resposta ok
        404 - página/url não encontrada
        */
        
        if (request.readyState ==4 && request.status ==200){
            document.getElementById("bodyTabela").innerHTML = formata(request.responseText);
        }
    }
    
    request.open("GET","produtos.json", true);// requisição assíncrona, não ficamos travados até obter a resposta
    request.send();
}

function formata(strDados){
    console.log(strDados);
    var objDados = JSON.parse(strDados);
    var linhasTabela='';
  
    for (let lp of objDados['listaDeProdutos']){
          console.log(lp);
        linhasTabela += "<tr><td>"+lp["codigo"]+"</td><td>"+lp["preço"]+"</td></tr>";
    }
    return linhasTabela;
}