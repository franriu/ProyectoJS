/*let parrafo = document.getElementById("parrafo")

console.log(parrafo.innerHTML)


parrafo.innerHTML = <button> buen dia </button>//reconoce etiquetas de html
parrafo.innerText = "hola"    //No reconoce etiquetas dentro de html,solo texto


let parrafo = document.getElementsByClassName ("parrafo") //llamado a la clase que designe en html 

console.log(parrafo[2].innerHTML) //llamado especifico a una clase de html

let letras= document.getElementsByTagNameNS("p")//llamado por el tipo de etiqueta }

*/

/*
let parrafo = document.createElement("p")
parrafo.innerHTML = "<h2> Hola coder! </h2>" //insertamos un texto desde js a html

document.body.append(parrafo)
*/
const productos = [
    {id:1, nombre:"Arroz", precio:125},
    {id:2, nombre:"fideos", precio:141},
    {id:3, nombre:"pan",precio:165},
    {id:4,nombre:"flan",precio:75},

]
for (const x of productos){
    let contenedor= document.createElement("div")
    contenedor.innerHTML=`<h3>ID: ${x.id}<h3>
                                <h1> Producto: ${x.nombre}</h1
                                <b> Precio : ${x.precio}</b>
                            `
document.body.appendChild(contenedor)
}

let nombre1 = document.querySelector("") //selecciona segun clase o id 
