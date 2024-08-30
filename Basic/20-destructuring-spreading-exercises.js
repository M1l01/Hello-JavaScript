// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let arrayNums = [0, 1, 1, 2, 3]
let [num0, num1] = arrayNums
console.log(num0)
console.log(num1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [num2, num3, , , , num4 = 0] = arrayNums
console.log(num2)
console.log(num3)
console.log(num4)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    name: "Emilio",
    age: 22,
    alias: "Emiljo",
    email: "emiljo.dev@outlook.com"
}
let {name, age} = person
console.log(name)
console.log(age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name: nombre, age: edad} = person
console.log(nombre)
console.log(edad)
nombre = "Alejandro"
edad = 28
console.log(nombre)
console.log(edad)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let person3 = {
    name: "Emilio",
    edad: 25,
    alias: "Emiljo",
    job: {
        name: "Programador",
        exp: 2,
    }
}

let {job: {name: name1, exp: experience}} = person3
console.log(name1)
console.log(experience)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let arrayColores1 = ["amarillo", "azul", "rojo"]
let arrayColores2 = ["celeste", "blanco", "amarillo"]
let nuevoArrayColores = [...arrayColores1, ...arrayColores2]
console.log(arrayColores1)
console.log(arrayColores2)
console.log(nuevoArrayColores)

// 7. Usa propagación para crear una copia de un array
let copyArrayColores1 = [...arrayColores1]
console.log(copyArrayColores1)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let coche = {
    marca: "Tesla",
    modelo: "Model 3"
}
let actionCoche = {
    arrancar: true,
    frenar: false
}

let cocheMove = {...coche, ...actionCoche}
console.log(cocheMove)

// 9. Usa propagación para crear una copia de un objeto
let copyTesla = {...coche}
console.log(copyTesla)

// 10. Combina desestructuración y propagación
let {marca, modelo} = coche
console.log(marca)
console.log(modelo)
let combCocheAction = {...actionCoche, marca: marca, modelo: modelo}
console.log(combCocheAction)