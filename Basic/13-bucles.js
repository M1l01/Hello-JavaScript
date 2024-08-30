// Loops o Bucles

// Bucle For
for (let i=0; i<5; i++) {
    console.log(`Hola For${i}`)
}

const numbers = [1, 2, 3, 4, 5]
for (let i=0; i<numbers.length; i++) {
    console.log(`For Elemento: ${numbers[i]}`)
}

// while
let i = 0
while (i<5) {
    console.log("Hola while")
    i++;
}

//do - while
let j = 6
do{
    console.log("Hola do-while")
    j++
} while (j<5)

//for of
let miArray = ["Emilio", "EmiljoDev", "Lemos", 22, true]

let libros = new Set([
    "Harry Potter y el príncipe mestizo",
    "200 leguas de viaje submarino",
    "Harry Potter y la cámara de los secreta",
    "Harry Potter y las reliquias de la muerte",
    "Harry Potter y la piedra filosofal"
])

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

for (let valor of miArray) {
    console.log(`Hola for of: ${valor}`)
}

for (let valor of libros) {
    console.log(`Hola for of: ${valor}`)
}

for (let valor of meses) {
    console.log(`Hola for of: ${valor}`)
}

let miString = "Hola, JavaScript!"
for (let c of miString) {
    console.log(`Hola for of: ${c}`)
}

//break y continue
for (let i=0; i<10; i++) {
    if (i==5){
        continue
    } else if (i == 9){
        break
    }
    console.log(`Hola ${i}`)
}