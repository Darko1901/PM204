

console.log("Hola Mundo JS desde el servidor")

// Promedio de dos variables
let edad1 = 11
let edad2 = 10
console.log("Edad promedio: ")
console.log((edad1 + edad2)/2)

// Medir tiempo de procesos
console.time("miProceso")
// todo lo que este entre estas lineas será medido con su tiempo de ejecución 
for(let i = 0; i<1000000000; i++){}
console.timeEnd("miProceso")

// objetos de tipo tabla
let usuarios = [
    {nombre: "ricardo", edad: "22"},
    {nombre: "Diego", edad: "20"}
]

console.table(usuarios)
