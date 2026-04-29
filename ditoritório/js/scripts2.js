// contador de 
let contador = document.getElementById("contador")

const adicionar = () =>{
   let valoratual = parseInt(contador.innerHTML);
   valoratual++;
   contador.innerHTML = valoratual;
}

const zerar = () =>{
   contador.innerHTML = 0;
}

const diminuir = () =>{
 let valoratual = parseInt(contador.innerHTML)
   valoratual--;
   contador.innerHTML = valoratual;
}

/* exercicio 02*/

const mudarcor = () =>{
    let cor = document.getElementById("colorpicker").value;
    //buscar o elemento alvo
    let quadrado = document.getElementById("quadrado");

    // aplicar cor do elemento.(backgroud-color)
    quadrado.style.backgroundColor = cor;

}

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let resultado = document.getElementById("resultado");

const subtrair = () =>{
    let valor = parseFloat(num1.num2) - parseFloat(num2.num1)
    resultado.innerText = valor;
}

const somar = () =>{
    let valor = parseFloat(num1.num2) + parseFloat(num2.num1)
    resultado.innerHTML = valor;
}

const multiplicacao = () =>{
    let valor = parseFloat(num1.num2) *  parseFloat(num2.num1)
    resultado.innerText = valor;
}

const dividir = () =>{
    let valor = parseFloat(num1.num2) / parseFloat(num2.num1)
    resultado.innerText = valor;
}