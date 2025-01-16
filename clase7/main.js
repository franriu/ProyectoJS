
//LENGTH CONTABILIZA LOS CARACTERES
/*
let cadena = "Hola"
console.log(cadena.length)
console.log(cadena.toLocaleUpperCase())
let entrada = prompt("que desea para comer?")

if(entrada.toLocaleUpperCase()== "CARNE"){
    console.log("preparando el pedido")
}else{
    console.log("no entendi")
} 
*/

//             0 1 2 3 4 5 6 
/*let arreglo = [1,2,3,"hola",5,6,7]

console.log(arreglo[3].toLocaleUpperCase())
*/
/*
let arreglo = [1,2,3,"hola",5,6,7]
//Slice elementos del indice 2 y 4 
console.log(arreglo.slice(2, 4))


//Empujar el array 
console.log(arreglo)

arreglo.push("Birra")
*/

/*
function asignarOperacion (op){
    if (op=="sumar"){
        return (a, b) => a + b
    }else if (op == "restar"){
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")

console.log(suma(5,8))
*/
/*
function porCadaUno(Array,fn){
    for(const el of arr){
        fn (el)
    }
}

porCadaUno(arreglo, console.log)
*/

//    FOREACH 
/* foreach() ejecuta una funcion por cada elemento del array */
/*
const frutas = ["manzana","banana","naranja"]

frutas.forEach(           function(x){
    console.log(x.toUpperCase())
}) 

/* map() crea un NUEVO array con el resultado de llamar a la funcion */
/*
const numeros =[1,2,3,4,5]

const doble = numeros.map(  function(x){
    return x*2
})
console.log(numeros)
console.log(doble)
*/

/*find ( se utiliza para buscar un elemento en un array . devuelve solo el primer elemento que cumple con la condicion)

const numeros =[1,2,3,4,5]

const encontrado = numeros.find(  (x)=>x>3  )

console.log(encontrado)

//    FILTER

/*FILTER()crea un nuevo array con TODOS los elementos que pasan la prueba */

/*const numeros =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const numerosPares = numeros.filter(  function(x){return x %2 === 0 } )

console.log(numerosPares)*/

// REDUCE 

/* REDUCE () */
/*
const precioPrendas = [1300,2000,4000,5000]

const precioFinal = precioPrendas.reduce(    (acumulador,valorActual)=>  acumulador + valorActual    )

console.log(precioFinal)
*/


//   SORT
//sort() ordena los numeros de forma acendente 

const numeros = [7,2,10,1,5]

numeros.sort(function(a,b){
    return a-b
})

console.log(numeros)

