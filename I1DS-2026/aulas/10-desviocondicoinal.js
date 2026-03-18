//desvio condicional - if - else

    /* condicional simples com if (condição)
        codigo a ser execuntado */

    let anonascimento = 2003

 if (anonascimento > 2003){console.log ("a pessoa nasceu depois de 2003")
    
 }
 if (anonascimento < 2003){
    console.log("a pessoa nasceu antes 2003")
 }

    if(anonascimento == 2003){
        console.log ("a pessoa nasceu em 2003")
    }

//condicoinal if-else

    if(anonascimento > 2000){
        console.log("a pessoa nasceu depois do 2000")
    }else{
        console.log("a pessoa nasceu antes 2000")
    }



//condicional composta com if

const login = "admin";
const senha = "12345";

let loginuser = "admin";
let senhauser = "12345";

if(loginuser == login && senhauser == senha ){
    console.log("login realizado com sucesso")
}

//condicional if else
if(loginuser == login && senhauser == senha){
    console.log("acesso permitido")
}else{
    console.log("acesso negado")
}


// desvio aninhados - if else-if-else...

let semaforo = "verde";

if(semaforo == "vermelho"){
    console.log("pare")
}else if(semaforo == "amarelo"){
    console.log("atenção");
}else if(semaforo == "verde"){
    console.log("siga")
}else{
    console.log("opcao incorreta")
}

// criando variaveis locais ( só existem dentro do bloco onde foram criados)

let mes = "agosto"
let dia = "15"
if(dia = 15 && mes == "agosto"){
    let mensagem = "hoje é dia 15 de agosto"
    console.log(mensagem)
}

console.log("tentando acesssar a variavel 'mensagem' fora do escopo do IF  via dar erro!!!")
//console.log(mensagem)

/********************************************************************************************/
// if ternario (if inline)

let preco = 500
let resultado = (preco <= 100) ? "ta barato" : "vish, ta caro";

console.log("preco",preco, resultado)

// o codigo acima faz a mesma coisa que o codigo abaixo

if(preco <= 100 ) {
    resultado = "ta barato"
}else{
    resultado = "vish, ta caro"
}
console.log("preco",preco, resultado)
