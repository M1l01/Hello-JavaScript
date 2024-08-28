/*
Tipos de Datos:
Primitivos -> Son datos básicos que representan 1 solo valor
    - String (cadena de texto)
    - Números (Enteros, Decimales)
    - Booleanos (Verdadero y falso)
    - Undefined (No tiene valor asociado)
    - Null (Ausencia de valor)
    - Symbol (Representa valores únicos | Identificar propiedades | Evitar Colisiones)
    - bigInt 
*/

// String
let myName = "Emilio Lemos"
let alias = "EmiljoDev"
let email = "emiljo.dev@outlook.com"

// Números
let age = 22
let altura = 1.65

// Booleanos
let isStudent = true
let isTeacher = false

// Undefined
let undefinedValue
//console.log(undefinedValue)

// NULL
let nullValue = null

// Symbol
let mySymbol = Symbol("mysymbol")

//BigInt
let myBigInt = BigInt(1752784718215415465)
let myBigInt2 = 1752784718215415465n

//mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof altura)

console.log(typeof isStudent)
console.log(typeof isTeacher)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)
