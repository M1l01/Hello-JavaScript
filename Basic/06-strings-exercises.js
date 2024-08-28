// 1. Concatena 2 cadenas de texto
let name1 = "Emilio"
let name2 = " Alejandro"
console.log(name1 + name2)
// 2. Muestra la longitud de 1 cadena de texto
console.log(name1.length)
// 3. Muestra el primer y último caracter de un string
console.log(`Primer caracter ${name1[0]}, Último caracter ${name1.slice(-1)}`)
// 4. Convierte a mayúsculas y minúsculas 1 string
console.log(`Mayúsculas: ${name2.toUpperCase()}, Minúsculas: ${name2.toLowerCase()}`)
// 5. Crea una cadena de texto en varias líneas
let texto = `Mi nombre es Emilio
Alejandro y tengo 22 años
de edad.`
console.log(texto)
// 6. Interpola el valor de una variable en un string
let saludo = `Hola ${name1}${name2} como estas?`
console.log(saludo)
// 7. Reemplaza los espacios en blanco de un string por guiones
let str = "Hola a todos"
console.log(str.replace(/ /g, "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(str.includes("Emilio"))
console.log(str.includes("Hola"))
// 9. Comprueba si 2 string son iguales
console.log("Hola" == "Hola")
console.log("Hola" == "HolA")
// 10. Comprueba si 2 strings tienen la misma longitud
let name3 = "Toño"
let name4 = "Milo"
console.log(name1.length == name2.length)
console.log(name3.length == name4.length)

