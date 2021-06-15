 <?php

  $objeto= new usuario();

  $usuario=$objeto->usuarioCtr();

  $arrayUsuario = explode("___", $usuario);


  if ($arrayUsuario[0]==2){

    $codigo=$arrayUsuario[11];

  }else{

    $codigo=$arrayUsuario[13];

  }


  $alineacionEstrategica=$objeto->ctrAlineacionEstrategica($codigo);
  $arrayAlineacionEstrategicas = explode("___", $alineacionEstrategica);



?>


<div class="panel-body">

  <!--=====================================================
  =            Contenido Principal formularios            =
  ======================================================-->

  <div class="row"> 

    <div class="col-sm-10 col-xs-10">

      <div class="rotulo__referencias">ANÁLISIS DE LA SITUACIÓN ACTUAL (DIAGNÓSTICO)</div>
                    
    </div>

    <div class="col-sm-2 col-xs-2 text-center">

      <span class="cursores__modales" data-toggle="modal" data-target="#modalAnalisisSituacional"><i class="fas fa-question-circle"></i><br><div class="letras__precionar">Presionar para obtener un ejemplo sobre como llenar está sección</div></span>
                    
    </div>

    <div class="col-sm-12 col-xs-12">

      <div>
                          

        <?php if (empty($arrayAlineacionEstrategicas[0])): ?>
                            
          <textarea id="analisisSituacionActual" name="analisisSituacionActual" class="text__tareas2 obligatorio__elementos"></textarea>

        <?php else: ?>

          <textarea id="analisisSituacionActual" name="analisisSituacionActual" class="text__tareas2 obligatorio__elementos"><?= $arrayAlineacionEstrategicas[0];?></textarea>
                            
        <?php endif ?>

                          
      </div>
                    
    </div>

    <div class="col-sm-12 col-xs-12 longitud__minima__grupal counter__analisisSituacional"></div>

  </div> 

  <div class="row"> 


    <div class="col-sm-10 col-xs-10">

      <div class="rotulo__referencias">JUSTIFICACIÓN</div>
                    
    </div>

    <div class="col-sm-2 col-xs-2 text-center">

      <span class="cursores__modales" data-toggle="modal" data-target="#modalJustificacion"><i class="fas fa-question-circle"></i><br><div class="letras__precionar">Presionar para obtener un ejemplo sobre como llenar está sección</div></span>
                    
    </div>

    <div class="col-sm-12 col-xs-12">

      <div>

        <?php if (empty($arrayAlineacionEstrategicas[1])): ?>
                            
          <textarea id="justificacionCaracterizacion" name="justificacionCaracterizacion" class="text__tareas2 obligatorio__elementos"></textarea>

        <?php else: ?>

          <textarea id="justificacionCaracterizacion" name="justificacionCaracterizacion" class="text__tareas2 obligatorio__elementos"><?= $arrayAlineacionEstrategicas[1];?></textarea>
                            
        <?php endif ?>
                          
                          
      </div>
                    
    </div>

    <div class="col-sm-12 col-xs-12 longitud__minima__grupal counter__justificacion"></div>

  </div> 


  <div class="row"> 

    <div class="col-sm-10 col-xs-10">

      <div class="rotulo__referencias">OBJETIVO GENERAL</div>
                    
    </div>

    <div class="col-sm-2 col-xs-2 text-center">

      <span class="cursores__modales" data-toggle="modal" data-target="#modalObjetivoGeneral"><i class="fas fa-question-circle"></i><br><div class="letras__precionar">Presionar para obtener un ejemplo sobre como llenar está sección</div></span>
                    
    </div>

    <div class="col-sm-12 col-xs-12">

      <div>
                          
        <?php if (empty($arrayAlineacionEstrategicas[2])): ?>
                            
          <textarea id="objetivoGeneralCaracterizacion" name="objetivoGeneralCaracterizacion" class="text__tareas2 obligatorio__elementos"></textarea>

        <?php else: ?>

          <textarea id="objetivoGeneralCaracterizacion" name="objetivoGeneralCaracterizacion" class="text__tareas2 obligatorio__elementos"><?= $arrayAlineacionEstrategicas[2];?></textarea>
                            
        <?php endif ?>
                          

      </div>
                    
    </div>

    <div class="col-sm-12 col-xs-12 longitud__minima__grupal counter__objetivoGeneral"></div>

  </div> 

  <div class="row"> 

    <div class="col-sm-8 col-xs-8">

      <div class="rotulo__referencias">OBJETIVOS ESPECÍFICOS (mínimo 2 objetivos)</div>
                    
    </div>

    <div class="col-sm-2 col-xs-2" data-toggle="tooltip" title="Si desea añadir un objetivo específico dar clic aquí">

      <button id="anadirObjetivosEspecificos" name="anadirObjetivosEspecificos" class="anadir__cosas"><i class="fas fa-plus-circle"></i>&nbsp;<br><span class="letras__precionar">Añadir</span></button>

    </div>


    <div class="col-sm-2 col-xs-2 text-center">

      <span class="cursores__modales" data-toggle="modal" data-target="#modalObjetivosEspecificos"><i class="fas fa-question-circle"></i><br><div class="letras__precionar">Presionar para obtener un ejemplo sobre como llenar está sección</div></span>
                    
    </div>

    <div class="row">

      <div class="col-sm-12 col-xs-12 objetivos__especificos__editar"></div>

    </div>

    <div class="row">

      <div class="col-sm-12 col-xs-12 objetivos__especificos"></div>

    </div>

  </div> 
                      
  <br>

  <div class="row">

    <div class="col-xs-12 col-sm-12 text-right">

      <button id="enviarDatosSituacionActual" name="enviarDatosSituacionActual" class="btn btn-primary"><i class="far fa-save"></i>&nbsp;ENVIAR</button>

      <div class="enviarDatosGenerales__reload"></div>

    </div>

  </div>

 <!--====  End of Contenido Principal formularios  ====-->
                      
</div>
