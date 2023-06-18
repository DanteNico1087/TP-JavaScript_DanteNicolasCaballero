//Declaramos variables
function calcular() {
//let resumen = document.getElementById('resumen').value;
//console.log(resumen)
let cantidad= document.getElementById('cantidad').value;
console.log(cantidad)
//let total= document.getElementById('total').value;
//console.log(total)
let valorDescuento = document.getElementById('descuento').value;
console.log(valorDescuento)

const listaDescuento = {

    "0": 0,
    "1": 80,
    "2": 50,
    "3": 15,

}

let valorticket = 200
let subtotal = valorticket*cantidad
console.log(subtotal)
let descuento = (subtotal*listaDescuento[valorDescuento]) / 100
console.log(descuento)
let resultado = subtotal-descuento
console.log (resultado)

document.getElementById('total').innerHTML = resultado; 

}



document.getElementById("resumen").addEventListener("click", calcular);

 