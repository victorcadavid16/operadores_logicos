//5. Sistema de calificaciones con condiciones lógicas
//Un estudiante aprueba una materia si:
//• Su nota final es mayor o igual a 60 y
//• Su asistencia es mayor o igual al 80%.
//Si no cumple ambas condiciones, debe mostrar "Reprobado".

alert("___ Bienvenido al sistema de Calificaciones ___");

let nota =parseInt (prompt("Ingresa tu nota Final:"));
let asistencia = parseInt (prompt("Ingresa tu porcentaje de asistencia:"));


if (nota >= 60 && aistencia >= 80) {
    alert("Aprobado")
} else {
alert ("Reprobado")
}

alert("___ Fin del sistema de Calificaciones  Gracias por su atención!___");