/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/



function podeVotar(idade) {
  let frase;
  if (idade < 16) {
    frase = "Não pode Votar";
  } else if (idade >= 18 && idade <= 65) {
    frase = "Pode votar, e é obrigatório!";
  } else {
    frase = "Pode votar, mas é opcional!";
  }
  return frase;
}
let idade = 23;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 25;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 12;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 57;
console.log("Idade:", idade, "-", podeVotar(idade));


/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/

function aluno (notas) {
    let frase;
  if (notas < 6.9) {
    frase = "esta reprovado"
}else if(notas >= 5.0 && notas <= 6.9) {
    frase = "ésta recuração"
}else if(notas >= 6.9 && notas == 7.0 ) {
    frase = "você passou de ano :)"}
   return frase;

 let notas = 8.5
 console.log("notas", notas, aluno(notas))
 notas = 6.9
  console.log("notas", notas, aluno(notas))
 notas = 3.0
  console.log("notas", notas, aluno(notas))
 notas = 10.0;