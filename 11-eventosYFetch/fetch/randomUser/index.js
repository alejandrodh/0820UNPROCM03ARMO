let url = "https://randomuser.me/api";

fetch(url)
    .then(function(respuesta){
        //Procesar respuesta a formato operable por JS
        return respuesta.json()
    })
    .then(function(data){
        // console.log(data);
        //Nuestro código
        let userData = data.results[0];
        let imagen = document.querySelector('img');
        let nombre = document.querySelector('.name');
        let email = document.querySelector('.email');

        imagen.src= userData.picture.thumbnail
        nombre.innerText += userData.name.first + " " + userData.name.last;
        email.innerText += userData.email

    })
    .catch(function(error){
        console.log(error);
    })


let urlProvincias = "https://apis.datos.gob.ar/georef/api/provincias";

fetch(urlProvincias)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(data){
        console.log(data.provincias);
        let provincias = data.provincias;
        let lista = document.querySelector('.lista');

        for(let i=0; i<provincias.length; i++){
            lista.innerHTML += `<li> ${provincias[i].nombre} </li>` 
        }

    })
    .catch(function(error){
        console.log(error);
    })