
//FORMA MAS EXTENSA
/*
const edad = 18

if(edad>=18){
    console.log("Es mayor puede ingresar")
}else{
    console.log("es menor de edad")
} 
*/

//const mensaje = edad >=18 ? "es mayor , puede ingresar" : "es menor"

//console.log(mensaje)

//DESECTRUCTURACION COMUN 
/*const persona = {
    nombre:"juan",
    ciudad:"buenos aires"
}

const {nombre,ciudad} = persona

console.log(ciudad)
*/


//DESECTRURACION PARA ACCEDER A LOS VALORES DE UNA PROPIEDAD
/*const persona = {
    nombre:"juan",
    direccion:{
        calle:"calle falsa",
        numero: 123
    }
}

const {nombre,direccion:{calle,numero}} = persona

console.log(numero)//123

*/

const data = {
    "timestamp":15654654,
    "base":"USD",
    "rates":{
        "ARS":1150,
        "BRL":6,
        "MEX":20,
        "URU":42,
        "BOL":12,
        "COL":4321
    }
}

//desestructuracion para obtener el valor de ARS

const {rates:{ARS}}= data 

console.log(ARS)