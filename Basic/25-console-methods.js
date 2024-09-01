// Console

// log
console.log("Hola, JavaScript!")

// error
console.error("Ha ocurrido un error")
console.error("Error al conectarse a la base de datos: ", new Error("Conexión Fallida."))

// warn
console.warn("Este es un mensaje de advertensia")

// info
console.info("Este es un mensaje de informacion adicional")

//table
let data = [
    {name: "Emilio", age: 22},
    {name: "Antonio", age: 25}
]
console.table(data)

// group
console.group("Usuario: ")
console.log("Nombre: Emilio")
console.log("Edad: 22")
console.groupEnd()

// time
console.time("Tiempo de ejecución")
for (let i=0; i<10000; i++) {}
console.time("Tiempo de ejecución 2")
for (let i=0; i<10000; i++) {}
console.timeEnd("Tiempo de ejecución")
for (let i=0; i<10000; i++) {}
console.timeEnd("Tiempo de ejecución 2")

// assert
let age=17
console.assert(age>=19, "El usuario debe ser mayor de edad")

//count
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// Trace
function funcA(){
    funcB()
}
function funcB(){
    console.trace("Seguimiento de la ejecución.")
}
funcA()

//clear
//console.clear()
