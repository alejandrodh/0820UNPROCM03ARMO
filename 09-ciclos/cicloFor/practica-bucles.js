let data =[
    {
     "id": 1,
     "name": "Cafetera Moulinex Dolce Gusto Edited",
     "price": 100,
     "discount": 50,
     "category": "visited",
     "description": "Cafetera Dolce Gusto Lumio. La cafetera Dolce Gusto Lumio es de variedad automática que ha llegado con un diseño radical al que nos tenía acostumbrados Dolce Gusto.En este post te contamos todo lo que necesitas saber sobre ella, desde sus características técnicas hasta la calidad de las cápsulas o price.",
     "image": "img-cafetera-moulinex.jpg"
    },
    {
     "id": 2,
     "name": "Macbook Pro 2022",
     "price": 500,
     "discount": 3,
     "category": "in-sale",
     "description": "Macbook Pro 2019 Mpxq2ll/a Intel Core i5 2.3 Ghz 8gb RAM 128gb SSD Pantalla 13.3\" Retina Apple Nueva Original. Importada de USA. Se entrega con la factura de compra para contar con la garantía del fabricante",
     "image": "img-macbook-pro-2019.jpg"
    },
    {
     "id": 3,
     "name": "Samsung Galaxy S10",
     "price": 72999,
     "discount": 25,
     "category": "in-sale",
     "description": "Experiencia visual excepcional. Mirá tus series y películas favoritas con la mejor definición.Tendrás colores brillantes y detalles precisos en todos tus contenidos.Disfrutá aún más del mejor entretenimiento gracias a su vasta pantalla y ángulos de visión amplios.",
     "image": "img-samsung-galaxy-s10.jpg"
    }
]

//Practica 
//1- Dado el siguiente array utilizar un for para mostrar por consola el nombre del producto.






//2- Ahora queremos que muestres por consola "El (Nombre del producto) tiene un valor de $(Precio del producto)






//3- En el archivo index.html captura por medio de Javascript el section con la clase "grid-container". Utilizando un ciclo for recorrer el array data y por cada elemento del array ejecutar un innerHTML para agregar un encabezado h2 con el titulo del producto.
let container = document.querySelector(".grid-container");

// for(let i = 0; i<data.length; i++){
//     //container.innerHTML += "<h2>" + data[i].name + "</h2>"
//     container.innerHTML += `<h2> ${data[i].name} </h2>`
// }




//4- Ahora que ya podemos insertar datos en el HTML te vamos a pedir que utilizando un ciclo forEach recorras el array  data e insertes en el section con la clase "grid-container" una etiqueta article con la clase "box" + un h2 con el nombre del producto + una imagen con la clase "box-img" + un h3 con el precio del producto y una etiqueta p con su descripcion.

for (let i = 0; i < data.length; i++) {
    //container.innerHTML += "<h2>" + data[i].name + "</h2>"

    //Versión con template srtrings.
    container.innerHTML += `<article class="box"> 
                                <a href="/detalle.html"> 
                                    <h2> ${data[i].name}</h2>
                                    <img class="box-img" src="${data[i].image}">
                                    <h3> ${data[i].price} </h3>
                                    <p> ${data[i].description} </p>
                                </a>
                            </article>`

    //Versión con concatenación tradicional en una sola línea alternando comillas dobles y simples.                            
    //container.innerHTML += "<article class='box'><a href='/detalle.html'><h2>" + data[i].name + "</h2><img class='box-img' src='" + data[i].image + "'><h3>" + data[i].price + "</h3><p>" + data[i].description + "</p></a></article>"


    //Versión con concatenación tradicional alternando comillas dobles y simples.                            
    // container.innerHTML += "<article class='box'>" 
    //                             +"<a href='/detalle.html'>" 
    //                                 +"<h2>"+ data[i].name + "</h2>"
    //                                 +"<img class='box-img' src='" + data[i].image + "'>"
    //                                 +"<h3>" + data[i].price + "</h3>"
    //                                 +"<p>" + data[i].description + "</p>"
    //                             +"</a>"
    //                         +"</article>"
}

//5- Cada producto debera ser un hipervinculo que lleve a detalle.html
