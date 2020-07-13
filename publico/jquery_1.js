"use strict";
console.log("============== INÍCIO jquery_1.JS =================");
$(document).ready(function () {
    $('#suc').click(function () {
        $('p.parag').each(function (i) {
            if (i % 2 == 0) // primeiro índice é zero
                $(this).css('background-color', 'aquamarine');
        });
        $('p:nth-of-type(3)').css('background-color', 'pink');
    });
/*
    $( ".menuTopo li.nav-item" ).hover(function( ) {
        $(this).find('.nav-link').click();
      }, function( ) {
        $(this).find('.nav-link').click();
      });
*/
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });
  
      /*ALTERA VISIBILIDADE DO MENU DROPDOWN*/
    $(window).resize( ()=>{
        let menuDrop = document.getElementById("menuDropdown");
        menuDrop.setAttribute("style","display:none"); 
       // document.getElementById("btnMenuDrop").click();
            
    })
    


    $(".card.conteudo").click(function () {
        if ($(".nv4_card").css("margin") > '0px') {
            $(".nv4_card").animate({
                margin: 0
                , width: '200px'
            }, 'slow');
            $(".card-img-bottom").animate({
                width: '100%'
            }, 'slow');
            $(".detalhes_card").hide('slow');
        }
        else {
            $(".nv4_card").animate({
                margin: '1em'
                , width: '300px'
            }, 'slow');
            $(".card-img-bottom").animate({
                width: '50%'
            }, 'slow');
            $(".detalhes_card").show('slow');
        }
    });
    $("#nv4-btok").click(function () {
        let idDinamico = new Date().getTime();
        if ($("#nv4_nome").val() == "" || $("#nv4_desc").val().trim() == "") {
            alert("Campos obrigatórios!");
            return;
        }
        let titulo = '<div class="card nv4_card" >' + '<div class="card-body" id=' + idDinamico + '  > <img class="card-img-bottom" src="female_avatar.png" alt="Card image" style="width:50%">' + '<div class ="detalhes_card">' + '<h4 class="card-title">' + $("#nv4_nome").val() + '</h4>'
        let texto = '<p class="card-text">' + $("#nv4_desc").val() + '</p>'
        let botaoPerfil = ' <button class="btn btn-primary " data-toggle="modal" data-target="#myModal" onclick="clickPerfil(`' + idDinamico + '`)"> Ver perfil </button> </div></div> </div>  '
        $("#nv4_result").append(titulo + texto + botaoPerfil);
        $("#nv4_nome").val("");
        $("#nv4_desc").val("");
    });
    $("#nv5-btok").click(function () {
        $.get("index_.html").done(function (dados) {
            $("#nv5_result").html(dados);
            console.log("Página carregada")
        }).fail(function () {
            console.log("Página não carregada")
        });
    });
    $("#nv5-btok2").click(function () {
        $.getJSON("produtos.json", function (produtos) {
            $("#nv5_result").html('<table>'+
                '<thead>'+
                '<tr>'+
                '<th>Código</th>'+
                '<th>Preço</th>'+
                '</tr>'+
                '</thead>'+
                '<tbody >'+
                formata(produtos)+
                '</tbody>'+
                '</table>'
                );
        });
    });
    
    
    $(".card.conteudo").contextmenu(function (e) {
        e.preventDefault();
        $("#menuContexto").toggle("fast").css({
            top:e.pageY + "px",
            left:e.pageX + "px"
        });
    })
    .click(function(e){
        $("#menuContexto").hide("fast");
    });   
});

function clickPerfil(strId) {
    let elemento = document.getElementById(strId);
    document.querySelector(".modal-title").innerHTML = elemento.querySelector(".card-title").innerHTML;
    document.querySelector(".modal-body").innerHTML = elemento.querySelector(".card-text").innerHTML;
    //console.log(elemento.querySelector(".card-title").innerHTML);
    //console.log(elemento.querySelector(".card-text").innerHTML);
}

function formata(strDados) {
    console.log(strDados.listaDeProdutos);
    var objDados = JSON.parse(  JSON.stringify(strDados)  ); 
    var linhasTabela = '';
    for (let lp of objDados['listaDeProdutos']) {
       // console.log(lp);
        linhasTabela += "<tr><td>" + lp["codigo"] + "</td><td>" + lp["preço"] + "</td></tr>";
    }
    
    for (let lp of strDados.listaDeProdutos) {
        //console.log(lp);
        
        linhasTabela += "<tr><td>" + lp.codigo+ "</td><td>" + lp.preço + "</td></tr>";
    }
    
    return linhasTabela;
}
console.log("================ FIM jquery_1.JS =================");