//               01234567
let umaString = "um texto"
umaString[3]
umaString.charAt(3)
umaString.charAt(4)
umaString.concat(" um", " outro", " texto")
umaString.replace("Um", "outra")        //Substitui "Um" por "outra" → "outra texto"
umaString.length                        //Retorna o comprimento da string → 8
umaString.slice(0, 2)                   //Corta do índice 0 ao 2 (exclusivo) → "Um"
umaString.slice(2, 4)                   //Corta do índice 2 ao 4 (exclusivo) → " t" (espaço + "t")

console.log(umaString);
console.log(umaString[3]);
console.log(umaString.charAt(4));
console.log(umaString.concat(" um", " outro", " texto"));
console.log(umaString.replace("Um", "outra"));//Substitui "Um" por "outra" → "outra texto");