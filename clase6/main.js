

//let array = ["uno",2,true]

/*const frutas = ["manzana", "pera", "banana" , "sandia"]
//indice            0         1        2          3 

console.log(frutas[1])
*/

/*
const numeros = [10,20,30,40];

const numeros2 = [50,60,70,80];

console.log("el resultado es" ,numeros[2]+numeros2[1])

*/

/*const numeros =[1,2,3,4,"caballo"()]
//indice        0 1 2 3 4 
for(let i =0; i<5;i++){
    console.log(numeros[i])
}   
*/


//LENGTH

/*const sillones = [12,13,15,152,123,151,123,12,3,12,3,123]

for(let i =0 ; i<= sillones.length; i++){
    console.log(i)
}
*/

// push(): agrega un elemento al final 

/*const frutas = ["manzana","pera","banana","sandia"]
const frutaAgregada = prompt("ingresa tu fruta")

frutas.push(frutaAgregada)
console.log(frutas)
*/

//POP 
//pop() elimina el ultimo elemento


/*
const frutas = ["manzana","pera","banana","sandia"]

frutas.pop()

console.log(frutas)
*/

// SHIFT
//shift ( elimina el primer elemento)


/*
const frutas = ["manzana","pera","banana","sandia"]

frutas.shift()

console.log(frutas)
*/

//UNSHIFT
//unshift():agrega al principio del array 

/*const frutas = ["manzana","pera","banana","sandia"]

frutas.unshift("uva")

console.log(frutas)
*/


//SLICE 

//slice() retorna una copia del array y usa parametros, (desde,hasta).pero NO TOMA EL ULTIMO EN CUESTION 
/*
const frutas = ["manzana","pera","banana","sandia"]

const copia = frutas.slice(0,2)
console.log(copia)
*/

//        SPLICE
// splice() cambia el contenido del array Eliminando y reemplazando los elementos 
/*
const frutas = ["manzana","pera","banana","sandia"]

const copia = frutas.splice(0,3)
*/

//        CONCAT
// concat()une uno o mas array

/*
const perros = ["puqui","negrito","manchita"]
const gatos = ["mishi","garfield","salem"]

const mascotas = perros.concat(gatos)

console.log(mascotas)
*/


//     JOIN

// join() une a todos los elementos de array en una cadena

/*
const animales = mascotas.join(" ")

console.log(animales) 
*/


//                  INDEX OF 

//indexof() retorna la posicion de un elemento especifico, si no existe , devuelve -1

/*const perros = ["puqui","negrito","manchita"]
const gatos = ["mishi","garfield","salem"]

const mascotas = perros.concat(gatos)

const posicion = mascotas.indexOf("mishi")

console.log(posicion)


if(mascotas.indexOf == -1){
    prompt("desea agregar?")
}
*/

//             INCLUDES
//  includes() me permite saber si un elemento existe o no en el array

/*const nombres = ["martin","valentina","caro","fabri"]

console.log( nombres.includes("martin"))
*/
/*
const personas = [
{
    nombre :"carlos",
    edad:29,
    ciudad:"jujuy"
},
{
    nombre:"caro",
    edad:44,
    ciudad:"pilar"
},
{
    nombre:"mati",
    edad:22,
    ciudad:"bs as"
}
]

console.log(personas[1].nombre)
for(let i =0 ; i< personas.length;i++){
    console.log(personas[i].nombre)
}

*/

// FOR OFF 

const remeras = [
    {id:1,color:"rojo"},
    {id:2,color:"blanco"},
    {id:3,color:"negro"},
]

for(const i of remeras){
    console.log(i.color)
}