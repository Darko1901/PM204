const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

// Aplicando desestructuración
const {nombre, edad} = persona;
const {ciudad} = direccion;

console.log("Me llamo " + nombre + ", tengo " + edad + " y vivo en " + ciudad);

