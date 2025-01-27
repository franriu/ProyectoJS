

//Hay 4 metodos 

/*
setItem() permite crear una clave y asignarle un valor
getItem() permite recuperar o traer una clave desde el storage
removeItem() permite eliminar un dato 
clear() limpia

*/
/*
localStorage.setItem(`bienvenida`,`bienvenidos a la clase de javi`)

function crearClaveEnLocalStorage(){
    localStorage.setItem(`mi clave`,`coderhouse`)
}

crearClaveEnLocalStorage()
*/

const inputNombre = document.querySelector("#inputNombre")
const inputEdad = document.querySelector("#inputEad")
const inputEmail = document.querySelector("#inputEmail")
const inputProfesion = document.querySelector("#inputProfesion")
const botonEnviar = document.querySelector("#boton")

//localStorage.clear()

function guardarFormulario(){
    localStorage.setItem(`nombre`,inputNombre.value)
    localStorage.setItem(`edad`,inputEdad.value)
    localStorage.setItem(`email`,inputEmail.value)
    localStorage.setItem(`profesion`,inputProfesion.value)
}


botonEnviar.addEventListener(`click`,guardarFormulario)

function recuperarDatosDelFormulario(){
    inputNombre.value
}

