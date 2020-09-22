let saludo = "hola";
// console.log(saludo);

let nombreDeLaVariable = "un texto";
let acaUnNumero = 12;
let esVerdadero = true;
let alumnos = "Martina, Alejandro, Gonzalo, Constancio, María, Ana, José, Franca";

let colores = ["rojo", "blanco", "negro", "violeta"];

let array = [
    "hola",
    12,
    "Gonza",
    true,
    colores
]
// console.log(array[4][0]);


let datosVarios = [
    nombreDeLaVariable,
    acaUnNumero,
    esVerdadero,
    alumnos
]

datosVarios[10678] = "milanesa";

// console.log(datosVarios);


let contactos =[
    [
        "Gonza",
        "gonza@dh.com",
        "monroe860"
    ],
    [
        "dario@dh.com",
        "Darío",
        "SantaFe 1200"
    ],
    [
        "Callao 1900",
        "Hernán",
        "hernan@dh.com",

    ],
]


let gonza = {
    nombre: "Gonza",
    email: "gonza@dh.com",
    direccion: "monroe 860",
    edad: 25,
    colores:["blanco", "rojo", "negro"],
    saludar: function(){
        return "Hola soy " + this.nombre;
    }
}

console.log(gonza.saludar());

let ale = {
    email: "ale@dh.com",
    nombre: "Ale",
    direccion: "Callao 860",
    saludar: function () {
        return "Hola soy " + this.nombre;
    }
}
console.log(ale.saludar());

let profesores = [gonza, ale];
// console.log(profesores)