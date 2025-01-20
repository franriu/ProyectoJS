/*

producto nombre,precio,id,stock
constructor,para que el usuario cree 

*/

const Producto = function(nombre,precio,stock){
    this.nombre= nombre
    this.precio= precio
    this.stock = stock 
}

let producto1 =new Producto("jordan4",380000)
let producto2 =new Producto("superstar",150000)
let producto3 =new Producto("yeezy700",360000)
let producto4 =new Producto("airMax",200000)
let producto5 =new Producto("newBalance9070",320000)
let producto6 =new Producto("osiris",300000)

let lista = [producto1,producto2,producto3,producto4.producto5,producto6]

function filtrarProducto(){
    let palabraClave = promp("ingresa el sneaker que buscas")
    let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(palabraClave))
    if (resultado.length>0){
        console.table(resultado)
    }else{
        alert("intenta buscando otra sneaker" )
    }
}


function agregarProducto(){

let nombre=prompt("ingresa el nombre del producto")
let precio = prompt("ingresa el precio del producto")
let stock = prompt ("ingresa el talle del producto")


if(isNaN(precio) || isNaN(talle) || nombre ==""){
    alert("por favor ingresa valores validos")
    return
}

let producto = new Producto (nombre,talle,stock)
lista.push(producto)
console.table(lista)

}