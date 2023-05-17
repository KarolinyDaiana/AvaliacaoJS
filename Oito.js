const aluno = {
    nome: "Joaozinho",
    nota1: 8,
    nota2: 5,
    nota3: 8,
    media: function() {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    },
    resultado: function() {
        if((this.nota1 + this.nota2 + this.nota3) / 3 < 7) {
            return "Reprovado";
        } else {
            return "Aprovado"
        }
    }
}

console.log(aluno.nome, "\nMédia final: ", aluno.media(), "\nSituação: ", aluno.resultado())
