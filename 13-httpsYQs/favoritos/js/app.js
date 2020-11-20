let container = document.querySelector('.container')
//Miramos si hay algo en el storage
const storage = localStorage.getItem('favoritos')
console.log(storage);
//Si el storage está vacío lo iniciamos como un array vacío 
if (storage == null) {
  localStorage.setItem('favoritos',"[]")  
}


fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=788099c4461681a452d9ee372d586bdd')
.then(datos=> datos.json())
.then(respuesta=>{
    console.log(respuesta);
    let movies = ''
    respuesta.results.forEach(pelicula => {
    movies += `<article>
                        <h2 class="title">${pelicula.name}</h2>
                        <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" />
                        <button class="agregar">Favorito!</button>
                  </article>`  
});
    container.innerHTML = movies
    const button = document.querySelector('.agregar');
    console.log(button);
    //Generamos un evento click para dispararlo cuando el usuario toque el botón 
    button.addEventListener('click',()=> {
    //Miro cual es el estado del storage
    let storage = localStorage.getItem('favoritos')
    console.log(storage);
    //transformo el contenido de cadena de texto a array 
    let storageJs = JSON.parse(storage);
    console.log(storageJs)
    //Guardo el id de la pelicula dentro del array favoritos
    storageJs.push(id de la pelicula)
    //Transformo el Array de favoritos en cadena de texto
    let storageJson=JSON.stringify(storageJs)
    //Lo guardo en el sorage
    localStorage.setItem('favoritos', storageJson)
    
  })  
})
.catch(error=>console.log(error))