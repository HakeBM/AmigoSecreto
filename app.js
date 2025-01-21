// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaro la variable de Arrays que contendra el nombre
let nombres = [];

/* funcion que contiene el Elemento y el texto en este caso sera el nombre que ingresamos 
usamos la etiqueta <li> para crear una lista que contenga el nombre en el HTML*/
function textoyElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML += `<li>${texto}</li>`;
    return;
} 

/* Funcion que nos permite agregar el nombre que el usuario ingreso */
function agregarAmigo() {
    /* declaramos una variable que obtendra el nombre ingresado y mandaremos al final del array tambien
     limpiamos la barra de ingreso y verificamos que el campo no este vacio*/
    let obtenerNombre= document.querySelector('#amigo').value;
    if (obtenerNombre && !nombres.includes(obtenerNombre)) {
        nombres.push(obtenerNombre); 
        textoyElemento('#listaAmigos', obtenerNombre);
        document.querySelector('#amigo').value='';       
         }else if (nombres.includes(obtenerNombre)) {
            alert="El nombre de esta persona esta repetido";
    } else {
        alert = "Por favor ingrese un nombre valido";
    }

}

function sortearAmigo() {
    let amigoSorteado = nombres[Math.floor(Math.random()*nombres.length)];
    textoyElemento= ('#resultado', `El amigo sorteado es ${amigoSorteado}.`);
    
}