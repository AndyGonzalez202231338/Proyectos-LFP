//crear una funcion recursiva que calcule el factorial de un numero;

function factorialNumero(numero){
    if(numero == 1 || numero == 0){
        return 1; // debido a que el factorial de 0 y 1 dara como resultado 1
    }    
    return numero * factorialNumero(numero -1);
}
console.log(factorialNumero(5));
