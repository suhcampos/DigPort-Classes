const nome = "Luiz Otavio Miranda";
const sobrenome = "miranda";
const idade = 30;
const peso = 84;
const altura = 1.80;
let anoAtual = 2010;

const imc = peso / (altura*altura);
const anoNascimento = anoAtual - idade;

console.log(nome, "tem", idade + "anos", "pesa", peso,"kg", "tem", altura, "de altura", "e seu IMC é de", imc, nome.toLowerCase(), "nasceu em", anoNascimento);
console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);