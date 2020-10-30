let titulo = document.querySelector('h1');
let subtitulo = document.querySelector('h2');
let misterio = document.querySelector('a');

titulo.addEventListener('click', function(event){
    this.style.color="red";
    subtitulo.style.display = "none";
    // console.log(event);
})

titulo.addEventListener('dblclick', function(){
    this.style.color = "black";
    subtitulo.style.display = "block";
})

misterio.addEventListener('click', function(e){
    e.preventDefault();
    subtitulo.style.color = "#fff";
    subtitulo.style.backgroundColor = "#000";
})


window.addEventListener('keypress', function(e){
    console.log(e.key);
})






















// let titulo = document.querySelector('h1');
// titulo.addEventListener('click', function(){
//     titulo.style.backgroundColor = "#000";
//     titulo.style.color = "#fff";
// })
// titulo.addEventListener('dblclick', function () {
//     titulo.style.backgroundColor = "#fff";
//     titulo.style.color = "#000";
// })