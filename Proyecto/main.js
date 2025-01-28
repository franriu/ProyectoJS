
Swal.fire({
    title:"JordanWorld",
    text: "El primer modelo de Air Jordan salió a la venta en el año 1985. A partir de ese momento comenzó la fiebre por estas zapatillas, que continúa hasta la actualidad. Hasta el día de hoy, ya se han presentado en el mercado 36 modelos distintos de las Air Jordan. Prácticamente un modelo por año",
    icon: "success",
})

// Lista de productos
const productos = [
    { id: 1, nombre: "Air Jordan 1", año: 1985, descripcion: "El primer modelo de la colección y seguramente el más popular. Llevaron el sobrenombre de «Notorious» y convirtieron a Michael Jordan en «Rookie of the Year».", categoria: "Deportes" },
    { id: 2, nombre: "Air Jordan 2", año: 1986, descripcion: "Se fabricaron en Italia y por eso recibieron el sobrenombre de «Itallian Stallion».", categoria: "Deportes" },
    { id: 3, nombre: "Air Jordan 3", año: 1988, descripcion: "Fueron las primeras en incluir el logo Jumpman ", categoria: "Deportes" },
    { id: 4, nombre: "Air Jordan 4", año: 1989, descripcion: "Fueron la prueba definitiva de que las zapatillas de la marca se convertían en iconos del streetwear", categoria: "streetwear" },
    { id: 5, nombre: "Air Jordan 5", año: 1990, descripcion: "Inspiradas en la forma de jugar de Michael Jordan y en una de sus mejores temporadas.", categoria: "Deportes" },
    { id: 6, nombre: "Air Jordan 6", año: 1991, descripcion: "Las zapatillas que llevó Jordan durante la victoria del campeonato de la NBA 1991.", categoria: "Deportes" },
    { id: 7, nombre: "Air Jordan 7", año: 1992, descripcion: "Apodadas también como “Pure Gold” por el oro conseguido por la selección estadounidense en los Juegos Olímpicos de Barcelona en 1992.", categoria: "streetwear" },
    { id: 8, nombre: "Air Jordan 8", año: 1993, descripcion: "Las AJ8 debutaron el mismo año en el que los Chicago Bulls se convirtieron en leyenda al lograr ganar la NBA por tercer año consecutivo.", categoria: "Deportes" },
    { id: 9, nombre: "Air Jordan 9", año: 1994, descripcion: "“Perfect Harmony”. Estas zapatillas querían rendir homenaje a Jordan tras anunciar su retirada del baloncesto.", categoria: "streetwear" },
    { id: 10, nombre: "Air Jordan X", año: 1995, descripcion: "La vuelta de THE GOAT fue a lo grande y jugó una de las temporadas más increíbles de su carrera. Tinker Hatfield quería que las nuevas zapatillas, las Jordan 11, representaran bien la técnica, el rendimiento y la aerodinámica de MJ tan propios de su juego. Así es como se decidió añadir piel con brillo en la zapatilla, algo que nunca habían utilizado antes en la colección. Estas deportivas también tuvieron una aparición destacada en la película de Space Jam.", categoria: "Deportes" }
];

  // Función para filtrar productos según la búsqueda
function filtrarProductos() {
    const query = document.getElementById("buscador").value.toLowerCase();
    const productosFiltrados = productos.filter(producto => 
    producto.nombre.toLowerCase().includes(query) ||
    producto.categoria.toLowerCase().includes(query)
    );
    
    mostrarProductos(productosFiltrados);
}

  // Función para mostrar los productos en la interfaz
function mostrarProductos(productos) {
    const lista = document.getElementById("productos-lista");
    lista.innerHTML = ''; // Limpiar la lista actual

    if (productos.length === 0) {
    lista.innerHTML = '<p>No se encontraron productos.</p>';
    return;
    }

    productos.forEach(producto => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");
    
    productoDiv.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p><strong>año:</strong> ${producto.año}</p>
        <p><strong>Descripción:</strong> ${producto.descripcion}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
    `;

    lista.appendChild(productoDiv);
    });
}

  // Mostrar todos los productos inicialmente
mostrarProductos(productos);
