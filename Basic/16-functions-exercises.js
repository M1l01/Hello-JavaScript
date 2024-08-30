// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a = 0, b = 0){
    return a+b
}
console.log(suma(2,2))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let numeros = [235, 5003, 5000, 33, 21, 234, 300]
function mayor(array){
    let mayor = 0
    for(let i=0; i<array.length; i++){
        if(array[i] > mayor){
            mayor = array[i]
        }
    }
    return mayor
}
console.log(mayor(numeros))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let texto = "Quiero desarrollar webs o apps"
function contVocales(txt){
    txt = txt.toLowerCase()
    console.log(txt)
    let cnt = 0
    for (c of txt){
        if(c=="a"|| c=="i"|| c=="e"|| c=="o"|| c=="u"){
            cnt += 1
        }
    }
    return cnt
}
console.log(contVocales(texto))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let array = ["Hola", "Mundo", "de", "JavaScript"]
let nuevoArray = []
array.forEach(element => {
    element = element.toUpperCase()
    nuevoArray.push(element)
})
console.log(nuevoArray)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let numero = 7
function nPrimo(n){
    if(n <= 1){
        return false
    }else if(n<=3){
        return true
    }else if(n %2 == 0 || n%3 == 0){
        return false
    }
    for(let i=5; i*i<=n; i+=6){
        if(n%i==0 || n%(i+2)==0){
            return false
        }
    }
    return true
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let array1 = ["rojo", "azul", "amarillo", "plomo", "gris", "celeste"]
let array2 = ["azul", "celeste", "naranja", "plomo", "gris", "rojo"]
let newArray = []
function comparacionArrays(array1, array2){
    let arrayRes = []
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(array1[i] == array2[j]){
                arrayRes.push(array1[i])
            }
        }
    }
    return arrayRes
}
newArray = comparacionArrays(array1, array2)
console.log(newArray)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sumaNums = 0
arrNums.forEach(num =>{
    if(num%2==0){
        sumaNums += num
    }
})
console.log(sumaNums)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let newNumsArray = [2, 3, 1, 4, 6, 4, 3]
let potNums = []
newNumsArray.forEach(nums => {
    potNums.push(nums**2)
})
console.log(potNums)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let cadena = "Quiero convertirme en programador"
const ordenInv = (txt) =>{
    txtInv = ""
    txt = txt.split(" ")
    //console.log(txt.length)
    for(let i=txt.length-1; i>=0; i--){
        if(i == txt.length-1){
            txtInv += txt[i]
        }else{
            txtInv = txtInv + " " + txt[i]
        }
    }
    return txtInv
}
console.log(ordenInv(cadena))


// 10. Crea una función que calcule el factorial de un número dado
numero = 2

function numfactorial(n){
    let fact = 1
    for(i = n; i>=1; i--){
        fact *= i 
    }
    return fact
}
let factnum = numfactorial(numero)
console.log(`Factorial de ${numero} es: ${factnum}`)