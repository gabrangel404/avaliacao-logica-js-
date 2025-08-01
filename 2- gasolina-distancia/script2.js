function butao() {
    let distancia = parseFloat(document.getElementById("distancia").value);
    let consumoMedio = parseFloat(document.getElementById("consumo").value);
    let precoGasolina = parseFloat(document.getElementById("preco").value);
    let numeroPassageiros = parseInt(document.getElementById("passageiros").value);
    let gasolinaNecessaria = parseFloat(distancia / consumoMedio);
    let custoViagem = parseFloat(consumoMedio / precoGasolina);
    let custoPessoa = parseFloat(custoViagem / numeroPassageiros);

    document.getElementById("resultado_gasolina_litros").innerHTML = gasolinaNecessaria;
    document.getElementById("resultado_custo").innerHTML = custoViagem;
    document.getElementById("resultado_custo_pessoa").innerHTML = custoPessoa;
    
}