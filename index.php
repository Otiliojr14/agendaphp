<?php 
    include_once './assets/inc/layout/header.php';
    include_once './assets/inc/functions/functions.php';

?>

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
    <p class="total-contactos"><span>0</span> Contactos</p>

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
                <?php $contactos = obtenerContactos(); 

                    if ($contactos->num_rows): 
                        foreach ($contactos as $contacto): ?>                    
                        <tr>
                            <td><?php echo $contacto['nombre_contacto']?></td>
                            <td><?php echo $contacto['empresa_contacto']?></td>
                            <td><?php echo $contacto['telefono_contacto']?></td>
                            <td>
                                <a href="editar.php?id=<?php echo $contacto['id_contacto']?>">
                                    <i class="bi bi-pencil-square"></i>
                                </a>
                                <button class="borrar-btn" data-id="<?php echo $contacto['id_contacto']?>" type="button">
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                            </td>
                        </tr>
                
                    <?php 
                        endforeach;
                    endif; ?>
            </tbody>
        </table>
    </section>
</section>

<?php include_once './assets/inc/layout/footer.php'; ?>