//OBJETOS LITERALES 

//clave: valor


const empleado1 ={
    nombre: "javier gimenez",
    cargo: "profesor",
    ingreso: "2021-03-25",
    edad:34


}

if(empleado1.edad == null){
    prompt("ingrese la edad")
}

//OBJETO CONSTRUCTOR O FUNCION CONSTRUCTORA

function Producto (id, nombre,importe,stock){ //primera inicial en mayuscula para dif de una funcion normal

    this.id =id,
    this.nombre = nombre,
    this.importe = importe,
    this.stock = stock


}

const producto1 = new Producto(1,"teclado",35000, 17)

const producto2 = new Producto(1,"mouse",35000, 17)

const producto3 = new Producto(1,"monitor",35000,17 )



