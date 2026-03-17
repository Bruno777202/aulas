/*
    1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/

// vetores de frotas
let frotas = ["banana", "maça", "pera", "uva", "morango"];

//construcão da tabela
console.log(frotas);
//tabela
console.table(frotas);

// length (quantidade de elementos)
console.log(frotas.length);
console.log(frotas[2]);

// adicionar o elemento ao final da tabela
frotas.push("tangerina");
console.table(frotas);
console.log(frotas.length);

// adicianar o elemento no inicio da tabela
frotas.unshift("goiaba");
console.table(frotas);
console.log(frotas.length);
console.log(frotas[0]);

console.table(frotas);
console.log("o quinto elemento é", frotas[5]);

frotas.splice(4);
console.table(frotas);
console.log(frotas.legth);

frotas.shift();
let novasfrotas = frotas.slice();
console.table(novasfrotas);
