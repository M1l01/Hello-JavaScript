//Objects
//Colección de datos relacionados

//- Sintaxis
let person = {
    nombre: "Emilio",
    edad: 22,
    alias: "Emiljo",
    email: "emiljo.dev@outlook.com"
}

//-------------Propiedades------------- 

//Notación llamada por punto
console.log(person.nombre)
//Notacion de corchetes
console.log(person["nombre"])

//Actualizar
person.nombre = "Alejandro"
console.log(person.nombre)

console.log(typeof person.edad)
person.edad = "22"
console.log(person.edad)
console.log(typeof person.edad)

//Eliminar propiedades
console.log(delete person.edad)
console.log(person)

//Agregar propiedad
person.apellido = "Lemos"
person["edad"] = 22
console.log(person)

// ------------Métodos------------
//Funciones
let person2 = {
    nombre: "Emilio",
    edad: 25,
    alias: "Emiljo",
    walk: function(){
        console.log(`${person2.nombre} Camina`)
    }
}

person2.walk()

//Anidacion de objetos
let person3 = {
    nombre: "Emilio",
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
console.log(person3)
person3.job.work()

// Igualdad de Objects
person = {
    nombre: "Emilio",
    edad: 25,
    alias: "Emiljo"
}
console.log(person)
let person4 = {
    nombre: "Emilio",
    edad: 25,
    alias: "Emiljo"
}
console.log(person4)

console.log(person == person4)
console.log(person === person4)
console.log(person.nombre === person4.nombre)

//Iteracion
for(let key in person4){
    console.log(key + " : " + person4[key])
}

//Funciones como objects
function Person(nombre, edad){  //Debería ser una clase
    this.name = nombre
    this.age = edad
}

let person5 = new Person("Alejandro", 22)
console.log(person5)
console.log(typeof person4)
console.log(typeof person5)

class Person2 {
    constructor(nombre, edad) {
        this.name = nombre
        this.age = edad
    }
}
let person6 = new Person2("Emilio", 22)
console.log(person6)
console.log(typeof person6)