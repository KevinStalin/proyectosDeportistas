<?php
$objeto = new usuario();
$usuario = $objeto->usuarioCtr();
$arrayUsuario = explode("___", $usuario);
?>
<!--=======================================
=            Sección Principal            =
========================================-->

<div class="wrapper row3">

  <div class="contenido__general">

    <div class="contenedor__tabla">

      <table id="tablaProyectosUsuarios" name="tablaProyectosUsuarios" class="cell-border">

        <thead>

          <tr>

            <th class="tamanio__fuente__enfasis__tablas">TIPO</th>
            <!-- <th class="tamanio__fuente__enfasis__tablas">FEDERACIÓN O DEPORTISTA</th> -->
            <th class="tamanio__fuente__enfasis__tablas">NOMBRE DEL PROYECTO</th>
            <!-- <th class="tamanio__fuente__enfasis__tablas">MONTO</th>
                  <th class="tamanio__fuente__enfasis__tablas">ALCANCE</th>
                  <th class="tamanio__fuente__enfasis__tablas">CÓDIGO</th> -->
            <th class="tamanio__fuente__enfasis__tablas">PROYECTO</th>
            <!-- <th class="tamanio__fuente__enfasis__tablas">CURRICULUM DEPORTIVO</th>
                  <th class="tamanio__fuente__enfasis__tablas">CERTIFICADO FEDERACIÓN</th>
                  <th class="tamanio__fuente__enfasis__tablas">CERTIFICADO ORGANISMO SUPERIOR</th>
                  <th class="tamanio__fuente__enfasis__tablas">SOLICITUD FEDERACIÓN</th>
                  <th class="tamanio__fuente__enfasis__tablas">AVAL FEDERACIÓN</th>
                  <th class="tamanio__fuente__enfasis__tablas">SOLICITUD AVAL</th>
                  <th class="tamanio__fuente__enfasis__tablas">AVAL ORGANISMO SUPERIOR</th>
                  <th class="tamanio__fuente__enfasis__tablas">CONTRATO</th> -->
            <th class="tamanio__fuente__enfasis__tablas">ESTADO</th>
            <th class="tamanio__fuente__enfasis__tablas">Documentos</th>
          </tr>

        </thead>

      </table>

    </div>
    <div class="contenido_tabla2">

      <input type="text"  value="<?= $arrayUsuario[0]; ?>">
      <input type="text"  value="<?= $arrayUsuario[1]; ?>">
      <input type="text"  value="<?= $arrayUsuario[2]; ?>">
      <input type="text" id="ID_usuario" name="ID_usuario" value="<?= $arrayUsuario[3]; ?>">

      <table id="tablaProyectosUsuarios2" name="tablaProyectosUsuarios2">
        <tr>
          <td>TIPO</td>
          <td>NOMBRE DEL PROYECTO</td>
          <td>PROYECTO</td>
          <td>ESTADO</td>
          <td>DOCUMENTOS</td>
        </tr>
<tbody id="resultados_tramite"></tbody>

      </table>
      <di id="MUENTRA_DATOS"></di>
    </div>
  </div>



</div>

<!--====  End of Sección Principal  ====-->