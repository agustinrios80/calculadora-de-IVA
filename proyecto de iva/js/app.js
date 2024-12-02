// Funcion que se encarga de realizar el calculo del IVA
function calcularIVA(){
    const precio = document.querySelector("#precio").value;
    const iva = document.querySelector("#iva").value / 100; 

    // Realizar el calculo del IVA
    const resultado = parseFloat(precio) * (1 + parseFloat(iva));

    // Mostrar el resultado
    document.querySelector("#iva-amount").innerHTML = "Importe del IVA: $" + (resultado - parseFloat(precio)).toFixed(2);
    document.querySelector("#total").innerHTML = "Precio final: $" + resultado.toFixed(2);
}

// Evento para que la funcion se ejecute cada vez que ingresemos un valor en los campos
document.querySelector("#precio").addEventListener("input", calcularIVA);
document.querySelector("#iva").addEventListener("input", calcularIVA);