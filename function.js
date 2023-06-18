//Declaramos variables

const resumen = document.getElementById('resumen');
var cantidad= document.getElementById('cantidad');
var total= document.getElementById('totalapagar');
const valorticket = 200
const valorEstudiante = valorticket * 0.80
const valorTrainee = valorticket * 0.80
const valorJunior = valorticket * 0.80


document.getElementById("resumen").onclick = calcular;

function calcular() {
  
  document.getElementById("total").innerHTML =  (parseFloat('cantidad') * valorticket) - valorEstudiante;
}
 