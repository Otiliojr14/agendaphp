<?php

// Mostrar errores en la página
error_reporting( E_ALL );
ini_set( 'display_errors', 1 ); 

function obtenerContactos () {
    include './assets/inc/functions/bd.php';
    try {
        return $conn->query("SELECT id_contacto, nombre_contacto, empresa_contacto, telefono_contacto FROM contactos");
    } catch (Exception $e) {
        echo "Error: " . $conn->getMessage() . "<br>";
        return false;
    }
}

function obtenerContacto ($id) {
    include './assets/inc/functions/bd.php';
    try {
        return $conn->query("SELECT id_contacto, nombre_contacto, empresa_contacto, telefono_contacto FROM contactos WHERE id_contacto = $id");
    } catch (Exception $e) {
        echo "Error: " . $conn->getMessage() . "<br>";
        return false;
    }
}

?>