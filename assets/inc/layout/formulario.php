<section class="input__section">
    <div class="campo">
        <label for="nombre-contacto">Nombre:</label>
        <input type="text" name="nombre" id="nombre-contacto" placeholder="Nombre Contacto" 
        value="<?php echo (isset($contacto['nombre_contacto'])) ? $contacto['nombre_contacto'] : '';?>">
    </div>
    <div class="campo">
        <label for="empresa-contacto">Empresa:</label>
        <input type="text" name="empresa" id="empresa-contacto" placeholder="Empresa Contacto"
        value="<?php echo (isset($contacto['empresa_contacto'])) ? $contacto['empresa_contacto'] : '';?>">
    </div>
    <div class="campo">
        <label for="telefono-contacto">Telefono:</label>
        <input type="tel" name="telefono" id="telefono-contacto" placeholder="Telefono Contacto"
        value="<?php echo (isset($contacto['telefono_contacto'])) ? $contacto['telefono_contacto'] : '';?>">
    </div>
</section>
<section class="submit__section">
    <?php 
        $textoBtn = (isset($contacto['telefono_contacto'])) ? 'Guardar' : 'Añadir';
        $accion = (isset($contacto['telefono_contacto'])) ? 'editar' : 'crear';

        if (isset($contacto['id_contacto'])):
    ?>
            <input type="hidden" name="accion" id="id" value="<?php echo $contacto['id_contacto']; ?>">
    <?php endif; ?>
    <input type="hidden" name="accion" id="accion-contacto" value="<?php echo $accion; ?>">
    <input type="submit" value="<?php echo $textoBtn; ?>">
</section>