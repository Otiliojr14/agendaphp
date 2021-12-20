<?php include_once './assets/inc/layout/header.php'; ?>

<header class="header-bar">
    <h1>Agenda de Contactos</h1>
</header>

<section class="formulario">
    <form action="#" id="contacto-form">
        <section class="legend__section">
            <h1>Añada una agenda de contactos</h1>
            <p>Todos los campos son obligatorios</p>
        </section>
        <?php include_once './assets/inc/layout/formulario.php'; ?>
    </form>
</section>

<section class="lista-contactos">
    <h2>Contactos</h2>
    <input type="text" name="buscar" id="buscar" placeholder="Buscar Contactos...">
    <p class="total-contactos"><span>2</span> Contactos</p>

    <section class="tabla">
        <table class="listado-contactos">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Empresa</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Juan</td>
                    <td>Udemy</td>
                    <td>019381893</td>
                    <td>
                        <a href="editar.php?id=1">
                            <i class="fas fa-pen-square"></i>
                        </a>
                        <button data-id="1" type="button">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</section>

<?php include_once './assets/inc/layout/footer.php'; ?>