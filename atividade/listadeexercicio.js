let x = 100
let y = 30

console.log("x =", x,"\n =", y)
console.log("----------------")

let soma = x + y
console.log(" a soma x + y é", soma)

let subtracao = x - y
console.log("subtração de x - y é = ", subtracao)

let multplicacao = x * y
console.log("multplicação de x * y é =", multplicacao)

let divisao = x / y
console.log("divisão de x / y é =", divisao)

let resto = x % y
console.log("resto divisão x % y é =", resto)

// calcular área do retangulo

console.log("------------------------------------------------------")

console.log("calcular área retangulo")

let base= 20
let altura = 5

let vezes = 20 * 5
console.log(" mulplica a área 20 * 5 é =", vezes)

console.log("agora fazer a divisão para dar o resultado")

let dividir = vezes / 2
console.log("agora dividir vezes / 2 é =", dividir)
console.log("então o resultado da área é =", dividir)

// calcular o volume paralelepípedo.

let base2 = 50
let altura2 = 20
let comprimento = 10

let resultado = 50 * 20 * 10;
console.log("fazer calculo da base x alturo x comprimento é =", resultado)

console.log("---------------------------------------------------------")

let valor = 500
let desconto = 10 / 500
console.log("dividir o valor do 10 / 500 é =",desconto)

let valorfinal = 500 * desconto
console.log("valorfinal, valor do produto 500 * desconto é =", valorfinal)

console.log("-----------------------------------------------------------")

let celsius = 20 
let Fahrenheit = 20 * 1.8 + 32
console.log("mutplicar 20 * 1.8 + 32 é =", Fahrenheit)
console.log("resultado celsius para fahrenheit",Fahrenheit)

console.log("------------------------------------------------------------")

let nota1 = 10
let nota2 = 7
let nota3 = 4

let notatotal = 10 + 7 + 4
console.log("somar todas as notas 10 + 7 + 4 é =",notatotal)

let dividirtotal = notatotal / 3
console.log("dividir notatotal por 3 é =", dividirtotal)

console.log("-------------------------------------------------------------")

let a = 40
let b = 10
let c = 20

let somar2 = 40 + 10 + 20 
console.log("somar 40 + 10 + 20 =", somar2)

let dividir2 = somar2 / 2
console.log("dividir 70 / 2 =",dividir2)

console.log("----------------------------------------------------------------")

let horas = 2
let minutos = 60
console.log("entao um hora e = 60min")

let multplicarh = 60 + 60
console.log(" é 60 + 60 é =",multplicarh, "que é 2 horas em minutos")

// parte 2

console.log("-----------------------------------------------------------------")

let par = 4

if (par > 4 ){
    console.log("o numero 4 é par")
}
if (par < 4){
    console.log("o número menor que 4 é impar")
}

if (par == 4){
    console.log ("igual quatro é par já que é mesmo número")
}
console.log("-----------------------------------------------------------------")
let impar = 5

if (impar > 5){
    console.log("o número maior que 5 é par ")
}
if (impar < 5){
    console.log("o número menor que 5 é par")
}
if (impar == 5){
    console.log("o número igual cinco é impar")
}
console.log("--------------------------------------------------------------")

let mútiplo = 9

if (mútiplo == 9){
    console.log(" 9 é multiplo de 3")
}
console.log("-----------------------------------------------------------------")

let aprovado = 7
let recuperacao = 6
let reprovado = 5

if (aprovado > 7){
    console.log("você passsou de ano")
}
if (recuperacao == 6 ){
    console.log("você está de recuperacao")
}
if (reprovado < 5 ){
    console.log("você está de recuperacao")
}
console.log("--------------------------------------------------------------------")

let idade = 19

if (idade < 18){
    console.log("menor de 18 anos não é obrigatório votar")
}
if (idade > 18){
    console.log("maior de 18 é obrigatório votar")
}
if (idade == 18){
    console.log("18 é obrigatório votar")
}
console.log("----------------------------------------------------------------------")

let número = 10
let número2 = 50

if (número > 10){
    console.log(" este número está entre 10 e 50")
}
if (número2 < 50){
    console.log("este número é entre 10 e 50")
}
if (número2 > 50){
    console.log(" este número está entre 10 e 50")

if (número == 10){
    console.log("esté número é 10 divisor de águas")
}

if (número2 == 50){
    console.log("esté número é 50 divisor de águas")
}

console.log("----------------------------------------------------------------------");

const nome = "osvaldo"
const senha = "1245"

let loginnome = "osvaldo"
let senhauser = "1245"

if (loginnome == nome && senhauser == senha){
    console.log("login realizafdo com sucesso")
}else{
    console.log("login négado!")
}
console.log("------------------------------------------------------------------------");
/*
let num = 10
let num2 = 20

if (num > 10){
    console.log("esse número é maior que ")
}
if (num2 > 20 )
*/
console.log("-----------------------------------------------------------------------");
/*let num3
*/
console.log("------------------------------------------------------------------------")
let crianca = 11
let jovemadulto = 12
let adulto = 20
let idoso = 60

if (crianca > 11){
    console.log("maior que 11 anos não é criança é adolescente")
}
if (crianca < 11){
    console.log("menor que 11 anos é criança")
}
if (jovemadulto > 12){
    console.log("maior que 12 anos é adolescente")
}
if (jovemadulta < 12){
    console.log("menor que 12 anos não é adolescente ")
}
if (adulto > 20){
    console.log("maior que 20 é adulto")
}
if (adulto < 20){
    console.log("menor que 20 não é adulto")
}
if (idoso > 60 ){
    console.log("maior que 60 é idoso ")
}
if (idoso < 60 ){
    console.log("menor que 60 não idoso")
}
console.log("----------------------------------------------------------------------------")

let semana = 7

switch (semana) {
    case dia1:
    console.log("dia 1")    
    case dia2:
        console.log("dia 2")
    case dia3:
        console.log(" dia 3")
    case dia4:
        console.log("dia 4") 
    case dia5:
        console.log("dia 5")  
    case dia6:
        console.log("dia 6")  
    case dia7:
        console.log("dia 7") 
        break;
    
    default:
        break;
}

console.log("------------------------------------------------------------------------------")

let mes = 12

switch (mes) {
    case mesjaneiro1:
        console.log("janeiro mes 1")
    case mesfevereiro2:
        console.log("fevereiro mes 2")
    case mesjaneiro1:
        console.log("março mes 3")  
    case mesabril4:
        console.log("abril mes 4")   
    case mesmaio5:
        console.log("maio mes 5")  
    case mesjunho6:
        console.log("junho mes 6")  
    case mesjulho7:
        console.log("julho mes 7")   
    case mesagosto8:
        console.log("agosto mes 8")     
    case mesetembro9:
        console.log("setembro mes 9") 
    case mesoutubro8:
        console.log("outubro mes 10") 
     case mesnovembro11:
        console.log("novembro mes 11")  
    case mesdezenbro12:
        console.log("dezenbro mes 12")
      break;

    default:
        break;
}
console.log("------------------------------------------------------------------------------")

console.log("------------------------------------------------------------------------------")
console.log("                                    MENU                                      ")
console.log("------------------------------------------------------------------------------")

let n1 = 10
let n2 = 10

let somar3 = 10 + 10
switch (somar3) {
    case console.log("n1: " + n2):
        
        break;

    default:
        break;
}
let menos = 3
let menos1 = 5

let menor = 3 - 5
switch (menor) {
    case console.log("menos" + menos1):
        
        break;

    default:
        break;
}

let vezex = 50
let vezex1 = 70

let mutplicador = 50 * 70 

switch (mutplicador) {
    case console.log("vezex"  * vezex1):
        
        break;

    default:
        break;
}
let partir = 10 
let partir1 = 2

let partir2 = 10 / 2
switch (partir2) {
    case console.log("partir" / partir1):
        
        break;

    default:
        break;
}
console.log("------------------------------------------------------------------------------------------")
for (let i = 0; i < 100; i++) {
    console.log(i)
    
}
/*for (let in/*dex = 0; index < array/*.length; index++) {
    const element/* = array[index];
    
}*/
for (let i = 0; i < 50; i++) {
    console.log(i)
    
}
for (let i = 1; i < 50; i++) {
    console.log(i)
    
}
let v1 = 100
let somar = 0

console.log(v1.length)

for (let i = 0; i < v1.length; i++) {
    somar += v1[i]
}
console.log(somar)

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}