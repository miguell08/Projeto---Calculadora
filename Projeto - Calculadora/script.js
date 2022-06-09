function botao( valor ){
    document.getElementById('visor').value += valor;

}

function reset( C ){
    document.getElementById('visor').value = '';
}


function calcular( ){
    var resultado = 0;
    resultado = document.getElementById('visor').value;
    document.getElementById('visor').value = '';
    document.getElementById('visor').value = eval(resultado);   
}

function back( ){
    var resultado = document.getElementById('visor').value;
    document.getElementById('visor').value = resultado.substring(0,resultado.length-1);     
}

function percentage(porcento) {
     document.getElementById('visor').value += porcento;
     calculo = document.getElementById('visor').value.replace("%", "/100");
     document.getElementById('visor').value = eval(calculo);
}