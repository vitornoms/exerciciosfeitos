function validarIdadeParaVotar(idade) {
    if (idade < 16) {
        return "1 - Não possui idade para votar.";
    } else if (idade >= 16 && idade < 18 || idade >= 70) {
        return "2 - Voto facultativo.";
    } else {
        return "3 - Voto obrigatório.";
    }
}

// Exemplo de utilização:
const idade = 14
const mensagem = validarIdadeParaVotar(idade);
console.log(mensagem);