// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//1 Declaro la variable de Arrays que contendra el nombre
let nombres = [];

// Esta funcion se utiliza para crear un elemento de lista y que se muestre en el DOM y que se actulice cada vez 
//que ingresemos un nombre
function idYTexto(id, texto) {
    let idHtml = document.getElementById(id);
    let elementoNuevo= document.createElement('li');
    elementoNuevo.textContent = texto;
    idHtml.appendChild(elementoNuevo);
    return;
}
// la funcion que agrega un amigo y valida primero si el nombre no esta vacio y en caso de estarlo muestra un alert
function agregarAmigo() {
    let obtenerNombre = document.getElementById('amigo').value.trim();
    if (obtenerNombre !=="") {
        nombres.push(obtenerNombre);
        idYTexto('listaAmigos', obtenerNombre);
        document.getElementById('amigo').value='';
    } else{
        alert("Por favor ingrese un nombre valido");
        return;
    }
}   

// esta funcion la utulizmos para recorrer nuestro array con un ciclo for 
function recorrerLista() {
    let elementosLista=document.getElementById('listaAmigos');
    elementosLista.innerHTML='';
    for (let i = 0; i < nombres.length; i++) {
        idYTexto('li', nombres[i]);
        return;
    }
}

// Primero verificamos que haya amigos para ser sorteados si no es asi muestra un alert
// cuando detecte una lista multiplicara por la cantidad de nombres ingresados en el array y eligira uno al azar
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista de amigos esta vacia, no hay amigos para sortear.");
        return;
    }
    let amigoSorteado = nombres[Math.floor(Math.random() * nombres.length)];
    let resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    return;
}