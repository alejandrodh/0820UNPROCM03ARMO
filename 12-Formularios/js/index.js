let formulario = document.querySelector('form');
let campoBuscar = document.querySelector('.searchfield');
let mensaje = document.querySelector('.alert');

formulario.addEventListener('submit', function(event){
    //Paso 1: evitar que el form se envíe
    event.preventDefault();
    if(campoBuscar.value == ""){    
        mensaje.innerText = 'El campo no debe estar vacío';
    } else if (campoBuscar.value.length < 2){ 
        mensaje.innerText = 'Por favor ingrese al menos 3 caracteres a buscar';
    } else {
        this.submit();
    }
    
})

campoBuscar.addEventListener('input', function(){
    mensaje.innerText = ""
})

