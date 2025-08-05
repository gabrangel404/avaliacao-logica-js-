let escolhidos = [];
function acompanhamentos() {
    let Maionese = confirm ("Deseja Maionese?");
    let Carne = confirm ("Deseja Carne?");
    let Queijo = confirm ("Deseja Queijo");
    let Bacon = confirm ("Deseja Bacon?");
    let Salada = confirm ("Deseja Salada?");
    let _Maionese = "maionese";
    let _Carne = "carne";
    let _Queijo = "queijo";
    let _Bacon =  "bacon";
    let _Salada = "salada";

    if(Maionese == true){
        escolhidos.push(_Maionese);
    }
    if(Carne == true){
        escolhidos.push(_Carne);
    }
    if(Queijo == true){
        escolhidos.push(_Queijo);
    }
    if(Bacon == true){
        escolhidos.push(_Bacon);
    }
    if(Salada == true) {
        escolhidos.push(_Salada);
    }
}

function finalizar() {
    
    let valorAcompanhamentos = escolhidos.length * 2;
    let sanduiche = document.getElementById("sanduiche").value;
    let valorSanduiche;
    let funciona = true;
    let valorTotal;

    if(sanduiche === "hamburguer"){
        valorSanduiche = 10;
    }
    else if(sanduiche === "cheeseburguer"){
        valorSanduiche = 15;
    }
    else if(sanduiche === "cheesebacon"){
        valorSanduiche = 21;
    }
    else if(sanduiche === "duplocheeseburguer"){
        valorSanduiche = 20;
    }
    else{
        alert("Por favor, escolha um sanduiche");
        funciona = false;
    }

    if (funciona) {
        valorTotal = valorAcompanhamentos + valorSanduiche;
        document.getElementById("total").innerHTML = valorTotal;
        alert("O sanduiche escolhido foi: " + sanduiche + " com os acompanhamentos: " + escolhidos + " O valor total foi de R$" + valorTotal);
    }
}
    