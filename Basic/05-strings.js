// Strings

let myName = "Emilio"
let edad = 26

let greeting = "Hola mi nombre es " + myName + " y tengo " + edad + " años"
console.log(greeting)
console.log(typeof greeting)

//longitud
console.log(greeting.length)

//Acceso a Caracteres
console.log(greeting[0])
console.log(greeting[11])

//Metodos Comunes
console.log(greeting.indexOf("26"))
console.log(greeting.toLowerCase())
console.log(greeting.toUpperCase())
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Emilio", "Alejandro"))
console.log(greeting.split(" "))

//Templates
let msg = `Hola este es mi curso
de JavaScript`
console.log(msg)
//Interpolacion
let email = "emiljo.dev@outlook.com"
console.log(`Hola, ${myName}! Tu email es ${email}`)
console.log(msg.slice(-1))