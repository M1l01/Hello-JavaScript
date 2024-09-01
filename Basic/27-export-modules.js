//Exportacion de modulos
export function add(a,b){
    return a+b
}

//Propiedades
export const PI = 3.141592
export let name = "Emilio"

//Clases
export class Circle{
    constructor(radius){
        this.radius = radius
    }
    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
    perimetro(){
        return 2*Math.PI*this.radius
    }
}

//Exportacion por Defecto
// export default function substract(a, b){
//     return a-b
// }

export default class MyClass{
    func(){
        console.log("mi clase")
    }
}

