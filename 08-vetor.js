// cirando variaveis do tipo array (vetor)

var dinos = ["tiranosauro rex", "estegossauro", "brontosauro", "tricerátops"];

// impremindo os dados em forma de linha
console.log(dinos);
// imoremindo  os dados em forma de tabela
console.table(dinos);
// length -> "tamanho" do arry (quantidade de elementos)
console.log("o vetor tem ", dinos.length, "elementos");

//impremir elementos a partir do useImperativeHandle(
console.log(dinos[2]);

// push -> adicionar um elemento um novo elemento no final da fila
dinos.push("anquilossauro");
console.log("o vetor qgora tem ", dinos.length, "elementos");
console.table(dinos);
console.log(dinos[4]);

// unshift -> adiciona um novo elemento no inicio da fila
dinos.unshift("velociraptor");
console.log("o vetor qgora tem ", dinos.length, "elementos");
console.table(dinos);
console.log(dinos[0]);

// obter um elemento a partir de indice
console.log("1a posição", dinos[0]);
console.log("2a posição", dinos[3]);
console.log("3a posição", dinos[4]);
console.log("20a posição (não existe)", dinos[20]);
