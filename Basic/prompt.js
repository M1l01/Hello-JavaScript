const readline = require('readline');

// Crear una interfaz de entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir al usuario que ingrese un número
rl.question('Por favor, ingresa un número: ', (input) => {
  const numero = Number(input);  // Convertir la entrada a un número

  if (!isNaN(numero)) {
    console.log('El número ingresado es:', numero);
  } else {
    console.log('No has ingresado un número válido.');
  }

  rl.close();  // Cerrar la interfaz
});
