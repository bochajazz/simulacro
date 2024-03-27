/*Crear una función que reciba como parámetro una nota y retorne una de 
estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

Nota es menor a 4 - LIBRE
Nota es menor a 7 y no es LIBRE - REGULAR 
Nota mayor que 6  - PROMOCIONADO.

1) Lee atentamente el enunciado de la situación problemática y e indica cuales son los datos de entrada que recibe.
2) Lee atentamente el enunciado de la situación problemática y e indica cual es la información de salida que debes producir.
3) Lee atentamente el enunciado de la situación problemática y e indica que tipos de estructuras utilizaras (secuencial, selectiva, iterativa, función, etc.) y cual es el procedimiento que realizaras, describirlo utilizando lenguaje coloquial.
4) Crea el código JavaScript que soluciona la situación problemática, y luego comparte el link al repositorio de Github que lo contiene.

En base al trabajo realizado en la parte A, realiza las modificaciones necesarias para satisfacer los requerimientos que se detallan a continuación.

* Mejorar el ejercicio anterior agregando un return de mensaje de error si la nota es menor que 1 o mayor que 10.
6) Lee atentamente el enunciado de la situación problemática y e indica cuales son los datos de entrada que recibe.
7) Lee atentamente el enunciado de la situación problemática y e indica cual es la información de salida que debes producir.
8) Lee atentamente el enunciado de la situación problemática y e indica que tipos de estructuras utilizaras (secuencial, selectiva, iterativa, función, etc.) y cual es el procedimiento que realizaras, describirlo utilizando lenguaje coloquial.



*/
console.log("-----primera parte del ejercicio------");

function condicion(nota){

    if (nota < 1 || nota > 10){
        return "Ese número no corresponde a una calificación";
        //console.log("Tu condición es Libre");
    } 
    else if (nota < 4){
    return "LIBRE";
        //console.log("Tu condición no es libre es regular");
    }

    else if (nota < 7){
        return "NO ES LIBRE, ES REGULAR";
    }

    else {
        return "PROMOCIONAL";
    }
}

    //return "TU CONDICION ES PROMOCIONAL";
    //return console.log("El valor expresado no corresponde a una nota");

//return (if nota <= 11)
//console.log("El valor expresado no corresponde a una nota");


console.log(condicion(1));

console.log("-----tercera parte del ejercicio------");

function clasificarAlumno(nota1, nota2, nota3) {
    // Validar que todas las notas estén dentro del rango
    if (nota1 < 1 || nota1 > 10 || nota2 < 1 || nota2 > 10 || nota3 < 1 || nota3 > 10) {
        return "Error: Todas las notas deben estar entre 1 y 10";
    }

    // Calcular el promedio
    var promedio = (nota1 + nota2 + nota3) / 3;

    // Determinar el estado del alumno según el promedio
    if (promedio < 4) {
        return "LIBRE";
        
    } else if (promedio < 7) {
        return "REGULAR";
        
    } else {
        return "TU CONDICIÓN ES: 'PROMOCIONADO'.";
        
    }
}

// Ejemplo de uso:
console.log(clasificarAlumno(6, 7, 8)); // Salida: REGULAR
// console.log(clasificarAlumno(2, 3, 4)); // Salida: LIBRE
// console.log(clasificarAlumno(9, 8, 7)); // Salida: PROMOCIONADO
// console.log(clasificarAlumno(10, 2, 11)); // Salida: Error: Todas las notas deben estar entre 1 y 10
