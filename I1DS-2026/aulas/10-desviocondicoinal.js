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
