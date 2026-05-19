//2. Calcular precio de entradas al cine
//Un cine aplica las siguientes reglas:
//• Si el cliente tiene menos de 12 años, el valor de la entrada es 5000.
//• Si tiene entre 12 y 18 años, el valor es 8000.
//• Si es mayor de 18, el valor es 10000.
//Si el cliente es estudiante (condición adicional), se le aplica un descuento del 20%
//al valor de la entrada.

alert("__ Sistema de entradas a cine ___");
let edad = parseInt(prompt("Para poder ingresar al cine, ingrese su edad:"));
let estudiante = prompt("¿ Es estudiante? (si / no)").toLocaleLowerCase().trim();
let precio;

if (edad <= 12) {
    precio = 5000;
} else if (edad > 12 && edad <= 18) {
    precio = 8000;
} else {
    precio = 10000;
}

if (estudiante === "si") {
    precio = precio * 0.8;
}

alert("El valor de la entrda al cine es de: $" + precio);
alert(" ____ Finalización del sistema de entradas al cine ____");
