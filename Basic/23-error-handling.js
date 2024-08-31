//Manejo de Errores

//Excepcion

// let myObject
// console.log(myObject.email) //Produce una excepción

//Captura de errores
let myObject
//try-catch
try{
    //código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin ERRORES")
}catch{
    //Bloque de Error
    console.log("Se ha producido un ERROR")
}

//Captura del error
try{
    //código que intenta ejecutar
    console.log(myObject.email)
}catch (error){
    console.log("Se ha producido un ERROR: ", error.message)
    //console.log(typeof error.message) //String
}

//Finally
try{
    //código que intenta ejecutar
    console.log(myObject.email)
}catch (error){
    console.log("Se ha producido un ERROR: ", error.message)
    //console.log(typeof error.message) //String
}finally{
    console.log("Este código se ejecuta siempre")
}

//Lanzamiento de errores

// throw
//throw new Error("Se ha producido un error")
/*
TIPOS DE ERRORES:
- Syntax Error: Sintaxis Incorrecta
- Reference Error: Se lanza cuando el código intenta acceder a una variable que no está definida o fuera de alcance
- Type Error: Cuando una operación no puede ser realizada, cuando un valor es de tipo inesperado
- Range Error: Ocurre cuando un número no está dentro de un rango válido
- URI Error: Se lanza cuando las funciones de URI son usadas de manera incorrecta
- Internal Error: Ocurre un problema en el motor interno de JavaScript
- Aggregate Error: Representa un error que envuelve varios errores individuales, a menudo usado con Pormise.any() para capturar errores múltiples

*/
function sumIntegers(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Esta operación solo suma números")
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operacion solo suma números enteros")
    }
    if(a == 0 || b == 0){
        throw new SumZeroIntegerError("Se está intentando sumar 0", a, b)
    }
    return a+b
}
/*
try{
    console.log(sumIntegers(5,10))
    console.log(sumIntegers(5,"10"))
}catch(error){
    console.log("Se ha producido un error: ", error.message)
}*/

// Capturar varios tipos de errores

try{
    // console.log(sumIntegers(5.5,10))
    console.log(sumIntegers(5,"10"))
}catch(error){
    if(error instanceof TypeError){
        console.log("Se ha producido un error de tipo: ", error.message)
    }else if(error instanceof Error){
        console.log("Se ha producido un error: ", error.message)
    }
}

//Crear Excepciones Personalizadas
class SumZeroIntegerError extends Error{
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers(){
        console.log(this.a, " + ", this.b)
    }
}

try{
    console.log(sumIntegers(5, 0))
}catch(error){
    console.log("Se ha producido un error personalizado: ", error.message)
    error.printNumbers()
}
