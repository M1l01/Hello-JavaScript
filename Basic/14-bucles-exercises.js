// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i=1; i<=20; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let num = 1
let suma = 0
while(num <=100){
    suma += num 
    num++
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i=1; i<=50; i++){
    if(i%2==0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Emilio", "Antonio", "Helena", "Valentina", "Juan"]
for(let nombre of nombres){
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Hola, JavaScript"
let contVocales = 0
for(let c of texto){
    if(c == "a" || c == "e" || c == "i" || c == "o" || c == "u"){
        contVocales += 1
    }
}
console.log(`En el texto hay ${contVocales} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let arrayNumbers = [1, 2, 3, 4, 5, 6]
let producto = 1
for(let value of arrayNumbers){
    producto *= value 
}
console.log(`Resultado Producto: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let i = 0
console.log(`Tabla del 5`)
do{
    console.log(`5 x ${i} = ${5*i}`)
    i++
}while(i<=12)

// 8. Usa un bucle para invertir una cadena de texto
let texto2 = "Hola mundo"
let textoInv = ""
for(let i=texto2.length-1; i>=0; i--){
    textoInv += texto2[i]
}
console.log(textoInv)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let numFibonacci = []
for(let i=0; i<10; i++){
    (i==0 || i==1) ? numFibonacci.push(i) : numFibonacci.push(numFibonacci[i-2] + numFibonacci[i-1])
}
console.log(numFibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let nums = [1, 3, 15, 7, 18, 34, 12, 10]
let isMayorDiez = []
for(vals of nums){
    if(vals > 10){
        isMayorDiez.push(vals)
    }
}
console.log(isMayorDiez)