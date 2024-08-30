// Funciones

//Simple
function myFunc(){
    console.log("Hola, Función en JavaScript!")
}

myFunc()

//Con Parámetros
function myFuncwithParams(name, age){
    console.log(`¡Hola, ${name} de ${age}!`)
}

myFuncwithParams("Emilio", 22)

//Funciones Anonimas
const nombre = function(name){
    console.log(`¡Hola, ${name}!`)
}
nombre("Emilio")

//Arrow Functions
const myFuncArrow = (nombre) => {
    console.log(`¡Hola, ${nombre}!`)
}
myFuncArrow("Emilio")

const myFuncArrow2 = (nombre) => console.log(`¡Hola, ${nombre}!`)
myFuncArrow2("Antonio")

//PARÁMETROS
function suma(a, b){
    return a+b
}
console.log(suma(5,10))

function defaultSuma(a = 0, b = 0){
    return a+b
}
console.log(defaultSuma(5))
console.log(defaultSuma(5, 22))
console.log(defaultSuma(b=22))

// Funciones Adidadas
function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("Funcion interna")
    }
    intern()
}
extern()

//Funciones de Orden Superior
function applyFunction(func, param){
    func(param)
}
applyFunction(myFuncArrow2, "Funcion de Orden Superior")

// forEach - Funcion que nos permite ejecutar bucles asociados a elementos iterables
let miArray = ["Emilio", "EmiljoDev", "Lemos", 22, true]

miArray.forEach((value) => console.log(value))

let libros = new Set([
    "Harry Potter y el príncipe mestizo",
    "200 leguas de viaje submarino",
    "Harry Potter y la cámara de los secreta",
    "Harry Potter y las reliquias de la muerte",
    "Harry Potter y la piedra filosofal"
])
libros.forEach((nombre) => console.log(nombre))

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
meses.forEach((nombre) => console.log(nombre))
