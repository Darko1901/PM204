const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}
];

// Filtrar productos con precio mayor a 1000
function filtroProductos(producto){
    return producto.precio > 10000;
}

// Convertir el resultado en un nuevo arreglo con solo los nombres de esos productos
function nombres(producto){
    return producto.nombre;
}

var mayores = productos.forEach(filtroProductos);

var precioMayor = productos.filter(filtroProductos).map(nombres);

console.log(mayores);