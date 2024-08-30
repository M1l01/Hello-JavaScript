// 1. Crea un array que almacene cinco animales
let animales = ["Elefante", "Tigre", "Leon", "Cebra", "Jirafa"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final
animales.push("Hipopotamo")
console.log(animales)

animales.unshift("Rinoceronte")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 2)
console.log(animales)

// 4. Crea un set que almacene cinco libros
let libros = new Set()
console.log(libros)
libros = new Set([
    "Harry Potter y el príncipe mestizo",
    "200 leguas de viaje submarino",
    "Harry Potter y la cámara de los secreta",
    "Harry Potter y las reliquias de la muerte",
    "Harry Potter y la piedra filosofal"
])
console.log(libros)

// 5. Añade dos más. Uno de ellos repetido
libros.add("Harry Potter y el prisionero de Askaban")
libros.add("Harry Potter y la piedra filosofal")
console.log(libros)

// 6. Elimina uno concreto a tu elección
libros.delete("200 leguas de viaje submarino")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map()
meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
])
console.log(meses)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if(meses.has(5)){
    console.log(meses.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("Meses Verano", ["Junio", "Julio", "Agosto"])
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let arrayColores = ["rojo", "amarillo", "azul", "azul"]
let setColores = new Set(arrayColores)
let mapColores = new Map()
mapColores.set("Colores", setColores)
console.log(mapColores)