
//uso del Spread ,desparrama un array u objeto
/*
const numeros = [4,87,78,100] // NAN

console.log(Math.max(numeros))
*/

/*
const numeros = [4,87,78,100]

console.log(Math.max(...numeros)) //92 



const verduleria = ["puerro", "limon"]

const carniceria = ["entraña", "vacio"]

const compras = [...verduleria, ...carniceria]




const carrito = {
    ...carniceria
}

console.log(carrito)

*/

/*
const producto = {
    nombre:"zapatillas",
    precio:70000,
    categoria:"deporte"
}

const carrito = {
    ...producto,
    descuento:2000,
}

console.log(carrito)

*/
/*
const numeros = [5,6,7]

function sumar (x){
    console.log(x)
}

sumar(numeros)

*/


let validacion = false

/* SIN OPERADOR TERNARIO 
if (true){
    console.log("soy verdadero")
}else{
    console.log("soy falso")
}

*/

validacion ? console.log("verdadero") : console.log("Falso")  //CON OPERADOR TERNARIO 



