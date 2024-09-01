// 9. Exporta una función, una constante y una clase desde una carpeta

export function SumNums(array){
    let sum = 0
    array.forEach(element=>{
        sum+=element
    })
    return sum
}

export const nombre = "Emilio"

export class TriangleRect{
    constructor(alt, anch){
        this.alt = alt
        this.anch = anch
    }
    area(){
        return (this.alt * this.anch)/2
    }
}