//switch case -> estrutura de decisão usada quando queremos comparar  o valor de uma variavel possiveis resultados.
// regra do castello - tiver mais que 3 comparadores, faça um switch 

//exenplo 01 - menu
// neste exemplo a variavel manuselecionado guardara o nome de uma opção de menu
// o switch qual foi a opção escolhida e exibe uma mensagem correspondente

let menuselecionado = "home"
switch (menuselecionado) {
    case "home":
        console.log("você clicou no link 'home'");
        break;
    case "quem somos":
      console.log("você clicou no link 'quem somos'");
    case "contato":
     console.log("você clicou link 'contato'");   
      break;
    case "redes sociais": 
      console.log("você clicou no link 'redes sociais'")
      break;
    case "pegue café":
     console.log("você clicou no link 'pegue café'");
      break
     default:
     console.log("opção incorreta, selecionado uma opção no menu");
    break;
}
