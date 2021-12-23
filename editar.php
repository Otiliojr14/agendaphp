<?php 
include_once './assets/inc/functions/functions.php';
include_once './assets/inc/layout/header.php'; 

$id = filter_var($_GET['id'], FILTER_VALIDATE_INT);

if (!$id) {
    die('No es válido');
}

$resultado = obtenerContacto($id);
$contacto = $resultado->fetch_assoc();

?>

<header class="header-bar">
    <div class="header-options">
        <div class="volver__button">
            <a href="index.php">Volver</a>
        </div>
        <h1>Agenda de Contactos</h1>
    </div>    
</header>

<section class="formulario">
    <form action="#" id="contacto-form">
        <section class="legend__section">
            <h1>Edite el contacto</h1>
        </section>
        <?php include_once './assets/inc/layout/formulario.php'; ?>
    </form>
</section>

<?php include_once './assets/inc/layout/footer.php'; ?>