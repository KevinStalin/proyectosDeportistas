 <?php

  $objeto= new usuario();

  $usuario=$objeto->usuarioCtr();

  $arrayUsuario = explode("___", $usuario);


  if ($arrayUsuario[0]==2){

    $codigo=$arrayUsuario[11];

  }else{

    $codigo=$arrayUsuario[13];

  }

  $proyectosDatosGenerales=$objeto->ctrProyectosFunciones($codigo);
  $arrayProyectosDatos = explode("___", $proyectosDatosGenerales);



?>

<div class="panel-body">

  <!--=====================================================
  =            Contenido Principal formularios            =
  ======================================================-->
                      
  <div class="row">

    <div class="col-sm-3 col-xs-3" data-toggle="tooltip" title="El nombre del proyecto deberá estar compuesto por dos elementos: la acción a realizarse y sobre que se va actuar, por ejemplo: 'Participación de la Deportista Paola Cueva en el Campeonato Mundial de Atletismo San Diego 2015', 'Dotación de Implementación para las Ligas Deportivas Barriales de la Provincia de Pichincha', 'Organización de los Juegos Intercantonales Azuay 2015', otros.">

      <div class="rotulo__referencias">Nombre del Proyecto</div>
                    
    </div>

    <div class="col-sm-7 col-xs-7">

      <?php if (empty($arrayProyectosDatos[0])): ?>
                          
        <textarea id="nombreProyecto" name="nombreProyecto" class="text__areas obligatorios__proyectosUnitarios"></textarea>

      <?php else: ?>
                          
        <textarea id="nombreProyecto" name="nombreProyecto" class="text__areas obligatorios__proyectosUnitarios"><?= $arrayProyectosDatos[0];?></textarea>

      <?php endif ?>

                        
    </div>

    <div class="col-sm-2 col-xs-2 text-center">

      <span class="cursores__modales" data-toggle="modal" data-target="#modalEjemploProyecto"><i class="fas fa-question-circle"></i><br><div class="letras__precionar">Presionar para obtener información de ejemplo sobre este punto</div></span>
                    
    </div>

  </div>

  <div class="row">

    <div class="col-sm-12 col-xs-12">

      <div class="rotulo__referencias">Sector al que contribuye</div>
                    
    </div>

  </div>

  <div class="row">

    <div class="col-sm-12 col-xs-12">

      <table class="table">

        <thead>

          <tr>

            <th colspan="2">Seleccione el sector al que contribuye el proyecto</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td scope="col">Sector de la recreación</td>

              <?php if (empty($arrayProyectosDatos[2]) || $arrayProyectosDatos[2]=="no"): ?>
                              
                <td scope="col"><input type="checkbox" name="sectorRecreacion" id="sectorRecreacion" class="checks__grupales__validas"></td>

              <?php else: ?>
                              
                <td scope="col"><input type="checkbox" name="sectorRecreacion" id="sectorRecreacion" class="checks__grupales__validas" checked=""></td>

              <?php endif ?>

          </tr>

          <tr>

            <td scope="col">Sector del deporte formativo y la educación física</td>

            <?php if (empty($arrayProyectosDatos[3]) || $arrayProyectosDatos[3]=="no"): ?>
                              
              <td scope="col"><input type="checkbox" name="sectorDeporteFormativo" id="sectorDeporteFormativo" class="checks__grupales__validas"></td>
            <?php else: ?>
                              
              <td scope="col"><input type="checkbox" name="sectorDeporteFormativo" id="sectorDeporteFormativo" class="checks__grupales__validas"></td>

            <?php endif ?>

                            
          </tr>

          <tr>

            <td scope="col">Sector del deporte convencional de alto rendimiento</td>


            <?php if (empty($arrayProyectosDatos[4]) || $arrayProyectosDatos[4]=="no"): ?>
                              
              <td scope="col"><input type="checkbox" name="sectorDeporteConvencional" id="sectorDeporteConvencional" class="checks__grupales__validas"></td>
            <?php else: ?>
                              
              <td scope="col"><input type="checkbox" name="sectorDeporteConvencional" id="sectorDeporteConvencional" class="checks__grupales__validas" checked=""></td>

            <?php endif ?>

                            
          </tr>

          <tr>

            <td scope="col">Sector del deporte de alto rendimiento para personas con discapacidad</td>


            <?php if (empty($arrayProyectosDatos[5]) || $arrayProyectosDatos[5]=="no"): ?>
                              
              <td scope="col"><input type="checkbox" name="sectorDeporteAltoRendimiento" id="sectorDeporteAltoRendimiento" class="checks__grupales__validas"></td>
            <?php else: ?>
                              
              <td scope="col"><input type="checkbox" name="sectorDeporteAltoRendimiento" id="sectorDeporteAltoRendimiento" class="checks__grupales__validas" checked=""></td>

            <?php endif ?>


          </tr>

          <tr>

            <td scope="col">Sector del deporte profesional</td>

            <?php if (empty($arrayProyectosDatos[6]) || $arrayProyectosDatos[6]=="no"): ?>
                              
              <td scope="col"><input type="checkbox" name="sectorDeporteProfesional" id="sectorDeporteProfesional" class="checks__grupales__validas"></td>

            <?php else: ?>
                              
              <td scope="col"><input type="checkbox" name="sectorDeporteProfesional" id="sectorDeporteProfesional" class="checks__grupales__validas" checked=""></td>

            <?php endif ?>
                            
          </tr>

        </tbody>

      </table>

    </div>

  </div>

  <div class="row">

    <div class="col-sm-6 col-xs-2">

        <div class="rotulo__referencias">Presupuesto</div>
                    
    </div>

    <div class="col-sm-6 col-xs-10">

      <?php if (empty($arrayProyectosDatos[7]) || $arrayProyectosDatos[7]=="no"): ?>
                              
        <input type="text" name="presupuesto" id="presupuesto" class="solo__numero__montos presupuesto__calculado text__areas obligatorios__proyectosUnitarios">

      <?php else: ?>
                              
        <input type="text" name="presupuesto" id="presupuesto" class="solo__numero__montos presupuesto__calculado text__areas obligatorios__proyectosUnitarios" value="<?= $arrayProyectosDatos[7];?>">

      <?php endif ?>


    </div>

  </div>

  <div class="row">


    <div class="col-sm-12 col-xs-12">

      <div class="rotulo__referencias">En letras</div>
                    
    </div>

    <div class="col-sm-12 col-xs-12">

        <?php if (empty($arrayProyectosDatos[1]) || $arrayProyectosDatos[1]=="no"): ?>
                              
          <input type="text" name="presupuestoLetras" id="presupuestoLetras" class="presupuestoLetras text__areas obligatorios__proyectosUnitarios" >

        <?php else: ?>
                              
          <input type="text" name="presupuestoLetras" id="presupuestoLetras" class="presupuestoLetras text__areas obligatorios__proyectosUnitarios" value="<?= $arrayProyectosDatos[1];?>">

        <?php endif ?>
             
    </div>

  </div>

  <div class="row">

    <div class="col-sm-12 col-xs-12">

      <div class="rotulo__referencias">Ubicación</div>
                    
    </div>

  </div>

  <div class="row">

    <div class="col-sm-8 col-xs-10">

      <div class="rotulo__referencias" data-toggle="tooltip" title="Si desea añadir una ubicación dar clic en el botón de añadir">Descripción de la ubicación geográfica del lugar o lugares donde se ejecutará:</div>
                    
    </div>

    <div class="col-sm-4 col-xs-1" data-toggle="tooltip" title="Si desea añadir una ubicación dar clic en el botón de añadir">

      <button id="anadirUbicacion" name="anadirUbicacion" class="anadir__cosas"><i class="fas fa-plus-circle"></i>&nbsp;<br><span class="letras__precionar">Añadir</span></button>

    </div>


  </div>

   <div class="row">

      <div class="col-sm-12 col-xs-12 ubicaciones__geograficas__editar"></div>

  </div>

  <div class="row">

    <div class="col-sm-12 col-xs-12 ubicaciones__geograficas"></div>

  </div>

  <br>

  <div class="row">

    <div class="col-xs-12 col-sm-12 text-right">

      <button id="enviarProyectosUnitarios" name="enviarProyectosUnitarios" class="btn btn-primary"><i class="far fa-save"></i>&nbsp;ENVIAR</button>

    </div>

    <div class="enviarDatosGenerales__reload"></div>

  </div>

  <!--====  End of Contenido Principal formularios  ====-->
                      
</div>