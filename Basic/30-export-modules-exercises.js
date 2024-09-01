// 1. Exporta una función
export function Saludo(name){
    console.log(`Hola ${name} que tal!!`)
}

// 2. Exporta una constante
export const e = 2.718282

// 3. Exporta una clase
export class Rectangle{
    constructor(long1, long2){
        this.long1 = long1
        this.long2 = long2
    }
    area(){
        return this.long1 * this.long2
    }
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
// export default function contVocales(text){
//     let contador = 0
//     for(let element of text){
//         if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u"){
//             contador++
//         }
//     }
//     return contador
// }

//export default const PI = 3.1416 // No se puede exportar constantes por defecto

export default class Square{
    constructor(lado){
        this.lado = lado
    }
    area(){
        return Math.pow(this.lado, 2)
    }
}


