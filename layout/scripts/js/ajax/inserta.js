$(document).ready(function() {



    /*==============================================
    =            Validacion Formularios            =
    ==============================================*/


    function validacionRegistro(parametro1) {

        var sumadorErrores = 0;

        $(parametro1).each(function(index) {
            if ($(this).val() == "") {
                sumadorErrores++;
            }
        });

        if (sumadorErrores == 0) {
            return true;
        } else {
            return false;
        }

    }

    var validacionRegistroMostrarErrores = function(parametro1) {

        var sumadorErrores = 0;

        $(parametro1).each(function(index) {
            if ($(this).val() == "") {
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

    }

    function validacionRegistroChecks(parametro1) {

        var sumadorCheked = 0;

        $(parametro1).each(function(index) {
            var condicion = $(parametro1).is(":checked");
            if (condicion) {
                sumadorCheked++;
            }
        });

        if (sumadorCheked > 0) {
            return true;
        } else {
            return false;
        }

    }

    /*=====  End of Validacion Formularios  ======*/

    /*===========================================
    =            Función del checked            =
    ===========================================*/


    var validacionRecorrerChekeds = function(parametro1) {

        var condicion = $(parametro1).is(":checked");

        if (condicion) {
            return "si";
        } else {
            return "no";
        }

    }


    /*=====  End of Función del checked  ======*/


    /*=============================================
    =            Agrupar por secciones            =
    =============================================*/

    function concatenarValores(parametro1) {

        var array = new Array();

        var string = "";

        $(parametro1).each(function(index) {

            array.push($(this).val());

        });


        return array;

    }




    /*=====  End of Agrupar por secciones  ======*/

    /*============================================
    =            Minimo de caracteres            =
    ============================================*/

    function valoresMinimos(parametro1) {

        var sumadorErrores = 0;

        $(parametro1).each(function(index) {

            if ($(this).text() != "") {
                sumadorErrores++;
            }

        });

        if (sumadorErrores == 0) {
            return true;
        } else {
            return false;
        }

    }

    /*=====  End of Minimo de caracteres  ======*/

    /*================================
    =            Mensajes            =
    ================================*/
    var validacionMensajeObligatorio = function(parametro1) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Campos obligatorios", "error", 5, function() {});
            $(parametro1).show();

        }
        /*=====  End of Mensajes  ======*/


    /*==========================================
    =            Mínimos caracteres            =
    ==========================================*/
    var validacionMinimoCaracteres = function(parametro1) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Fijarse en las palabras mínimas requeridas", "error", 5, function() {});
            $(this).show();


        }
        /*=====  End of Mínimos caracteres  ======*/


    /*=============================================
    =            Prametros de checkeds            =
    =============================================*/
    var validacionCheckeds = function(parametro1, parametro2) {

            if (parametro2 == "" || parametro2 == undefined) {
                parametro2 = "";
            }

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Debe seleccionar " + parametro2, "error", 5, function() {});
            $(this).show();

        }
        /*=====  End of Prametros de checkeds  ======*/


    /*==============================================
    =            Alineación estratégica            =
    ==============================================*/

    $('#enviarAlineacionEstrategica').click(function(e) {

        $(this).hide();

        /*============================================
        =            Validador de errores            =
        ============================================*/

        validador = validacionRegistro($(".alineacion__estrategicas__minimas"));
        validacionRegistroMostrarErrores($(".alineacion__estrategicas__minimas"));

        /*=====  End of Validador de errores  ======*/

        /*=======================================================
        =            Validadores mínimos de palabras            =
        =======================================================*/

        validadorMinimo = valoresMinimos($(".minimas__palabras__alineacion"));

        /*=====  End of Validadores mínimos de palabras  ======*/

        /*=========================================
        =            Valdiador chekeds            =
        =========================================*/

        validadorLinea = validacionRegistroChecks($(".chekeds__lineas"));

        /*=====  End of Valdiador chekeds  ======*/

        /*======================================
        =            Chekeds lineas            =
        ======================================*/

        // obtener valores
        linea1 = validacionRecorrerChekeds($("#lineaPolitica1"));
        linea2 = validacionRecorrerChekeds($("#lineaPolitica2"));
        linea3 = validacionRecorrerChekeds($("#lineaPolitica3"));

        /*=====  End of Chekeds lineas  ======*/

        /*==================================================
        =            Objetivos línea 1 objetivo            =
        ==================================================*/

        objetivosLinea1 = validacionRegistroChecks($(".checkeds__linea1"));

        // obtener valores
        objetivo1Linea1 = validacionRecorrerChekeds($("#objetivo1"));
        objetivo1Linea2 = validacionRecorrerChekeds($("#objetivo2"));
        objetivo1Linea3 = validacionRecorrerChekeds($("#objetivo3"));
        objetivo1Linea4 = validacionRecorrerChekeds($("#objetivo4"));
        objetivo1Linea5 = validacionRecorrerChekeds($("#objetivo5"));
        objetivo1Linea6 = validacionRecorrerChekeds($("#objetivo6"));
        objetivo1Linea7 = validacionRecorrerChekeds($("#objetivo7"));
        objetivo1Linea8 = validacionRecorrerChekeds($("#objetivo8"));
        objetivo1Linea9 = validacionRecorrerChekeds($("#objetivo9"));
        objetivo1Linea10 = validacionRecorrerChekeds($("#objetivo10"));
        objetivo1Linea11 = validacionRecorrerChekeds($("#objetivo11"));

        /*=====  End of Objetivos línea 1 objetivo  ======*/

        /*===================================================
        =            Líneas políticas alineadas     1       =
        ===================================================*/

        objetivo1Linea1Item1 = validacionRegistroChecks($(".checkeds__linea1Objetivo1"));
        objetivo1Linea1Item2 = validacionRegistroChecks($(".checkeds__linea1Objetivo2"));
        objetivo1Linea1Item3 = validacionRegistroChecks($(".checkeds__linea1Objetivo3"));
        objetivo1Linea1Item4 = validacionRegistroChecks($(".checkeds__linea1Objetivo4"));
        objetivo1Linea1Item5 = validacionRegistroChecks($(".checkeds__linea1Objetivo5"));
        objetivo1Linea1Item6 = validacionRegistroChecks($(".checkeds__linea1Objetivo6"));
        objetivo1Linea1Item7 = validacionRegistroChecks($(".checkeds__linea1Objetivo7"));
        objetivo1Linea1Item8 = validacionRegistroChecks($(".checkeds__linea1Objetivo8"));
        objetivo1Linea1Item9 = validacionRegistroChecks($(".checkeds__linea1Objetivo9"));
        objetivo1Linea1Item10 = validacionRegistroChecks($(".checkeds__linea1Objetivo10"));
        objetivo1Linea1Item11 = validacionRegistroChecks($(".checkeds__linea1Objetivo11"));

        /*=====  End of Líneas políticas alineadas 1  ======*/

        /*===================================================
        =            Objetivos Línea 2 Objetivos            =
        ===================================================*/

        objetivosLinea2 = validacionRegistroChecks($(".checkeds__linea2"));

        // obtener los valores
        objetivo2Linea1 = validacionRecorrerChekeds($("#objetivoLineaDos1"));
        objetivo2Linea2 = validacionRecorrerChekeds($("#objetivoLineaDos2"));
        objetivo2Linea3 = validacionRecorrerChekeds($("#objetivoLineaDos3"));
        objetivo2Linea4 = validacionRecorrerChekeds($("#objetivoLineaDos4"));


        /*=====  End of Objetivos Línea 2 Objetivos  ======*/

        /*====================================================
        =            Líneas políticas alineadas 2            =
        ====================================================*/

        objetivo2Linea1Item1 = validacionRegistroChecks($(".checkeds__linea2Objetivo1"));
        objetivo2Linea1Item2 = validacionRegistroChecks($(".checkeds__linea2Objetivo2"));
        objetivo2Linea1Item3 = validacionRegistroChecks($(".checkeds__linea2Objetivo3"));
        objetivo2Linea1Item4 = validacionRegistroChecks($(".checkeds__linea2Objetivo4"));

        /*=====  End of Líneas políticas alineadas 2  ======*/

        /*===================================================
        =            Objetivos Línea 3 Objetivos            =
        ===================================================*/

        objetivosLinea3 = validacionRegistroChecks($(".checkeds__linea3"));
        // obtener los valores
        objetivo3Linea1 = validacionRecorrerChekeds($("#objetivoLineaTres1"));
        objetivo3Linea2 = validacionRecorrerChekeds($("#objetivoLineaTres2"));
        objetivo3Linea3 = validacionRecorrerChekeds($("#objetivoLineaTres3"));
        objetivo3Linea4 = validacionRecorrerChekeds($("#objetivoLineaTres4"));
        objetivo3Linea5 = validacionRecorrerChekeds($("#objetivoLineaTres5"));

        /*=====  End of Objetivos Línea 3 Objetivos  ======*/

        /*====================================================
        =            Líneas políticas alineadas 3            =
        ====================================================*/

        objetivo3Linea1Item1 = validacionRegistroChecks($(".checkeds__linea3Objetivo1"));
        objetivo3Linea1Item2 = validacionRegistroChecks($(".checkeds__linea3Objetivo2"));
        objetivo3Linea1Item3 = validacionRegistroChecks($(".checkeds__linea3Objetivo3"));
        objetivo3Linea1Item4 = validacionRegistroChecks($(".checkeds__linea3Objetivo4"));
        objetivo3Linea1Item5 = validacionRegistroChecks($(".checkeds__linea3Objetivo5"));

        /*=====  End of Líneas políticas alineadas 3  ======*/

        /*========================================================
        =            Objetivos ministerio del deporte            =
        ========================================================*/

        validadorObjetivosMinisterio = validacionRegistroChecks($(".checkeds__objetivos__ministerio"));

        /*=====  End of Objetivos ministerio del deporte  ======*/

        /*=================================================================
        =            Ckeckeds objetivos ministerio del deporte            =
        =================================================================*/

        // obtener valores
        objetivosMinisterio1 = validacionRecorrerChekeds($("#objetivoEstregicoSecretaria1"));
        objetivosMinisterio2 = validacionRecorrerChekeds($("#objetivoEstregicoSecretaria2"));

        /*=====  End of Ckeckeds objetivos ministerio del deporte  ======*/


        /*==============================================
        =            Objetivos Ministerio              =
        ==============================================*/

        objetivoMinisterio1 = validacionRegistroChecks($(".checkeds__ObjetivoMinisterio1"));
        objetivoMinisterio2 = validacionRegistroChecks($(".checkeds__ObjetivoMinisterio2"));

        /*=====  End of Objetivos Ministerio    ======*/


        if (validador == false) {

            validacionMensajeObligatorio($(this));

        } else if (validadorMinimo == false) {

            validacionMinimoCaracteres($(this));

        } else if (validadorLinea == false) {

            validacionCheckeds($(this), ' una línea política relacionada al plan decenal del deporte');

        } else if (linea1 == "si" && objetivosLinea1 == false) {

            validacionCheckeds($(this), ' un objetivo estratégico relacionado a la línea política 1');

        } else if (linea1 == "si" && objetivo1Linea1 == "si" && objetivo1Linea1Item1 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 1 relacionado a la línea política 1');

        } else if (linea1 == "si" && objetivo1Linea2 == "si" && objetivo1Linea1Item2 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 2 relacionado a la línea política 1');

        } else if (linea1 == "si" && objetivo1Linea3 == "si" && objetivo1Linea1Item3 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 3 relacionado a la línea política 1');

        } else if (linea1 == "si" && objetivo1Linea4 == "si" && objetivo1Linea1Item4 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 4 relacionado a la línea política 1');

        } else if (linea1 == "si" && objetivo1Linea5 == "si" && objetivo1Linea1Item5 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 5 relacionado a la línea política 1');

        } else if (linea1 == "si" && objetivo1Linea6 == "si" && objetivo1Linea1Item6 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 6 relacionado a la línea política 1');

        } else if (linea1 == "si" && objetivo1Linea7 == "si" && objetivo1Linea1Item7 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 7 relacionado a la línea política 1');

        } else if (linea1 == "si" && objetivo1Linea8 == "si" && objetivo1Linea1Item8 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 8 relacionado a la línea política 1');

        } else if (linea1 == "si" && objetivo1Linea9 == "si" && objetivo1Linea1Item9 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 9 relacionado a la línea política 1');

        } else if (linea1 == "si" && objetivo1Linea10 == "si" && objetivo1Linea1Item10 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 10 relacionado a la línea política 1');

        } else if (linea1 == "si" && objetivo1Linea11 == "si" && objetivo1Linea1Item11 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 11 relacionado a la línea política 1');

        } else if (linea2 == "si" && objetivosLinea2 == false) {

            validacionCheckeds($(this), ' un objetivo estratégico relacionado a la línea política 2');

        } else if (linea2 == "si" && objetivo2Linea1 == "si" && objetivo2Linea1Item1 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 1 relacionado a la línea política 2');

        } else if (linea2 == "si" && objetivo2Linea2 == "si" && objetivo2Linea1Item2 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 2 relacionado a la línea política 2');

        } else if (linea2 == "si" && objetivo2Linea3 == "si" && objetivo2Linea1Item3 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 3 relacionado a la línea política 2');

        } else if (linea2 == "si" && objetivo2Linea4 == "si" && objetivo2Linea1Item4 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 4 relacionado a la línea política 2');

        } else if (linea3 == "si" && objetivosLinea3 == false) {

            validacionCheckeds($(this), ' un objetivo estratégico relacionado a la línea política 3');

        } else if (linea3 == "si" && objetivo3Linea1 == "si" && objetivo3Linea1Item1 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 1 relacionado a la línea política 3');

        } else if (linea3 == "si" && objetivo3Linea2 == "si" && objetivo3Linea1Item2 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 2 relacionado a la línea política 3');

        } else if (linea3 == "si" && objetivo3Linea3 == "si" && objetivo3Linea1Item3 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 3 relacionado a la línea política 3');

        } else if (linea3 == "si" && objetivo3Linea4 == "si" && objetivo3Linea1Item4 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 4 relacionado a la línea política 3');

        } else if (linea3 == "si" && objetivo3Linea5 == "si" && objetivo3Linea1Item5 == false) {

            validacionCheckeds($(this), ' un item del objetivo estratégico 5 relacionado a la línea política 3');

        } else if (validadorObjetivosMinisterio == false) {

            validacionCheckeds($(this), ' un objetivo institucional del plan estratégico del ministerio del deporte');

        } else if (objetivosMinisterio1 == "si" && objetivoMinisterio1 == false) {

            validacionCheckeds($(this), ' un item del objetivo institucional 1 del plan estratégico del ministerio del deporte');

        } else if (objetivosMinisterio2 == "si" && objetivoMinisterio2 == false) {

            validacionCheckeds($(this), ' un item del objetivo institucional 2 del plan estratégico del ministerio del deporte');

        } else {

            var paqueteDeDatos = new FormData();

            /*==============================================
            =            Alineación estratégica            =
            ==============================================*/
            paqueteDeDatos.append('alineacionEstrategicaCampos', $('#alineacionEstrategicaCampos').prop('value'));
            /*=====  End of Alineación estratégica  ======*/



            /*========================================
            =            Líneas Políticas            =
            ========================================*/

            paqueteDeDatos.append('linea1', linea1);
            paqueteDeDatos.append('linea2', linea2);
            paqueteDeDatos.append('linea3', linea3);

            /*=====  End of Líneas Políticas  ======*/


            /*========================================
            =            Objetivos Línea1            =
            ========================================*/

            paqueteDeDatos.append('objetivo1Linea1', objetivo1Linea1);
            paqueteDeDatos.append('objetivo2Linea1', objetivo1Linea2);
            paqueteDeDatos.append('objetivo3Linea1', objetivo1Linea3);
            paqueteDeDatos.append('objetivo4Linea1', objetivo1Linea4);
            paqueteDeDatos.append('objetivo5Linea1', objetivo1Linea5);
            paqueteDeDatos.append('objetivo6Linea1', objetivo1Linea6);
            paqueteDeDatos.append('objetivo7Linea1', objetivo1Linea7);
            paqueteDeDatos.append('objetivo8Linea1', objetivo1Linea8);
            paqueteDeDatos.append('objetivo9Linea1', objetivo1Linea9);
            paqueteDeDatos.append('objetivo10Linea1', objetivo1Linea10);
            paqueteDeDatos.append('objetivo11Linea1', objetivo1Linea11);

            /*=====  End of Objetivos Línea1  ======*/

            /*==========================================
            =            Objetivos líneas 2            =
            ==========================================*/

            paqueteDeDatos.append('objetivo1Linea2', objetivo2Linea1);
            paqueteDeDatos.append('objetivo2Linea2', objetivo2Linea2);
            paqueteDeDatos.append('objetivo3Linea2', objetivo2Linea3);
            paqueteDeDatos.append('objetivo4Linea2', objetivo2Linea4);

            /*=====  End of Objetivos líneas 2  ======*/

            /*===================================
            =            Objetivos 3            =
            ===================================*/

            paqueteDeDatos.append('objetivo1Linea3', objetivo3Linea1);
            paqueteDeDatos.append('objetivo2Linea3', objetivo3Linea2);
            paqueteDeDatos.append('objetivo3Linea3', objetivo3Linea3);
            paqueteDeDatos.append('objetivo4Linea3', objetivo3Linea4);
            paqueteDeDatos.append('objetivo5Linea3', objetivo3Linea5);

            /*=====  End of Objetivos 3  ======*/

            /*========================================================
            =            Ojbetivos Ministerio del deporte            =
            ========================================================*/

            paqueteDeDatos.append('objetivo1Institucional', objetivosMinisterio1);
            paqueteDeDatos.append('objetivo2Institucional', objetivosMinisterio2);

            /*=====  End of Ojbetivos Ministerio del deporte  ======*/


            /*================================================
            =            Items Objetivo 1 Linea 1            =
            ================================================*/

            marcoJuridicoObjetivo1 = validacionRecorrerChekeds($("#marcoJuridicoObjetivo1"));
            marcoJuridicoObjetivo2 = validacionRecorrerChekeds($("#marcoJuridicoObjetivo2"));
            marcoJuridicoObjetivo3 = validacionRecorrerChekeds($("#marcoJuridicoObjetivo3"));

            paqueteDeDatos.append('objetivo1Linea1Item1', marcoJuridicoObjetivo1);
            paqueteDeDatos.append('objetivo1Linea1Item2', marcoJuridicoObjetivo2);
            paqueteDeDatos.append('objetivo1Linea1Item3', marcoJuridicoObjetivo3);

            /*=====  End of Items Objetivo 1 Linea 1  ======*/

            /*================================================
            =            Items Objetivo 2 Linea 1            =
            ================================================*/

            sistemaComunicacionObjetivo1 = validacionRecorrerChekeds($("#sistemaComunicacionObjetivo1"));
            sistemaComunicacionObjetivo2 = validacionRecorrerChekeds($("#sistemaComunicacionObjetivo2"));
            sistemaComunicacionObjetivo3 = validacionRecorrerChekeds($("#sistemaComunicacionObjetivo3"));
            sistemaComunicacionObjetivo4 = validacionRecorrerChekeds($("#sistemaComunicacionObjetivo4"));

            paqueteDeDatos.append('objetivo2Linea1Item1', sistemaComunicacionObjetivo1);
            paqueteDeDatos.append('objetivo2Linea1Item2', sistemaComunicacionObjetivo2);
            paqueteDeDatos.append('objetivo2Linea1Item3', sistemaComunicacionObjetivo3);
            paqueteDeDatos.append('objetivo2Linea1Item4', sistemaComunicacionObjetivo4);

            /*=====  End of Items Objetivo 2 Linea 1  ======*/


            /*================================================
            =            Items Objetivo 3 Linea 1            =
            ================================================*/

            sistemaFormacionObjetivo1 = validacionRecorrerChekeds($("#sistemaFormacionObjetivo1"));
            sistemaFormacionObjetivo2 = validacionRecorrerChekeds($("#sistemaFormacionObjetivo2"));
            sistemaFormacionObjetivo3 = validacionRecorrerChekeds($("#sistemaFormacionObjetivo3"));
            sistemaFormacionObjetivo4 = validacionRecorrerChekeds($("#sistemaFormacionObjetivo4"));

            paqueteDeDatos.append('objetivo3Linea1Item1', sistemaFormacionObjetivo1);
            paqueteDeDatos.append('objetivo3Linea1Item2', sistemaFormacionObjetivo2);
            paqueteDeDatos.append('objetivo3Linea1Item3', sistemaFormacionObjetivo3);
            paqueteDeDatos.append('objetivo3Linea1Item4', sistemaFormacionObjetivo4);


            /*=====  End of Items Objetivo 3 Linea 1  ======*/

            /*================================================
            =            Items Objetivo 4 Linea 1            =
            ================================================*/

            implementarSistemaNacionalObjetivo1 = validacionRecorrerChekeds($("#implementarSistemaNacionalObjetivo1"));

            paqueteDeDatos.append('objetivo4Linea1Item1', implementarSistemaNacionalObjetivo1);

            /*=====  End of Items Objetivo 4 Linea 1  ======*/

            /*================================================
            =            Items Objetivo 5 Linea 1            =
            ================================================*/

            modeloCoordinacionObjetivo1 = validacionRecorrerChekeds($("#modeloCoordinacionObjetivo1"));

            paqueteDeDatos.append('objetivo5Linea1Item1', modeloCoordinacionObjetivo1);

            /*=====  End of Items Objetivo 5 Linea 1  ======*/

            /*================================================
            =            Items Objetivo 6 Linea 1            =
            ================================================*/

            participacionCiudadanaObjetivo1 = validacionRecorrerChekeds($("#participacionCiudadanaObjetivo1"));
            participacionCiudadanaObjetivo2 = validacionRecorrerChekeds($("#participacionCiudadanaObjetivo2"));

            paqueteDeDatos.append('objetivo6Linea1Item1', participacionCiudadanaObjetivo1);
            paqueteDeDatos.append('objetivo6Linea1Item2', participacionCiudadanaObjetivo2);

            /*=====  End of Items Objetivo 6 Linea 1  ======*/

            /*================================================
            =            Items Objetivo 7 Linea 1            =
            ================================================*/

            propiciarInvestigacionObjetivo1 = validacionRecorrerChekeds($("#propiciarInvestigacionObjetivo1"));
            propiciarInvestigacionObjetivo2 = validacionRecorrerChekeds($("#propiciarInvestigacionObjetivo2"));

            paqueteDeDatos.append('objetivo7Linea1Item1', propiciarInvestigacionObjetivo1);
            paqueteDeDatos.append('objetivo7Linea1Item2', propiciarInvestigacionObjetivo2);

            /*=====  End of Items Objetivo 7 Linea 1  ======*/


            /*================================================
            =            Items Objetivo 8 Linea 1            =
            ================================================*/

            lograrSostenibilidadObjetivo1 = validacionRecorrerChekeds($("#lograrSostenibilidadObjetivo1"));
            lograrSostenibilidadObjetivo2 = validacionRecorrerChekeds($("#lograrSostenibilidadObjetivo2"));
            lograrSostenibilidadObjetivo3 = validacionRecorrerChekeds($("#lograrSostenibilidadObjetivo3"));
            lograrSostenibilidadObjetivo4 = validacionRecorrerChekeds($("#lograrSostenibilidadObjetivo4"));
            lograrSostenibilidadObjetivo5 = validacionRecorrerChekeds($("#lograrSostenibilidadObjetivo5"));


            paqueteDeDatos.append('objetivo8Linea1Item1', lograrSostenibilidadObjetivo1);
            paqueteDeDatos.append('objetivo8Linea1Item2', lograrSostenibilidadObjetivo2);
            paqueteDeDatos.append('objetivo8Linea1Item3', lograrSostenibilidadObjetivo3);
            paqueteDeDatos.append('objetivo8Linea1Item4', lograrSostenibilidadObjetivo4);
            paqueteDeDatos.append('objetivo8Linea1Item5', lograrSostenibilidadObjetivo5);

            /*=====  End of Items Objetivo 8 Linea 1  ======*/

            /*================================================
            =            Items Objetivo 9 Linea 1            =
            ================================================*/

            modelosDeGestionObjetivo1 = validacionRecorrerChekeds($("#modelosDeGestionObjetivo1"));

            paqueteDeDatos.append('objetivo9Linea1Item1', modelosDeGestionObjetivo1);

            /*=====  End of Items Objetivo 9 Linea 1  ======*/

            /*================================================
            =            Items Objetivo 10 Linea 1            =
            ================================================*/

            optimizarInfraestructuraObjetivo1 = validacionRecorrerChekeds($("#optimizarInfraestructuraObjetivo1"));
            optimizarInfraestructuraObjetivo2 = validacionRecorrerChekeds($("#optimizarInfraestructuraObjetivo2"));
            optimizarInfraestructuraObjetivo3 = validacionRecorrerChekeds($("#optimizarInfraestructuraObjetivo3"));
            optimizarInfraestructuraObjetivo4 = validacionRecorrerChekeds($("#optimizarInfraestructuraObjetivo4"));
            optimizarInfraestructuraObjetivo5 = validacionRecorrerChekeds($("#optimizarInfraestructuraObjetivo5"));

            paqueteDeDatos.append('objetivo10Linea1Item1', optimizarInfraestructuraObjetivo1);
            paqueteDeDatos.append('objetivo10Linea1Item2', optimizarInfraestructuraObjetivo2);
            paqueteDeDatos.append('objetivo10Linea1Item3', optimizarInfraestructuraObjetivo3);
            paqueteDeDatos.append('objetivo10Linea1Item4', optimizarInfraestructuraObjetivo4);
            paqueteDeDatos.append('objetivo10Linea1Item5', optimizarInfraestructuraObjetivo5);

            /*=====  End of Items Objetivo 10 Linea 1  ======*/

            /*================================================
            =            Items Objetivo 11 Linea 1            =
            ================================================*/

            modeloCoordinacionObjetivo1 = validacionRecorrerChekeds($("#modeloCoordinacionObjetivo1"));
            modeloCoordinacionObjetivo2 = validacionRecorrerChekeds($("#modeloCoordinacionObjetivo2"));

            paqueteDeDatos.append('objetivo11Linea1Item1', modeloCoordinacionObjetivo1);
            paqueteDeDatos.append('objetivo11Linea1Item2', modeloCoordinacionObjetivo2);

            /*=====  End of Items Objetivo 11 Linea 1  ======*/

            /*================================================
            =            Items Objetivo 1 Linea 2            =
            ================================================*/

            implementacionMunicipiosColegiosObjetivo1 = validacionRecorrerChekeds($("#implementacionMunicipiosColegiosObjetivo1"));
            implementacionMunicipiosColegiosObjetivo2 = validacionRecorrerChekeds($("#implementacionMunicipiosColegiosObjetivo2"));
            implementacionMunicipiosColegiosObjetivo3 = validacionRecorrerChekeds($("#implementacionMunicipiosColegiosObjetivo3"));
            implementacionMunicipiosColegiosObjetivo4 = validacionRecorrerChekeds($("#implementacionMunicipiosColegiosObjetivo4"));

            paqueteDeDatos.append('objetivo1Linea2Item1', implementacionMunicipiosColegiosObjetivo1);
            paqueteDeDatos.append('objetivo1Linea2Item2', implementacionMunicipiosColegiosObjetivo2);
            paqueteDeDatos.append('objetivo1Linea2Item3', implementacionMunicipiosColegiosObjetivo3);
            paqueteDeDatos.append('objetivo1Linea2Item4', implementacionMunicipiosColegiosObjetivo4);

            /*=====  End of Items Objetivo 1 Linea 2  ======*/

            /*================================================
            =            Items Objetivo 2 Linea 2            =
            ================================================*/

            posicionarPaisObjetivo1 = validacionRecorrerChekeds($("#posicionarPaisObjetivo1"));
            posicionarPaisObjetivo2 = validacionRecorrerChekeds($("#posicionarPaisObjetivo2"));
            posicionarPaisObjetivo3 = validacionRecorrerChekeds($("#posicionarPaisObjetivo3"));

            paqueteDeDatos.append('objetivo2Linea2Item1', posicionarPaisObjetivo1);
            paqueteDeDatos.append('objetivo2Linea2Item2', posicionarPaisObjetivo2);
            paqueteDeDatos.append('objetivo2Linea2Item3', posicionarPaisObjetivo3);

            /*=====  End of Items Objetivo 2 Linea 2  ======*/


            /*================================================
            =            Items Objetivo 3 Linea 2            =
            ================================================*/

            practicaEducacionFisicaObjetivo1 = validacionRecorrerChekeds($("#practicaEducacionFisicaObjetivo1"));
            practicaEducacionFisicaObjetivo2 = validacionRecorrerChekeds($("#practicaEducacionFisicaObjetivo2"));
            practicaEducacionFisicaObjetivo3 = validacionRecorrerChekeds($("#practicaEducacionFisicaObjetivo3"));

            paqueteDeDatos.append('objetivo3Linea2Item1', practicaEducacionFisicaObjetivo1);
            paqueteDeDatos.append('objetivo3Linea2Item2', practicaEducacionFisicaObjetivo2);
            paqueteDeDatos.append('objetivo3Linea2Item3', practicaEducacionFisicaObjetivo3);

            /*=====  End of Items Objetivo 3 Linea 2  ======*/


            /*================================================
            =            Items Objetivo 4 Linea 2            =
            ================================================*/

            masificacionDefireObjetivo1 = validacionRecorrerChekeds($("#masificacionDefireObjetivo1"));
            masificacionDefireObjetivo2 = validacionRecorrerChekeds($("#masificacionDefireObjetivo2"));

            paqueteDeDatos.append('objetivo4Linea2Item1', masificacionDefireObjetivo1);
            paqueteDeDatos.append('objetivo4Linea2Item2', masificacionDefireObjetivo2);

            /*=====  End of Items Objetivo 4 Linea 2  ======*/


            /*================================================
            =            Items Objetivo 1 Linea 3            =
            ================================================*/

            significativamentePosicionesObjetivo1 = validacionRecorrerChekeds($("#significativamentePosicionesObjetivo1"));
            significativamentePosicionesObjetivo2 = validacionRecorrerChekeds($("#significativamentePosicionesObjetivo2"));
            significativamentePosicionesObjetivo3 = validacionRecorrerChekeds($("#significativamentePosicionesObjetivo3"));
            significativamentePosicionesObjetivo4 = validacionRecorrerChekeds($("#significativamentePosicionesObjetivo4"));
            significativamentePosicionesObjetivo5 = validacionRecorrerChekeds($("#significativamentePosicionesObjetivo5"));
            significativamentePosicionesObjetivo6 = validacionRecorrerChekeds($("#significativamentePosicionesObjetivo6"));

            paqueteDeDatos.append('objetivo1Linea3Item1', significativamentePosicionesObjetivo1);
            paqueteDeDatos.append('objetivo1Linea3Item2', significativamentePosicionesObjetivo2);
            paqueteDeDatos.append('objetivo1Linea3Item3', significativamentePosicionesObjetivo3);
            paqueteDeDatos.append('objetivo1Linea3Item4', significativamentePosicionesObjetivo4);
            paqueteDeDatos.append('objetivo1Linea3Item5', significativamentePosicionesObjetivo5);
            paqueteDeDatos.append('objetivo1Linea3Item6', significativamentePosicionesObjetivo6);

            /*=====  End of Items Objetivo 1 Linea 3  ======*/


            /*================================================
            =            Items Objetivo 2 Linea 3            =
            ================================================*/

            sistemaPreparacionNacionalObjetivo1 = validacionRecorrerChekeds($("#sistemaPreparacionNacionalObjetivo1"));
            sistemaPreparacionNacionalObjetivo2 = validacionRecorrerChekeds($("#sistemaPreparacionNacionalObjetivo2"));

            paqueteDeDatos.append('objetivo2Linea3Item1', sistemaPreparacionNacionalObjetivo1);
            paqueteDeDatos.append('objetivo2Linea3Item2', sistemaPreparacionNacionalObjetivo2);

            /*=====  End of Items Objetivo 2 Linea 3  ======*/


            /*================================================
            =            Items Objetivo 3 Linea 3            =
            ================================================*/

            incrementarPoblacionAtletasObjetivo1 = validacionRecorrerChekeds($("#incrementarPoblacionAtletasObjetivo1"));
            incrementarPoblacionAtletasObjetivo2 = validacionRecorrerChekeds($("#incrementarPoblacionAtletasObjetivo2"));
            incrementarPoblacionAtletasObjetivo3 = validacionRecorrerChekeds($("#incrementarPoblacionAtletasObjetivo3"));

            paqueteDeDatos.append('objetivo3Linea3Item1', incrementarPoblacionAtletasObjetivo1);
            paqueteDeDatos.append('objetivo3Linea3Item2', incrementarPoblacionAtletasObjetivo2);
            paqueteDeDatos.append('objetivo3Linea3Item3', incrementarPoblacionAtletasObjetivo3);

            /*=====  End of Items Objetivo 3 Linea 3  ======*/

            /*================================================
            =            Items Objetivo 4 Linea 3            =
            ================================================*/

            accionesDopajeObjetivo1 = validacionRecorrerChekeds($("#accionesDopajeObjetivo1"));
            accionesDopajeObjetivo2 = validacionRecorrerChekeds($("#accionesDopajeObjetivo2"));

            paqueteDeDatos.append('objetivo4Linea3Item1', accionesDopajeObjetivo1);
            paqueteDeDatos.append('objetivo4Linea3Item2', accionesDopajeObjetivo2);

            /*=====  End of Items Objetivo 4 Linea 3  ======*/

            /*================================================
            =            Items Objetivo 5 Linea 3            =
            ================================================*/

            sistemaPrenvencionObjetivo1 = validacionRecorrerChekeds($("#sistemaPrenvencionObjetivo1"));
            sistemaPrenvencionObjetivo2 = validacionRecorrerChekeds($("#sistemaPrenvencionObjetivo2"));

            paqueteDeDatos.append('objetivo5Linea3Item1', sistemaPrenvencionObjetivo1);
            paqueteDeDatos.append('objetivo5Linea3Item2', sistemaPrenvencionObjetivo2);

            /*=====  End of Items Objetivo 5 Linea 3  ======*/

            /*=========================================================
            =            Items Objetivo 1 Institucionales             =
            =========================================================*/

            incrementarFisicaSecretariaObjetivo1 = validacionRecorrerChekeds($("#incrementarFisicaSecretariaObjetivo1"));
            incrementarFisicaSecretariaObjetivo2 = validacionRecorrerChekeds($("#incrementarFisicaSecretariaObjetivo2"));
            incrementarFisicaSecretariaObjetivo3 = validacionRecorrerChekeds($("#incrementarFisicaSecretariaObjetivo3"));

            paqueteDeDatos.append('objetivo1Institucionaltem1', incrementarFisicaSecretariaObjetivo1);
            paqueteDeDatos.append('objetivo1Institucionaltem2', incrementarFisicaSecretariaObjetivo2);
            paqueteDeDatos.append('objetivo1Institucionaltem3', incrementarFisicaSecretariaObjetivo3);

            /*=====  End of Items Objetivo 1 Institucionales   ======*/


            /*=========================================================
            =            Items Objetivo 2 Institucionales             =
            =========================================================*/

            incrementarFisicaSecretariaObjetivo4 = validacionRecorrerChekeds($("#incrementarFisicaSecretariaObjetivo4"));
            incrementarFisicaSecretariaObjetivo5 = validacionRecorrerChekeds($("#incrementarFisicaSecretariaObjetivo5"));
            incrementarFisicaSecretariaObjetivo6 = validacionRecorrerChekeds($("#incrementarFisicaSecretariaObjetivo6"));

            paqueteDeDatos.append('objetivo2Institucionaltem1', incrementarFisicaSecretariaObjetivo4);
            paqueteDeDatos.append('objetivo2Institucionaltem2', incrementarFisicaSecretariaObjetivo5);
            paqueteDeDatos.append('objetivo2Institucionaltem3', incrementarFisicaSecretariaObjetivo6);

            /*=====  End of Items Objetivo 2 Institucionales   ======*/

            /*==============================
            =            Código            =
            ==============================*/

            paqueteDeDatos.append('codigo', $('#codigoProyecto').prop('value'));

            /*=====  End of Código  ======*/


            /*====================================
            =            Enviar datos            =
            ====================================*/

            var destino = "modelosBd/inserta/insertaAlineacion.md.php";

            $.ajax({

                url: destino,
                type: 'POST',
                contentType: false,
                data: paqueteDeDatos,
                processData: false,
                cache: false,

                success: function(response) {


                    alertify.set("notifier", "position", "top-right");
                    alertify.notify("Datos ingresados correctamente", "success", 5, function() {});

                    $('.enviarDatosGenerales__reload').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

                    window.setTimeout(function() {
                        window.location = "datosGenerales";
                    }, 4000);


                },

                error: function() {
                    alert("Algo ha fallado.");
                }

            });

            /*=====  End of Enviar datos  ======*/



        }

    });

    /*=====  End of Alineación estratégica  ======*/


    /*=================================================
    =            Análisis situación acutal            =
    =================================================*/

    $('#enviarDatosSituacionActual').click(function(e) {

        $(this).hide();

        validador = validacionRegistro($(".obligatorio__elementos"));
        validacionRegistroMostrarErrores($(".obligatorio__elementos"));

        validador2 = valoresMinimos($(".longitud__minima__grupal"));


        if (validador == false) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Campos obligatorios", "error", 5, function() {});

            $(this).show();

        } else if (($(".tabla__objetivo__especifico").length == 0 || $(".tabla__objetivo__especifico").length == 1) && ($(".tabla__objetivo__especifico__editar").length == 0 || $(".tabla__objetivo__especifico__editar").length == 1)) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Debe generar mínimo 2 objetivos específicos", "error", 5, function() {});

            $(this).show();

        } else if (validador2 == false) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Fijarse en las palabras mínimas requeridas", "error", 5, function() {});

            $(this).show();

        } else {

            var paqueteDeDatos = new FormData();

            paqueteDeDatos.append('codigoProyecto', $('#codigoProyecto').prop('value'));
            paqueteDeDatos.append('analisisSituacionActual', $('#analisisSituacionActual').prop('value'));
            paqueteDeDatos.append('justificacionCaracterizacion', $('#justificacionCaracterizacion').prop('value'));
            paqueteDeDatos.append('objetivoGeneralCaracterizacion', $('#objetivoGeneralCaracterizacion').prop('value'));

            var obligatorio__elementos = concatenarValores($(".especificos__grupales"));

            paqueteDeDatos.append('obligatorio__elementos', JSON.stringify(obligatorio__elementos));

            /*====================================
            =            Enviar datos            =
            ====================================*/

            var destino = "modelosBd/inserta/isertaJustificacion.md.php";

            $.ajax({

                url: destino,
                type: 'POST',
                contentType: false,
                data: paqueteDeDatos,
                processData: false,
                cache: false,

                success: function(response) {

                    var elementos = JSON.parse(response);
                    var mensaje = elementos['mensaje'];

                    if (mensaje == 1) {

                        alertify.set("notifier", "position", "top-right");
                        alertify.notify("Datos ingresados correctamente", "success", 5, function() {});

                        $('.enviarDatosGenerales__reload').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

                        window.setTimeout(function() {
                            window.location = "datosGenerales";
                        }, 4000);

                    }


                },

                error: function() {
                    alert("Algo ha fallado.");
                }

            });

            /*=====  End of Enviar datos  ======*/



        }

    });

    /*=====  End of Análisis situación acutal  ======*/



    /*====================================
    =            Bses legales            =
    ====================================*/

    $('#enviarBasesLegales').click(function(e) {

        $(this).hide();

        validador = validacionRegistro($(".obligatorios__legales"));
        validacionRegistroMostrarErrores($(".obligatorios__legales"));

        validador2 = valoresMinimos($(".error__conjuntos__bases__legales"));


        if ($(".tabla__legal").length == 0) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Es obligatorio generar por lo menos una base legal para poder continuar", "error", 5, function() {});

            $(this).show();

        } else if (validador == false) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Campos obligatorios", "error", 5, function() {});

            $(this).show();


        } else if (validador2 == false) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Fijarse en las palabras mínimas requeridas", "error", 5, function() {});

            $(this).show();

        } else {

            var paqueteDeDatos = new FormData();

            paqueteDeDatos.append('codigoProyecto', $('#codigoProyecto').prop('value'));

            var nombre__legales = concatenarValores($(".nombre__legales"));
            var justificacion__legales = concatenarValores($(".justificacion__legales"));

            paqueteDeDatos.append('nombre__legales', JSON.stringify(nombre__legales));
            paqueteDeDatos.append('justificacion__legales', JSON.stringify(justificacion__legales));

            /*====================================
            =            Enviar datos            =
            ====================================*/

            var destino = "modelosBd/inserta/insertaBaseLegal.md.php";

            $.ajax({

                url: destino,
                type: 'POST',
                contentType: false,
                data: paqueteDeDatos,
                processData: false,
                cache: false,

                success: function(response) {

                    var elementos = JSON.parse(response);
                    var mensaje = elementos['mensaje'];

                    if (mensaje == 1) {

                        alertify.set("notifier", "position", "top-right");
                        alertify.notify("Datos ingresados correctamente", "success", 5, function() {});

                        $('.enviarDatosGenerales__reload').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

                        window.setTimeout(function() {
                            window.location = "datosGenerales";
                        }, 4000);

                    }


                },

                error: function() {
                    alert("Algo ha fallado.");
                }

            });

            /*=====  End of Enviar datos  ======*/

        }

    });

    /*=====  End of Bses legales  ======*/


    /*=================================================
    =            Guardar Proyecto Separado            =
    =================================================*/

    $('#enviarProyectosUnitarios').click(function(e) {

        $(this).hide();

        validador = validacionRegistro($(".obligatorios__proyectosUnitarios"));
        validacionRegistroMostrarErrores($(".obligatorios__proyectosUnitarios"));

        validador2 = validacionRegistro($(".paisTipo"));
        validacionRegistroMostrarErrores($(".paisTipo"));

        validador3 = validacionRegistro($(".paisTipoInter"));
        validacionRegistroMostrarErrores($(".paisTipoInter"));

        validador4 = validacionRegistro($(".provinciaUbicacion"));
        validacionRegistroMostrarErrores($(".provinciaUbicacion"));

        validador5 = validacionRegistro($(".cantonMultiples"));
        validacionRegistroMostrarErrores($(".cantonMultiples"));

        validador6 = validacionRegistro($(".parroquiaMultiples"));
        validacionRegistroMostrarErrores($(".parroquiaMultiples"));

        validador7 = validacionRegistro($(".ubicacion"));
        validacionRegistroMostrarErrores($(".ubicacion"));

        validador8 = validacionRegistro($(".ubicacionInter"));
        validacionRegistroMostrarErrores($(".ubicacionInter"));

        validador9 = validacionRegistro($(".estado"));
        validacionRegistroMostrarErrores($(".estado"));

        validador10 = validacionRegistro($(".sector"));
        validacionRegistroMostrarErrores($(".sector"));

        validador11 = validacionRegistro($(".comunidad"));
        validacionRegistroMostrarErrores($(".comunidad"));

        validador12 = validacionRegistro($(".tipoUbicacion"));
        validacionRegistroMostrarErrores($(".tipoUbicacion"));

        validadorChekedsGrupales = validacionRegistroChecks($(".checks__grupales__validas"));


        if ($(".fila__paises__grupales").length == 0 && $(".tablas__editadas").length == 0) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Es necesario añadir una ubicación geográfica donde se ejecutará el proyecto", "error", 5, function() {});

            $(this).show();

        } else if (validadorChekedsGrupales == false) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Debe seleccionar por lo menos un sector al que contribuye su proyecto obligatoriamente", "error", 5, function() {});

            $(this).show();

        } else if (validador == false || validador2 == false || validador3 == false || validador4 == false || validador5 == false || validador6 == false || validador7 == false || validador8 == false || validador9 == false || validador10 == false || validador11 == false || validador12 == false) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Campos obligatorios", "error", 5, function() {});

            $(this).show();


        } else {

            var paqueteDeDatos = new FormData();

            paqueteDeDatos.append('codigoProyecto', $('#codigoProyecto').prop('value'));

            paqueteDeDatos.append('nombreProyecto', $('#nombreProyecto').prop('value'));
            paqueteDeDatos.append('presupuestoLetras', $('#presupuestoLetras').prop('value'));
            paqueteDeDatos.append('presupuesto', $('#presupuesto').prop('value'));

            /*=============================================
            =            Recorrer los checkeds            =
            =============================================*/

            sectorRecreacion = validacionRecorrerChekeds($("#sectorRecreacion"));
            sectorDeporteFormativo = validacionRecorrerChekeds($("#sectorDeporteFormativo"));
            sectorDeporteConvencional = validacionRecorrerChekeds($("#sectorDeporteConvencional"));
            sectorDeporteAltoRendimiento = validacionRecorrerChekeds($("#sectorDeporteAltoRendimiento"));
            sectorDeporteProfesional = validacionRecorrerChekeds($("#sectorDeporteProfesional"));

            paqueteDeDatos.append('sectorRecreacion', sectorRecreacion);
            paqueteDeDatos.append('sectorDeporteFormativo', sectorDeporteFormativo);
            paqueteDeDatos.append('sectorDeporteConvencional', sectorDeporteConvencional);
            paqueteDeDatos.append('sectorDeporteAltoRendimiento', sectorDeporteAltoRendimiento);
            paqueteDeDatos.append('sectorDeporteProfesional', sectorDeporteProfesional);

            /*=====  End of Recorrer los checkeds  ======*/

            /*=============================================
            =            Llamar arrays strings            =
            =============================================*/

            var paisTipo = concatenarValores($(".paisTipo"));
            var paisTipoInter = concatenarValores($(".paisTipoInter"));
            var provinciaUbicacion = concatenarValores($(".provinciaUbicacion"));
            var cantonMultiples = concatenarValores($(".cantonMultiples"));
            var parroquiaMultiples = concatenarValores($(".parroquiaMultiples"));
            var ubicacion = concatenarValores($(".ubicacion"));
            var ubicacionInter = concatenarValores($(".ubicacionInter"));
            var estado = concatenarValores($(".estado"));
            var sector = concatenarValores($(".sector"));
            var comunidad = concatenarValores($(".comunidad"));
            var tipoUbicacion = concatenarValores($(".tipoUbicacion"));

            paqueteDeDatos.append('paisTipo', JSON.stringify(paisTipo));
            paqueteDeDatos.append('paisTipoInter', JSON.stringify(paisTipoInter));
            paqueteDeDatos.append('provinciaUbicacion', JSON.stringify(provinciaUbicacion));
            paqueteDeDatos.append('cantonMultiples', JSON.stringify(cantonMultiples));
            paqueteDeDatos.append('parroquiaMultiples', JSON.stringify(parroquiaMultiples));
            paqueteDeDatos.append('ubicacion', JSON.stringify(ubicacion));
            paqueteDeDatos.append('ubicacionInter', JSON.stringify(ubicacionInter));
            paqueteDeDatos.append('estado', JSON.stringify(estado));
            paqueteDeDatos.append('sector', JSON.stringify(sector));
            paqueteDeDatos.append('comunidad', JSON.stringify(comunidad));
            paqueteDeDatos.append('tipoUbicacion', JSON.stringify(tipoUbicacion));

            /*=====  End of Llamar arrays strings  ======*/

            /*======================================
            =            Enviar valores            =
            ======================================*/

            var destino = "modelosBd/inserta/insertaProyectoUnitarios.md.php";

            $.ajax({

                url: destino,
                type: 'POST',
                contentType: false,
                data: paqueteDeDatos,
                processData: false,
                cache: false,

                success: function(response) {

                    var elementos = JSON.parse(response);
                    var mensaje = elementos['mensaje'];

                    if (mensaje == 1) {

                        alertify.set("notifier", "position", "top-right");
                        alertify.notify("Datos ingresados correctamente", "success", 5, function() {});

                        $('.enviarDatosGenerales__reload').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

                        window.setTimeout(function() {
                            window.location = "datosGenerales";
                        }, 4000);

                    }


                },

                error: function() {
                    alert("Algo ha fallado.");
                }

            });

            /*=====  End of Enviar valores  ======*/


        }

    });


    /*=====  End of Guardar Proyecto Separado  ======*/


    /*============================================================
    =            Registrar formulario datos generales            =
    ============================================================*/

    $('#enviarDatosGenerales').click(function(e) {

        $(this).hide();

        validador = validacionRegistro($(".obligatorios__datosGenerales"));
        validacionRegistroMostrarErrores($(".obligatorios__datosGenerales"));

        if (validador == false) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Campos obligatorios", "error", 5, function() {});

            $(this).show();

        } else {
            $.ajax({
                type: "POST",
                url: "modelosBd/inserta/insertaDatosGeneralesProyecto.php",
                data: $("#datosGeneralesFormularios").serialize(),
                processData: false,
                cache: false,
                success: function(response) {
                    var elementos = JSON.parse(response);
                    var mensaje = elementos['mensaje'];
                    if (mensaje == 1) {

                        alertify.set("notifier", "position", "top-right");
                        alertify.notify("Datos ingresados correctamente", "success", 5, function() {});

                        $('.enviarDatosGenerales__reload').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

                        window.setTimeout(function() {
                            window.location = "datosGenerales";
                        }, 4000);
                    }
                },
                error: function() {
                    alertify.set("notifier", "position", "top-right");
                    alertify.notify("Datos no ingresados error de conexión", "error", 2, function() {});
                    location.reload();
                }
            });

        }

    });

    /*=====  End of Registrar formulario datos generales  ======*/


    /*========================================
    =            Guardar proyecto            =
    ========================================*/

    $('#enviarProyecto').on('click', function(e) {


        $("#enviarProyecto").hide();

        var paqueteDeDatos = new FormData();

        validador = validacionRegistro($(".obligatorios"));
        validacionRegistroMostrarErrores($(".obligatorios"));

        validador2 = validacionRegistro($(".obligatorios__dos"));
        validacionRegistroMostrarErrores($(".obligatorios__dos"));


        var certificadoFederaciones = $('input:radio[name=certificadoFederaciones]:checked').val();
        var rechazoPorque = $('input:radio[name=rechazoPorque]:checked').val();
        var avales = $('input:radio[name=avales]:checked').val();
        var rechazoPorqueAval = $('input:radio[name=rechazoPorqueAval]:checked').val();

        var siRespuestas = $("#checkboxRelacionado").is(":checked");

        var condicion = $("#checkboxProyecto2020").is(":checked");

        var variableComparador = "";

        if (condicion) {

            variableComparador = "si";

        } else {

            variableComparador = "";

        }


        if ($("#curriculumDeportivoSegundo").length > 0 && $('#curriculumDeportivoSegundo')[0].files[0] == undefined && variableComparador != "si") {


            alertify.set("notifier", "position", "top-right");
            alertify.notify("Obligatorio cargar el curriculum deportivo", "error", 5, function() {});

            $("#enviarProyecto").show();


        } else if ($("input:radio[name=certificadoFederaciones]").length > 0 && certificadoFederaciones == undefined && variableComparador != "si") {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Obligatorio escoger si posee o no certificado", "error", 5, function() {});

            $("#enviarProyecto").show();

        } else if ($("input:radio[name=certificadoFederaciones]").length > 0 && certificadoFederaciones == "si" && $('#certificadoFederacion')[0].files[0] == undefined && variableComparador != "si") {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Obligatorio cargar el certificado de la federación", "error", 5, function() {});

            $("#enviarProyecto").show();

        } else if ($("input:radio[name=certificadoFederaciones]").length > 0 && certificadoFederaciones == "no" && rechazoPorque == undefined && variableComparador != "si") {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Obligatorio escoger el porque no tiene certificado", "error", 5, function() {});

            $("#enviarProyecto").show();

        } else if ($("input:radio[name=certificadoFederaciones]").length > 0 && certificadoFederaciones == "no" && rechazoPorque == "si" && $('#certificadoOrganismoSuperior')[0].files[0] == undefined && variableComparador != "si") {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Es obligatorio cargar la certificación del organismo superior", "error", 5, function() {});

            $("#enviarProyecto").show();


        } else if ($("input:radio[name=certificadoFederaciones]").length > 0 && certificadoFederaciones == "no" && rechazoPorque == "no" && $('#solicitudFederacion')[0].files[0] == undefined && variableComparador != "si") {


            alertify.set("notifier", "position", "top-right");
            alertify.notify("Es obligatorio cargar la solicitud de certificación realizada a la federación", "error", 5, function() {});

            $("#enviarProyecto").show();


        } else if ($("input:radio[name=avales]").length > 0 && avales == undefined && variableComparador != "si") {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Obligatorio escoger si posee o no aval", "error", 5, function() {});

            $("#enviarProyecto").show();

        } else if ($("input:radio[name=avales]").length > 0 && avales == "si" && $('#avalFederacion')[0].files[0] == undefined && variableComparador != "si") {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Es obligatorio cargar el aval del organismo superior", "error", 5, function() {});

            $("#enviarProyecto").show();

        } else if ($("input:radio[name=avales]").length > 0 && avales == "no" && rechazoPorqueAval == undefined && variableComparador != "si") {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Obligatorio escoger el porque no tiene aval", "error", 5, function() {});

            $("#enviarProyecto").show();

        } else if ($("input:radio[name=avales]").length > 0 && avales == "no" && rechazoPorqueAval == "si" && $('#solciitudAval')[0].files[0] == undefined && variableComparador != "si") {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Es obligatorio cargar la solicitud del aval", "error", 5, function() {});

            $("#enviarProyecto").show();

        } else if ($("input:radio[name=avales]").length > 0 && avales == "no" && rechazoPorqueAval == "no" && $('#avalOrganismoSuperior')[0].files[0] == undefined && variableComparador != "si") {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Es obligatorio cargar el aval del organismo superior", "error", 5, function() {});

            $("#enviarProyecto").show();

        } else if (validador2 == false && variableComparador != "si") {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Campos obligatorios", "error", 5, function() {});

            $("#enviarProyecto").show();

        } else if (validador == false) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Campos obligatorios", "error", 5, function() {});

            $("#enviarProyecto").show();


        } else if ($('#proyectoCargado')[0].files[0] == undefined) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Carga del proyecto obligatoria", "error", 5, function() {});

            $("#enviarProyecto").show();

        } else {

            $('.imagen__reload').html('<img src="images/reloadGit.webp" style="width:50px; height:50px;">');


            paqueteDeDatos.append('idRoles', $('#idRoles').prop('value'));
            paqueteDeDatos.append('idUsuario', $('#idUsuario').prop('value'));
            paqueteDeDatos.append('codigoUsuarios', $('#codigoUsuarios').prop('value'));
            paqueteDeDatos.append('nombreProyecto', $('#nombreProyecto').prop('value'));
            paqueteDeDatos.append('monto', $('#monto').prop('value'));
            paqueteDeDatos.append('alcanse', $('#alcanse').prop('value'));


            if (siRespuestas) {

                paqueteDeDatos.append('siRespuestas', 'si');

            } else {

                paqueteDeDatos.append('siRespuestas', 'no');

            }

            if (variableComparador == "si") {

                paqueteDeDatos.append('contratoCargado', $('#contratoCargado')[0].files[0]);

                paqueteDeDatos.append('contratoCargadoCheck', 'si');

            } else {

                paqueteDeDatos.append('contratoCargado', "no");

                paqueteDeDatos.append('contratoCargadoCheck', 'no');

            }


            if ($('#proyectoCargado')[0].files[0] != undefined) {

                paqueteDeDatos.append('proyectoCargado', $('#proyectoCargado')[0].files[0]);

            } else {

                paqueteDeDatos.append('proyectoCargado', 'no');

            }


            if ($("#tipoDeportistas").val() == "noFederado" || $("#tipoDeportistas").val() == "recreativo") {

                if ($('#curriculumDeportivoSegundo')[0].files[0] != undefined) {

                    paqueteDeDatos.append('curriculumDeportivoSegundo', $('#curriculumDeportivoSegundo')[0].files[0]);

                } else {

                    paqueteDeDatos.append('curriculumDeportivoSegundo', 'no');

                }

            }


            paqueteDeDatos.append('certificadoFederaciones', certificadoFederaciones);


            if ($('#certificadoFederacion')[0].files[0] != undefined) {

                paqueteDeDatos.append('certificadoFederacion', $('#certificadoFederacion')[0].files[0]);

            } else {

                paqueteDeDatos.append('certificadoFederacion', 'no');

            }

            paqueteDeDatos.append('rechazoPorque', rechazoPorque);


            if ($('#certificadoOrganismoSuperior')[0].files[0] != undefined) {

                paqueteDeDatos.append('certificadoOrganismoSuperior', $('#certificadoOrganismoSuperior')[0].files[0]);

            } else {

                paqueteDeDatos.append('certificadoOrganismoSuperior', 'no');

            }

            if ($('#solicitudFederacion')[0].files[0] != undefined) {

                paqueteDeDatos.append('solicitudFederacion', $('#solicitudFederacion')[0].files[0]);

            } else {

                paqueteDeDatos.append('solicitudFederacion', 'no');

            }


            paqueteDeDatos.append('avales', avales);


            if ($('#avalFederacion')[0].files[0] != undefined) {

                paqueteDeDatos.append('avalFederacion', $('#avalFederacion')[0].files[0]);

            } else {

                paqueteDeDatos.append('avalFederacion', 'no');

            }

            paqueteDeDatos.append('rechazoPorqueAval', rechazoPorqueAval);


            if ($('#solciitudAval')[0].files[0] != undefined) {

                paqueteDeDatos.append('solciitudAval', $('#solciitudAval')[0].files[0]);

            } else {

                paqueteDeDatos.append('solciitudAval', 'no');

            }



            if ($('#avalOrganismoSuperior')[0].files[0] != undefined) {

                paqueteDeDatos.append('avalOrganismoSuperior', $('#avalOrganismoSuperior')[0].files[0]);

            } else {

                paqueteDeDatos.append('avalOrganismoSuperior', 'no');

            }



            if ($("#tipoOrganismoNoFederado").length > 0) {

                var tipoOrganismoNoFederado = $("#tipoOrganismoNoFederado").val();

                paqueteDeDatos.append('tipoDeportistas', tipoOrganismoNoFederado);

            } else {

                paqueteDeDatos.append('tipoDeportistas', $('#tipoDeportistas').prop('value'));

            }

            var destino = "modelosBd/inserta/insertaProyecto.md.php";

            $.ajax({

                url: destino,
                type: 'POST',
                contentType: false,
                data: paqueteDeDatos,
                processData: false,
                cache: false,

                success: function(response) {

                    var elementos = JSON.parse(response);
                    var mensaje = elementos['mensaje'];

                    if (mensaje == 1) {

                        alertify.set("notifier", "position", "top-right");
                        alertify.notify("Datos ingresados correctamente", "success", 1, function() {});

                        window.setTimeout(function() {
                            window.location = "proyectosUsuarios";
                        }, 3000);

                        $('.imagen__reload').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

                    }


                    if (mensaje == 2) {

                        alertify.set("notifier", "position", "top-right");
                        alertify.notify("Solo se aceptan documentos pdf", "error", 5, function() {});

                        $("#enviarProyecto").show();

                        $('.imagen__reload').html('');

                    }

                    if (mensaje == 3) {

                        alertify.set("notifier", "position", "top-right");
                        alertify.notify("Ya existe otro proyecto con el mismo nombre para este usuario", "error", 5, function() {});

                        $("#enviarProyecto").show();

                        $('.imagen__reload').html('');

                    }


                },

                error: function() {
                    alert("Algo ha fallado.");
                }

            });


        }


    });

    /*=====  End of Guardar proyecto  ======*/



    /*===========================================
    =            Registro de Usuario            =
    ===========================================*/

    $('#registro').on('click', function(e) {

        var validador = "";
        var validador2 = "";
        var validadorDocumentos = "";

        var paqueteDeDatos = new FormData();

        if ($("#entidad").val() == "organismo") {

            validador = validacionRegistro($(".obligatorio__organismo"));
            validacionRegistroMostrarErrores($(".obligatorio__organismo"));

        } else if ($("#entidad").val() == "ciudadano") {

            validador = validacionRegistro($(".obligatorio__usuario"));
            validacionRegistroMostrarErrores($(".obligatorio__usuario"));

        }

        var terminosCondicionesChecked = $(".terminosCondicionesChecked").is(":checked");

        if (!terminosCondicionesChecked) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Es necesario aceptar los terminos y condiciones", "error", 5, function() {});

        } else if (validador == false) {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Datos obligatorios", "error", 5, function() {});

        } else {

            $("#registro").hide();

            $(".git__registro").html('<img src="images/reloadGit.webp" style="height:35px; margin-left: .5em; border-radius: .5em; cursor: pointer;">');

            if ($("#entidad").val() == "organismo") {


                /*====================================
                =            Llamar datos            =
                ====================================*/

                paqueteDeDatos.append('entidad', $('#entidad').prop('value'));

                paqueteDeDatos.append('tipoOrganismo', $('#tipoOrganismo').prop('value'));

                paqueteDeDatos.append('nombreOrganismo', $('#nombreOrganismo').prop('value'));

                paqueteDeDatos.append('provinciaFederacion', $('#provinciaFederacion').prop('value'));

                paqueteDeDatos.append('rucOrganismo', $('#rucOrganismo').prop('value'));

                paqueteDeDatos.append('provinciaFederacion', $('#provinciaFederacion').prop('value'));

                paqueteDeDatos.append('cantonFederacion', $('#cantonFederacion').prop('value'));

                paqueteDeDatos.append('parroquiaFederacion', $('#parroquiaFederacion').prop('value'));

                paqueteDeDatos.append('telefono', $('#telefono').prop('value'));

                paqueteDeDatos.append('direccion', $('#direccion').prop('value'));

                paqueteDeDatos.append('email', $('#email').prop('value'));

                paqueteDeDatos.append('representanteLegalCedula', $('#representanteLegalCedula').prop('value'));

                paqueteDeDatos.append('representanteLegal', $('#representanteLegal').prop('value'));


                /*=====  End of Llamar datos  ======*/


            } else if ($("#entidad").val() == "ciudadano") {


                /*========================================
                =            Llamar los datos            =
                ========================================*/


                paqueteDeDatos.append('entidad', $('#entidad').prop('value'));

                paqueteDeDatos.append('tipoAtleta', $('#tipoAtleta').prop('value'));

                paqueteDeDatos.append('cedulaUsuario', $('#cedulaUsuario').prop('value'));

                paqueteDeDatos.append('nombreCompleto', $('#nombreCompleto').prop('value'));

                paqueteDeDatos.append('fechaNacimiento', $('#fechaNacimiento').prop('value'));

                paqueteDeDatos.append('sexo', $('#sexo').prop('value'));

                paqueteDeDatos.append('provincia', $('#provincia').prop('value'));

                paqueteDeDatos.append('canton', $('#canton').prop('value'));

                paqueteDeDatos.append('parroquia', $('#parroquia').prop('value'));

                paqueteDeDatos.append('telefono', $('#telefono2').prop('value'));

                paqueteDeDatos.append('direccion', $('#direccion2').prop('value'));

                paqueteDeDatos.append('email', $('#email2').prop('value'));

                paqueteDeDatos.append('rucOrganismoDeportista', $('#rucOrganismoDeportista').prop('value'));

                paqueteDeDatos.append('nombreOrganismoDeportista', $('#nombreOrganismoDeportista').prop('value'));

                paqueteDeDatos.append('porqueCertificado', $('#porqueCertificado').prop('value'));


                /*=====  End of Llamar los datos  ======*/


            }

            var destino = "modelosBd/inserta/usuario.md.php";

            $.ajax({

                type: "POST",
                url: destino,
                type: 'POST',
                contentType: false,
                data: paqueteDeDatos,
                processData: false,
                cache: false,

                success: function(response) {

                    var elementos = JSON.parse(response);
                    var mensaje = elementos['mensaje'];

                    if (mensaje == 1) {

                        alertify.set("notifier", "position", "top-right");
                        alertify.notify("Datos ingresados correctamente", "success", 2, function() {});

                        $('#modalRegistro').modal('show');

                        $(".git__registro").html('');


                    } else if (mensaje == 2) {

                        alertify.set("notifier", "position", "top-right");
                        alertify.notify("Ruc o cédula ya fueron ingresados previamente, favor verificar", "error", 4, function() {});

                        $("#registro").show();

                        $(".validacion__texto").text("GENERACIÓN DE CREDENCIALES (REVISAR EL CORREO CON EL CÒDIGO DE ACTIVACIÒN DE USUARIO)");

                        $(".git__registro").html('');

                    } else {

                        $("#registro").show();

                    }


                }

            });


        }

    });

    /*=====  End of Registro de Usuario  ======*/

    /*==========================================
    =            Generar Contraseña            =
    ==========================================*/

    $('#generarContrasena').on('click', function(e) {

        var paqueteDeDatos = new FormData();

        $("#generarContrasena").hide();

        if ($("#passwordGenerados").val() == "") {

            alertify.set("notifier", "position", "top-right");
            alertify.notify("Contraseña es obligatoria", "error", 4, function() {});

            $("#generarContrasena").show();

        } else {

            paqueteDeDatos.append('contrasenasGeneradas', $('#contrasenasGeneradas').prop('value'));

            paqueteDeDatos.append('passwordGenerados', $('#passwordGenerados').prop('value'));

            var destino = "modelosBd/validaciones/actualizaContrasena.modelo.php";

            $.ajax({

                type: "POST",
                url: destino,
                type: 'POST',
                contentType: false,
                data: paqueteDeDatos,
                processData: false,
                cache: false,

                success: function(response) {

                    var elementos = JSON.parse(response);
                    var mensaje = elementos['mensaje'];

                    if (mensaje == 1) {

                        alertify.set("notifier", "position", "top-right");
                        alertify.notify("Contraseña Actualizada", "success", 3, function() {});

                        window.setTimeout(function() {
                            window.location = "ingreso";
                        }, 3000);

                    }


                }

            });

        }


    });

    /*=====  End of Generar Contraseña  ======*/



});