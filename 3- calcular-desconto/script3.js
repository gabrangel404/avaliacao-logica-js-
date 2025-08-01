function calcular() {
    let valorTotal = parseFloat(document.getElementById("venda").value);
    let pagar = document.getElementById("pagamento").value;

    if (pagar == "avista") {
        valor = valorTotal * 0.95;
    } 

    document.getElementById("resultado_venda").innerHTML = "R$" + valorTotal;
    confirm("O valor total da compra foi " + valorTotal + " deseja confirmar a compra?");
    
    if (confirm) {
        alert("Compra realizada com sucesso!")
    }else {
        alert("Compra recusada.")
    }
}