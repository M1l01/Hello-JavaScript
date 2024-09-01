// 1. Crea un función que utilice error correctamente
console.time("Tiempo de ejecución")
function calcAreaRect(alt, anch){
    if(isNaN(alt) || isNaN(anch)){
        console.error("Uno de los parámetros No es un número")
        return NaN
    }else{
        return alt*anch
    }
}

console.log(calcAreaRect())

// 2. Crea una función que utilice warn correctamente
function calcAreaRect2(alt, anch){
    if(isNaN(alt) || isNaN(anch)){
        console.error("Uno de los parámetros No es un número")
        return NaN
    }else if(alt == 0 || anch == 0){
        console.warn("Uno de los valores es 0")
        return 0
    }else{
        return alt*anch
    }
}

console.log(calcAreaRect2(0,5))

// 3. Crea una función que utilice info correctamente
function calcAreaRect3(alt, anch){
    console.info("Esta es una función que calcula el Área de un Rectángulo")
    if(isNaN(alt) || isNaN(anch)){
        console.error("Uno de los parámetros No es un número")
        return NaN
    }else if(alt == 0 || anch == 0){
        console.warn("Uno de los valores es 0")
        return 0
    }else{
        return alt*anch
    }
}

console.log(calcAreaRect3(0,5))

// 4. Utiliza table
let tableEdades = [
    {name: "Emilio", age: 22},
    {name: "Antonio", age: 25},
    {name: "Helena", age: 45},
    {name: "Valentina", age: 11}
]

console.table(tableEdades)

// 5. Utiliza group
function Usuario(user){
    user.forEach(element=>{
        console.log(element)
    })
}

let Usuario1 = ["Emilio", 22, "Emiljo", "emiljo.dev@emiljodev.com"]
let Usuario2 = ["Antonio", 25, "Toño", "anto99lemos@anto.com"]
console.group("Usuario 1:")
Usuario(Usuario1)
console.groupEnd()
console.group("Usuario 2:")
Usuario(Usuario2)
console.groupEnd()

// 6. Utiliza time
console.timeEnd("Tiempo de ejecución")

// 7. Valida con assert si un número es positivo
let num = 17
console.assert(num%2==0, "El numero no es positivo")

// 8. Utiliza count
for(let i=0; i<20; i++){
    console.count("Click")
}

// 9. Utiliza trace
function func1(){
    func2()
}
function func2(){
    func4()
}
function func3(){
    console.trace("Seguimiento de la ejecución")
}
function func4(){
    func3()
}
func1()

// 10. Utiliza clear
console.clear()