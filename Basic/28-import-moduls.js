//Importacion de modulos
import {add, PI, name, Circle} from "./27-export-modules.js"
import substract from "./27-export-modules.js"

//Funciones
console.log(add(5,10))

//Propiedades
console.log(PI)
console.log(name)

//Clases
let circle = new Circle(10)
console.log(circle.area().toFixed(2))
console.log(circle.perimetro().toFixed(2))

//Importacion por defecto
// console.log(substract(6,3))
let myclass = new substract()
myclass.func()

//Proyecto Modular
//import { myImport } from "./directory/file.js"
