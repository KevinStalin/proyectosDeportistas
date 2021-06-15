<?php

$objeto = new usuario();

$plantilla = new plantilla();


$usuario = $objeto->usuarioCtr();

$rucReconocidos = $objeto->ctrOrganismoRuc();

$arrayUsuario = explode("___", $usuario);

$datosGenerales = $objeto->ctrDatosGenerales();
$arrayDatosGenerales = explode("___", $datosGenerales);


if ($arrayUsuario[0] == 2) {

  $codigo = $arrayUsuario[11];
} else {

  $codigo = $arrayUsuario[13];
}


?>


<!--=======================================
=            Secciòn Principal            =
========================================-->

<div class="wrapper row3 clase__tabs">

  <div class="container">

    <div class="codigo__principal">

      CÓDIGO DE PROYECTO <?php if ($arrayUsuario[0] == 2) : ?><?= $arrayUsuario[11]; ?><?php endif ?><?php if ($arrayUsuario[0] == 3) : ?><?= $arrayUsuario[13]; ?><?php endif ?>

      <input type="hidden" id="codigoProyecto" name="codigoProyecto" value="<?php if ($arrayUsuario[0] == 2) : ?><?= $arrayUsuario[11]; ?><?php endif ?><?php if ($arrayUsuario[0] == 3) : ?><?= $arrayUsuario[13]; ?><?php endif ?>" />

    </div>

    <br>

    <div class="tab-group rates-page-tabs">

      <ul class="nav nav-tabs responsive tabs" role="tablist" style="background:#e1f5fe;">


        <li role="presentation" class="active">
          <a href="#proyecto" aria-controls="proyecto" role="tab" data-toggle="tab" class="centrar__informacion__menus">PROYECTO<br><span class="letras__precionar">Ingresar datos referentes al proyecto</span></a>
        </li>

        <li role="presentation">
          <a href="#documentosAdicionales" aria-controls="documentosAdicionales" role="tab" data-toggle="tab" class="centrar__informacion__menus">DOCUMENTOS<br><span class="letras__precionar">Ingresar documentos adicionales del proyecto</span></a>
        </li>

        <li role="presentation">
          <a href="#enviarProyecto" aria-controls="enviarProyecto" role="tab" data-toggle="tab" class="centrar__informacion__menus">ENVIAR<br><span class="letras__precionar">Visualizar PDF y enviar Proyecto</span></a>
        </li>

      </ul>

      <div class="tab-content responsive">

        <div role="tabpanel" class="tab-pane active" id="proyecto">

          <div class="panel-group" id="accordion">

            <!--=====================================
            =            Datos Generales            =
            ======================================-->

            <div class="panel panel-default">

              <div class="panel-heading">

                <h4 class="panel-title">

                  <a data-toggle="collapse" data-parent="#accordion" href="#datosGenerales">
                    1 DATOS GENERALES
                  </a>

                  <span class="letras__formatos__span" id="datoGneralesRotulos">(Información no ingresada)</span>

                </h4>

              </div>

              <div id="datosGenerales" class="panel-collapse collapse">

                <?php

                $plantilla->componentesProyecto(1);

                ?>

              </div>

            </div>

            <!--====  End of Datos Generales  ====-->

            <!--==============================
            =            Proyecto            =
            ===============================-->

            <div class="panel panel-default">

              <div class="panel-heading">

                <h4 class="panel-title">

                  <a data-toggle="collapse" data-parent="#accordion" href="#proyectoPanel">
                    2 PROYECTO
                  </a>

                  <span class="letras__formatos__span" id="datoGneralesRotulos">(Información no ingresada)</span>

                </h4>

              </div>

              <div id="proyectoPanel" class="panel-collapse collapse">

                <?php

                $plantilla->componentesProyecto(2);

                ?>

              </div>

            </div>


            <!--====  End of Proyecto  ====-->


            <!--================================
            =            Base Legal            =
            =================================-->

            <div class="panel panel-default">

              <div class="panel-heading">

                <h4 class="panel-title">

                  <a data-toggle="collapse" data-parent="#accordion" href="#baseLegal">
                    3 BASE LEGAL
                  </a>

                  <span class="letras__formatos__span" id="datoGneralesRotulos">(Información no ingresada)</span>

                </h4>

              </div>

              <div id="baseLegal" class="panel-collapse collapse">

                <?php

                $plantilla->componentesProyecto(3);

                ?>

              </div>

            </div>


            <!--====  End of Base Legal  ====-->


            <!--=========================================================================
            =            Caracterización, objetivos y alineación estratégica            =
            ==========================================================================-->

            <div class="panel panel-default">

              <div class="panel-heading">

                <h4 class="panel-title">

                  <a data-toggle="collapse" data-parent="#accordion" href="#caracterizacion">
                    4 CARACTERIZACIÓN Y OBJETIVOS
                  </a>

                  <span class="letras__formatos__span" id="datoGneralesRotulos">(Información no ingresada)</span>

                </h4>

              </div>

              <div id="caracterizacion" class="panel-collapse collapse">

                <?php

                $plantilla->componentesProyecto(4);

                ?>

              </div>

            </div>


            <!--====  End of Caracterización, objetivos y alineación estratégica  ====-->


            <!--============================================
            =            Alineación estratégica            =
            =============================================-->
            <div class="panel panel-default">

              <div class="panel-heading">

                <h4 class="panel-title">

                  <a data-toggle="collapse" data-parent="#accordion" href="#alineacionEstrategica">
                    5 ALINEACIÓN ESTRATÉGICA
                  </a>

                  <span class="letras__formatos__span" id="datoGneralesRotulos">(Información no ingresada)</span>

                </h4>

              </div>

              <div id="alineacionEstrategica" class="panel-collapse collapse">

                <?php

                $plantilla->componentesProyecto(5);

                ?>

              </div>

            </div>



            <!--====  End of Alineación estratégica  ====-->


            <!--=========================================
            =            Aporte del proyecto            =
            ==========================================-->

            <div class="panel panel-default">

              <div class="panel-heading">

                <h4 class="panel-title">

                  <a data-toggle="collapse" data-parent="#accordion" href="#aporteProyecto">
                    6 APORTE DEL PROYECTO
                  </a>

                  <span class="letras__formatos__span" id="datoGneralesRotulos">(Información no ingresada)</span>

                </h4>

              </div>

              <div id="aporteProyecto" class="panel-collapse collapse">

                <div class="panel-body">

                  <!--=====================================================
                    =            Contenido Principal formularios            =
                    ======================================================-->

                  <?php

                  $plantilla->componentesProyecto(6);

                  ?>

                  <!--====  End of Contenido Principal formularios  ====-->

                </div>

              </div>

            </div>


            <!--====  End of Aporte del proyecto  ====-->



            <!--=================================
            =            Componentes            =
            ==================================-->

            <div class="panel panel-default">

              <div class="panel-heading">

                <h4 class="panel-title">

                  <a data-toggle="collapse" data-parent="#accordion" href="#componentes">
                    7 COMPONENTES
                  </a>

                  <span class="letras__formatos__span" id="datoGneralesRotulos">(Información no ingresada)</span>

                </h4>

              </div>

              <div id="componentes" class="panel-collapse collapse">

                <div class="panel-body">

                  <!--=====================================================
                    =            Contenido Principal formularios            =
                    ======================================================-->



                  <!--====  End of Contenido Principal formularios  ====-->

                </div>

              </div>

            </div>

            <!--====  End of Componentes  ====-->

            <!--===================================
            =            Beneficiarios            =
            ====================================-->

            <div class="panel panel-default">

              <div class="panel-heading">

                <h4 class="panel-title">

                  <a data-toggle="collapse" data-parent="#accordion" href="#beneficiarios">
                    8 BENEFICIARIOS
                  </a>

                  <span class="letras__formatos__span" id="datoGneralesRotulos">(Información no ingresada)</span>

                </h4>

              </div>

              <div id="beneficiarios" class="panel-collapse collapse">

                <div class="panel-body">

                  <!--=====================================================
                    =            Contenido Principal formularios            =
                    ======================================================-->



                  <!--====  End of Contenido Principal formularios  ====-->

                </div>

              </div>

            </div>

            <!--====  End of Beneficiarios  ====-->

            <!--==============================================
            =            Metodologìa de Ejecución            =
            ===============================================-->

            <div class="panel panel-default">

              <div class="panel-heading">

                <h4 class="panel-title">

                  <a data-toggle="collapse" data-parent="#accordion" href="#metodologia">
                    9 METODOLOGÍA DE EJECUCIÓN
                  </a>

                  <span class="letras__formatos__span" id="datoGneralesRotulos">(Información no ingresada)</span>

                </h4>

              </div>

              <div id="metodologia" class="panel-collapse collapse">

                <div class="panel-body">

                  <!--=====================================================
                    =            Contenido Principal formularios            =
                    ======================================================-->



                  <!--====  End of Contenido Principal formularios  ====-->

                </div>

              </div>

            </div>

            <!--====  End of Metodologìa de Ejecución  ====-->

            <!--=============================================
            =            Segumiento y Evaluación            =
            ==============================================-->

            <div class="panel panel-default">

              <div class="panel-heading">

                <h4 class="panel-title">

                  <a data-toggle="collapse" data-parent="#accordion" href="#seguimiento">
                    10 SEGUIMIENTO Y EVALUACIÓN
                  </a>

                  <span class="letras__formatos__span" id="datoGneralesRotulos">(Información no ingresada)</span>

                </h4>

              </div>

              <div id="seguimiento" class="panel-collapse collapse">

                <div class="panel-body">

                  <!--=====================================================
                    =            Contenido Principal formularios            =
                    ======================================================-->



                  <!--====  End of Contenido Principal formularios  ====-->

                </div>

              </div>

            </div>

            <!--====  End of Segumiento y Evaluación  ====-->


          </div>

        </div>

        <!--===============================
        =            Sección 2            =
        ================================-->

        <div role="tabpanel" class="tab-pane" id="documentosAdicionales">



        </div>

        <!--====  End of Sección 2  ====-->


        <!--===============================
        =            Sección 3            =
        ================================-->

        <div role="tabpanel" class="tab-pane" id="enviarProyecto">



        </div>

        <!--====  End of Sección 3  ====-->



      </div>

    </div>

  </div>

</div>

<!--====  End of Secciòn Principal  ====-->



<!--=============================
=            Modales            =
==============================-->

<div class="modal fade" id="modalEjemploProyecto">

  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">

      <div class="modal-header" style="background:white!important; color:black!important;">

        <h5 class="modal-title" id="exampleModalLongTitle" style="font-weight:bold;">Ejemplo de como elaborar un proyecto</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position:relative; top:-18px;">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>

      <div class="modal-body body__preguntas">

        El nombre del proyecto deberá estar compuesto por dos elementos: la acción a realizarse y sobre que se va actuar, por ejemplo: <span class="enfacis__proyectos">“Participación de la Deportista Paola Cueva en el Campeonato Mundial de Atletismo San Diego 2015”, “Dotación de Implementación para las Ligas Deportivas Barriales de la Provincia de Pichincha”, “Organización de los Juegos Intercantonales Azuay 2015”, otros</span>.

      </div>


    </div>

  </div>

</div>


<div class="modal fade" id="modalBaseLegales">

  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">

      <div class="modal-header" style="background:white!important; color:black!important;">

        <h5 class="modal-title" id="exampleModalLongTitle" style="font-weight:bold;">Bases Legales Dispuestas por el Ministerio del Deporte</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position:relative; top:-18px;">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>

      <div class="modal-body body__preguntas">

        <div class="enfacis__proyectos">2.1 LA LEY DEL DEPORTE, EDUCACIÓN FÍSICA Y RECREACIÓN</div>

        <div>El artículo 13 establece: “El Ministerio Sectorial es el órgano rector y planificador del deporte, educación física y recreación; le corresponde establecer, ejercer, garantizar y aplicar las políticas, directrices y planes aplicables en las áreas correspondientes para el desarrollo del sector de conformidad con lo dispuesto en la Constitución, las leyes, instrumentos internacionales y reglamentos aplicables. Tendrá dos objetivos principales, la activación de la población para asegurar la salud de las y los ciudadanos y facilitar la consecución de logros deportivos a nivel nacional e internacional de las y los deportistas incluyendo, aquellos que tengan algún tipo de discapacidad.</div>

        <br>

        <div class="enfacis__proyectos">2.2 LEY DE RÉGIMEN TRIBUTARIO INTERNO</div>

        <div>El artículo 10 dispone: “En general, con el propósito de determinar la base imponible sujeta a este impuesto se deducirán los gastos e inversiones que se efectúen con el propósito de obtener, mantener y mejorar los ingresos de fuente ecuatoriana que no estén exentos. En particular se aplicarán las siguientes deducciones: … 19. Los costos y gastos por promoción y publicidad de conformidad con las excepciones, límites, segmentación y condiciones establecidas en el Reglamento... Se podrá deducir el 100% adicional para el cálculo de la base imponible del impuesto a la renta, los gastos de publicidad y patrocinio realizados a favor de deportistas, programas y proyectos deportivos previamente calificados por la entidad rectora competente en la materia. El reglamento establecerá los parámetros técnicos y formales que deberán cumplirse para acceder a esta deducción adicional...”</div>

        <br>

        <div class="enfacis__proyectos">2.3 REGLAMENTO PARA LA APLICACIÓN DE LA LEY DE RÉGIMEN TRIBUTARIO INTERNO</div>

        <div>El artículo 28 dispone: “Bajo las condiciones descritas en el artículo precedente y siempre que no hubieren sido aplicados al costo de producción, son deducibles los gastos previstos por la Ley de Régimen Tributario Interno, en los términos señalados en ella y en este reglamento, tales como: ... 11. Promoción, publicidad y patrocinio... e. Se podrá deducir el 100% adicional para el cálculo de la base imponible del impuesto a la renta, los gastos de publicidad y patrocinio realizados a favor de deportistas, programas y proyectos deportivos previamente calificados por la entidad rectora competente en la materia, según lo previsto en el respectivo documento de planificación estratégica, así como con los límites y condiciones que esta emita para el efecto.”</div>


      </div>


    </div>

  </div>

</div>



<div class="modal fade" id="modalAnalisisSituacional">

  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">

      <div class="modal-header" style="background:white!important; color:black!important;">

        <h5 class="modal-title" id="exampleModalLongTitle" style="font-weight:bold;">ANÁLISIS DE LA SITUACIÓN ACTUAL (DIAGNÓSTICO)</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position:relative; top:-18px;">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>

      <div class="modal-body body__preguntas">

        Descripción del problema, la realidad del lugar o de la situación existente previo a la intervención del proyecto, es decir, de aquello que se pretende mejorar o solucionar a través de este.


      </div>


    </div>

  </div>

</div>

<div class="modal fade" id="modalJustificacion">

  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">

      <div class="modal-header" style="background:white!important; color:black!important;">

        <h5 class="modal-title" id="exampleModalLongTitle" style="font-weight:bold;">JUSTIFICACIÓN</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position:relative; top:-18px;">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>

      <div class="modal-body body__preguntas">

        Señalar aspectos y circunstancias que motivan la postulación del proyecto y argumentar en qué medida su implementación solucionará las problemáticas identificadas en el punto anterior. Se deberá incluir información referente a indicadores cualitativos y cuantitativos que apoyen su comprensión.


      </div>


    </div>

  </div>

</div>

<div class="modal fade" id="modalObjetivoGeneral">

  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">

      <div class="modal-header" style="background:white!important; color:black!important;">

        <h5 class="modal-title" id="exampleModalLongTitle" style="font-weight:bold;">OBJETIVO GENERAL</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position:relative; top:-18px;">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>

      <div class="modal-body body__preguntas">

        <div>Es el enunciado de lo que se considera posible alcanzar, respecto al problema o situación negativa identificada en el diagnóstico. Es importante plantear un solo objetivo general para evitar desviaciones o mal entendidos en el desarrollo del proyecto. Para enunciar el objetivo general se debe iniciar con un verbo que denote acción y terminado en infinitico (ar, er, ir). Se puede utilizar verbos como mejorar, fortalecer, incentivar, promover, desarrollar, optimizar, perfeccionar, otros similares. </div>

        <br>

        <div>El objetivo general debe responder a algunas preguntas fundamentales: ¿Qué se va a hacer?, ¿Cómo se va hacer?, ¿Para qué se va hacer?, ¿Dónde se va hacer? y ¿Cuándo se va hacer? Ejemplo:</div>

        <br>

        <div><span class="enfacis__proyectos">¿Qué?</span> Lograr la participación en el Campeonato Mundial de Atletismo San Diego 2015 de la deportista Paola Cueva, <span class="enfacis__proyectos">¿Cómo?</span> Mediante el apoyo técnico y económico necesario, <span class="enfacis__proyectos">¿Para qué?</span> a fin de que pueda competir en igualdad de condiciones que sus adversarias y consiga demostrar su calidad deportiva ubicándose en los primeros lugares del evento.</div>

      </div>


    </div>

  </div>

</div>


<div class="modal fade" id="modalObjetivosEspecificos">

  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">

      <div class="modal-header" style="background:white!important; color:black!important;">

        <h5 class="modal-title" id="exampleModalLongTitle" style="font-weight:bold;">OBJETIVOS ESPECÍFICOS</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position:relative; top:-18px;">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>

      <div class="modal-body body__preguntas">

        <div>Es la desagregación del objetivo general. Corresponde a objetivos más puntuales que contribuyen a lograr el objetivo general del objeto de financiamiento. Estos objetivos deben ser medibles, apropiados, temporales y realistas. Ejemplo:</div>

        <br>

        &nbsp;&nbsp;<div><span class="enfacis__proyectos">a.1</span> Mejorar el rendimiento del deportista durante la etapa previa a la participación en el Campeonato Mundial de Atletismo San Diego 2015.</div>

        <br>

        &nbsp;&nbsp;<div><span class="enfacis__proyectos">a.2</span> Fortalecer la calidad del entrenamiento del deportista al dotarlo con la implementación e indumentaria adecuada para el nivel técnico de la competencia.</div>

      </div>


    </div>

  </div>

</div>


<div class="modal fade" id="modalAlineacionEstrategica">

  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">

      <div class="modal-header" style="background:white!important; color:black!important;">

        <h5 class="modal-title" id="exampleModalLongTitle" style="font-weight:bold;">ALINEACIÓN ESTRATÉGICA</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position:relative; top:-18px;">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>

      <div class="modal-body body__preguntas">

        <div>Describe como los objetivos general y específicos contribuyen al cometimiento de los objetivos del Plan Estratégico de la Secretaría del Deporte y/o al Plan Decenal del Deporte, la Educación Física y la Recreación DEFIRE.</div>

      </div>


    </div>

  </div>

</div>


<div class="modal fade" id="modalPlanDecenal">

  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">

      <div class="modal-header" style="background:white!important; color:black!important;">

        <h5 class="modal-title" id="exampleModalLongTitle" style="font-weight:bold;">PLAN DECENAL DEL DEPORTE, LA EDUCACIÓN FÍSICA Y LA FEDERACIÓN - DEFIRE</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position:relative; top:-18px;">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>

      <div class="modal-body body__preguntas">

        <div>
          Seleccione una línea política según lo requerido.
        </div>

      </div>


    </div>

  </div>

</div>

<!--====  End of Modales  ====-->