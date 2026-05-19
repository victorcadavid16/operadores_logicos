//3. Clasificación de números
//Crea un programa que pida un número entero y muestre:
//• "Número positivo" si el número es mayor que 0.
//• "Número negativo" si es menor que 0.
//• "Cero" si es igual a 0.
//Extensión: ¿Cómo cambiaría la solución si quieres que, además, se verifique si el
//número es par o impar?


alert (" ___ Sistema de clasificación de números___");

let numero = parseInt(prompt("Ingresa un número entero:"));

if (numero > 0){
    alert("Numero Positivo")
} else if (numero < 0){
    alert("Numero negativo")
} else {
    alert("Cero");
}

alert ("Extensión para verificar si es Par o Impar");


if (numero !== 0) { // el cero no se clasifica como par/impar en este ejemplo
if (numero % 2 === 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}
}


alert (" ___ Finalización del Sistema de clasificación de números___");