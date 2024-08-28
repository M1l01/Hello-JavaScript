//OPERADORES

//Operadores aritmeticos
console.log(5 + 15)   //Suma
console.log(5 - 3)    //Resta
console.log(5 * 5)    //Multiplicación
console.log(5 / 5)    //División

console.log(10 % 5)   //Modulo (Resto de la división)
console.log(2**3)     //Exponente

a = 1
a++ //Incremento
console.log(a)
a-- //Decremento
console.log(a)

//Operadores de Asignación
let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable %= 2
console.log(myVariable)

//Operaciones de Comparación
a = 20
let b = 10
let c = 15
console.log(b > c)
console.log(a < c)
console.log(a <= c)
console.log(a >= c)
console.log(a == c)
console.log(a == a)        //Igualdad por valor
console.log(a === 20)
console.log(a === "20")    //Igualdad por Indentidad (Tipo y valor)
console.log(a != 20)       //Distinsión por valor
console.log(a !== "20")    //Distinsión por Identidad
console.log(0 == false)
console.log(1 == true)
console.log(2 == true)
console.log(2 == false)

//Operadores lógicos
console.log(true || false)
console.log(true && false)

//Operador ternario
const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")
