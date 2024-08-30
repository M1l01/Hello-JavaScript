// 1. Crea un objeto con 3 propiedades
let animal = {
    nombre: "Leon",
    habitat: "sabana",
    isSavage: true
}

// 2. Accede y muestra su valor
for(let key in animal){
    console.log(`${key}` + " : " + `${animal[key]}`)
}

// 3. Agrega una nueva propiedad
animal.edad = 12
console.log(animal)

// 4. Elimina una de las 3 primeras propiedades
delete animal.habitat
console.log(animal)

// 5. Agrega una función e invócala
animal.cazar = function(){
    console.log(`${this.nombre} empieza a correr`)
}
animal.cazar()

// 6. Itera las propiedades del objeto
for(let key in animal){
    console.log(`${key}` + " : " + `${animal[key]}`)
}

// 7. Crea un objeto anidado
let personaje = {
    nombre: "Joel",
    edad: 56,
    peso: 85,
    pelicula:  {
        nombre: "The last of us",
        tipo: "Aventura - Zombies",
        cantTemp: 1
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
for(let clave in personaje.pelicula){
    console.log(`${clave}` + " : " + `${personaje.pelicula[clave]}`)
}

// 9. Comprueba si los dos objetos creados son iguales
console.log("¿Los Objectos son iguales? :", (animal == personaje))

// 10. Comprueba si dos propiedades diferentes son iguales
console.log("¿Las propiedades nombre de los objetos son iguales? :", (animal.nombre == personaje.nombre))