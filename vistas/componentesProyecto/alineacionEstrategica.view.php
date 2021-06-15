 <?php

  $objeto= new usuario();

  $usuario=$objeto->usuarioCtr();

  $arrayUsuario = explode("___", $usuario);


  if ($arrayUsuario[0]==2){

    $codigo=$arrayUsuario[11];

  }else{

    $codigo=$arrayUsuario[13];

  }


  $alineacion=$objeto->ctrAlineacion($codigo);
  $arrayAlineacion = explode("___", $alineacion);



?>

<!--===========================================
=            Códigos de alineación            =
============================================-->

<?php if (!empty($arrayAlineacion[0])): ?>
  
  <input type="hidden" id="linea1" name="linea1" value="<?= $arrayAlineacion[1]?>">
  <input type="hidden" id="linea2" name="linea2" value="<?= $arrayAlineacion[2]?>">
  <input type="hidden" id="linea3" name="linea3" value="<?= $arrayAlineacion[3]?>">

  <input type="hidden" id="objetivo1Linea1" name="objetivo1Linea1" value="<?= $arrayAlineacion[4]?>">
  <input type="hidden" id="objetivo2Linea1" name="objetivo2Linea1" value="<?= $arrayAlineacion[5]?>">
  <input type="hidden" id="objetivo3Linea1" name="objetivo3Linea1" value="<?= $arrayAlineacion[6]?>">
  <input type="hidden" id="objetivo4Linea1" name="objetivo4Linea1" value="<?= $arrayAlineacion[7]?>">
  <input type="hidden" id="objetivo5Linea1" name="objetivo5Linea1" value="<?= $arrayAlineacion[8]?>">
  <input type="hidden" id="objetivo6Linea1" name="objetivo6Linea1" value="<?= $arrayAlineacion[9]?>">
  <input type="hidden" id="objetivo7Linea1" name="objetivo7Linea1" value="<?= $arrayAlineacion[10]?>">
  <input type="hidden" id="objetivo8Linea1" name="objetivo8Linea1" value="<?= $arrayAlineacion[11]?>">
  <input type="hidden" id="objetivo9Linea1" name="objetivo9Linea1" value="<?= $arrayAlineacion[12]?>">
  <input type="hidden" id="objetivo10Linea1" name="objetivo10Linea1" value="<?= $arrayAlineacion[13]?>">
  <input type="hidden" id="objetivo11Linea1" name="objetivo11Linea1" value="<?= $arrayAlineacion[14]?>">

  <input type="hidden" id="objetivo1Linea2" name="objetivo1Linea2" value="<?= $arrayAlineacion[15]?>">
  <input type="hidden" id="objetivo2Linea2" name="objetivo2Linea2" value="<?= $arrayAlineacion[16]?>">
  <input type="hidden" id="objetivo3linea2" name="objetivo3linea2" value="<?= $arrayAlineacion[17]?>">
  <input type="hidden" id="objetivo4Linea2" name="objetivo4Linea2" value="<?= $arrayAlineacion[18]?>">

  <input type="hidden" id="objetivo1Linea3" name="objetivo1Linea3" value="<?= $arrayAlineacion[19]?>">
  <input type="hidden" id="objetivo2Linea3" name="objetivo2Linea3" value="<?= $arrayAlineacion[20]?>">
  <input type="hidden" id="objetivo3Linea3" name="objetivo3Linea3" value="<?= $arrayAlineacion[21]?>">
  <input type="hidden" id="objetivo4Linea3" name="objetivo4Linea3" value="<?= $arrayAlineacion[22]?>">
  <input type="hidden" id="objetivo5Linea3" name="objetivo5Linea3" value="<?= $arrayAlineacion[23]?>">

  <input type="hidden" id="objetivo1Institucional" name="objetivo1Institucional" value="<?= $arrayAlineacion[24]?>">
  <input type="hidden" id="objetivo2Institucional" name="objetivo2Institucional" value="<?= $arrayAlineacion[25]?>">

  <input type="hidden" id="objetivo1Linea1Item1" name="objetivo1Linea1Item1" value="<?= $arrayAlineacion[26]?>">
  <input type="hidden" id="objetivo1Linea1Item2" name="objetivo1Linea1Item2" value="<?= $arrayAlineacion[27]?>">
  <input type="hidden" id="objetivo1Linea1Item3" name="objetivo1Linea1Item3" value="<?= $arrayAlineacion[28]?>">
  <input type="hidden" id="objetivo2Linea1Item1" name="objetivo2Linea1Item1" value="<?= $arrayAlineacion[29]?>">
  <input type="hidden" id="objetivo2Linea1Item2" name="objetivo2Linea1Item2" value="<?= $arrayAlineacion[30]?>">
  <input type="hidden" id="objetivo2Linea1Item3" name="objetivo2Linea1Item3" value="<?= $arrayAlineacion[31]?>">
  <input type="hidden" id="objetivo2Linea1Item4" name="objetivo2Linea1Item4" value="<?= $arrayAlineacion[32]?>">
  <input type="hidden" id="objetivo3Linea1Item1" name="objetivo3Linea1Item1" value="<?= $arrayAlineacion[33]?>">
  <input type="hidden" id="objetivo3Linea1Item2" name="objetivo3Linea1Item2" value="<?= $arrayAlineacion[34]?>">
  <input type="hidden" id="objetivo3Linea1Item3" name="objetivo3Linea1Item3" value="<?= $arrayAlineacion[35]?>">
  <input type="hidden" id="objetivo3Linea1Item4" name="objetivo3Linea1Item4" value="<?= $arrayAlineacion[36]?>">
  <input type="hidden" id="objetivo4Linea1Item1" name="objetivo4Linea1Item1" value="<?= $arrayAlineacion[37]?>">
  <input type="hidden" id="objetivo5Linea1Item1" name="objetivo5Linea1Item1" value="<?= $arrayAlineacion[38]?>">
  <input type="hidden" id="objetivo6Linea1Item1" name="objetivo6Linea1Item1" value="<?= $arrayAlineacion[39]?>">
  <input type="hidden" id="objetivo6Linea1Item2" name="objetivo6Linea1Item2" value="<?= $arrayAlineacion[40]?>">
  <input type="hidden" id="objetivo7Linea1Item1" name="objetivo7Linea1Item1" value="<?= $arrayAlineacion[41]?>">
  <input type="hidden" id="objetivo7Linea1Item2" name="objetivo7Linea1Item2" value="<?= $arrayAlineacion[42]?>">
  <input type="hidden" id="objetivo8Linea1Item1" name="objetivo8Linea1Item1" value="<?= $arrayAlineacion[43]?>">
  <input type="hidden" id="objetivo8Linea1Item2" name="objetivo8Linea1Item2" value="<?= $arrayAlineacion[44]?>">
  <input type="hidden" id="objetivo8Linea1Item3" name="objetivo8Linea1Item3" value="<?= $arrayAlineacion[45]?>">
  <input type="hidden" id="objetivo8Linea1Item4" name="objetivo8Linea1Item4" value="<?= $arrayAlineacion[46]?>">
  <input type="hidden" id="objetivo8Linea1Item5" name="objetivo8Linea1Item5" value="<?= $arrayAlineacion[47]?>">
  <input type="hidden" id="objetivo9Linea1Item1" name="objetivo9Linea1Item1" value="<?= $arrayAlineacion[48]?>">
  <input type="hidden" id="objetivo10Linea1Item1" name="objetivo10Linea1Item1" value="<?= $arrayAlineacion[49]?>">
  <input type="hidden" id="objetivo10Linea1Item2" name="objetivo10Linea1Item2" value="<?= $arrayAlineacion[50]?>">
  <input type="hidden" id="objetivo10Linea1Item3" name="objetivo10Linea1Item3" value="<?= $arrayAlineacion[51]?>">
  <input type="hidden" id="objetivo10Linea1Item4" name="objetivo10Linea1Item4" value="<?= $arrayAlineacion[52]?>">
  <input type="hidden" id="objetivo10Linea1Item5" name="objetivo10Linea1Item5" value="<?= $arrayAlineacion[53]?>">
  <input type="hidden" id="objetivo11Linea1Item1" name="objetivo11Linea1Item1" value="<?= $arrayAlineacion[54]?>">
  <input type="hidden" id="objetivo11Linea1Item2" name="objetivo11Linea1Item2" value="<?= $arrayAlineacion[55]?>">

  <input type="hidden" id="objetivo1Linea2Item1" name="objetivo1Linea2Item1" value="<?= $arrayAlineacion[56]?>">
  <input type="hidden" id="objetivo1Linea2Item2" name="objetivo1Linea2Item2" value="<?= $arrayAlineacion[57]?>">
  <input type="hidden" id="objetivo1Linea2Item3" name="objetivo1Linea2Item3" value="<?= $arrayAlineacion[58]?>">
  <input type="hidden" id="objetivo1Linea2Item4" name="objetivo1Linea2Item4" value="<?= $arrayAlineacion[59]?>">
  <input type="hidden" id="objetivo2Linea2Item1" name="objetivo2Linea2Item1" value="<?= $arrayAlineacion[60]?>">
  <input type="hidden" id="objetivo2Linea2Item2" name="objetivo2Linea2Item2" value="<?= $arrayAlineacion[61]?>">
  <input type="hidden" id="objetivo2Linea2Item3" name="objetivo2Linea2Item3" value="<?= $arrayAlineacion[62]?>">
  <input type="hidden" id="objetivo3Linea2Item1" name="objetivo3Linea2Item1" value="<?= $arrayAlineacion[63]?>">
  <input type="hidden" id="objetivo3Linea2Item2" name="objetivo3Linea2Item2" value="<?= $arrayAlineacion[64]?>">
  <input type="hidden" id="objetivo3Linea2Item3" name="objetivo3Linea2Item3" value="<?= $arrayAlineacion[65]?>">
  <input type="hidden" id="objetivo4Linea2Item1" name="objetivo4Linea2Item1" value="<?= $arrayAlineacion[66]?>">
  <input type="hidden" id="objetivo4Linea2Item2" name="objetivo4Linea2Item2" value="<?= $arrayAlineacion[67]?>">

  <input type="hidden" id="objetivo1Linea3Item1" name="objetivo1Linea3Item1" value="<?= $arrayAlineacion[69]?>">
  <input type="hidden" id="objetivo1Linea3Item2" name="objetivo1Linea3Item2" value="<?= $arrayAlineacion[69]?>">
  <input type="hidden" id="objetivo1Linea3Item3" name="objetivo1Linea3Item3" value="<?= $arrayAlineacion[70]?>">
  <input type="hidden" id="objetivo1Linea3Item4" name="objetivo1Linea3Item4" value="<?= $arrayAlineacion[71]?>">
  <input type="hidden" id="objetivo1Linea3Item5" name="objetivo1Linea3Item5" value="<?= $arrayAlineacion[72]?>">
  <input type="hidden" id="objetivo1Linea3Item6" name="objetivo1Linea3Item6" value="<?= $arrayAlineacion[73]?>">
  <input type="hidden" id="objetivo2Linea3Item1" name="objetivo2Linea3Item1" value="<?= $arrayAlineacion[74]?>">
  <input type="hidden" id="objetivo2Linea3Item2" name="objetivo2Linea3Item2" value="<?= $arrayAlineacion[75]?>">
  <input type="hidden" id="objetivo3Linea3Item1" name="objetivo3Linea3Item1" value="<?= $arrayAlineacion[76]?>">
  <input type="hidden" id="objetivo3Linea3Item2" name="objetivo3Linea3Item2" value="<?= $arrayAlineacion[77]?>">
  <input type="hidden" id="objetivo3Linea3Item3" name="objetivo3Linea3Item3" value="<?= $arrayAlineacion[78]?>">
  <input type="hidden" id="objetivo4Linea3Item1" name="objetivo4Linea3Item1" value="<?= $arrayAlineacion[79]?>">
  <input type="hidden" id="objetivo4Linea3Item2" name="objetivo4Linea3Item2" value="<?= $arrayAlineacion[80]?>">
  <input type="hidden" id="objetivo5Linea3Item1" name="objetivo5Linea3Item1" value="<?= $arrayAlineacion[81]?>">
  <input type="hidden" id="objetivo5Linea3Item2" name="objetivo5Linea3Item2" value="<?= $arrayAlineacion[82]?>">

  <input type="hidden" id="objetivo1Institucionaltem1" name="objetivo1Institucionaltem1" value="<?= $arrayAlineacion[83]?>">
  <input type="hidden" id="objetivo1Institucionaltem2" name="objetivo1Institucionaltem2" value="<?= $arrayAlineacion[84]?>">
  <input type="hidden" id="objetivo1Institucionaltem3" name="objetivo1Institucionaltem3" value="<?= $arrayAlineacion[85]?>">

  <input type="hidden" id="objetivo2Institucionaltem1" name="objetivo2Institucionaltem1" value="<?= $arrayAlineacion[86]?>">
  <input type="hidden" id="objetivo2Institucionaltem2" name="objetivo2Institucionaltem2" value="<?= $arrayAlineacion[87]?>">
  <input type="hidden" id="objetivo2Institucionaltem3" name="objetivo2Institucionaltem3" value="<?= $arrayAlineacion[88]?>">

<?php endif ?>

<!--====  End of Códigos de alineación  ====-->


<div class="panel-body">

  <!--=====================================================
  =            Contenido Principal formularios            =
  ======================================================-->
                      
  <div class="row"> 


    <div class="col-sm-10 col-xs-10">

      <div class="rotulo__referencias">ALINEACIÓN ESTRATÉGICA</div>
                    
    </div>

    <div class="col-sm-2 col-xs-2 text-center">

      <span class="cursores__modales" data-toggle="modal" data-target="#modalAlineacionEstrategica"><i class="fas fa-question-circle"></i><br><div class="letras__precionar">Presionar para obtener un ejemplo sobre como llenar está sección</div></span>
                    
    </div>

    <div class="col-sm-12 col-xs-12">

      <div>
                          
        <?php if (empty($arrayAlineacion[0])): ?>

          <textarea id="alineacionEstrategicaCampos" name="alineacionEstrategicaCampos" class="text__tareas2 alineacion__estrategicas__minimas"></textarea>
                            
        <?php else: ?>

          <textarea id="alineacionEstrategicaCampos" name="alineacionEstrategicaCampos" class="text__tareas2 alineacion__estrategicas__minimas"><?= $arrayAlineacion[0];?></textarea>
                            
        <?php endif ?>

      </div>
                    
    </div>

    <div class="col-sm-12 col-xs-12 longitud__minima__grupal__estrategicas counter__alineacion minimas__palabras__alineacion"></div>

  </div> 
                      
  <div class="row" data-toggle="tooltip" title="Seleccione una línea política según lo requerido"> 

    <div class="col-sm-10 col-xs-10">

      <div class="rotulo__referencias">PLAN DECENAL DEL DEPORTE, LA EDUCACIÓN FÍSICA Y LA FEDERACIÓN - DEFIRE</div>
                    
    </div>

    <div class="col-sm-2 col-xs-2 text-center">

      <span class="cursores__modales" data-toggle="modal" data-target="#modalPlanDecenal"><i class="fas fa-question-circle"></i><br><div class="letras__precionar">Presionar para obtener información de como ingresar este punto</div></span>
                    
    </div>

  </div> 

  <br>

  <table class="linea__politica1">

    <thead>

      <tr>

        <th class="padding__filas padding__filas__uno">
          Línea de Política 1: Integración de la estructura del sistema nacional del deporte, la educación física y la recreación
        </th>

        <td class="padding__filas padding__filas__dos">

          <center>

            <?php if ($arrayAlineacion[1]=="no" || empty($arrayAlineacion[1])): ?>

              <input type="checkbox" id="lineaPolitica1" name="lineaPolitica1" class="check__estilos__lineas chekeds__lineas">
                                
            <?php else: ?>

              <input type="checkbox" id="lineaPolitica1" name="lineaPolitica1" class="check__estilos__lineas chekeds__lineas" checked="checked">
                                
            <?php endif ?>


          </center>

        </td>

      </tr> 

    </thead>

    <tbody class="body__politica1">


    </tbody>

  </table>

  <div class="body__politica1Contenedor"></div>

  <table class="linea__politica2">

    <thead>

      <tr>

        <th class="padding__filas padding__filas__uno">

          Línea de Política 2: Generar e impulsar la cultura física para el bienestar activo de la población con inclusión social e igualdad de género.

        </th>

        <td class="padding__filas padding__filas__dos">

          <center>

            <?php if ($arrayAlineacion[2]=="no" || empty($arrayAlineacion[2])): ?>

              <input type="checkbox" id="lineaPolitica2" name="lineaPolitica2" class="check__estilos__lineas chekeds__lineas">
                                
            <?php else: ?>

              <input type="checkbox" id="lineaPolitica2" name="lineaPolitica2" class="check__estilos__lineas chekeds__lineas" checked="checked">
                                
            <?php endif ?>


          </center>

        </td>

      </tr> 

    </thead>

    <tbody class="body__politica2">


    </tbody>

  </table>

  <div class="body__politica2Contenedor"></div>
                   
  <table class="linea__politica3">

    <thead>

      <tr>

        <th class="padding__filas padding__filas__uno">
          Línea de Política 3: Liderazgo y posicionamiento internacional del país a través de la consecución de logros deportivos
        </th>

        <td class="padding__filas padding__filas__dos">

          <center>

            <?php if ($arrayAlineacion[3]=="no" || empty($arrayAlineacion[3])): ?>

              <input type="checkbox" id="lineaPolitica3" name="lineaPolitica3" class="check__estilos__lineas chekeds__lineas">
                                
            <?php else: ?>

              <input type="checkbox" id="lineaPolitica3" name="lineaPolitica3" class="check__estilos__lineas chekeds__lineas" checked="checked">
                                
            <?php endif ?>

          </center>

        </td>

      </tr> 

    </thead>

    <tbody class="body__politica3">


    </tbody>

  </table>

  <div class="body__politica3Contenedor"></div>

  <br>

  <div class="row" data-toggle="tooltip" title="Seleccione una línea política según lo requerido"> 

    <div class="col-sm-10 col-xs-10">

      <div class="rotulo__referencias">PLAN ESTRATÉGICO DEL MINISTERIO DEL DEPORTE</div>
                    
    </div>

    <div class="col-sm-2 col-xs-2 text-center">

      <span class="cursores__modales" data-toggle="modal" data-target="#modalPlanDecenal"><i class="fas fa-question-circle"></i><br><div class="letras__precionar">Presionar para obtener información de como ingresar este punto</div></span>
                    
    </div>

  </div> 

  <table class="objetivo__estrategicoSecretaria__1">

    <thead>

      <tr>

        <th class="padding__filas padding__filas__uno">
          Objetivo Estratégico Institucional 1: Incrementar la práctica de la cultura física en la población del Ecuador
        </th>

        <td class="padding__filas padding__filas__dos">

          <center>

            <?php if ($arrayAlineacion[24]=="no"  || empty($arrayAlineacion[24])): ?>

              <input type="checkbox" id="objetivoEstregicoSecretaria1" name="objetivoEstregicoSecretaria1" class="check__estilos__lineas checkeds__objetivos__ministerio">
                                
            <?php else: ?>

              <input type="checkbox" id="objetivoEstregicoSecretaria1" name="objetivoEstregicoSecretaria1" class="check__estilos__lineas checkeds__objetivos__ministerio" checked="checked">
                                
            <?php endif ?>

                              

          </center>

        </td>

      </tr> 

    </thead>

    <tbody class="body__objetivoEstregico__uno">


    </tbody>

  </table>

  <div class="body__objetivoEstregicoContenedor__uno"></div>

  <br>

  <table class="objetivo__estrategicoSecretaria__2">

    <thead>

      <tr>

        <th class="padding__filas padding__filas__uno">
            Objetivo Estratégico Institucional 2: Incrementar el rendimiento de los atletas en la consecución de logros deportivos
        </th>

        <td class="padding__filas padding__filas__dos">

          <center>

            <?php if ($arrayAlineacion[25]=="no" || empty($arrayAlineacion[25])): ?>

              <input type="checkbox" id="objetivoEstregicoSecretaria2" name="objetivoEstregicoSecretaria2" class="check__estilos__lineas checkeds__objetivos__ministerio">
                                
            <?php else: ?>

              <input type="checkbox" id="objetivoEstregicoSecretaria2" name="objetivoEstregicoSecretaria2" class="check__estilos__lineas checkeds__objetivos__ministerio" checked="checked">
                                
            <?php endif ?>
                              
          </center>

        </td>

      </tr> 

    </thead>

    <tbody class="body__objetivoEstregico__dos">

    </tbody>

  </table>

  <div class="body__objetivoEstregicoContenedor__dos"></div>

  <!--====  End of Contenido Principal formularios  ====-->
                      
  <br>

  <div class="row">

    <div class="col-xs-12 col-sm-12 text-right">

      <button id="enviarAlineacionEstrategica" name="enviarAlineacionEstrategica" class="btn btn-primary"><i class="far fa-save"></i>&nbsp;ENVIAR</button>

      <div class="enviarDatosGenerales__reload"></div>

    </div>

  </div>

</div>