/*function olamundo(){
    alert("olamundo!");
}
*/
const olamundo= () => {
    alert ("olamundo cjs com arry function");
}
const mudartexto = () => {
    
let elementoAlvo = document.getElementById("texto")

    document.getElemento("texto").innerhtml = "novo texto com js"
    document.getElemento("texto").style.color = "yellow"
    document.getElemento("texto").style.backgroundcolor = "red"
}


const enviarnome = () => {

    let nomedigital = document.getElementById("nome").value;

    alert("ola " + nomedigital);

    let nomedigital = document.getElementsByName("nome").value;
    alert("ola " + nomedigital)
} 

const somar = () => {
   
   event.preventDefault();

    let numero1 = document.getElementById("n1").value
  let numero1 = parselnt(document.getElementById("n2").value)
    
    let result = numero1 + numero2;

    document.getElementById("resultado").value
}

