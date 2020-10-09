// console.log("Dom");

let titulo = document.querySelector('h1');
titulo.style.color = "red";
titulo.style.backgroundColor = "#ccc";
titulo.style.padding = "20px 0";

let lista = document.querySelector("ul");
lista.innerHTML += "<li>Elemento 4 agregado solo por js</li>"

titulo.innerText += " con nueva data y nuevo estilo solo por js"