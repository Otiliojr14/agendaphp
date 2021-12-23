import UI from "./UI.js";
import { formulario, nombre, empresa, telefono, listadoContactos, inputBuscador  } from "./selectores.js";

const ui = new UI();

// Cada vez que se cambia a otro input se llama la funcion datosFormulario
nombre.addEventListener('blur', datosFormulario);
empresa.addEventListener('blur', datosFormulario);
telefono.addEventListener('blur', datosFormulario);
inputBuscador.addEventListener('input', buscarContactos);

// Objeto que guarda los datos del formulario para validarlo despues
// Se agregan los values por si los datos ya estan puestos cuando es el caso de editar un registro.
const formInputs = {
    nombre : `${nombre.value}`,
    empresa : `${empresa.value}`,
    telefono : `${telefono.value}`
}

window.onload = () => {
    numeroContactos();
    formulario.addEventListener('submit', leerFormulario);
    if (listadoContactos) {
        listadoContactos.addEventListener('click', eliminarContacto);
    }    
}

function leerFormulario(e) {
    e.preventDefault();

    const accion = document.querySelector('#accion-contacto').value;

    if (!validarFormulario(formInputs)) {
        ui.mostrarNotificacion('Todos los campos son obligatorios', 'error');
        return;
    };

    const {nombre, empresa, telefono} = formInputs;

    // Se crea un objeto de datos que se va a transferir pos AJAX
    const infoContacto = new FormData();
    infoContacto.append('nombre', nombre);
    infoContacto.append('empresa', empresa);
    infoContacto.append('telefono', telefono);
    infoContacto.append('accion', accion);

    // Verifica si el valor del input accion es crear o no
    if (accion === 'crear') {
        insertarBD(infoContacto);
    } else {
        const idRegistro = document.querySelector('#id').value;
        infoContacto.append('id', idRegistro);
        actualizarRegistro(infoContacto);
    }
    
}

function insertarBD(datos) {
    
    // Crear el objeto AJAX
    const xhr = new XMLHttpRequest();

    // Abrir conexión
    xhr.open('POST', './assets/inc/models/modelo-contactos.php', true);

    // Pasar los datos
    xhr.onload = function () {
        if (this.status === 200) {
            const respuesta = JSON.parse(xhr.responseText);

            if (respuesta.respuesta = 'correcto') {
                // Insertar elemento nuevo a la table
                const nuevoContacto = document.createElement('tr');

                nuevoContacto.innerHTML = `
                    <td>${respuesta.datos.nombre}</td>
                    <td>${respuesta.datos.empresa}</td>
                    <td>${respuesta.datos.telefono}</td>
                `;

                // Crear contenedor para los botones
                const contenedorAcciones = document.createElement('td');

                // Crear el icono editar
                const iconoEditar = document.createElement('i');
                iconoEditar.classList.add('bi', 'bi-pencil-square');

                // Crear el enlace para continuar
                const btnEditar = document.createElement('a');
                btnEditar.appendChild(iconoEditar);
                btnEditar.href = `editar.php?id=${respuesta.datos.id_insertado}`;

                // Agregar el boton editar al padre
                contenedorAcciones.appendChild(btnEditar);

                // Crear el icono de eliminar
                const iconoEliminar = document.createElement('i');
                iconoEliminar.classList.add('bi', 'bi-trash-fill');
                iconoEliminar.style.marginLeft = '7px';
                
                // Crear el boton eliminar
                const btnEliminar = document.createElement('button');
                btnEliminar.classList.add('borrar-btn');
                btnEliminar.appendChild(iconoEliminar);
                btnEliminar.setAttribute('data-id', respuesta.datos.id_insertado);
                btnEliminar.type = 'button';

                // Agregar el boton eliminar al padre
                contenedorAcciones.appendChild(btnEliminar);

                // Agregar a la fila
                nuevoContacto.appendChild(contenedorAcciones);

                // Agregarlo con los contactos
                listadoContactos.appendChild(nuevoContacto);

                ui.mostrarNotificacion('Contacto creado correctamente', 'correcto');

                formulario.reset();

                numeroContactos();
            } else {
                ui.mostrarNotificacion('Hubo un error', 'error');
            }
            
        }
    }

    // Enviar los datos
    xhr.send(datos);
}

function actualizarRegistro(datos) {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', './assets/inc/models/modelo-contactos.php', true);

    xhr.onload = function () {
        const respuesta = JSON.parse(xhr.responseText);
        
        if (respuesta.respuesta == 'correcto') {
            ui.mostrarNotificacion('Contacto editado correctamente', 'correcto');
        } else {
            ui.mostrarNotificacion('Hubo un error...', 'error');
        }

        setTimeout(() => {
            window.location.href = 'index.php';
        }, 4000);
    }

    xhr.send(datos);
}

function eliminarContacto(e) {
    if (e.target.parentElement.classList.contains('borrar-btn')) {
        const id = e.target.parentElement.getAttribute('data-id');

        const respuesta = confirm("¿Estás seguro de elminar el registro?");

        if (respuesta) {
            // Creando objeto AJAX
            const xhr = new XMLHttpRequest();

            // Abrir la conexión
            xhr.open('GET', `./assets/inc/models/modelo-contactos.php?id=${id}&accion=borrar`, true);

            xhr.onload = function () {
                if (this.status === 200) {
                    const respuesta = JSON.parse(xhr.responseText);

                    if (respuesta.respuesta == 'correcto') {
                        e.target.parentElement.parentElement.parentElement.remove();
                        ui.mostrarNotificacion('Contacto eliminado', 'correcto');

                        numeroContactos();
                    } else {
                        ui.mostrarNotificacion('Hubo un error', 'error');
                    }
                }
            }

            xhr.send();
        }
    }
    
}

function buscarContactos(e) {
    const expresion = new RegExp(e.target.value, "i"),
          registros = document.querySelectorAll('tbody tr');

          registros.forEach(registro => {
              registro.style.display = 'none';

              if (registro.childNodes[1].textContent.replace(/\s/g, " ").search(expresion) != -1) {
                registro.style.display = 'table-row';
              }

              numeroContactos();
          });
}

// Añade los valores acorde al nombre del Input asignado en el HTML.
function datosFormulario(e) {
    formInputs[e.target.name] = e.target.value;
}


// Verifica que todos los elementos del objeto no esten vacios
function validarFormulario(obj) {
    return Object.values(obj).every( input => input !== '');
}

function numeroContactos() {
    const totalContactos = document.querySelectorAll('tbody tr'),
          contenedorNumero = document.querySelector('.total-contactos span');

    let total = 0;

    totalContactos.forEach(contacto => {
        if (contacto.style.display === '' || contacto.style.display === 'table-row') {
            total++;
        }
    });

    contenedorNumero.textContent = total;
}

