// Classes - Objeto Complejo

class Person {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//Sintaxis
let person = new Person("Emilio", 22, "EmiljoDev")
console.log(person)
let person2 = new Person("Antonio", 25, "Toño")
console.log(person2)

console.log(typeof person)

//Valores por defecto
class DefaultPerson {
    constructor(name = "Nombre por defecto", age = 0, alias = "Sin Alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson("Emilio")
console.log(person3)

//Acceso a propiedades
console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "EmiljoDev"
console.log(person3.alias)

//Funciones
class PersonWithMethod {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk(){
        console.log(`${this.name} Camina`)
    }
}

let person4 = new PersonWithMethod("Emilio", 43, "EmiljoDev")
person4.walk()

//Propiedades Privadas
class PrivatePerson {
    #bank
    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}

let person5 = new PrivatePerson("Emilio", 43, "EmiljoDev", "Em12154564554")
console.log(person5.bank)   //No podemos acceder
console.log(person5)


//Getters y Setters
class GetSetPerson {
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name(){
        return this.#name
    }
    set bank(newBank){
        this.#bank = newBank
    }
}

let person6 = new GetSetPerson("Emilio", 23, "EmiljoDev", "Em12154564554")
console.log(person6)
console.log(person6.name)
person6.name = "Alejandro"  //No se puede editar, solo leer
console.log(person6.name)

person6.bank = "new Em12154564554"
console.log(person6)

// Herencia - Sirve para heredar las propiedades y el comportamiento de una clase

class Animal{
    constructor(name){
        this.name = name
    }
    sound(){
        console.log("emite un sonido genérico")
    }
}

class Dog extends Animal{
    sound(){
        console.log("Guau!!")
    }
    run(){
        console.log(`El Perro llamado ${this.name} Corre`)
    }
}

let myDog = new Dog("Gus")
myDog.sound()
myDog.run()

class Fish extends Animal{
    constructor(name, size){
        super(name)
        this.size = size
    }
    swim(){
        console.log(`El pez nada`)
    }
}

let myFish = new Fish("Dory", "Pequeño")
myFish.sound()
myFish.swim()

// Métodos Estáticos

class MathOperations{
    static sum(a,b){
        return a+b
    }
}

/*ERROR
let myClass = new MathOperations()
console.log(myClass.sum(5,4))
*/

console.log(MathOperations.sum(5,4))
