//set
//Declaracion
let mySet = new Set()
console.log(mySet)

//Inicializacion
mySet = new Set(["Emilio", "Lemos", "EmiljoDev", 22, true])
console.log(mySet)

//Métodos comunes

//add y delete
mySet.add("emiljo.dev@outlook.com")
console.log(mySet)

mySet.delete("Emilio")
console.log(mySet)

console.log(mySet.delete("Lemos"))
console.log(mySet)

//has
console.log(mySet.has("EmiljoDev"))
console.log(mySet.has("Emilio"))

//size
console.log(mySet.size)
console.log(mySet)

//Convertir un Set en Array
let miArray = Array.from(mySet)
console.log(miArray)

//Convertir un Array en Set
mynewSet = new Set(miArray)
console.log(mynewSet)

// Diferencia entre Set y Array
// No admite duplicados
console.log(mySet)

mySet.add(true)
console.log(mySet)