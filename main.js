
function Calcular(){
    var records = document.getElementById('records');
    var peso = document.getElementById('peso');
    peso=parseInt(peso.value);
    var estatura = document.getElementById('estatura');
    estatura=parseInt(estatura.value);
    var resultado = peso/(estatura*estatura);
    records.innerHTML = resultado;

}
