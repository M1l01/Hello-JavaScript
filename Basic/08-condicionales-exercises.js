// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let MyName = "Emilio"
if(MyName == "Emilio"){
    console.log("Mi nombre es Emilio")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "EmiljoDev"
let password = "Eala@0921Dev"

if(user == "EmiljoDev" && password =="Eala@0921Dev"){
    console.log("Acceso Concedido")
}else{
    console.log("Acceso Denegado")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0

if(number > 0){
    console.log("Número positivo")
}else if(number < 0){
    console.log("Número negativo")
}else{
    console.log("Número igual a 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 14

if(edad >= 18){
    console.log("Puedes votar")
}else{
    console.log(`No puedes votar te faltan ${18-edad} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
isSnr = edad >= 18 ? "adulta" : "menor"
console.log(`La persona es ${isSnr}`)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Octubre"
let estacion
if(mes == "Diciembre" || mes == "Enero" || mes == "Febrero"){
    estacion = "Invierno"
}else if(mes == "Marzo" || mes == "Abril" || mes == "Mayo"){
    estacion = "Primavera"
}else if(mes == "Junio" || mes == "Julio" || mes == "Agosto"){
    estacion = "Verano"
}else if(mes == "Septiembre" || mes == "Octubre" || mes == "Noviembre"){
    estacion = "Otoño" 
}else{
    estacion = "Mes Incorrecto"
}
console.log(estacion)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let cantDays
if(mes == "Diciembre" || mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre"){
    cantDays = 31
}else if(mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre"){
    cantDays = 30
}else if(mes == "Febrero"){
    cantDays = 28 
}else{
    cantDays = "Mes Incorrecto"
}
console.log(cantDays)
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Ingles"
switch(idioma){
    case "Ingles":
        console.log("Hello, how are you dear developer!")
        break
    case "Español":
        console.log("Hola que tal querido desarrollador!")
        break
    case "Frances":
        console.log("Bonjour, comment allez-vous cher développeur !")
        break
    case "Aleman":
        console.log("Hallo, wie geht es dir, lieber Entwickler!")
        break
    default:
        console.log("Idioma no encontrado")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mesSw = "Enero"
let estacionSw
switch (mesSw){
    case "Enero":
        estacionSw = "Invierno"
        break
    case "Febrero":
        estacionSw = "Invierno"
        break
    case "Marzo":
        estacionSw = "Primavera"
        break
    case "Abril":
        estacionSw = "Primavera"
        break
    case "Mayo":
        estacionSw = "Primavera"
        break
    case "Junio":
        estacionSw = "Verano"
        break
    case "Julio":
        estacionSw = "Verano"
        break
    case "Agosto":
        estacionSw = "Verano"
        break
    case "Septiembre":
        estacionSw = "Otoño"
        break
    case "Octubre":
        estacionSw = "Otoño"
        break
    case "Noviembre":
        estacionSw = "Otoño"
        break
    case Diciembre:
        estacionSw = "Invierno"
    default:
        estacionSw = "Mes Incorrecto"
}
console.log(estacionSw)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let numDays
switch (mesSw){
    case "Enero":
        numDays = 31
        break
    case "Febrero":
        numDays = 28
        break
    case "Marzo":
        numDays = 31
        break
    case "Abril":
        numDays = 30
        break
    case "Mayo":
        numDays = 31
        break
    case "Junio":
        numDays = 30
        break
    case "Julio":
        numDays = 31
        break
    case "Agosto":
        numDays = 31
        break
    case "Septiembre":
        numDays = 30
        break
    case "Octubre":
        numDays = 31
        break
    case "Noviembre":
        numDays = 30
        break
    case Diciembre:
        numDays = 31
    default:
        numDays = "Mes Incorrecto"
}
console.log(numDays)