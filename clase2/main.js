/*
= asignacion 
== comparacion
=== comparacion estricta
*/

/*
let usuario = prompt("cual es tu nombre?").toUpperCase()

if(usuario == "TOMAS"){
    alert("bienvenido tomas")
}else{
    alert("vos no sos tomas, sos un intruso")
}

*/


let numero = parseInt(prompt("ingresa un numero"))

if (numero === 15){
    alert("los numeros coinciden")
}

/*parseInt = numero entero 
parseFloat = numero decimal */


//TIENE QUE SER DIF A VACIO Y PUEDE SER  MAYUSCULA O  MINUSCULA
if( (nombre!="") && ( (nombre=="ema") || (nombre== "EMA"))){alert("BLABLA")} 


//TIENE QUE SER DIF A VACIO Y TIENE QUE SER EN MAYUSCULA O MINUSCULA
if(  ((nombre!="") && (nombre == "EMA")) || (nombre=="ema")      ){alert("BLABLA")}