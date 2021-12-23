import { formulario } from "./selectores.js";

class UI {
    mostrarNotificacion(mensaje, tipo) {

        // Verifica si hay una notificacion previa para no enviar mensajes repetidos

        const notificacion = document.querySelector(`.${tipo}`);

        if (!notificacion) {
            const notificacion = document.createElement('div');
            notificacion.textContent = mensaje;
            notificacion.classList.add(tipo, 'notificacion');

            formulario.insertBefore(notificacion, document.querySelector('.legend__section'));

            setTimeout(() => {
                notificacion.classList.add('visible');
            }, 50);

            setTimeout(() => {
                notificacion.classList.remove('visible');
            }, 2500);

            setTimeout(() => {
                notificacion.remove()
            }, 3000);
        }        
    }
}

export default UI;