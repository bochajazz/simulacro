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

    if (nota < 4){
        return "LIBRE";
        //console.log("Tu condición es Libre");
    } 
    else if (nota < 7){
    return "NO ES LIBRE ES REGULAR";
        //console.log("Tu condición no es libre es regular");
    }

    else if (nota > 6){
        return "PROMOCIONAL";
    }
}

    //return "TU CONDICION ES PROMOCIONAL";
    //return console.log("El valor expresado no corresponde a una nota");

//return (if nota <= 11)
//console.log("El valor expresado no corresponde a una nota");


console.log(condicion(1));

console.log("-----tercera parte del ejercicio------");


let num1 = 3;
let num2 = 6;
let num3 = 8;

let resultado =(num1 + num2 + num3) / 3;

function promedio (num1, num2, num3){

   
    console.log(resultado);
    if (resultado < 4){
    console.log("Tu condición es Libre");
} 
    if (resultado < 7){
    console.log("Tu condición no es libre es regular");
}

else {console.log("Tu condición es promocional");}


//return console.log("El valor expresado no corresponde a una nota");

//return (if nota <= 11)
//console.log("El valor expresado no corresponde a una nota");
}

promedio();