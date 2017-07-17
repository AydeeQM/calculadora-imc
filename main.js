var peso=prompt("ingresa tu peso");
peso=parseInt(peso);

var tamaño=prompt("Ingresa tu tamaño");
function calcularImc(){
	var imc=peso/(tamaño*tamaño);
document.write(imc);
}
 calcularImc();