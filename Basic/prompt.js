function contVocales(text){
    let contador = 0
    for(let element of text){
        if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u"){
            contador++
        }
    }
    return contador
}

console.log(contVocales("hola"))