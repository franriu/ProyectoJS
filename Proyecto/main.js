
Swal.fire({
    title:"JordanWorld",
    text: "El primer modelo de Air Jordan salió a la venta en el año 1985. A partir de ese momento comenzó la fiebre por estas zapatillas, que continúa hasta la actualidad. Hasta el día de hoy, ya se han presentado en el mercado 36 modelos distintos de las Air Jordan. Prácticamente un modelo por año",
    icon: "success",
})

// Lista de productos
const productos = [
    { id: 1, nombre: "Jordan 1", año: 1985, descripcion:"El primer modelo de la colección y seguramente el más popular. Llevaron el sobrenombre de «Notorious» y convirtieron a Michael Jordan en «Rookie of the Year».", categoria: "Deportes"},
    { id: 2, nombre: "Jordan 2", año: 1986, descripcion: "Se fabricaron en Italia y por eso recibieron el sobrenombre de «Itallian Stallion».", categoria: "Deportes" },
    { id: 3, nombre: "Jordan 3", año: 1987, descripcion: "Fueron las primeras en incluir el logo Jumpman ", categoria: "Deportes" },
    { id: 4, nombre: "Jordan 4", año: 1988, descripcion: "Fueron la prueba definitiva de que las zapatillas de la marca se convertían en iconos del streetwear", categoria: "streetwear" },
    { id: 5, nombre: "Jordan 5", año: 1989, descripcion: "Inspiradas en la forma de jugar de Michael Jordan y en una de sus mejores temporadas.", categoria: "Deportes" },
    { id: 6, nombre: "Jordan 6", año: 1990, descripcion: "Las zapatillas que llevó Jordan durante la victoria del campeonato de la NBA 1991.", categoria: "Deportes" },
    { id: 7, nombre: "Jordan 7", año: 1991, descripcion: "Apodadas también como “Pure Gold” por el oro conseguido por la selección estadounidense en los Juegos Olímpicos de Barcelona en 1992.", categoria: "streetwear" },
    { id: 8, nombre: "Jordan 8", año: 1992, descripcion: "Las AJ8 debutaron el mismo año en el que los Chicago Bulls se convirtieron en leyenda al lograr ganar la NBA por tercer año consecutivo.", categoria: "Deportes" },
    { id: 9, nombre: "Jordan 9", año: 1993, descripcion: "“Perfect Harmony”. Estas zapatillas querían rendir homenaje a Jordan tras anunciar su retirada del baloncesto.", categoria: "streetwear" },
    { id: 10, nombre: "Jordan 10", año: 1994, descripcion: "La vuelta de THE GOAT fue a lo grande y jugó una de las temporadas más increíbles de su carrera. Tinker Hatfield quería que las nuevas zapatillas, las Jordan 11, representaran bien la técnica, el rendimiento y la aerodinámica de MJ tan propios de su juego. Así es como se decidió añadir piel con brillo en la zapatilla, algo que nunca habían utilizado antes en la colección. Estas deportivas también tuvieron una aparición destacada en la película de Space Jam.", categoria: "Deportes" },
    { id: 11, nombre: "Jordan 11", año: 1995, descripcion: "“The Dynasty Continues”. Es uno de los modelos más resistentes de la colección. Las pudimos ver en el famoso partido apodado «Flu Game».", categoria: "Deportes" },
    { id: 12, nombre: "Jordan 12", año: 1996, descripcion: "También conocidas como “Black Cat Puonces” por el alias de «Gato negro» que se le daba al jugador por su destreza y habilidad.", categoria: "Deportes" },
    { id: 13, nombre: "Jordan 13", año: 1997, descripcion: "“Race Ready”. Su diseño se inspiró en el Ferrari 550 M de Jordan. Están decoradas con un total de 14 logos Jumpman.", categoria: "Deportes" },
    { id: 14, nombre: "Jordan 14", año: 1998, descripcion: "“Speed of Sound”. Es el modelo número 13 que Tinker Hatfield diseñó de forma consecutiva para la colección. Coincidieron con el año de la segunda retirada de Michael Jordan.", categoria: "Deportes" },
    { id: 15, nombre: "Jordan 15", año: 2000, descripcion: "“Marching On”. Diseñadas por Wilson Smith III, iniciaban una nueva etapa en la línea de zapatillas Jordan.", categoria: "Deportes" },
    { id: 16, nombre: "Jordan 16", año: 2002, descripcion: "“Jazzed Up”. Es de las siluetas más caras ya que se vendían en una caja metálica junto a un CD-ROM.", categoria: "Deportes" },
    { id: 17, nombre: "Jordan 17", año: 2003, descripcion: "“Last Dance”. Estas zapatillas marcaron el final definitivo de la carrera de Michael Jordan como jugador de baloncesto.", categoria: "Deportes" },
    { id: 18, nombre: "Jordan 18", año: 2004, descripcion: "“Full Flex”, apodadas así por ser las deportivas que introdujeron la tecnología Tech-Flex.", categoria: "Deportes" },
    { id: 19, nombre: "Jordan 19", año: 2005, descripcion: "”Living Greatness”. Un diseño que quería representar la vida de Michael Jordan.", categoria: "Deportes" },
    { id: 20, nombre: "Jordan 20", año: 2006, descripcion: "”Performance Luxury DNA”. Uno de los modelos más lujosos y con materiales de gama alta.", categoria: "Deportes" },
    { id: 21, nombre: "Jordan 21", año: 2007, descripcion: "”Hit the Afterburners”. Zapatillas preparadas para darlo todo con unas inserciones de titanio.", categoria: "Deportes" },
    { id: 22, nombre: "Jordan 22", año: 2008, descripcion: "”The Number of Greatness”. Aunque Michael Jordan ya no las pudiera llevar sobre la cancha, sus zapatillas seguían rindiéndole homenaje. En este caso, su huella dactilar aparece en lengüeta y suela.", categoria: "Deportes" },
    { id: 23, nombre: "Jordan 23", año: 2009, descripcion: "”Beyond”. La marca deja a un lado la numeración y llama por primera vez a una de sus zapatillas con el año del lanzamiento.", categoria: "Deportes" },
    { id: 24, nombre: "Jordan 24", año: 2010, descripcion: "”Full Speed Ahead”. Se crearon con el objetivo de mejorar la velocidad de respuesta. Cuenta con detalles de TPU transparente.", categoria: "Deportes" },
    { id: 25, nombre: "Jordan 25", año: 2011, descripcion: "”Be explosive. Be quick”. Dos suelas intercambiables como un nuevo elemento sobre la cancha de baloncesto.", categoria: "Deportes" },
    { id: 26, nombre: "Jordan 26", año: 2012, descripcion: "”Choose your Flight”. Llamaron la atención por tener forro y lengüeta intercambiables entre varias opciones.", categoria: "Deportes" },
    { id: 27, nombre: "Jordan 27", año: 2013, descripcion: "”Dare to Fly”. Jordan recupera su numeración clásica para dar nombre a sus zapatillas. Es uno de los modelos más atrevidos por sus cremalleras.", categoria: "Deportes" },
    { id: 28, nombre: "Jordan 28", año: 2014, descripcion: "”Tailored for Flight”. Se considera el primer modelo hecho de tela.", categoria: "Deportes" },
    { id: 29, nombre: "Jordan 29", año: 2015, descripcion: "”Otherwordly talents”. El modelo número 30 de la línea principal de zapatillas Jordan. Para destacar este hecho, en su diseño aparece el número romano XXX como elemento decorativo.", categoria: "Deportes" },
    { id: 30, nombre: "Jordan 30", año: 2016, descripcion: "”Anti-Gravity Machines”. Son un reboot de las Air Jordan 1, una reinterpretación del primer modelo.", categoria: "Deportes" },
    { id: 31, nombre: "Jordan 31", año: 2017, descripcion: "Otra reinterpretación, en este caso de las AJ2. Se pusieron a la venta de forma simultánea tanto la versión High como la Low.", categoria: "Deportes" },
    { id: 32, nombre: "Jordan 32", año: 2018, descripcion: "Una nueva versión basada en las AJ3", categoria: "Deportes" },
    { id: 33, nombre: "Jordan 33", año: 2019, descripcion: "”Exercise in reductive design”. Se ha reducido el peso al mínimo para conseguir uno de los modelos más ligeros de la marca.", categoria: "Deportes" },
    { id: 34, nombre: "Jordan 34", año: 2020, descripcion: "Un homenaje a los colores clásicos de las Jordan 5, de ahí el sobrenombre de DNA.", categoria: "Deportes" },
    { id: 35, nombre: "Jordan 35", año: 2021, descripcion: "Tras lo aprendido con las 33 y las 34, Jordan sigue en la misma línea, pero yendo un paso más allá e incorporando varias mejoras.", categoria: "Deportes" },
    { id: 36, nombre: "Jordan 36", año: 2022, descripcion: "Un guiño a las AJ7 con un diseño pensado para potenciar el salto.", categoria: "Deportes" },
    { id: 37, nombre: "Jordan 37", año: 2023, descripcion: "La zapatilla más sostenible hasta el momento de la línea principal de Air Jordan.", categoria: "Deportes" }
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

 // Función para obtener un chiste de la API
 function getJoke() {
    // Obtener el valor de la categoría seleccionada
    const category = document.getElementById('category').value;

    // URL de la API de JokeAPI
    const apiUrl = `https://v2.jokeapi.dev/joke/${category}?lang=es&type=single`;

    // Realizar la solicitud a la API
    fetch(apiUrl)
        .then(response => response.json()) // Convertir la respuesta en JSON
        .then(data => {
            // Verificar si el chiste es de tipo "single" (un solo chiste)
            if (data.type === 'single') {
                document.getElementById('joke').textContent = data.joke;
            } else {
                // Si es un chiste de tipo "twopart" (dos partes)
                document.getElementById('joke').textContent = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(error => {
            // Manejar errores
            console.error('Error al obtener el chiste:', error);
            document.getElementById('joke').textContent = 'Hubo un error al obtener el chiste.';
        });
}