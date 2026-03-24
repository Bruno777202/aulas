// laso de reptisão - 
// O professor  te 

// i++ de quando ele almente a variavel sem travar

for (let i = 0; i < 1000; i++) { //primeiro utiliza uma variavel 
console.log("eu vou prestar atenção nas aulas e anotar tudo")
}

console.log("---------------------------------------------------")
// escreva todos os números 1/20

for (let i = 1; i <= 20; i++) {
   console.log(i)
    
}
console.log("---------------------------------------------------")
// escreva todos números pares de 1 a 20
for (let i= 0; i <=  20; i+= 2) {
    console.log(i)
    
}
console.log("-----------------------------------------------------")
//

for (let i = 1; i <= 20; i++) {
    if(i % 2 == 0) console.log(i)
    
}
// i = 2 ==0 


//dado de 
let numeros = [5, 6, 8, 14, 0, 9, 7, 2]
let soma = 0

console.log(numeros.length)

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}
console.log(soma)