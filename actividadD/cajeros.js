//4. Menú de opciones
//Un cajero automático presenta el siguiente menú:
//1. Consultar saldo
//2. Retirar dinero
//3. Depositar dinero
//4. Salir
//Crea un programa con switch que muestre la acción correspondiente según el número
//ingresado.
//Pregunta de análisis: ¿Qué pasaría si el usuario ingresa un número que no está entre 1
//y 4?

alert(" ___ Sistema de Cajero automático___");

let opcion = parseInt(prompt("___ Elija las siguinetes  opciones: 1 Consultar Saldo. 2 Retirar dinero. 3 Depositar Dinero. 4 Salir.___"));

switch (opcion) {
    case 1:
        alert("Bienvenido a Consultar Saldo.");
        break;
    case 2:
        alert("Has elegido retirar dinero.");
        break;
    case 3:
        alert("Has elegido depositar dinero.");
    case 4:
        alert("Has elegido Salir, vuelve pronto...");
        break;
    default:
        alert("Opcion Invalida: Por favor ingresa un numero entre el (1 y 4).");
}

alert(" ___ Finalización del Sistema de Cajero automático___");
