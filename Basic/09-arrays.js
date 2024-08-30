//Array
//Declaracion
let miArray = []
let miArray2 = new Array()

console.log(miArray)
console.log(miArray2)

miArray = [2]
miArray2 = new Array(3)
miArray2[0] = "Emilio"
miArray2[1] = "Alejandro"
console.log(miArray)
console.log(miArray2)

//Metodos comunes
miArray = []

//PUSH y POP
miArray.push("Emilio")
miArray.push("Lemos")
miArray.push("EmiljoDev")
miArray.push("22")
console.log(miArray)

miArray.pop()
console.log(miArray)

console.log(miArray.pop())
console.log(miArray)

//Shift y unshift
console.log(miArray.shift())
console.log(miArray)

miArray.unshift("Emilio", "EmiljoDev")
console.log(miArray)

//Length
console.log(miArray.length)

//clear
miArray = []
console.log(miArray)

miArray.unshift("Emilio", "EmiljoDev", "Lemos")
miArray.length = 0
console.log(miArray)

//slice
miArray.unshift("Emilio", "EmiljoDev", "Lemos", 22, true)
console.log(miArray)
let myNewArray = miArray.slice(1, 2)
console.log(myNewArray)
myNewArray = miArray.slice(1, 3)
console.log(myNewArray)

//splice
console.log(miArray)
miArray.splice(1,3)
console.log(miArray)

miArray = ["Emilio", "EmiljoDev", "Lemos", 22, true]
miArray.splice(1, 0, 3)
console.log(miArray)

miArray = ["Emilio", "EmiljoDev", "Lemos", 22, true]
miArray.splice(1, 2, 3)
console.log(miArray)







