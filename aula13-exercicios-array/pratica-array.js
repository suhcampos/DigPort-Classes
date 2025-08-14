//criar um array com 5 numerose imprimir todos
const numeros = [10, 20, 30, 40, 50];

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//calcular a soma e a média dos elementos de um array

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(soma);

const media = soma / numeros.length
console.log(media);

//encontrar o maior e menos número de um array
let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log('Maior número:', maior); 
console.log('Menor número:', menor);


//criar um array de 5 numeros sem declarar diretamente a variavel usando for