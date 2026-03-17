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
console.log("o vetor ogora tem ", dinos.length, "elementos");
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

//pop -> remaver um elementos do final  do vetor (ultimo elemento)
dinos.pop();
console.table(dinos);
console.log("o vetor agora tem ", dinos.length, "elementos");

dinos.shift();
console.table(dinos);
console.log("o vetor agora tem ", dinos.length, "elementos");

// splice -> remove um elementos a partir de um indice e tambem precisa ser informada a quantidade de resgistro a ser excluido a partir de indice.
dinos.splice(1, 1); //remove somante o sugundo item da lista
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

//adicione mais elementos ao vetor
dinos.push("Pterodatilo");
dinos.push("estegossauro");
dinos.push("argentinossauro");

// procurar um elemento a partir do nome(descrição)
//imdex off (procurado) -> retornado o indice do elemento do vetor
let procurado = "estegossauro";
let indice = dinos.indexOf(procurado);
console.log("o ", procurado, "está no indice", indice);
// indexof (procurado) -> retornado -1 caso não encontre o elementos
procurado = "crestianossauro";
indice = dinos.indexOf(procurado);
console.log("o ", procurado, "está no indice", indice);

// excluir um elemento com base em seu nome
// 1 localizar oindice do elemento a partir do nome
// 2a excluir o registro com base no indice retornado

procurado = "estegossauro";
indice = dinos.indexOf(procurado);
console.log("o ", procurado, "está no indice", indice);
dinos.splice(indice, 1);
console.table(dinos);

// alterar o valoer de um elemento a partir do indice
dinos[1] = "anquilossauro";

// slice -> criar uma copia do veotor
let novolista = dinos.slice(); // copia completa do vetor dinos

let listaparcial = dinos.slice(1, 3);
//partir do indice 1 com os 3 elementos
console.table(dinos);
