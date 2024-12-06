// implementar un pequeño programa en Node.js que pida al usuario ingresar un numero y muestre su factorial.
const readline = require('readline');

console.log("   PROGRAMA FACTORIAL DE UN NUMERO");

// Crear interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pedir un número al usuario
rl.question('Por favor, ingresa un número: ', (respuesta) => {
    const numero = parseInt(respuesta); // Convertir la entrada a un número
    if (!isNaN(numero)) {
        console.log('El factorial es:', factorialNumero(numero));
    } else {
        console.log('No ingresaste un número válido.');
    }
    rl.close(); // Cerrar la interfaz
});

function factorialNumero(numero){
    if(numero == 1 || numero == 0){
        return 1; // debido a que el factorial de 0 y 1 dara como resultado 1
    }    
    return numero * factorialNumero(numero -1);
}

