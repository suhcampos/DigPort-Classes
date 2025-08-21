//Crie uma função que receba dois números e uma operação matemática e uma operação matemática 
// ("+", "-", "*", "/") e retorne o resultado da operação entre dois números

function calcular(a, simbolo, b) {
    if (simbolo === "+") {
        return a + b;
    } else if (simbolo === "-") {
        return a - b;
    } else if (simbolo === "*") {
        return a * b;
    } else if (simbolo === "/") {
        return a / b;
    }
}

console.log(calcular(10, "+", 7));
console.log(calcular(37, "-", 25));
console.log(calcular(4, "*", 8));
console.log(calcular(30, "/", 6))

//Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas
// as letras em caixa alta. Utilize essa função para converter diferentes strings.
function maiusculo(texto) {
    return texto.toUpperCase()
}
console.log(maiusculo("susan"));
console.log(maiusculo("rafael"));
console.log(maiusculo("trabalho"));
console.log(maiusculo("ferias"));

//Crie uma função que receba o ano de nascimento e o ano atual.
//A função deve retornar a idade da pessoa.
function idade(anoAtual, anoNascimento) {
    return anoAtual - anoNascimento;

}
console.log(idade(2025, 2000));
console.log(idade(2025, 1970));
console.log(idade(2025, 2003));

//Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado.
//Utilize essa função para calcular a média de diferentes conjuntos de números.
function media(numeros) {
    if (numeros.length === 0) {
        return "array vazio";
    }
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma / numeros.length
}
 console.log(media([15, 25, 40, 65, 45]));