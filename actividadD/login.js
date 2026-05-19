//1. Acceso a un sistema
//Un sistema debe permitir el acceso a un usuario si cumple estas condiciones:
// El nombre de usuario es "admin".
// La contraseña es "1234".
//Si no cumple las dos condiciones, debe mostrar "Acceso denegado".

alert (" ___ Sistema de Lógin ___");
// Se declara variable constante es decir (No cambia) usuario y Contraseña
const nombreUsuario ="admin";
const contraseñaUsuario ="1234";

let nombre = prompt ("Por favor ingrese el nombre de usuario:");
let contraseña = prompt ("Por favor ingrese la contraseña:");

if (nombre === nombreUsuario && contraseña === contraseñaUsuario) {
    alert ("!Hola  " + nombreUsuario + "  Accediendo...!");
} else {
    alert("Acceso Denegado");
}

alert(" ___ Finalización del sistema ___");