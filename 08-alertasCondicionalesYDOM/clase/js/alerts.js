
// Alerts, Confirm y Prompt
alert("Hola"); //No retorna
let estasAhi = confirm("¿Estás ahí?"); //Retorna TRUE o FALSE
let nombre = prompt("¿Cuál es tu nombre"); //Retorna el texto del campo.

console.log(estasAhi);
console.log(nombre);


let codigoDeDescuento20 = 987; 
let codigoDeDescuento50 = 123; 
let tarjeta = "ClubLaNación"

let miCodigo = prompt("¿Cuál es tu código de descuento?");
let miTarjeta = prompt("¿Cuál es tu tarjeta de descuentos?");

if(codigoDeDescuento20 == miCodigo && tarjeta == miTarjeta){
    console.log("Tenés un descuento del 20%");
} else if (codigoDeDescuento50 == miCodigo && tarjeta == miTarjeta) {
    console.log("Tenés un descuento del 50%");
} else {
    console.log("No tenés descuentos en tu compra");
}









