"use strict";

function redondear(numero){
    return (Math.floor((Math.round(numero * 1000) / 1000) * 100) / 100) || 0;
}

function calcular_Kwh(){
    let total_mes = document.getElementById('total_mes').value;
    let factor = document.getElementById('factor').value;
    let lectura_actual = document.getElementById('lectura_actual').value;
    let lectura_anterior = document.getElementById('lectura_anterior').value;

    let precioxKwh = parseFloat(total_mes) / parseFloat(factor);
    precioxKwh = Math.floor((Math.round(precioxKwh * 1000) / 1000) * 100) / 100;

    let monto_pagar = ((parseFloat(lectura_actual) - parseFloat(lectura_anterior)) * precioxKwh) || 0;
    monto_pagar = Math.floor((Math.round(monto_pagar * 1000) / 1000) * 100) / 100;

    document.getElementById('pago').innerHTML = monto_pagar || 0;
    document.getElementById('restante').innerHTML = redondear((parseFloat(total_mes) - monto_pagar));
}