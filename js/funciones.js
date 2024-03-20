export const navegacion = document.querySelector('.navegacion');
const cerrarMenu = document.querySelector('.cerrar');
let bandera = 0;

const date = new Date(); 

export function mostrarMenu() {
    if(navegacion.classList.contains('cerrar')) {
        navegacion.classList.remove('cerrar');
    } else {
        navegacion.classList.add('cerrar');
    }
}

export function mostrarFecha() {
    const fecha = document.querySelector('.copyright');
    const año = date.getFullYear();
    const elementoAño = document.createElement('p');
    elementoAño.textContent = ` - ${año}`;
    fecha.appendChild(elementoAño);
}

export function animacionNumeros() {
    const añosExperiencia = document.querySelector('#numeroExperiencia');
    const porcentajeClientes = document.querySelector('#porcentajeExperiencia');

    let scrollTop = document.documentElement.scrollTop;
    let cantidad = 0;

    let alturaAnimado = añosExperiencia.offsetTop;

    if(alturaAnimado - 580 < scrollTop && bandera === 0) {
        bandera=1;
        let tiempo=setInterval(() => {
            cantidad+=1;
            porcentajeClientes.textContent = cantidad;
    
            if(cantidad>=10) {
                añosExperiencia.textContent = 10;
            } else {
                añosExperiencia.textContent = cantidad;
            }
            if(cantidad===100) {
                clearInterval(tiempo);
            }
        },20)
    }
}