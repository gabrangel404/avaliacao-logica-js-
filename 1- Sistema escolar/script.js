function butao() {
    let semPcd = parseInt(document.getElementById("alunos").value);
    let comPcd = parseInt(document.getElementById("alunos_pcd").value);
    let soma = semPcd + comPcd;
    let percentual = parseInt(comPcd / soma * 100);
    
    let Total =  document.getElementById("total_alunos").innerHTML = soma;
    let Porcentagem =  document.getElementById("percentual_pcd").innerHTML = percentual;
}