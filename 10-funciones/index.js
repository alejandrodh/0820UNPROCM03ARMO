//Probando funciones

//Declarar una función.
function saludo(nombre){
    return "Hola " + nombre//Puede necesitar un return
}

function modificarH1(){
    let titulo = document.querySelector("h1");
    titulo.innerText = "Hola Ale";
}

//ejecución de función
//console.log( saludo() );
modificarH1();

// console.log(saludo().length); 

function contarNombre(){
    return "Hola a todos";
}

// console.log(contarNombre().length);

let nombres = ["Ale", "Gonza", "Daro", "Franca", "Martin", {nombre: "pedro"}];

for(let i=0; i<nombres.length; i++){
    console.log(saludo(nombres[i]));
}

//Scopes
let numeroAle = 4356789;
let numeroMagico = 9;

function sumar(num1, num2){
   let numeroMagico = 10 //Scope local
    console.log(numeroMagico);
    return num1 + num2
}

console.log(sumar(10,20));
console.log(numeroMagico);
