//Reapaso variables y objetos.
// console.log("hola");

let flor = {
    nombre: "Flor",
    apellido: "Aguirre"
}

let numero = 123;

let alumnos = [
    {
        nombre: "Flor",
        apellido: "Aguirre"
    },  
]

// Operadores matemáticos
// +, -, *, /, % (módulo);

/* Operadores lógicos: nos sirven para comparar.
and: &&
or: ||
not: !
equal: == 
strict equal: ===
*/

//Condicionales.
// if(//comparación con resultado "true"){
//     //Código a ejecutar. Por ejemplo aplicar un descuento.
// }

let codigoDeDescuento20 = 987; 
let codigoDeDescuento50 = 123; 
let tarjeta = "ClubLaNación";

let miCodigo = 123;
let miTarjeta = "Clarin365"

if(codigoDeDescuento20 == miCodigo && tarjeta == miTarjeta){
    console.log("Tenés un descuento del 20%");
} else if (codigoDeDescuento50 == miCodigo && tarjeta == miTarjeta) {
    console.log("Tenés un descuento del 50%");
} else {
    console.log("No tenés descuentos en tu compra");
}

// console.log("llegue al final");








