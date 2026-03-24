// dado o vetor calcule é exibe a quantidade de pares 
//impares

let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2]
let par = 0;
let inpar = 0;



for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) par++ 
  else inpar++
}

console.log("quantidade de pares", par)
console.log("quantidade de inpares", inpar)

// dado o vetor mutplique por 3
console.table(numeros)

for (let i = 0; i < numeros.length; i++) {
    numeros[i] *= 3;
}

console.table(numeros)

// dado uma matriz 2x3, imprima todos os sens elementos com as respectivas posições
let matriz = [
    [6, 4, 1]
    [3, 7, 8]
] 
console.table(matriz)

for (let linha = 0; linha< matriz.length; linha++) {
   for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log("matriz", linha , coluna, matriz[linha][coluna]);

   }    
}

