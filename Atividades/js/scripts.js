const cadastro = (event) =>{
    event,preeventdefault();
         /*capturando os valores do elemento por id*/
    let nome = document.getElementById("nome").value
      let email = document.getElementById("e-mail").value

      /*capturando os valores do elemento por id*/
      let lista = document.getElementById("lista");
}
//ciar um novo elemento li = nome
let novoitem = document.createElement("li");
novoitem.innertext=nome + "-" + email

lista.appendchild(novoitem);

document.getElementById("nome").value = ""
document.getElementById("email").value = ""