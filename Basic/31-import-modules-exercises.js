import { Saludo, e, Rectangle } from "./30-export-modules-exercises.js"
import contador from "./30-export-modules-exercises.js"

// 4. Importa una función
Saludo("Emilio")

// 5. Importa una constante
console.log(e)

// 6. Importa una clase
let myRectangle = new Rectangle(2,3)
console.log(`Área del rectangulo: ${myRectangle.area()} u2`)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
let cuadradoArea = new contador(2)
console.log(cuadradoArea.area())

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { SumNums, nombre, TriangleRect} from "../modulo/exportmodules.js"
let arrayNums = [1,2,3,5,4,6]
console.log(SumNums(arrayNums))

console.log(nombre)

let myTriangle = new TriangleRect(4,3)
console.log(myTriangle.area())