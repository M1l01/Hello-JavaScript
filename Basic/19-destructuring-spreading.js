//---------------------------Destructuracion---------------------------
//Sintaxis que permite extraer valores de arrays u objetos y asignar a una variable
let myArray = [1, 2, 3, 4]

let person = {
    name: "Emilio",
    age: 22,
    alias: "Emiljo",
    email: "emiljo.dev@outlook.com"
}

myArray.push(5)
console.log(myArray)

let myValue = myArray[1]
console.log(myValue)
let myName = person.name
console.log(myName)

//Sintaxis en Arrays
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

//Sintaxis de Arrays con valores predeterminados
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0, myValue10 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)
console.log(myValue10)

//Ignorar elementos array
let [myValue11, , , myValue14] = myArray
console.log(myValue11)
console.log(myValue14)

// Sintaxis objects
// let {name, age, alias} = person
// console.log(name)
// console.log(age)
// console.log(alias)
let {age, name, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis de Objects con valores predeterminados
let {name2, age2, alias2, email="emiljo.dev@outlook.com"} = person
console.log(name2)  // no Existe
console.log(age2)   // no Existe
console.log(alias2) // no Existe
console.log(email)

// Sintaxis Objects con nuevos nombres de variables
let {name: name3, age: age3, alias: alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objetos Anidados
let person3 = {
    name: "Emilio",
    edad: 25,
    alias: "Emiljo",
    walk: function(){
        console.log(`${person2.nombre} Camina`)
    },
    job: {
        name: "Programador",
        exp: 2,
        work: function(){
            console.log(`${person3.nombre} trabaja de ${this.name}`)
        }
    }
}

let {name: name4, job: {name: jobName}} = person3
console.log(name4)
console.log(jobName)


// ---------------------------Propagación---------------------------
// Operador de propagacion (...)
// Sintaxis Arrays
let myArray1 = [1,2,4,8,16]

let myArray2 = [...myArray1] //Copia
console.log(myArray2)

let myArray3 = [...myArray1, 32, 64, 128]
console.log(myArray3)

//Combinacion de arrays
let myArray4 = [...myArray1, ...myArray2, ...myArray3]
console.log(myArray4)

//Sintaxis Objects
let person4 = {
    name: "Emilio",
    age: 22,
    alias: "Emiljo",
    email: "emiljo.dev@outlook.com"
}

let person5 = {...person4, email2: "emiliolemos2001@hotmail.com"}
console.log(person5)