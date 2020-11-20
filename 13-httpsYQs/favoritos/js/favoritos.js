//Revisamos si hay algo en el storage
const storage = localStorage.getItem('favoritos')
console.log(storage);
//Si no hay nada lo seteo vacio para que no de error 
if (storage == null) {
  localStorage.setItem('favoritos',"[]")  
}


let container = document.querySelector('.favoritos')
//Transformo favoritos a un array
let storageJs = JSON.parse(storage)
let movies = ''
//Por cada id en el array de favoritos pido la información
storageJs.forEach( id  => {
   
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=788099c4461681a452d9ee372d586bdd`)
    .then(datos=> datos.json())
    .then(respuesta=>{
        console.log(respuesta);
         movies = `<article>
                        <h2>${respuesta.title}</h2>
                        <img src="https://image.tmdb.org/t/p/w500/${respuesta.poster_path}" />
                    </article>`;
             
        container.innerHTML += movies;
    })
    .catch(error=>console.log(error))
                
});