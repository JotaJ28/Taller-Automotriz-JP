import { mostrarMenu, mostrarFecha, animacionNumeros } from './funciones.js';

const menu = document.querySelector('.menu-hamburguesa');
const enlacesNavegacion = document.querySelectorAll('.navegacion a');

document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
    llamarFunciones();
});

function eventListeners() {

    window.addEventListener('scroll', animacionNumeros);
    menu.addEventListener('click', mostrarMenu);

    for ( let i=0; i < enlacesNavegacion.length; i++) {
        enlacesNavegacion[i].addEventListener('click', mostrarMenu);
    }
}

function llamarFunciones() {
    mostrarFecha();
}

