class Estudante {
    constructor(nome, nota1, nota2, nota3, nota4) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.media = (nota1 + nota2 + nota3 + nota4) / 4;
    }
}

let aluno = [];
function cadastrar() {
    let alunoNome = document.getElementById("nome").value;
    let alunoNota1 = parseFloat(document.getElementById("primeiro").value);
    let alunoNota2 = parseFloat(document.getElementById("segundo").value);
    let alunoNota3 = parseFloat(document.getElementById("terceiro").value);
    let alunoNota4 = parseFloat(document.getElementById("quarto").value);
    
    let novoAluno = new Estudante(alunoNome, alunoNota1, alunoNota2, alunoNota3, alunoNota4);
    aluno.push(novoAluno);
    alert("Aluno cadastrado com sucesso!");
}

function relatorio() {
        let texto = "";

    for (let i = 0; i < aluno.length; i++) {
        texto += "<li>" + aluno[i].nome + " - Média: " + aluno[i].media.toFixed(2) + "</li>";
    }

    document.getElementById("lista_alunos").innerHTML = texto;
}