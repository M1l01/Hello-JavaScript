// 1. Captura una excepción utilizando try-catch
console.log("----------------Ejercicio 1--------------")
let array
try{
    console.log(array[3])
}catch{
    console.log("Se ha producido un error")
}

// 2. Captura una excepción utilizando try-catch y finally
console.log("----------------Ejercicio 2--------------")
let array1
try{
    console.log(array1[3])
}catch{
    console.log("Se ha producido un error")
}finally{
    console.log(`valores en array: ${array}`)
}

// 3. Lanza una excepción genérica
console.log("----------------Ejercicio 3--------------")
let array2
try{
    console.log(array[3])
}catch(error){
    console.log("Se ha producido un error: ", error.message)
}

// 4. Crea una excepción personalizada
console.log("----------------Ejercicio 4--------------")

class ArrayUndefinedError extends TypeError{
    constructor(message, array){
        super(message)
        this.array = array
    }
    printArray(){
        console.log(this.array)
    }
}

// 5. Lanza una excepción personalizada
console.log("----------------Ejercicio 5--------------")
let array3

function printMyArray(array){
    if(typeof array === "undefined"){
        throw new ArrayUndefinedError("Se necesita definir el array", array)
    }
    return array
}
try{
    console.log(printMyArray(array3))
}catch(error){
    console.log("TypeError:", error.message)
    error.printArray()
}

// 6. Lanza varias excepciones según una lógica definida
console.log("----------------Ejercicio 6--------------")

let array4

function printMyArray2(array){
    if(typeof array === "undefined"){
        throw new ArrayUndefinedError("Se necesita definir el array", array)
    }
    if(array.length == 0){
        throw new Error("El array se encuentra vacío")
    }
    return array
}

// 7. Captura varias excepciones en un mismo try-catch
console.log("----------------Ejercicio 7--------------")

try{
    console.log(printMyArray2(array4))
}catch(error){
    if(error instanceof TypeError){
        console.log("Type Error:", error.message)
    }else if(error instanceof Error){
        console.log("Error:", error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log("----------------Ejercicio 8--------------")

const valores = ["3.14", "abc", "42", "5.61e-2", "nan", "null"]
valores.forEach(valor =>{
    try{
        const numero = parseFloat(valor)
        if(isNaN(numero)){
            throw new Error(`El valor ${numero} no se puede convertir en float`)
        }
        console.log(`El valor ${valor} se ha convertido en float: ${numero}`)
    }catch(error){
        console.log("Error:", error.message)
    }
})

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
console.log("----------------Ejercicio 9--------------")
let persona = {
    nombre: "Emilio",
    apellido: "Lemos",
    edad: 22
}
function verifyEmail(person){
    if(typeof person.email === "undefined"){
        throw new EmailInObjectError("No está definido la propiedad email en el Objeto", person)
    }
    return person
}

class EmailInObjectError extends Error{
    constructor(message, person){
        super(message)
        this.person = person
    }
    printObject(){
        console.log(this.person)
    }
}

try{
    console.log(verifyEmail(persona))
}catch(error){
    console.log("Error: ", error.message)
    error.printObject()
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
let RegNumber = [11, 12, 13, 14]
console.log(typeof RegNumber[1])
let numberRequest = 8

function Acceso(Registro, NumberRequest){
    let intentos = 1
    while(intentos <= 10){
        let existe = false
        console.log(`Intento numero: ${intentos}`)
        Registro.forEach(element=>{
            //Revisar el tipo de dato
            if(typeof NumberRequest !== "number"){
                throw new Error("Ingresa una cadena de caracteres")
            //Revisar si existe en el Registro
            }else if(NumberRequest === element){
                console.log("Coincide")
                existe = true
            }
        })
        NumberRequest = NumberRequest + 1
        if(existe){
            break;
        }
        intentos++
    }
}

try{
    Acceso(RegNumber, numberRequest)
}catch(error){
    console.log("Error:", error.message)
}