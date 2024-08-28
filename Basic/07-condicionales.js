//if
let age = 21; 

if (age == 22) {
    console.log("Tienes 22 años")
}

//else
if (age == 22) {
    console.log("Tienes 22 años")
}else{
    console.log("No tienes 22 años")
}

// else if
if (age == 22) {
    console.log("Tienes 22 años")
}else if(age < 18){
    console.log("Eres Menor de edad")
}else{
    console.log("No tienes 22 años, pero no eres menor de edad")
}

//Operadores Ternarios
let isTwentytwo = age == 22 ? "Tienes 22 años" : "No tienes 22 años" 
console.log(isTwentytwo)

//Switch
let day = 4
let dayName

if(day == 0){
    dayName = "Lunes"
}else if(day == 1){
    dayName = "Martes"
}else if(day == 2){
    dayName = "Miercoles"
}//...

switch(day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número Incorrecto"
}
console.log(dayName)