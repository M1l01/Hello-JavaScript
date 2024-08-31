// 1. Crea una clase que reciba dos propiedades
class Clase{
    constructor(profesor, materia){
        this.profesor = profesor
        this.materia = materia
    }
}
let matClass = new Clase("Yolanda", "Matemáticas")
console.log(matClass)

// 2. Añade un método a la clase que utilice las propiedades
class Clase2{
    constructor(profesor, materia){
        this.profesor = profesor
        this.materia = materia
    }
    accion(){
        console.log(`${this.profesor} da ${this.materia}`)
    }
}
let historyClass = new Clase2("Giovanny", "Historia")


// 3. Muestra los valores de las propiedades e invoca a la función
console.log(historyClass.profesor)
console.log(historyClass.materia)
historyClass.accion()

// 4. Añade un método estático a la primera clase
class Clase3{
    static accion(){
        console.log(`La profesora da matematicas`)
    }
}

// 5. Haz uso del método estático
Clase3.accion()

// 6. Crea una clase que haga uso de herencia
class MathClass extends Clase{
    Sumar(a=0,b=0){
        console.log(`${this.profesor} suma con ${this.materia}`)
        return a+b
    }
    Restar(a=0,b=0){
        console.log(`${this.profesor} resta con ${this.materia}`)
        return a-b
    }
}
let myMathClass = new MathClass("Yolanda", "Matematicas")
console.log(myMathClass.Restar(3,5))
console.log(myMathClass.Sumar(5,3))

// 7. Crea una clase que haga uso de getters y setters
class cuentaGithub{
    constructor(name, password, alias, repo){
        this.name = name
        this.password = password
        this.alias = alias
        this.repo = repo
    }
    get(){
        return this.repo
    }
    set(newName, newPass){
        this.name = newName
        this.password = newPass
    }
}
let myAcount = new cuentaGithub("Emilio", "EALA0921", "Emiljo.Dev", 5)
myAcount.set("Alejandro", "Eala.0921")
console.log(myAcount.get())
console.log(myAcount)

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class cuentaGithub2{
    #password
    #repo

    constructor(name, password, alias, repo){
        this.name = name
        this.#password = password
        this.alias = alias
        this.#repo = repo
    }
    get(){
        return this.#repo
    }
    set(newName, newPass){
        this.name = newName
        this.#password = newPass
    }
}
let myAcount2 = new cuentaGithub2("Emilio", "EALA0921", "Emiljo.Dev", 5)

// 9. Utiliza los get y set y muestra sus valores
myAcount2.set("Alejandro", "Eala.0921")
console.log(myAcount2.get())
console.log(myAcount2)

// 10. Sobrescribe un método de una clase que utilice herencia
class Streamer{
    constructor(name){
        this.name = name
    }
    streamear(){
        console.log("Emite en directo sus actividades")
    }
}

class VideoGames extends Streamer{
    constructor(name, game){
        super(name)
        this.game = game
    }
    Streamear(){
        console.log(`${this.name} emite directo jugando a ${this.game}`)
    }
}

let TheGrefg = new VideoGames("TheGrefg", "God of War")
TheGrefg.Streamear()