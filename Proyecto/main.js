/*

producto nombre,precio,id,stock
constructor,para que el usuario cree 

*/

const Producto = function(nombre,precio,stock){
    this.nombre= nombre
    this.precio= precio
    this.stock = stock 
}

let producto1 =new Producto("notebook lenovo",16500,20)
let producto2 =new Producto("notebook asus",16500,20)
let producto3 =new Producto("notebook lg",16500,20)
let producto4 =new Producto("notebook mac",16500,20)
let producto5 =new Producto("notebook samsung",16500,20)
let producto6 =new Producto("notebook razer",16500,20)

let lista = [producto1,producto2,producto3,producto4.producto5,producto6]


function agregarProducto(){

let nombre=prompt("ingresa el nombre del producto")
let precio = prompt("ingresa el precio del producto")
let stock = prompt ("inrgresa el stock del producto")


if(isNaN(precio) || isNaN(stock) || nombre ==""){
    alert("por favor ingresa valores validos")
    return
}

let producto = new Producto (nombre,precio,stock)
lista.push(producto)
console.table(lista)

}