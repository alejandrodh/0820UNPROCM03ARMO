let media = "movie";
let timeWindow = "week";
let apiKey = "e3f1ae8bae04c04c63af7b6996decd02"
let url = `https://api.themoviedb.org/3/trending/${media}/${timeWindow}?api_key=${apiKey}` //Viene de la API de TMDB

fetch(url)
    .then(function(respuestas){
        return respuestas.json()
    })
    .then(function(data){
        //Aca operamos con los datos.
        console.log(data);

        let info = data.results //Esto es un array.
        let movies = document.querySelector('.movies');
        console.log(movies);
        
        for(let i=0; i<4; i++){
            movies.innerHTML += `<article class="card-wrapper col-sm-3">
                                    <div class="card my-3">
                                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${info[i].title}</h5>
                                                <p class="card-text">${info[i].overview}</p>
                                                <a href="movie.html?id=${info[i].id}" class="btn btn-primary">Ver más</a>
                                            </div>
                                        </div>
                                    </article>`
        }

    })
    .catch(function(error){
        console.log(error);
    })






// let apiKey = "e3f1ae8bae04c04c63af7b6996decd02";
// let mediaType = "movie";
// let timeWindow= "week"
// let url = `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${apiKey}`;

