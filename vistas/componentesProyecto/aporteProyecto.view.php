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

<div class="panel-body">

  <!--=====================================================
  =            Contenido Principal formularios            =
  ======================================================-->
                      
  <div class="row">   


    <div class="col-sm-10 col-xs-10">

      <div class="rotulo__referencias">APORTE DEL PROYECTO</div>
                    
    </div>

    <div class="col-sm-2 col-xs-2 text-center">

      <span class="cursores__modales" data-toggle="modal" data-target="#modalEstrategiasRelacionadas"><i class="fas fa-question-circle"></i><br><div class="letras__precionar">Presionar para obtener un ejemplo sobre como llenar está sección</div></span>
                    
    </div>

  </div>   

                      
  <!--====  End of Contenido Principal formularios  ====-->
                      
</div>

<!--=============================
=            Modales            =
==============================-->
<div class="modal fade" id="modalEstrategiasRelacionadas">

  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">

      <div class="modal-header" style="background:white!important; color:black!important;">

        <h5 class="modal-title" id="exampleModalLongTitle" style="font-weight:bold;">Recomendación</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position:relative; top:-18px;">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>

      <div class="modal-body body__preguntas">

         <div>
           Describir como el proyecto contribuye a la sociedad y a las estrategias seleccionadas en la Alineación estratégica
         </div>

      </div>


    </div>

  </div>

</div>


<!--====  End of Modales  ====-->
