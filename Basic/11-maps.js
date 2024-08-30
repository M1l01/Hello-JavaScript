// Map - Colección de elementos - Diccionarios

//Declaración
let myMap = new Map()
console.log(myMap)

//Inicialización
myMap = new Map([
    ["nombre" , "Emilio"],
    ["email" , "emiljo.dev@outlook.com"],
    ["age" , 22]
])
console.log(myMap)

//Métodos y Propiedades
//set - Actualizar un elemento o agregarlo
myMap.set("nombre" , "Alejandro")   //Actualiza clave -> nombre
myMap.set("alias" , "EmiljoDev")    //Agrega clave -> alias
console.log(myMap)

//get - Recuperar valor
console.log(myMap.get("nombre"))
console.log(myMap.get("surname"))

//has - Busca si Map tiene una key
console.log(myMap.has("surname"))
console.log(myMap.has("Alejandro"))

//delete - elimina un elemento
myMap.delete("email")
console.log(myMap)

//clear - elimina todos los elementos
myMap.clear()
console.log(myMap)

//KEYS
myMap = new Map([
    ["nombre" , "Emilio"],
    ["email" , "emiljo.dev@outlook.com"],
    ["age" , 22]
])
console.log(myMap.keys())

//VALUES
console.log(myMap.values())

//ENTRIES
console.log(myMap.entries())

//SIZE
console.log(myMap.size)











