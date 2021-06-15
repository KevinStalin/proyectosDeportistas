$(document).ready(function() {


    /*=======================================
    =            Tabla ubicación            =
    =======================================*/

    var ubicacionGeograficaEdita = function(parametro1, parametro2) {

        var paqueteDeDatos = new FormData();

        var codigoProyecto = $(parametro1).val();

        paqueteDeDatos.append('codigoProyecto', codigoProyecto);

        var destino = "modelosBd/selector/selectorProyectoNacionalInternacional.md.php";

        $.ajax({

            url: destino,
            type: 'POST',
            contentType: false,
            data: paqueteDeDatos,
            processData: false,
            cache: false,

            success: function(response) {

                var elementos = JSON.parse(response);

                var stringidProyectoUnitario = elementos['stringidProyectoUnitario'];
                var stringpaisTipo = elementos['stringpaisTipo'];
                var stringprovinciaUbicacion = elementos['stringprovinciaUbicacion'];
                var stringcantonMultiples = elementos['stringcantonMultiples'];
                var stringparroquiaMultiples = elementos['stringparroquiaMultiples'];
                var stringubicacion = elementos['stringubicacion'];
                var stringidProyectoUnitarioInternacional = elementos['stringidProyectoUnitarioInternacional'];
                var stringpaisTipoInterna = elementos['stringpaisTipoInterna'];
                var stringestado = elementos['stringestado'];
                var stringsector = elementos['stringsector'];
                var stringcomunidad = elementos['stringcomunidad'];
                var stringubicacionInter = elementos['stringubicacionInter'];

                if (stringidProyectoUnitario != "") {

                    var arraystringidProyectoUnitario = stringidProyectoUnitario.split('------');
                    var arraystringpaisTipo = stringpaisTipo.split('------');
                    var arraystringprovinciaUbicacion = stringprovinciaUbicacion.split('------');
                    var arraystringcantonMultiples = stringcantonMultiples.split('------');
                    var arraystringstringparroquiaMultiples = stringparroquiaMultiples.split('------');
                    var arraystringstringubicacion = stringubicacion.split('------');

                    for (var i = 0; i < arraystringidProyectoUnitario.length; i++) {

                        $(".ubicaciones__geograficas__editar").append('<table class="tabla__nacional' + i + ' tablas__editadas" border="4"><tr><th style="padding:.5em;"><center>UBICACIÓN NACIONAL</center></th><th style="width:70%;"><center><button style="padding:.5em; text-align:center; background:#b71c1c; color:white" id="eliminarEditados' + i + '" idContador="' + i + '" idFila="' + arraystringidProyectoUnitario[i] + '">ELIMINAR</button></center></th></tr><tr class="filas__cargadas" style="padding:.5em;"><td style="padding:.5em;"><center>País</center></td><td style="padding:.5em; width:70%;"><center>' + arraystringpaisTipo[i] + '</center></td></tr><tr style="padding:.5em;"><td style="padding:.5em;"><center>Provincia</center></td><td style="padding:.5em; width:70%;"><center>' + arraystringprovinciaUbicacion[i] + '</center></td></tr><tr style="padding:.5em;"><td style="padding:.5em;"><center>Cantón</center></td><td style="padding:.5em; width:70%;"><center>' + arraystringcantonMultiples[i] + '</center></td></tr><tr style="padding:.5em;"><td style="padding:.5em;"><center>Parroquia</center></td><td style="padding:.5em; width:70%;"><center>' + arraystringstringparroquiaMultiples[i] + '</center></td></tr><tr style="padding:.5em;"><td style="padding:.5em;"><center>Ubicación específica (Nombre del coliseo, estadio, otros, si aplica)</center></td><td style="padding:.5em; width:70%;"><center>' + arraystringstringubicacion[i] + '</center></td></tr><table>');

                        /*=====================================
                        =            Eliminar Fila           =
                        =====================================*/

                        $("#eliminarEditados" + i).click(function(e) {

                            var idContador = $(this).attr('idContador');
                            var idFila = $(this).attr('idFila');

                            var confirm = alertify.confirm('', '¿Está seguro de eliminar la ubicación ya ingresada?', null, null).set('labels', { ok: 'Confirmar', cancel: 'Cancelar' });

                            confirm.set({ transition: 'slide' });

                            confirm.set('onok', function() { //callbak al pulsar botón positivo

                                $(".tabla__nacional" + idContador).remove();

                                var paqueteDeDatos = new FormData();

                                paqueteDeDatos.append('idFila', idFila);

                                var destino = "modelosBd/elimina/eliminarNacional.php";

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
                                            alertify.notify("Datos eliminados correctamente", "success", 5, function() {});

                                        }


                                    },

                                    error: function() {
                                        alert("Algo ha fallado.");
                                    }

                                });

                            });

                            confirm.set('oncancel', function() { //callbak al pulsar botón negativo
                                alertify.set("notifier", "position", "top-right");
                                alertify.notify("Canceló la eliminación", "success", 5, function() {});
                            });

                        });

                        /*=====  End of Eliminar Fila  ======*/


                    }

                }


                if (stringidProyectoUnitarioInternacional != "") {


                    var arraystringstringidProyectoUnitarioInternacional = stringidProyectoUnitarioInternacional.split('------');
                    var arraystringpaisTipoInterna = stringpaisTipoInterna.split('------');
                    var arraystringestado = stringestado.split('------');
                    var arraystringsector = stringsector.split('------');
                    var arraystringcomunidad = stringcomunidad.split('------');
                    var arraystringubicacionInter = stringubicacionInter.split('------');

                    for (var i = 0; i < arraystringstringidProyectoUnitarioInternacional.length; i++) {

                        $(".ubicaciones__geograficas__editar").append('<table class="tabla__internacional' + i + ' tablas__editadas" border="4"><tr><th style="padding:.5em;"><center>UBICACIÓN INTERNACIONAL</center></th><th style="width:70%;"><center><button style="padding:.5em; text-align:center; background:#b71c1c; color:white" id="eliminarEditadosInter' + i + '" idContador="' + i + '" idFila="' + arraystringstringidProyectoUnitarioInternacional[i] + '">ELIMINAR</button></center></th></tr><tr class="filas__cargadas" style="padding:.5em;"><td style="padding:.5em;"><center>País</center></td><td style="padding:.5em; width:70%;"><center>' + arraystringpaisTipoInterna[i] + '</center></td></tr><tr style="padding:.5em;"><td style="padding:.5em;"><center>Estado</center></td><td style="padding:.5em; width:70%;"><center>' + arraystringestado[i] + '</center></td></tr><tr style="padding:.5em;"><td style="padding:.5em;"><center>Sector</center></td><td style="padding:.5em; width:70%;"><center>' + arraystringsector[i] + '</center></td></tr><tr style="padding:.5em;"><td style="padding:.5em;"><center>Comunidad</center></td><td style="padding:.5em; width:70%;"><center>' + arraystringcomunidad[i] + '</center></td></tr><tr style="padding:.5em;"><td style="padding:.5em;"><center>Ubicación específica (Nombre del coliseo, estadio, otros, si aplica)</center></td><td style="padding:.5em; width:70%;"><center>' + arraystringubicacionInter[i] + '</center></td></tr><table>');

                        /*======================================================
                        =            Eliminar filas internacionales            =
                        ======================================================*/

                        $("#eliminarEditadosInter" + i).click(function(e) {

                            var idContador = $(this).attr('idContador');
                            var idFila = $(this).attr('idFila');

                            var confirm = alertify.confirm('', '¿Está seguro de eliminar la ubicación ya ingresada?', null, null).set('labels', { ok: 'Confirmar', cancel: 'Cancelar' });

                            confirm.set({ transition: 'slide' });

                            confirm.set('onok', function() { //callbak al pulsar botón positivo

                                $(".tabla__internacional" + idContador).remove();

                                var paqueteDeDatos = new FormData();

                                paqueteDeDatos.append('idFila', idFila);

                                var destino = "modelosBd/elimina/eliminarInternacional.php";

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
                                            alertify.notify("Datos eliminados correctamente", "success", 5, function() {});

                                        }


                                    },

                                    error: function() {
                                        alert("Algo ha fallado.");
                                    }

                                });

                            });

                            confirm.set('oncancel', function() { //callbak al pulsar botón negativo
                                alertify.set("notifier", "position", "top-right");
                                alertify.notify("Canceló la eliminación", "success", 5, function() {});
                            });

                        });


                        /*=====  End of Eliminar filas internacionales  ======*/



                    }


                }



            },

            error: function() {
                alert("Algo ha fallado.");
            }

        });


    }

    ubicacionGeograficaEdita($("#codigoProyecto"), $(".ubicaciones__geograficas__editar"));

    /*=====  End of Tabla ubicación  ======*/

    /*===========================================
    =            Tabla bases legales           =
    ===========================================*/

    var basesLegalesEdita = function(parametro1, parametro2) {

        var paqueteDeDatos = new FormData();

        var codigoProyecto = $(parametro1).val();

        paqueteDeDatos.append('codigoProyecto', codigoProyecto);

        var destino = "modelosBd/selector/selectorBasesLegales.md.php";

        $.ajax({

            url: destino,
            type: 'POST',
            contentType: false,
            data: paqueteDeDatos,
            processData: false,
            cache: false,
            success: function(response) {

                var elementos = JSON.parse(response);

                var stringidBaseLegal = elementos['stringidBaseLegal'];
                var stringnombreBaseLegal = elementos['stringnombreBaseLegal'];
                var stringjustificacionBaseLegal = elementos['stringjustificacionBaseLegal'];

                if (stringidBaseLegal != "") {

                    var arraystringidBaseLegal = stringidBaseLegal.split('------');
                    var arraystringnombreBaseLegal = stringnombreBaseLegal.split('------');
                    var arraystringjustificacionBaseLegall = stringjustificacionBaseLegal.split('------');

                    for (var i = 0; i < arraystringidBaseLegal.length; i++) {

                        $(parametro2).append('<table class="tabla__legal__editada' + i + '" style="margin-top:1em;" class="tabla__legal"><tr><td style="padding:.5em;">Nombre de la Base Legal</td><td style="padding:.5em;"><center>' + arraystringnombreBaseLegal[i] + '</center></td></tr><tr><center><td style="padding:.5em;">Justificación de la Base Legal</center></td><td style="padding:.5em;"><center>' + arraystringjustificacionBaseLegall[i] + '</center></td><td><center><button style="padding:.5em; text-align:center; background:#b71c1c; color:white" id="eliminarBaseLegalEditada' + i + '" idContador="' + i + '" idFila="' + arraystringidBaseLegal[i] + '">ELIMINAR</button></center></td></tr></table>');

                        /*===========================================
                        =            Eliminar Base Legal            =
                        ===========================================*/

                        $("#eliminarBaseLegalEditada" + i).click(function(e) {

                            var idContador = $(this).attr('idContador');
                            var idFila = $(this).attr('idFila');

                            var confirm = alertify.confirm('', '¿Está seguro de eliminar la base legal ya ingresada?', null, null).set('labels', { ok: 'Confirmar', cancel: 'Cancelar' });

                            confirm.set({ transition: 'slide' });

                            confirm.set('onok', function() { //callbak al pulsar botón positivo

                                $(".tabla__legal__editada" + idContador).remove();

                                var paqueteDeDatos = new FormData();

                                paqueteDeDatos.append('idFila', idFila);

                                var destino = "modelosBd/elimina/eliminarBaseLegal.php";

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
                                            alertify.notify("Datos eliminados correctamente", "success", 5, function() {});

                                        }


                                    },

                                    error: function() {
                                        alert("Algo ha fallado.");
                                    }

                                });

                            });

                            confirm.set('oncancel', function() { //callbak al pulsar botón negativo
                                alertify.set("notifier", "position", "top-right");
                                alertify.notify("Canceló la eliminación", "success", 5, function() {});
                            });

                        });

                        /*=====  End of Eliminar Base Legal  ======*/


                    }

                }

            },

            error: function() {
                alert("Algo ha fallado.");
            }

        });


    }

    basesLegalesEdita($("#codigoProyecto"), $(".bases__legales__edita"));

    /*=====  End of Tabla bases legales  ======*/

    /*=====================================================
    =            Editas alineación estratégica            =
    =====================================================*/

    var alineacionEditas = function(parametro1, parametro2) {

        var paqueteDeDatos = new FormData();

        var codigoProyecto = $(parametro1).val();

        paqueteDeDatos.append('codigoProyecto', codigoProyecto);

        var destino = "modelosBd/selector/selectorObjetivosEspecificos.md.php";

        $.ajax({

            url: destino,
            type: 'POST',
            contentType: false,
            data: paqueteDeDatos,
            processData: false,
            cache: false,
            success: function(response) {

                var elementos = JSON.parse(response);
                var stringobjetivosEspecificos = elementos['stringobjetivosEspecificos'];
                var stringidObjetivosEspecificos = elementos['stringidObjetivosEspecificos'];

                if (stringobjetivosEspecificos != "") {

                    var arraystringobjetivosEspecificos = stringobjetivosEspecificos.split('------');
                    var arraystringidObjetivosEspecificos = stringidObjetivosEspecificos.split('------');

                    for (var i = 0; i < arraystringidObjetivosEspecificos.length; i++) {


                        $(parametro2).append('<table id="tablaObjetivosEspecificosEditar' + i + '" class="tabla__objetivo__especifico__editar" style="margin-top:1em;"><tr><td style="padding:.5em;">' + arraystringobjetivosEspecificos[i] + '</td><td style="padding:.5em;"><center><button style="padding:.5em; text-align:center; background:#b71c1c; color:white" id="eliminarEspecificosEditar' + i + '" idContador="' + i + '" idFila="' + arraystringidObjetivosEspecificos[i] + '">ELIMINAR</button></center></td></tr></table>');


                        /*================================
                        =            Eliminar            =
                        ================================*/

                        $("#eliminarEspecificosEditar" + i).click(function(e) {

                            var idContador = $(this).attr('idContador');
                            var idFila = $(this).attr('idFila');

                            var confirm = alertify.confirm('', '¿Está seguro de eliminar la base legal ya ingresada?', null, null).set('labels', { ok: 'Confirmar', cancel: 'Cancelar' });

                            confirm.set({ transition: 'slide' });

                            confirm.set('onok', function() { //callbak al pulsar botón positivo

                                $("#tablaObjetivosEspecificosEditar" + idContador).remove();

                                var paqueteDeDatos = new FormData();

                                paqueteDeDatos.append('idFila', idFila);

                                var destino = "modelosBd/elimina/eliminarObjetivosEspecificos.php";

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
                                            alertify.notify("Datos eliminados correctamente", "success", 5, function() {});

                                        }


                                    },

                                    error: function() {
                                        alert("Algo ha fallado.");
                                    }

                                });

                            });

                            confirm.set('oncancel', function() { //callbak al pulsar botón negativo
                                alertify.set("notifier", "position", "top-right");
                                alertify.notify("Canceló la eliminación", "success", 5, function() {});
                            });

                        });

                        /*=====  End of Eliminar  ======*/


                    }

                }


            },

            error: function() {
                alert("Algo ha fallado.");
            }

        });


    }

    alineacionEditas($("#codigoProyecto"), $(".objetivos__especificos__editar"));


    /*=====  End of Editas alineación estratégica  ======*/

    /*===============================
    =            Línea 1            =
    ===============================*/

    var lineaPolitica1 = function(parametro1) {


        if ($("#linea1").val() != "" && $("#linea1").val() != undefined && $("#linea1").val() != "no") {

            if ($("#objetivo1Linea1").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__1"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">Objetivo Estratégico 1: Contar con un marco jurídico funcional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 1: Contar con un marco jurídico funcional" id="objetivo1" name="objetivo1" class="check__estilos__lineas checkeds__linea1" checked="checked"></center></td></tr></table>');
            } else {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__1"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">Objetivo Estratégico 1: Contar con un marco jurídico funcional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 1: Contar con un marco jurídico funcional" id="objetivo1" name="objetivo1" class="check__estilos__lineas checkeds__linea1" ></center></td></tr></table>');

            }

            if ($("#objetivo2Linea1").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__2"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__2">Objetivo Estratégico 2: Desarrollar un sistema de comunicación del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 2: Desarrollar un sistema de comunicación del DEFIRE" id="objetivo2" name="objetivo2" class="check__estilos__lineas checkeds__linea1" checked="checked"></center></td></tr></table>');

            } else {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__2"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__2">Objetivo Estratégico 2: Desarrollar un sistema de comunicación del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 2: Desarrollar un sistema de comunicación del DEFIRE" id="objetivo2" name="objetivo2" class="check__estilos__lineas checkeds__linea1" ></center></td></tr></table>');

            }

            if ($("#objetivo3Linea1").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__3"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__3">Objetivo Estratégico 3: Instaurar un sistema de formación y actualización continua para los actores del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 3: Instaurar un sistema de formación y actualización continua para los actores del DEFIRE" id="objetivo3" name="objetivo3" class="check__estilos__lineas checkeds__linea1" checked="checked"></center></td></tr></table>');

            } else {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__3"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__3">Objetivo Estratégico 3: Instaurar un sistema de formación y actualización continua para los actores del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 3: Instaurar un sistema de formación y actualización continua para los actores del DEFIRE" id="objetivo3" name="objetivo3" class="check__estilos__lineas checkeds__linea1" ></center></td></tr></table>');

            }

            if ($("#objetivo4Linea1").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__4"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__4">Objetivo Estratégico 4: Implementar un sistema nacional de información del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 4: Implementar un sistema nacional de información del DEFIRE" id="objetivo4" name="objetivo4" class="check__estilos__lineas checkeds__linea1" checked="checked"></center></td></tr></table>');


            } else {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__4"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__4">Objetivo Estratégico 4: Implementar un sistema nacional de información del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 4: Implementar un sistema nacional de información del DEFIRE" id="objetivo4" name="objetivo4" class="check__estilos__lineas checkeds__linea1" ></center></td></tr></table>');

            }

            if ($("#objetivo5Linea1").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__5"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__5">Objetivo Estratégico 5: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 5: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE" id="objetivo5" name="objetivo5" class="check__estilos__lineas checkeds__linea1" checked="checked"></center></td></tr></table>');

            } else {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__5"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__5">Objetivo Estratégico 5: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 5: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE" id="objetivo5" name="objetivo5" class="check__estilos__lineas checkeds__linea1" ></center></td></tr></table>');


            }

            if ($("#objetivo6Linea1").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__6"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__6">Objetivo Estratégico 6: Garantizar la participación ciudadana en la política pública del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 6: Garantizar la participación ciudadana en la política pública del DEFIRE" id="objetivo6" name="objetivo6" class="check__estilos__lineas checkeds__linea1" checked="checked"></center></td></tr></table>');

            } else {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__6"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__6">Objetivo Estratégico 6: Garantizar la participación ciudadana en la política pública del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 6: Garantizar la participación ciudadana en la política pública del DEFIRE" id="objetivo6" name="objetivo6" class="check__estilos__lineas checkeds__linea1" ></center></td></tr></table>');

            }

            if ($("#objetivo7Linea1").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__7"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__7">Objetivo Estratégico 7: Propiciar la investigación aplicada al DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 7: Propiciar la investigación aplicada al DEFIRE" id="objetivo7" name="objetivo7" class="check__estilos__lineas checkeds__linea1" checked="checked"></center></td></tr></table>');

            } else {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__7"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__7">Objetivo Estratégico 7: Propiciar la investigación aplicada al DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 7: Propiciar la investigación aplicada al DEFIRE" id="objetivo7" name="objetivo7" class="check__estilos__lineas checkeds__linea1" ></center></td></tr></table>');

            }

            if ($("#objetivo8Linea1").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__8"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__8">Objetivo Estratégico 8: Lograr sostenibilidad financiera del sistema nacional del DEFIRE y sus organismos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 8: Lograr sostenibilidad financiera del sistema nacional del DEFIRE y sus organismos" id="objetivo8" name="objetivo8" class="check__estilos__lineas checkeds__linea1" checked="checked"></center></td></tr></table>');

            } else {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__8"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__8">Objetivo Estratégico 8: Lograr sostenibilidad financiera del sistema nacional del DEFIRE y sus organismos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 8: Lograr sostenibilidad financiera del sistema nacional del DEFIRE y sus organismos" id="objetivo8" name="objetivo8" class="check__estilos__lineas checkeds__linea1" ></center></td></tr></table>');

            }

            if ($("#objetivo9Linea1").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__9"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__9">Objetivo Estratégico 9: Establecer modelos de gestión de calidad en los organismos del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 9: Establecer modelos de gestión de calidad en los organismos del DEFIRE" id="objetivo9" name="objetivo9" class="check__estilos__lineas checkeds__linea1" checked="checked"></center></td></tr></table>');

            } else {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__9"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__9">Objetivo Estratégico 9: Establecer modelos de gestión de calidad en los organismos del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 9: Establecer modelos de gestión de calidad en los organismos del DEFIRE" id="objetivo9" name="objetivo9" class="check__estilos__lineas checkeds__linea1" ></center></td></tr></table>');

            }

            if ($("#objetivo10Linea1").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__10"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__10">Objetivo Estratégico 10: Optimizar la infraestructura del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 10: Optimizar la infraestructura del DEFIRE" id="objetivo10" name="objetivo10" class="check__estilos__lineas checkeds__linea1" checked="checked"></center></td></tr></table>');

            } else {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__10"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__10">Objetivo Estratégico 10: Optimizar la infraestructura del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 10: Optimizar la infraestructura del DEFIRE" id="objetivo10" name="objetivo10" class="check__estilos__lineas checkeds__linea1" ></center></td></tr></table>');

            }

            if ($("#objetivo11Linea1").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__11"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__11">Objetivo Estratégico 11: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 11: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE" id="objetivo11" name="objetivo11" class="check__estilos__lineas checkeds__linea1" checked="checked"></center></td></tr></table>');

            } else {

                $(parametro1).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__11"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__11">Objetivo Estratégico 11: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 11: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE" id="objetivo11" name="objetivo11" class="check__estilos__lineas checkeds__linea1" ></center></td></tr></table>');

            }

            /*======================================
            =            Generar tablas            =
            ======================================*/

            var generarTablasEspecificas = function(parametro1, parametro2, parametro3, parametro4) {

                $(parametro1).click(function() {

                    var condicion = $(this).is(":checked");

                    if (condicion) {

                        $(parametro4).addClass('cambiandoColor');

                        switch (parametro3) {

                            case 1:

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo1 objetivos__alineados1"><td style="padding:.5em; width:90%;">1.1 Reestructuración de la normativa a partir de la reforma a la ley vigente que rija al sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="marcoJuridicoObjetivo1" name="marcoJuridicoObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo1" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo1 objetivos__alineados1"><td style="padding:.5em; width:90%;">1.2 Conformación de comités interinstitucionales y ciudadanos para hacer seguimiento y veeduría a la aplicación de la normativa legal vigente</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="marcoJuridicoObjetivo2" name="marcoJuridicoObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo1" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo1 objetivos__alineados1"><td style="padding:.5em; width:90%;">1.3 Integración de los actores directos e indirectos del DEFIRE en la propuesta de un marco jurídico que coadyuve a la gobernanza del sistema</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="marcoJuridicoObjetivo3" name="marcoJuridicoObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo1" /></center></td></tr>');

                                break;

                            case 2:

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.1 Implementación de planes de comunicación que fortalezcan la acciones del DEFIRE en todo el sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo1" name="sistemaComunicacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo2" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.2 Suscripción de convenios con universidades para prácticas pre profesionales de comunicación en las organizaciones del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo2" name="sistemaComunicacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo2" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.3 Sensibilización de la comunidad para el cambio sobre la importancia de la práctica de la actividad física y el uso del tiempo libre</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo3" name="sistemaComunicacionObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo2" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.4 Fomento del uso de comunicación y nuevas tecnologías para la promoción del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo4" name="sistemaComunicacionObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo2" /></center></td></tr>');

                                break;

                            case 3:

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.1 Desarrollo del plan nacional de capacitación de los actores del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo1" name="sistemaFormacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo3" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.2 Desarrollo de herramientas tecnológicas de fácil acceso para agilizar los proceso técnicos y administrativos de las organizaciones del sector DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo2" name="sistemaFormacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo3" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.3 Implementación de nuevas tecnologías TICS por medio de plataformas digitales y software</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo3" name="sistemaFormacionObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo3" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.4 Reforma de la normativa legal vigente para la profesionalización, exigiendo niveles educativos para ocupar cargos en el sector y su respectiva actualización</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo4" name="sistemaFormacionObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo3" /></center></td></tr>');
                                break;

                            case 4:

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo4 objetivos__alineados1"><td style="padding:.5em; width:90%;">4.1 Fortalecimiento de las organizaciones del DEFIRE en la generación, almacenamiento de información, estadísticas y análisis de datos, así como cogestores del desarrollo del sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementarSistemaNacionalObjetivo1" name="implementarSistemaNacionalObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo4" /></center></td></tr>');

                                break;

                            case 5:

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo5 objetivos__alineados1"><td style="padding:.5em; width:90%;">5.1 Fortalecimiento de la corresponsabilidad interinstitucional e intersectorial y nuevos aliados estratégicos nacionales e internacionales</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modeloCoordinacionObjetivo1" name="modeloCoordinacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo5" /></center></td></tr>');

                                break;


                            case 6:

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo6 objetivos__alineados1"><td style="padding:.5em; width:90%;">6.1 Consolidación de mecanismos de participación ciudadana con filosofía de Gobiernos Abiertos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="participacionCiudadanaObjetivo1" name="participacionCiudadanaObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo6" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo6 objetivos__alineados1"><td style="padding:.5em; width:90%;">6.2 Generación de instrumentos técnicos y jurídicos que coadyuven eficazmente a la trasparencia y a la rendición de cuentas</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="participacionCiudadanaObjetivo2" name="participacionCiudadanaObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo6" /></center></td></tr>');

                                break;

                            case 7:

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo7 objetivos__alineados1"><td style="padding:.5em; width:90%;">7.1 Creación del fondo nacional de investigación que dé directrices y cofinancie la investigación de acuerdo con las necesidades del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="propiciarInvestigacionObjetivo1" name="propiciarInvestigacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo7" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo7 objetivos__alineados1"><td style="padding:.5em; width:90%;">7.2 Implementación de un Centro d Estudios, Investigación y Capacitación de la Cultura Física responsable de llevar las estadísticas del sector a nivel nacional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="propiciarInvestigacionObjetivo2" name="propiciarInvestigacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo7" /></center></td></tr>');

                                break;


                            case 8:

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.1 Desarrollo de modelos de gestión de proyectos público – privado que favorezca la sostenibilidad del sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo1" name="lograrSostenibilidadObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo8" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.2 Implementación de lineamientos que direccionen la efectividad en la administración y la gestión de los recursos que entrega el Estado a los organismos deportivos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo2" name="lograrSostenibilidadObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo8" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.3 Fortalecimiento del giro del negocio o actividad económica de los organismos del sector en pro de la auto-eficiencia y autogestión</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo3" name="lograrSostenibilidadObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo8" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.4 Desarrollo de lineamientos y estímulos a los organismos del DEFIRE para fomentar la sostenibilidad financiera a través de la autogestión</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo4" name="lograrSostenibilidadObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo8" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.5 Creación del fondo nacional de fomento al desarrollo del DEFIRE (FONDEFIRE)</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo5" name="lograrSostenibilidadObjetivo5" class="check__estilos__lineas checkeds__linea1Objetivo8" /></center></td></tr>');

                                break;

                            case 9:

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo9 objetivos__alineados1"><td style="padding:.5em; width:90%;">9.1 Generación de lineamientos técnicos, administrativos, innovadores y eficientes</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modelosDeGestionObjetivo1" name="modelosDeGestionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo9" /></center></td></tr>');

                                break;

                            case 10:

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.1 Desarrollo de modelos de gestión, protocolos y lineamientos administrativos y técnicos participativos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo1" name="optimizarInfraestructuraObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo10" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.2 Fortalecimiento de los procesos de asociación público-privada y entes territoriales para la construcción y gestión de centros deportivos y recreativos, como parques bio saludables</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo2" name="optimizarInfraestructuraObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo10" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.3 Coparticipación para la adecuación de parques, espacios públicos y lugares abiertos en mal estado, abandonados y deteriorados para la masificación DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo3" name="optimizarInfraestructuraObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo10" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.4 Aprovechamiento de la infraestructura deportiva de los centros escolares nacionales para uso social comunitario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo4" name="optimizarInfraestructuraObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo10" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.5 Implementación de un banco de tierras para la construcción de obras de infraestructura del DEFIRE, en conjunto con los territorios </td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo5" name="optimizarInfraestructuraObjetivo5" class="check__estilos__lineas checkeds__linea1Objetivo10" /></center></td></tr>');

                                break;

                            case 11:

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo11 objetivos__alineados1"><td style="padding:.5em; width:90%;">11.1 Implementación de programas de fomento y promoción del voluntariado</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modeloCoordinacionObjetivo1" name="modeloCoordinacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo11" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados1Objetivo11 objetivos__alineados1"><td style="padding:.5em; width:90%;">11.2 Fomento de estructuras organizativas que se encarguen de canalizar acciones en el campo del voluntariado</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modeloCoordinacionObjetivo2" name="modeloCoordinacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo11" /></center></td></tr>');

                                break;


                        }

                    } else {


                        switch (parametro3) {

                            case 1:

                                $(".objetivos__alineados1Objetivo1").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;

                            case 2:

                                $(".objetivos__alineados1Objetivo2").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;


                            case 3:

                                $(".objetivos__alineados1Objetivo3").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;

                            case 4:

                                $(".objetivos__alineados1Objetivo4").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;

                            case 5:

                                $(".objetivos__alineados1Objetivo5").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;

                            case 6:

                                $(".objetivos__alineados1Objetivo6").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;


                            case 7:

                                $(".objetivos__alineados1Objetivo7").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;


                            case 8:

                                $(".objetivos__alineados1Objetivo8").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;

                            case 9:

                                $(".objetivos__alineados1Objetivo9").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;

                            case 10:

                                $(".objetivos__alineados1Objetivo10").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;

                            case 11:

                                $(".objetivos__alineados1Objetivo11").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;


                        }

                    }

                });

            }

            generarTablasEspecificas($("#objetivo1"), $(".objetivos__alineados1Objetivo__1"), 1, $(".objetivo__indicador__1"));
            generarTablasEspecificas($("#objetivo2"), $(".objetivos__alineados1Objetivo__2"), 2, $(".objetivo__indicador__2"));
            generarTablasEspecificas($("#objetivo3"), $(".objetivos__alineados1Objetivo__3"), 3, $(".objetivo__indicador__3"));
            generarTablasEspecificas($("#objetivo4"), $(".objetivos__alineados1Objetivo__4"), 4, $(".objetivo__indicador__4"));
            generarTablasEspecificas($("#objetivo5"), $(".objetivos__alineados1Objetivo__5"), 5, $(".objetivo__indicador__5"));
            generarTablasEspecificas($("#objetivo6"), $(".objetivos__alineados1Objetivo__6"), 6, $(".objetivo__indicador__6"));
            generarTablasEspecificas($("#objetivo7"), $(".objetivos__alineados1Objetivo__7"), 7, $(".objetivo__indicador__7"));
            generarTablasEspecificas($("#objetivo8"), $(".objetivos__alineados1Objetivo__8"), 8, $(".objetivo__indicador__8"));
            generarTablasEspecificas($("#objetivo9"), $(".objetivos__alineados1Objetivo__9"), 9, $(".objetivo__indicador__9"));
            generarTablasEspecificas($("#objetivo10"), $(".objetivos__alineados1Objetivo__10"), 10, $(".objetivo__indicador__10"));
            generarTablasEspecificas($("#objetivo11"), $(".objetivos__alineados1Objetivo__11"), 11, $(".objetivo__indicador__11"));

            /*=====  End of Generar tablas  ======*/

        }


    }

    lineaPolitica1($(".body__politica1Contenedor"));

    /*=====  End of Línea 1  ======*/


    /*===============================
    =            Línea 2            =
    ===============================*/

    var lineaPolitica2 = function(parametro1) {

        if ($("#linea2").val() != "" && $("#linea2").val() != undefined && $("#linea2").val() != "no") {

            if ($("#objetivo1Linea2").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__1"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__1">Objetivo Estratégico 1: Conseguir que los ciudadanos adopten la cultura física</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos1" name="objetivoLineaDos1" class="check__estilos__lineas checkeds__linea2" checked="checked"></center></td></tr></table>');
            } else {

                $(parametro1).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__1"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__1">Objetivo Estratégico 1: Conseguir que los ciudadanos adopten la cultura física</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos1" name="objetivoLineaDos1" class="check__estilos__lineas checkeds__linea2"></center></td></tr></table>');

            }

            if ($("#objetivo2Linea2").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__2"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__2">Objetivo Estratégico 2: Posicionar al país como sede de eventos internacionales del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos2" name="objetivoLineaDos2" class="check__estilos__lineas checkeds__linea2" checked="checked"></center></td></tr></table>');
            } else {

                $(parametro1).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__2"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__2">Objetivo Estratégico 2: Posicionar al país como sede de eventos internacionales del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos2" name="objetivoLineaDos2" class="check__estilos__lineas checkeds__linea2"></center></td></tr></table>');

            }

            if ($("#objetivo3linea2").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__3"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__3">Objetivo Estratégico 3: Promover la práctica de la educación física en el sistema educativo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos3" name="objetivoLineaDos3" class="check__estilos__lineas checkeds__linea2" checked="checked"></center></td></tr></table>');

            } else {

                $(parametro1).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__3"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__3">Objetivo Estratégico 3: Promover la práctica de la educación física en el sistema educativo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos3" name="objetivoLineaDos3" class="check__estilos__lineas checkeds__linea2"></center></td></tr></table>');

            }

            if ($("#objetivo4Linea2").val() == "si") {

                $(parametro1).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__4"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__4">Objetivo Estratégico 4: Incrementar la oferta de programas para cada grupo etario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos4" name="objetivoLineaDos4" class="check__estilos__lineas checkeds__linea2" checked="checked"></center></td></tr></table>');

            } else {

                $(parametro1).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__4"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__4">Objetivo Estratégico 4: Incrementar la oferta de programas para cada grupo etario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos4" name="objetivoLineaDos4" class="check__estilos__lineas checkeds__linea2"></center></td></tr></table>');

            }


            /*======================================
            =            Generar tablas            =
            ======================================*/

            var generarTablasEspecificas2 = function(parametro1, parametro2, parametro3, parametro4) {

                $(parametro1).click(function() {

                    var condicion = $(this).is(":checked");

                    if (condicion) {

                        $(parametro4).addClass('cambiandoColor');

                        switch (parametro3) {


                            case 1:

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.1 Implementación de la certificación activa y saludable (Municipios, colegios, instituciones públicas y privadas, entre otros)</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo1" name="implementacionMunicipiosColegiosObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo1" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.2 Promoción de iniciativas públicas y privadas de prescripción de la actividad física como factor de prevención en salud para un bienestar activo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo2" name="implementacionMunicipiosColegiosObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo1" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.3 Fomento de la coparticipación y corre acción de iniciativas locales para el desarrollo del DEFIRE, como programas de desplazamiento activo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo3" name="implementacionMunicipiosColegiosObjetivo3" class="check__estilos__lineas checkeds__linea2Objetivo1" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.4 Sensibilización a todos los actores del sistema en la búsqueda de modelos de desarrollo sustentable y sostenible en todos los ámbitos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo4" name="implementacionMunicipiosColegiosObjetivo4" class="check__estilos__lineas checkeds__linea2Objetivo1" /></center></td></tr>');


                                break;

                            case 2:

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.1 Estímulo para el desarrollo de eventos internacionales del DEFIRE en conjunto con los entes territoriales, organismos deportivos, e instituciones públicas y privadas</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo1" name="posicionarPaisObjetivo1" class="check__estilos__lineas" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.2 Preparación de la dirigencia ecuatoriana en liderazgo para el posicionamiento a nivel internacional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo2" name="posicionarPaisObjetivo2" class="check__estilos__lineas" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.3 Desarrollo de programas que resalte la labor de los atletas, entrenadores, dirigentes y voluntariado, a través del reconocimiento local, zonal, nacional e internacional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo3" name="posicionarPaisObjetivo3" class="check__estilos__lineas" /></center></td></tr>');


                                break;

                            case 3:

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.1 Implementación de la oferta de programas incluyentes para la oferta de programas incluyentes para la población estudiantil</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo1" name="practicaEducacionFisicaObjetivo1" class="check__estilos__lineas" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.2 Implementación de centros especializados de educación física incluyente en alianza con los gobiernos locales y empresa privada</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo2" name="practicaEducacionFisicaObjetivo2" class="check__estilos__lineas" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.3 Implementación de eventos deportivos incluyentes que permitan la integración del sistema</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo3" name="practicaEducacionFisicaObjetivo3" class="check__estilos__lineas" /></center></td></tr>');


                                break;

                            case 4:

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo4 objetivos__alineados2"><td style="padding:.5em; width:90%;">4.1 Masificación del DEFIRE con una amplia gama de oferta de programas por grupo etario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="masificacionDefireObjetivo1" name="masificacionDefireObjetivo1" class="check__estilos__lineas" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados2Objetivo4 objetivos__alineados2"><td style="padding:.5em; width:90%;">4.2 Gama de oferta de programas para personas con discapacidad</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="masificacionDefireObjetivo2" name="masificacionDefireObjetivo2" class="check__estilos__lineas" /></center></td></tr>');

                                break;


                        }

                    } else {

                        switch (parametro3) {

                            case 1:

                                $(".objetivos__alineados2Objetivo1").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;


                            case 2:

                                $(".objetivos__alineados2Objetivo2").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;


                            case 3:

                                $(".objetivos__alineados2Objetivo3").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;


                            case 4:

                                $(".objetivos__alineados2Objetivo4").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;

                        }


                    }

                });

            }

            generarTablasEspecificas2($("#objetivoLineaDos1"), $(".objetivos__alineados2Objetivo__1"), 1, $(".objetivo2__indicador__1"));
            generarTablasEspecificas2($("#objetivoLineaDos2"), $(".objetivos__alineados2Objetivo__2"), 2, $(".objetivo2__indicador__2"));
            generarTablasEspecificas2($("#objetivoLineaDos3"), $(".objetivos__alineados2Objetivo__3"), 3, $(".objetivo2__indicador__3"));
            generarTablasEspecificas2($("#objetivoLineaDos4"), $(".objetivos__alineados2Objetivo__4"), 4, $(".objetivo2__indicador__4"));


            /*=====  End of Generar tablas  ======*/

        }

    }

    lineaPolitica2($(".body__politica2Contenedor"));

    /*=====  End of Línea 2  ======*/


    /*===============================
    =            Línea 3            =
    ===============================*/
    var lineaPolitica3 = function(parametro2) {

        if ($("#linea3").val() != "" && $("#linea3").val() != undefined && $("#linea3").val() != "no") {

            if ($("#objetivo1Linea3").val() == "si") {

                $(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__1"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__1">Objetivo Estratégico 1: Mejorar significativamente las posiciones</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres1" name="objetivoLineaTres1" class="check__estilos__lineas checkeds__linea3" checked="checked"></center></td></tr></table>');
            } else {

                $(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__1"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__1">Objetivo Estratégico 1: Mejorar significativamente las posiciones</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres1" name="objetivoLineaTres1" class="check__estilos__lineas checkeds__linea3"></center></td></tr></table>');

            }

            if ($("#objetivo2Linea3").val() == "si") {

                $(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__2"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__2">Objetivo Estratégico 2: Implementar un sistema nacional de preparación y competición</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres2" name="objetivoLineaTres2" class="check__estilos__lineas checkeds__linea3" checked="checked"></center></td></tr></table>');
            } else {

                $(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__2"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__2">Objetivo Estratégico 2: Implementar un sistema nacional de preparación y competición</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres2" name="objetivoLineaTres2" class="check__estilos__lineas checkeds__linea3"></center></td></tr></table>');

            }


            if ($("#objetivo3Linea3").val() == "si") {

                $(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__3"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__3">Objetivo Estratégico 3: Incrementar la población de atletas convencionales y con discapacidad con resultados deportivos a nivel regional, continental y mundial</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres3" name="objetivoLineaTres3" class="check__estilos__lineas checkeds__linea3" checked="checked"></center></td></tr></table>');
            } else {

                $(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__3"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__3">Objetivo Estratégico 3: Incrementar la población de atletas convencionales y con discapacidad con resultados deportivos a nivel regional, continental y mundial</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres3" name="objetivoLineaTres3" class="check__estilos__lineas checkeds__linea3"></center></td></tr></table>');

            }


            if ($("#objetivo4Linea3").val() == "si") {

                $(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__4"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__4">Objetivo Estratégico 4: Implementar las acciones del control dopaje en las delegaciones nacionales que representen al país</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres4" name="objetivoLineaTres4" class="check__estilos__lineas checkeds__linea3" checked="checked"></center></td></tr></table>');
            } else {

                $(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__4"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__4">Objetivo Estratégico 4: Implementar las acciones del control dopaje en las delegaciones nacionales que representen al país</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres4" name="objetivoLineaTres4" class="check__estilos__lineas checkeds__linea3"></center></td></tr></table>');

            }

            if ($("#objetivo5Linea3").val() == "si") {

                $(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__5"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__5">Objetivo Estratégico 5: Potenciar un sistema nacional de educación y prevención temprana del dopaje</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres5" name="objetivoLineaTres5" class="check__estilos__lineas checkeds__linea3" checked="checked"></center></td></tr></table>');
            } else {

                $(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__5"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__5">Objetivo Estratégico 5: Potenciar un sistema nacional de educación y prevención temprana del dopaje</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres5" name="objetivoLineaTres5" class="check__estilos__lineas checkeds__linea3"></center></td></tr></table>');

            }

            /*======================================
            =            Generar Tablas            =
            ======================================*/

            var generarTablasEspecificas3 = function(parametro1, parametro2, parametro3, parametro4) {

                $(parametro1).click(function() {

                    var condicion = $(this).is(":checked");

                    if (condicion) {

                        $(parametro4).addClass('cambiandoColor');

                        switch (parametro3) {

                            case 1:

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.1 Desarrollo de lineamientos y criterios técnicos que permitan la priorización de deportes, atletas y eventos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo1" name="significativamentePosicionesObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.2 Establecimiento de lineamientos para la creación de un sistema de ciencias aplicadas al deporte convencional y adaptado</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo2" name="significativamentePosicionesObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.3 Establecimiento de lineamientos para la creación de un sistema de seguimiento técnico y metodológico desde la base, desarrollo y alto nivel competitivo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo3" name="significativamentePosicionesObjetivo3" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.4 Implementación de programas de apoyo al alto rendimiento en todo el país</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo4" name="significativamentePosicionesObjetivo4" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.5 Implementación de un programa nacional de estímulos económicos por resultados deportivos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo5" name="significativamentePosicionesObjetivo5" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.6 Implementación de un programa nacional de pensión vitalicia para atletas convencionales y con discapacidad en retiro deportivo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo6" name="significativamentePosicionesObjetivo6" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');

                                break;

                            case 2:

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo2 objetivos__alineados3"><td style="padding:.5em; width:90%;">2.1 Implementación de un modelo nacional de competiciones</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPreparacionNacionalObjetivo1" name="sistemaPreparacionNacionalObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo2" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo2 objetivos__alineados3"><td style="padding:.5em; width:90%;">2.2 Implementación de un modelo nacional de competiciones</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPreparacionNacionalObjetivo2" name="sistemaPreparacionNacionalObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo2" /></center></td></tr>');

                                break;

                            case 3:

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo3 objetivos__alineados3"><td style="padding:.5em; width:90%;">3.1 Estructuración de un modelo nacional de detección selección, capacitación y desarrollo de atletas convencionales y con discapacidad</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarPoblacionAtletasObjetivo1" name="incrementarPoblacionAtletasObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo3" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo3 objetivos__alineados3"><td style="padding:.5em; width:90%;">3.2 Fomento y promoción de clubes deportivos convencional y adaptado como cédula del desarrollo deportivo </td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarPoblacionAtletasObjetivo2" name="incrementarPoblacionAtletasObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo3" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo3 objetivos__alineados3"><td style="padding:.5em; width:90%;">3.3 Estructuración de planes, programas o proyectos para profesionalizar la labor del entrenador, dirigentes y grupo multidisciplinario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarPoblacionAtletasObjetivo3" name="incrementarPoblacionAtletasObjetivo3" class="check__estilos__lineas checkeds__linea3Objetivo3" /></center></td></tr>');


                                break;

                            case 4:

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo4 objetivos__alineados3"><td style="padding:.5em; width:90%;">4.1 Implementación de un modelo de gestión de toma de muestras en competición y fuera de competición</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="accionesDopajeObjetivo1" name="accionesDopajeObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo4" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo4 objetivos__alineados3"><td style="padding:.5em; width:90%;">4.2 Incremento de Oficiales de Control Dopaje en todo el país</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="accionesDopajeObjetivo2" name="accionesDopajeObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo4" /></center></td></tr>');


                                break;

                            case 5:

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo5 objetivos__alineados3"><td style="padding:.5em; width:90%;">5.1 Planificación e implementación de un modelo de capacitación nacional que involucre los diferentes medios tecnológicos disponibles</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPrenvencionObjetivo1" name="sistemaPrenvencionObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo5" /></center></td></tr>');

                                $(parametro2).append('<tr class="objetivos__alineados3Objetivo5 objetivos__alineados3"><td style="padding:.5em; width:90%;">5.2 Implementación de charlas de control dopaje en las instituciones educativas</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPrenvencionObjetivo2" name="sistemaPrenvencionObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo5" /></center></td></tr>');

                                break;


                        }

                    } else {

                        switch (parametro3) {

                            case 1:

                                $(".objetivos__alineados3Objetivo1").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;

                            case 2:

                                $(".objetivos__alineados3Objetivo2").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;

                            case 3:

                                $(".objetivos__alineados3Objetivo3").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;


                            case 4:

                                $(".objetivos__alineados3Objetivo4").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;

                            case 5:

                                $(".objetivos__alineados3Objetivo5").remove();

                                $(parametro4).removeClass('cambiandoColor');

                                break;


                        }

                    }

                });

            }

            generarTablasEspecificas3($("#objetivoLineaTres1"), $(".objetivos__alineados3Objetivo__1"), 1, $(".objetivo3__indicador__1"));
            generarTablasEspecificas3($("#objetivoLineaTres2"), $(".objetivos__alineados3Objetivo__2"), 2, $(".objetivo3__indicador__2"));
            generarTablasEspecificas3($("#objetivoLineaTres3"), $(".objetivos__alineados3Objetivo__3"), 3, $(".objetivo3__indicador__3"));
            generarTablasEspecificas3($("#objetivoLineaTres4"), $(".objetivos__alineados3Objetivo__4"), 4, $(".objetivo3__indicador__4"));
            generarTablasEspecificas3($("#objetivoLineaTres5"), $(".objetivos__alineados3Objetivo__5"), 5, $(".objetivo3__indicador__5"));

            /*=====  End of Generar Tablas  ======*/

        }

    }

    lineaPolitica3($(".body__politica3Contenedor"));

    /*=====  End of Línea 3  ======*/

    /*==========================================
    =            Objetivo 1 linea 1            =
    ==========================================*/

    var lineaPolitica1Objetivo1 = function(parametro2) {

        if ($("#objetivo1Linea1").val() != "" && $("#objetivo1Linea1").val() != undefined && $("#objetivo1Linea1").val() != "no") {

            if ($("#objetivo1Linea1Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo1 objetivos__alineados1"><td style="padding:.5em; width:90%;">1.1 Reestructuración de la normativa a partir de la reforma a la ley vigente que rija al sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="marcoJuridicoObjetivo1" name="marcoJuridicoObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo1" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo1 objetivos__alineados1"><td style="padding:.5em; width:90%;">1.1 Reestructuración de la normativa a partir de la reforma a la ley vigente que rija al sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="marcoJuridicoObjetivo1" name="marcoJuridicoObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo1" /></center></td></tr>');

            }


            if ($("#objetivo1Linea1Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo1 objetivos__alineados1"><td style="padding:.5em; width:90%;">1.2 Conformación de comités interinstitucionales y ciudadanos para hacer seguimiento y veeduría a la aplicación de la normativa legal vigente</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="marcoJuridicoObjetivo2" name="marcoJuridicoObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo1" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo1 objetivos__alineados1"><td style="padding:.5em; width:90%;">1.2 Conformación de comités interinstitucionales y ciudadanos para hacer seguimiento y veeduría a la aplicación de la normativa legal vigente</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="marcoJuridicoObjetivo2" name="marcoJuridicoObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo1" /></center></td></tr>');

            }

            if ($("#objetivo1Linea1Item3").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo1 objetivos__alineados1"><td style="padding:.5em; width:90%;">1.3 Integración de los actores directos e indirectos del DEFIRE en la propuesta de un marco jurídico que coadyuve a la gobernanza del sistema</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="marcoJuridicoObjetivo3" name="marcoJuridicoObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo1" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo1 objetivos__alineados1"><td style="padding:.5em; width:90%;">1.3 Integración de los actores directos e indirectos del DEFIRE en la propuesta de un marco jurídico que coadyuve a la gobernanza del sistema</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="marcoJuridicoObjetivo3" name="marcoJuridicoObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo1" /></center></td></tr>');

            }

        }

    }

    lineaPolitica1Objetivo1($(".objetivos__alineados1Objetivo__1"));

    /*=====  End of Objetivo 1 linea 1  ======*/


    /*==========================================
    =            Objetivo 2 Línea 1            =
    ==========================================*/

    var lineaPolitica1Objetivo2 = function(parametro2) {


        if ($("#objetivo2Linea1").val() != "" && $("#objetivo2Linea1").val() != undefined && $("#objetivo2Linea1").val() != "no") {

            if ($("#objetivo2Linea1Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.1 Implementación de planes de comunicación que fortalezcan la acciones del DEFIRE en todo el sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo1" name="sistemaComunicacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo2" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.1 Implementación de planes de comunicación que fortalezcan la acciones del DEFIRE en todo el sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo1" name="sistemaComunicacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo2" /></center></td></tr>');

            }


            if ($("#objetivo2Linea1Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.2 Suscripción de convenios con universidades para prácticas pre profesionales de comunicación en las organizaciones del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo2" name="sistemaComunicacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo2" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.2 Suscripción de convenios con universidades para prácticas pre profesionales de comunicación en las organizaciones del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo2" name="sistemaComunicacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo2" /></center></td></tr>');

            }

            if ($("#objetivo2Linea1Item3").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.3 Sensibilización de la comunidad para el cambio sobre la importancia de la práctica de la actividad física y el uso del tiempo libre</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo3" name="sistemaComunicacionObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo2" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.3 Sensibilización de la comunidad para el cambio sobre la importancia de la práctica de la actividad física y el uso del tiempo libre</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo3" name="sistemaComunicacionObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo2" /></center></td></tr>');

            }

            if ($("#objetivo2Linea1Item4").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.4 Fomento del uso de comunicación y nuevas tecnologías para la promoción del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo4" name="sistemaComunicacionObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo2" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo2 objetivos__alineados1"><td style="padding:.5em; width:90%;">2.4 Fomento del uso de comunicación y nuevas tecnologías para la promoción del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaComunicacionObjetivo4" name="sistemaComunicacionObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo2" /></center></td></tr>');

            }


        }

    }

    lineaPolitica1Objetivo2($(".objetivos__alineados1Objetivo__2"));

    /*=====  End of Objetivo 2 Línea 1  ======*/

    /*==========================================
    =            Objetivo 3 Línea 1           =
    ==========================================*/

    var lineaPolitica1Objetivo3 = function(parametro2) {


        if ($("#objetivo3Linea1").val() != "" && $("#objetivo3Linea1").val() != undefined && $("#objetivo3Linea1").val() != "no") {

            if ($("#objetivo3Linea1Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.1 Desarrollo del plan nacional de capacitación de los actores del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo1" name="sistemaFormacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo3" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.1 Desarrollo del plan nacional de capacitación de los actores del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo1" name="sistemaFormacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo3" /></center></td></tr>');

            }


            if ($("#objetivo3Linea1Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.2 Desarrollo de herramientas tecnológicas de fácil acceso para agilizar los proceso técnicos y administrativos de las organizaciones del sector DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo2" name="sistemaFormacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo3" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.2 Desarrollo de herramientas tecnológicas de fácil acceso para agilizar los proceso técnicos y administrativos de las organizaciones del sector DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo2" name="sistemaFormacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo3" /></center></td></tr>');

            }

            if ($("#objetivo3Linea1Item3").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.3 Implementación de nuevas tecnologías TICS por medio de plataformas digitales y software</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo3" name="sistemaFormacionObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo3" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.3 Implementación de nuevas tecnologías TICS por medio de plataformas digitales y software</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo3" name="sistemaFormacionObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo3" /></center></td></tr>');

            }

            if ($("#objetivo3Linea1Item4").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.4 Reforma de la normativa legal vigente para la profesionalización, exigiendo niveles educativos para ocupar cargos en el sector y su respectiva actualización</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo4" name="sistemaFormacionObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo3" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo3 objetivos__alineados1"><td style="padding:.5em; width:90%;">3.4 Reforma de la normativa legal vigente para la profesionalización, exigiendo niveles educativos para ocupar cargos en el sector y su respectiva actualización</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaFormacionObjetivo4" name="sistemaFormacionObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo3" /></center></td></tr>');

            }


        }

    }

    lineaPolitica1Objetivo3($(".objetivos__alineados1Objetivo__3"));

    /*=====  End of Objetivo 3 Línea 1 ======*/

    /*==========================================
    =            Objetivo 4 Línea 1            =
    ==========================================*/

    var lineaPolitica1Objetivo4 = function(parametro2) {

        if ($("#objetivo4Linea1").val() != "" && $("#objetivo4Linea1").val() != undefined && $("#objetivo4Linea1").val() != "no") {

            if ($("#objetivo4Linea1Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo4 objetivos__alineados1"><td style="padding:.5em; width:90%;">4.1 Fortalecimiento de las organizaciones del DEFIRE en la generación, almacenamiento de información, estadísticas y análisis de datos, así como cogestores del desarrollo del sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementarSistemaNacionalObjetivo1" name="implementarSistemaNacionalObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo4" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo4 objetivos__alineados1"><td style="padding:.5em; width:90%;">4.1 Fortalecimiento de las organizaciones del DEFIRE en la generación, almacenamiento de información, estadísticas y análisis de datos, así como cogestores del desarrollo del sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementarSistemaNacionalObjetivo1" name="implementarSistemaNacionalObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo4" /></center></td></tr>');

            }


        }

    }

    lineaPolitica1Objetivo4($(".objetivos__alineados1Objetivo__4"));

    /*=====  End of Objetivo 4 Línea 1  ======*/


    /*=========================================
    =            Ojetivo 5 Línea 1            =
    =========================================*/

    var lineaPolitica1Objetivo5 = function(parametro2) {

        if ($("#objetivo5Linea1").val() != "" && $("#objetivo5Linea1").val() != undefined && $("#objetivo5Linea1").val() != "no") {

            if ($("#objetivo5Linea1Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo5 objetivos__alineados1"><td style="padding:.5em; width:90%;">5.1 Fortalecimiento de la corresponsabilidad interinstitucional e intersectorial y nuevos aliados estratégicos nacionales e internacionales</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modeloCoordinacionObjetivo1" name="modeloCoordinacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo5" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo5 objetivos__alineados1"><td style="padding:.5em; width:90%;">5.1 Fortalecimiento de la corresponsabilidad interinstitucional e intersectorial y nuevos aliados estratégicos nacionales e internacionales</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modeloCoordinacionObjetivo1" name="modeloCoordinacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo5" /></center></td></tr>');

            }


        }

    }

    lineaPolitica1Objetivo5($(".objetivos__alineados1Objetivo__5"));

    /*=====  End of Ojetivo 5 Línea 1  ======*/


    /*==========================================
    =            Objetivo 6 Línea 1            =
    ==========================================*/

    var lineaPolitica1Objetivo6 = function(parametro2) {

        if ($("#objetivo6Linea1").val() != "" && $("#objetivo6Linea1").val() != undefined && $("#objetivo6Linea1").val() != "no") {

            if ($("#objetivo6Linea1Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo6 objetivos__alineados1"><td style="padding:.5em; width:90%;">6.1 Consolidación de mecanismos de participación ciudadana con filosofía de Gobiernos Abiertos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="participacionCiudadanaObjetivo1" name="participacionCiudadanaObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo6" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo6 objetivos__alineados1"><td style="padding:.5em; width:90%;">6.1 Consolidación de mecanismos de participación ciudadana con filosofía de Gobiernos Abiertos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="participacionCiudadanaObjetivo1" name="participacionCiudadanaObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo6" /></center></td></tr>');

            }

            if ($("#objetivo6Linea1Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo6 objetivos__alineados1"><td style="padding:.5em; width:90%;">6.2 Generación de instrumentos técnicos y jurídicos que coadyuven eficazmente a la trasparencia y a la rendición de cuentas</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="participacionCiudadanaObjetivo2" name="participacionCiudadanaObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo6" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo6 objetivos__alineados1"><td style="padding:.5em; width:90%;">6.2 Generación de instrumentos técnicos y jurídicos que coadyuven eficazmente a la trasparencia y a la rendición de cuentas</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="participacionCiudadanaObjetivo2" name="participacionCiudadanaObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo6" /></center></td></tr>');

            }


        }

    }

    lineaPolitica1Objetivo6($(".objetivos__alineados1Objetivo__6"));

    /*=====  End of Objetivo 6 Línea 1  ======*/

    /*==========================================
    =            Objetivo 7 Línea 1            =
    ==========================================*/


    var lineaPolitica1Objetivo7 = function(parametro2) {

        if ($("#objetivo7Linea1").val() != "" && $("#objetivo7Linea1").val() != undefined && $("#objetivo7Linea1").val() != "no") {

            if ($("#objetivo7Linea1Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo7 objetivos__alineados1"><td style="padding:.5em; width:90%;">7.1 Creación del fondo nacional de investigación que dé directrices y cofinancie la investigación de acuerdo con las necesidades del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="propiciarInvestigacionObjetivo1" name="propiciarInvestigacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo7" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo7 objetivos__alineados1"><td style="padding:.5em; width:90%;">7.1 Creación del fondo nacional de investigación que dé directrices y cofinancie la investigación de acuerdo con las necesidades del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="propiciarInvestigacionObjetivo1" name="propiciarInvestigacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo7" /></center></td></tr>');
            }

            if ($("#objetivo7Linea1Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo7 objetivos__alineados1"><td style="padding:.5em; width:90%;">7.2 Implementación de un Centro d Estudios, Investigación y Capacitación de la Cultura Física responsable de llevar las estadísticas del sector a nivel nacional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="propiciarInvestigacionObjetivo2" name="propiciarInvestigacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo7" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo7 objetivos__alineados1"><td style="padding:.5em; width:90%;">7.2 Implementación de un Centro d Estudios, Investigación y Capacitación de la Cultura Física responsable de llevar las estadísticas del sector a nivel nacional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="propiciarInvestigacionObjetivo2" name="propiciarInvestigacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo7" /></center></td></tr>');
            }


        }

    }

    lineaPolitica1Objetivo7($(".objetivos__alineados1Objetivo__7"));

    /*=====  End of Objetivo 7 Línea 1  ======*/


    /*==========================================
    =            Objetivo 8 Línea 1            =
    ==========================================*/


    var lineaPolitica1Objetivo8 = function(parametro2) {

        if ($("#objetivo8Linea1").val() != "" && $("#objetivo8Linea1").val() != undefined && $("#objetivo8Linea1").val() != "no") {

            if ($("#objetivo8Linea1Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.1 Desarrollo de modelos de gestión de proyectos público – privado que favorezca la sostenibilidad del sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo1" name="lograrSostenibilidadObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo8" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.1 Desarrollo de modelos de gestión de proyectos público – privado que favorezca la sostenibilidad del sector</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo1" name="lograrSostenibilidadObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo8" /></center></td></tr>');
            }

            if ($("#objetivo8Linea1Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.2 Implementación de lineamientos que direccionen la efectividad en la administración y la gestión de los recursos que entrega el Estado a los organismos deportivos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo2" name="lograrSostenibilidadObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo8" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.2 Implementación de lineamientos que direccionen la efectividad en la administración y la gestión de los recursos que entrega el Estado a los organismos deportivos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo2" name="lograrSostenibilidadObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo8" /></center></td></tr>');
            }



            if ($("#objetivo8Linea1Item3").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.3 Fortalecimiento del giro del negocio o actividad económica de los organismos del sector en pro de la auto-eficiencia y autogestión</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo3" name="lograrSostenibilidadObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo8" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.3 Fortalecimiento del giro del negocio o actividad económica de los organismos del sector en pro de la auto-eficiencia y autogestión</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo3" name="lograrSostenibilidadObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo8" /></center></td></tr>');
            }



            if ($("#objetivo8Linea1Item4").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.4 Desarrollo de lineamientos y estímulos a los organismos del DEFIRE para fomentar la sostenibilidad financiera a través de la autogestión</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo4" name="lograrSostenibilidadObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo8" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.4 Desarrollo de lineamientos y estímulos a los organismos del DEFIRE para fomentar la sostenibilidad financiera a través de la autogestión</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo4" name="lograrSostenibilidadObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo8" /></center></td></tr>');
            }


            if ($("#objetivo8Linea1Item5").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.5 Creación del fondo nacional de fomento al desarrollo del DEFIRE (FONDEFIRE)</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo5" name="lograrSostenibilidadObjetivo5" class="check__estilos__lineas checkeds__linea1Objetivo8" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo8 objetivos__alineados1"><td style="padding:.5em; width:90%;">8.5 Creación del fondo nacional de fomento al desarrollo del DEFIRE (FONDEFIRE)</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="lograrSostenibilidadObjetivo5" name="lograrSostenibilidadObjetivo5" class="check__estilos__lineas checkeds__linea1Objetivo8" /></center></td></tr>');
            }



        }

    }

    lineaPolitica1Objetivo8($(".objetivos__alineados1Objetivo__8"));

    /*=====  End of Objetivo 8 Línea 1  ======*/

    /*==========================================
    =            Objetivo 9 Línea 1            =
    ==========================================*/


    var lineaPolitica1Objetivo9 = function(parametro2) {

        if ($("#objetivo9Linea1").val() != "" && $("#objetivo9Linea1").val() != undefined && $("#objetivo9Linea1").val() != "no") {

            if ($("#objetivo9Linea1Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo9 objetivos__alineados1"><td style="padding:.5em; width:90%;">9.1 Generación de lineamientos técnicos, administrativos, innovadores y eficientes</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modelosDeGestionObjetivo1" name="modelosDeGestionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo9" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo9 objetivos__alineados1"><td style="padding:.5em; width:90%;">9.1 Generación de lineamientos técnicos, administrativos, innovadores y eficientes</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modelosDeGestionObjetivo1" name="modelosDeGestionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo9" /></center></td></tr>');
            }



        }

    }

    lineaPolitica1Objetivo9($(".objetivos__alineados1Objetivo__9"));

    /*=====  End of Objetivo 9 Línea 1  ======*/


    /*==========================================
    =            Objetivo 10 Línea 1            =
    ==========================================*/

    var lineaPolitica1Objetivo10 = function(parametro2) {

        if ($("#objetivo10Linea1").val() != "" && $("#objetivo10Linea1").val() != undefined && $("#objetivo10Linea1").val() != "no") {

            if ($("#objetivo10Linea1Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.1 Desarrollo de modelos de gestión, protocolos y lineamientos administrativos y técnicos participativos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo1" name="optimizarInfraestructuraObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo10" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.1 Desarrollo de modelos de gestión, protocolos y lineamientos administrativos y técnicos participativos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo1" name="optimizarInfraestructuraObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo10" /></center></td></tr>');
            }


            if ($("#objetivo10Linea1Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.2 Fortalecimiento de los procesos de asociación público-privada y entes territoriales para la construcción y gestión de centros deportivos y recreativos, como parques bio saludables</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo2" name="optimizarInfraestructuraObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo10" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.2 Fortalecimiento de los procesos de asociación público-privada y entes territoriales para la construcción y gestión de centros deportivos y recreativos, como parques bio saludables</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo2" name="optimizarInfraestructuraObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo10" /></center></td></tr>');
            }

            if ($("#objetivo10Linea1Item3").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.3 Coparticipación para la adecuación de parques, espacios públicos y lugares abiertos en mal estado, abandonados y deteriorados para la masificación DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo3" name="optimizarInfraestructuraObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo10" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.3 Coparticipación para la adecuación de parques, espacios públicos y lugares abiertos en mal estado, abandonados y deteriorados para la masificación DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo3" name="optimizarInfraestructuraObjetivo3" class="check__estilos__lineas checkeds__linea1Objetivo10" /></center></td></tr>');
            }


            if ($("#objetivo10Linea1Item4").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.4 Aprovechamiento de la infraestructura deportiva de los centros escolares nacionales para uso social comunitario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo4" name="optimizarInfraestructuraObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo10" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.4 Aprovechamiento de la infraestructura deportiva de los centros escolares nacionales para uso social comunitario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo4" name="optimizarInfraestructuraObjetivo4" class="check__estilos__lineas checkeds__linea1Objetivo10" /></center></td></tr>');
            }


            if ($("#objetivo10Linea1Item5").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.5 Implementación de un banco de tierras para la construcción de obras de infraestructura del DEFIRE, en conjunto con los territorios </td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo5" name="optimizarInfraestructuraObjetivo5" class="check__estilos__lineas checkeds__linea1Objetivo10" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo10 objetivos__alineados1"><td style="padding:.5em; width:90%;">10.5 Implementación de un banco de tierras para la construcción de obras de infraestructura del DEFIRE, en conjunto con los territorios </td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="optimizarInfraestructuraObjetivo5" name="optimizarInfraestructuraObjetivo5" class="check__estilos__lineas checkeds__linea1Objetivo10" /></center></td></tr>');
            }


        }

    }

    lineaPolitica1Objetivo10($(".objetivos__alineados1Objetivo__10"));

    /*=====  End of Objetivo 10 Línea 1  ======*/

    /*===========================================
    =            Objetivo 11 Línea 1            =
    ===========================================*/

    var lineaPolitica1Objetivo11 = function(parametro2) {

        if ($("#objetivo11Linea1").val() != "" && $("#objetivo11Linea1").val() != undefined && $("#objetivo11Linea1").val() != "no") {

            if ($("#objetivo11Linea1Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo11 objetivos__alineados1"><td style="padding:.5em; width:90%;">11.1 Implementación de programas de fomento y promoción del voluntariado</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modeloCoordinacionObjetivo1" name="modeloCoordinacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo11" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo11 objetivos__alineados1"><td style="padding:.5em; width:90%;">11.1 Implementación de programas de fomento y promoción del voluntariado</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modeloCoordinacionObjetivo1" name="modeloCoordinacionObjetivo1" class="check__estilos__lineas checkeds__linea1Objetivo11" /></center></td></tr>');
            }


            if ($("#objetivo11Linea1Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo11 objetivos__alineados1"><td style="padding:.5em; width:90%;">11.2 Fomento de estructuras organizativas que se encarguen de canalizar acciones en el campo del voluntariado</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modeloCoordinacionObjetivo2" name="modeloCoordinacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo11" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados1Objetivo11 objetivos__alineados1"><td style="padding:.5em; width:90%;">11.2 Fomento de estructuras organizativas que se encarguen de canalizar acciones en el campo del voluntariado</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="modeloCoordinacionObjetivo2" name="modeloCoordinacionObjetivo2" class="check__estilos__lineas checkeds__linea1Objetivo11" /></center></td></tr>');
            }


        }

    }

    lineaPolitica1Objetivo11($(".objetivos__alineados1Objetivo__11"));


    /*=====  End of Objetivo 11 Línea 1  ======*/


    /*==========================================
    =            Objetivo 1 Línea 2            =
    ==========================================*/


    var lineaPolitica2Objetivo1 = function(parametro2) {

        if ($("#objetivo1Linea2").val() != "" && $("#objetivo1Linea2").val() != undefined && $("#objetivo1Linea2").val() != "no") {

            if ($("#objetivo1Linea2Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.1 Implementación de la certificación activa y saludable (Municipios, colegios, instituciones públicas y privadas, entre otros)</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo1" name="implementacionMunicipiosColegiosObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo1" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.1 Implementación de la certificación activa y saludable (Municipios, colegios, instituciones públicas y privadas, entre otros)</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo1" name="implementacionMunicipiosColegiosObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo1" /></center></td></tr>');
            }


            if ($("#objetivo1Linea2Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.2 Promoción de iniciativas públicas y privadas de prescripción de la actividad física como factor de prevención en salud para un bienestar activo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo2" name="implementacionMunicipiosColegiosObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo1" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.2 Promoción de iniciativas públicas y privadas de prescripción de la actividad física como factor de prevención en salud para un bienestar activo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo2" name="implementacionMunicipiosColegiosObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo1" /></center></td></tr>');
            }


            if ($("#objetivo1Linea2Item3").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.3 Fomento de la coparticipación y corre acción de iniciativas locales para el desarrollo del DEFIRE, como programas de desplazamiento activo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo3" name="implementacionMunicipiosColegiosObjetivo3" class="check__estilos__lineas checkeds__linea2Objetivo1" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.3 Fomento de la coparticipación y corre acción de iniciativas locales para el desarrollo del DEFIRE, como programas de desplazamiento activo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo3" name="implementacionMunicipiosColegiosObjetivo3" class="check__estilos__lineas checkeds__linea2Objetivo1" /></center></td></tr>');
            }


            if ($("#objetivo1Linea2Item4").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.4 Sensibilización a todos los actores del sistema en la búsqueda de modelos de desarrollo sustentable y sostenible en todos los ámbitos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo4" name="implementacionMunicipiosColegiosObjetivo4" class="check__estilos__lineas checkeds__linea2Objetivo1" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo1 objetivos__alineados2"><td style="padding:.5em; width:90%;">1.4 Sensibilización a todos los actores del sistema en la búsqueda de modelos de desarrollo sustentable y sostenible en todos los ámbitos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="implementacionMunicipiosColegiosObjetivo4" name="implementacionMunicipiosColegiosObjetivo4" class="check__estilos__lineas checkeds__linea2Objetivo1" /></center></td></tr>');
            }


        }

    }

    lineaPolitica2Objetivo1($(".objetivos__alineados2Objetivo__1"));

    /*=====  End of Objetivo 1 Línea 2  ======*/

    /*==========================================
    =            Objetivo 2 Línea 2            =
    ==========================================*/


    var lineaPolitica2Objetivo2 = function(parametro2) {

        if ($("#objetivo2Linea2").val() != "" && $("#objetivo2Linea2").val() != undefined && $("#objetivo2Linea2").val() != "no") {

            if ($("#objetivo2Linea2Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.1 Estímulo para el desarrollo de eventos internacionales del DEFIRE en conjunto con los entes territoriales, organismos deportivos, e instituciones públicas y privadas</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo1" name="posicionarPaisObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo2" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.1 Estímulo para el desarrollo de eventos internacionales del DEFIRE en conjunto con los entes territoriales, organismos deportivos, e instituciones públicas y privadas</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo1" name="posicionarPaisObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo2" /></center></td></tr>');
            }


            if ($("#objetivo2Linea2Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.2 Preparación de la dirigencia ecuatoriana en liderazgo para el posicionamiento a nivel internacional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo2" name="posicionarPaisObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo2" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.2 Preparación de la dirigencia ecuatoriana en liderazgo para el posicionamiento a nivel internacional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo2" name="posicionarPaisObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo2" /></center></td></tr>');
            }


            if ($("#objetivo2Linea2Item3").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.3 Desarrollo de programas que resalte la labor de los atletas, entrenadores, dirigentes y voluntariado, a través del reconocimiento local, zonal, nacional e internacional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo3" name="posicionarPaisObjetivo3" class="check__estilos__lineas checkeds__linea2Objetivo2" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.3 Desarrollo de programas que resalte la labor de los atletas, entrenadores, dirigentes y voluntariado, a través del reconocimiento local, zonal, nacional e internacional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo3" name="posicionarPaisObjetivo3" class="check__estilos__lineas checkeds__linea2Objetivo2" /></center></td></tr>');
            }



        }

    }

    lineaPolitica2Objetivo2($(".objetivos__alineados2Objetivo__2"));

    /*=====  End of Objetivo 2 Línea 2  ======*/



    /*==========================================
    =            Objetivo 3 Línea 2            =
    ==========================================*/


    var lineaPolitica2Objetivo3 = function(parametro2) {

        if ($("#objetivo3linea2").val() != "" && $("#objetivo3linea2").val() != undefined && $("#objetivo3linea2").val() != "no") {

            if ($("#objetivo3Linea2Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.1 Implementación de la oferta de programas incluyentes para la oferta de programas incluyentes para la población estudiantil</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo1" name="practicaEducacionFisicaObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo3" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.1 Implementación de la oferta de programas incluyentes para la oferta de programas incluyentes para la población estudiantil</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo1" name="practicaEducacionFisicaObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo3" /></center></td></tr>');
            }


            if ($("#objetivo3Linea2Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.2 Implementación de centros especializados de educación física incluyente en alianza con los gobiernos locales y empresa privada</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo2" name="practicaEducacionFisicaObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo3" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.2 Implementación de centros especializados de educación física incluyente en alianza con los gobiernos locales y empresa privada</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo2" name="practicaEducacionFisicaObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo3" /></center></td></tr>');
            }


            if ($("#objetivo3Linea2Item3").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.3 Implementación de eventos deportivos incluyentes que permitan la integración del sistema</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo3" name="practicaEducacionFisicaObjetivo3" class="check__estilos__lineas checkeds__linea2Objetivo3" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.3 Implementación de eventos deportivos incluyentes que permitan la integración del sistema</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo3" name="practicaEducacionFisicaObjetivo3" class="check__estilos__lineas checkeds__linea2Objetivo3" /></center></td></tr>');
            }



        }

    }

    lineaPolitica2Objetivo3($(".objetivos__alineados2Objetivo__3"));

    /*=====  End of Objetivo 3 Línea 2  ======*/




    /*==========================================
    =            Objetivo 4 Línea 2            =
    ==========================================*/


    var lineaPolitica2Objetivo3 = function(parametro2) {

        if ($("#objetivo4Linea2").val() != "" && $("#objetivo4Linea2").val() != undefined && $("#objetivo4Linea2").val() != "no") {

            if ($("#objetivo4Linea2Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo4 objetivos__alineados2"><td style="padding:.5em; width:90%;">4.1 Masificación del DEFIRE con una amplia gama de oferta de programas por grupo etario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="masificacionDefireObjetivo1" name="masificacionDefireObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo4" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo4 objetivos__alineados2"><td style="padding:.5em; width:90%;">4.1 Masificación del DEFIRE con una amplia gama de oferta de programas por grupo etario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="masificacionDefireObjetivo1" name="masificacionDefireObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo4" /></center></td></tr>');
            }


            if ($("#objetivo4Linea2Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo4 objetivos__alineados2"><td style="padding:.5em; width:90%;">4.2 Gama de oferta de programas para personas con discapacidad</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="masificacionDefireObjetivo2" name="masificacionDefireObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo4" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados2Objetivo4 objetivos__alineados2"><td style="padding:.5em; width:90%;">4.2 Gama de oferta de programas para personas con discapacidad</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="masificacionDefireObjetivo2" name="masificacionDefireObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo4" /></center></td></tr>');
            }



        }

    }

    lineaPolitica2Objetivo3($(".objetivos__alineados2Objetivo__4"));

    /*=====  End of Objetivo 4 Línea 2  ======*/


    /*==========================================
    =            Objetivo 1 Línea 3            =
    ==========================================*/

    var lineaPolitica3Objetivo1 = function(parametro2) {

        if ($("#objetivo1Linea3").val() != "" && $("#objetivo1Linea3").val() != undefined && $("#objetivo1Linea3").val() != "no") {

            if ($("#objetivo1Linea3Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.1 Desarrollo de lineamientos y criterios técnicos que permitan la priorización de deportes, atletas y eventos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo1" name="significativamentePosicionesObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo1" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.1 Desarrollo de lineamientos y criterios técnicos que permitan la priorización de deportes, atletas y eventos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo1" name="significativamentePosicionesObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');
            }


            if ($("#objetivo1Linea3Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.2 Establecimiento de lineamientos para la creación de un sistema de ciencias aplicadas al deporte convencional y adaptado</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo2" name="significativamentePosicionesObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo1" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.2 Establecimiento de lineamientos para la creación de un sistema de ciencias aplicadas al deporte convencional y adaptado</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo2" name="significativamentePosicionesObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');
            }


            if ($("#objetivo1Linea3Item3").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.3 Establecimiento de lineamientos para la creación de un sistema de seguimiento técnico y metodológico desde la base, desarrollo y alto nivel competitivo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo3" name="significativamentePosicionesObjetivo3" class="check__estilos__lineas checkeds__linea3Objetivo1" checked="checked"/></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.3 Establecimiento de lineamientos para la creación de un sistema de seguimiento técnico y metodológico desde la base, desarrollo y alto nivel competitivo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo3" name="significativamentePosicionesObjetivo3" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');
            }


            if ($("#objetivo1Linea3Item4").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.4 Implementación de programas de apoyo al alto rendimiento en todo el país</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo4" name="significativamentePosicionesObjetivo4" class="check__estilos__lineas checkeds__linea3Objetivo1" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.4 Implementación de programas de apoyo al alto rendimiento en todo el país</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo4" name="significativamentePosicionesObjetivo4" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');
            }


            if ($("#objetivo1Linea3Item5").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.5 Implementación de un programa nacional de estímulos económicos por resultados deportivos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo5" name="significativamentePosicionesObjetivo5" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.5 Implementación de un programa nacional de estímulos económicos por resultados deportivos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo5" name="significativamentePosicionesObjetivo5" class="check__estilos__lineas checkeds__linea3Objetivo1" checked="checked" /></center></td></tr>');
            }


            if ($("#objetivo1Linea3Item6").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.6 Implementación de un programa nacional de pensión vitalicia para atletas convencionales y con discapacidad en retiro deportivo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo6" name="significativamentePosicionesObjetivo6" class="check__estilos__lineas checkeds__linea3Objetivo1" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo1 objetivos__alineados3"><td style="padding:.5em; width:90%;">1.6 Implementación de un programa nacional de pensión vitalicia para atletas convencionales y con discapacidad en retiro deportivo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="significativamentePosicionesObjetivo6" name="significativamentePosicionesObjetivo6" class="check__estilos__lineas checkeds__linea3Objetivo1" /></center></td></tr>');
            }



        }

    }

    lineaPolitica3Objetivo1($(".objetivos__alineados3Objetivo__1"));

    /*=====  End of Objetivo 1 Línea 3  ======*/


    /*==========================================
    =            Objetivo 2 Línea 3            =
    ==========================================*/

    var lineaPolitica3Objetivo2 = function(parametro2) {

        if ($("#objetivo2Linea3").val() != "" && $("#objetivo2Linea3").val() != undefined && $("#objetivo2Linea3").val() != "no") {

            if ($("#objetivo2Linea3Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo2 objetivos__alineados3"><td style="padding:.5em; width:90%;">2.1 Implementación de un modelo nacional de competiciones</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPreparacionNacionalObjetivo1" name="sistemaPreparacionNacionalObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo2" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo2 objetivos__alineados3"><td style="padding:.5em; width:90%;">2.1 Implementación de un modelo nacional de competiciones</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPreparacionNacionalObjetivo1" name="sistemaPreparacionNacionalObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo2" /></center></td></tr>');
            }


            if ($("#objetivo2Linea3Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo2 objetivos__alineados3"><td style="padding:.5em; width:90%;">2.2 Implementación de un modelo nacional de competiciones</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPreparacionNacionalObjetivo2" name="sistemaPreparacionNacionalObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo2" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo2 objetivos__alineados3"><td style="padding:.5em; width:90%;">2.2 Implementación de un modelo nacional de competiciones</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPreparacionNacionalObjetivo2" name="sistemaPreparacionNacionalObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo2" /></center></td></tr>');
            }


        }

    }

    lineaPolitica3Objetivo2($(".objetivos__alineados3Objetivo__2"));

    /*=====  End of Objetivo 2 Línea 3  ======*/



    /*==========================================
    =            Objetivo 3 Línea 3            =
    ==========================================*/

    var lineaPolitica3Objetivo3 = function(parametro2) {

        if ($("#objetivo3Linea3").val() != "" && $("#objetivo3Linea3").val() != undefined && $("#objetivo3Linea3").val() != "no") {

            if ($("#objetivo3Linea3Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo3 objetivos__alineados3"><td style="padding:.5em; width:90%;">3.1 Estructuración de un modelo nacional de detección selección, capacitación y desarrollo de atletas convencionales y con discapacidad</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarPoblacionAtletasObjetivo1" name="incrementarPoblacionAtletasObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo3" checked="checked" /></center></td></tr>');

            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo3 objetivos__alineados3"><td style="padding:.5em; width:90%;">3.1 Estructuración de un modelo nacional de detección selección, capacitación y desarrollo de atletas convencionales y con discapacidad</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarPoblacionAtletasObjetivo1" name="incrementarPoblacionAtletasObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo3" /></center></td></tr>');

            }


            if ($("#objetivo3Linea3Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo3 objetivos__alineados3"><td style="padding:.5em; width:90%;">3.2 Fomento y promoción de clubes deportivos convencional y adaptado como cédula del desarrollo deportivo </td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarPoblacionAtletasObjetivo2" name="incrementarPoblacionAtletasObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo3" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo3 objetivos__alineados3"><td style="padding:.5em; width:90%;">3.2 Fomento y promoción de clubes deportivos convencional y adaptado como cédula del desarrollo deportivo </td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarPoblacionAtletasObjetivo2" name="incrementarPoblacionAtletasObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo3" /></center></td></tr>');
            }


            if ($("#objetivo3Linea3Item3").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo3 objetivos__alineados3"><td style="padding:.5em; width:90%;">3.3 Estructuración de planes, programas o proyectos para profesionalizar la labor del entrenador, dirigentes y grupo multidisciplinario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarPoblacionAtletasObjetivo3" name="incrementarPoblacionAtletasObjetivo3" class="check__estilos__lineas checkeds__linea3Objetivo3" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo3 objetivos__alineados3"><td style="padding:.5em; width:90%;">3.3 Estructuración de planes, programas o proyectos para profesionalizar la labor del entrenador, dirigentes y grupo multidisciplinario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarPoblacionAtletasObjetivo3" name="incrementarPoblacionAtletasObjetivo3" class="check__estilos__lineas checkeds__linea3Objetivo3" /></center></td></tr>');
            }


        }

    }

    lineaPolitica3Objetivo3($(".objetivos__alineados3Objetivo__3"));

    /*=====  End of Objetivo 3 Línea 3  ======*/

    /*========================================
    =            Objetivo Línea 4            =
    ========================================*/

    var lineaPolitica3Objetivo4 = function(parametro2) {

        if ($("#objetivo4Linea3").val() != "" && $("#objetivo4Linea3").val() != undefined && $("#objetivo4Linea3").val() != "no") {

            if ($("#objetivo4Linea3Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo4 objetivos__alineados3"><td style="padding:.5em; width:90%;">4.1 Implementación de un modelo de gestión de toma de muestras en competición y fuera de competición</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="accionesDopajeObjetivo1" name="accionesDopajeObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo4" checked="checked" /></center></td></tr>');

            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo4 objetivos__alineados3"><td style="padding:.5em; width:90%;">4.1 Implementación de un modelo de gestión de toma de muestras en competición y fuera de competición</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="accionesDopajeObjetivo1" name="accionesDopajeObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo4" /></center></td></tr>');

            }


            if ($("#objetivo4Linea3Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo4 objetivos__alineados3"><td style="padding:.5em; width:90%;">4.2 Incremento de Oficiales de Control Dopaje en todo el país</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="accionesDopajeObjetivo2" name="accionesDopajeObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo4" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo4 objetivos__alineados3"><td style="padding:.5em; width:90%;">4.2 Incremento de Oficiales de Control Dopaje en todo el país</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="accionesDopajeObjetivo2" name="accionesDopajeObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo4" /></center></td></tr>');
            }


        }

    }

    lineaPolitica3Objetivo4($(".objetivos__alineados3Objetivo__4"));

    /*=====  End of Objetivo Línea 4  ======*/


    /*========================================
    =            Objetivo Línea 2            =
    ========================================*/

    var lineaPolitica3Objetivo5 = function(parametro2) {

        if ($("#objetivo5Linea3").val() != "" && $("#objetivo5Linea3").val() != undefined && $("#objetivo5Linea3").val() != "no") {

            if ($("#objetivo5Linea3Item1").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo5 objetivos__alineados3"><td style="padding:.5em; width:90%;">5.1 Planificación e implementación de un modelo de capacitación nacional que involucre los diferentes medios tecnológicos disponibles</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPrenvencionObjetivo1" name="sistemaPrenvencionObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo5" checked="checked" /></center></td></tr>');

            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo5 objetivos__alineados3"><td style="padding:.5em; width:90%;">5.1 Planificación e implementación de un modelo de capacitación nacional que involucre los diferentes medios tecnológicos disponibles</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPrenvencionObjetivo1" name="sistemaPrenvencionObjetivo1" class="check__estilos__lineas checkeds__linea3Objetivo5" /></center></td></tr>');

            }


            if ($("#objetivo5Linea3Item2").val() == "si") {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo5 objetivos__alineados3"><td style="padding:.5em; width:90%;">5.2 Implementación de charlas de control dopaje en las instituciones educativas</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPrenvencionObjetivo2" name="sistemaPrenvencionObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo5" checked="checked" /></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivos__alineados3Objetivo5 objetivos__alineados3"><td style="padding:.5em; width:90%;">5.2 Implementación de charlas de control dopaje en las instituciones educativas</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="sistemaPrenvencionObjetivo2" name="sistemaPrenvencionObjetivo2" class="check__estilos__lineas checkeds__linea3Objetivo5" /></center></td></tr>');
            }


        }

    }

    lineaPolitica3Objetivo5($(".objetivos__alineados3Objetivo__5"));

    /*=====  End of Objetivo Línea 2  ======*/

    /*=============================================
    =            Objetivo Ministerio 1            =
    =============================================*/

    var objetivosMinisterioDeporte1 = function(parametro2) {

        if ($("#objetivo1Institucional").val() != "" && $("#objetivo1Institucional").val() != undefined && $("#objetivo1Institucional").val() != "no") {

            if ($("#objetivo1Institucionaltem1").val() == "si") {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">1.1 Crear e implementar la Política Pública de la Cultura Física</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo1" name="incrementarFisicaSecretariaObjetivo1" class="check__estilos__lineas checkeds__ObjetivoMinisterio1" checked="checked"></center></td></tr>');

            } else {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">1.1 Crear e implementar la Política Pública de la Cultura Física</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo1" name="incrementarFisicaSecretariaObjetivo1" class="check__estilos__lineas checkeds__ObjetivoMinisterio1"></center></td></tr>');
            }


            if ($("#objetivo1Institucionaltem2").val() == "si") {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">1.2 Generar mecanismos de accesibilidad a la práctica de actividad física en igualdad de condiciones y oportunidades</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo2" name="incrementarFisicaSecretariaObjetivo2" class="check__estilos__lineas checkeds__ObjetivoMinisterio1" checked="checked"></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">1.2 Generar mecanismos de accesibilidad a la práctica de actividad física en igualdad de condiciones y oportunidades</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo2" name="incrementarFisicaSecretariaObjetivo2" class="check__estilos__lineas checkeds__ObjetivoMinisterio1"></center></td></tr>');
            }

            if ($("#objetivo1Institucionaltem3").val() == "si") {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">1.3 Fortalecer el desarrollo formativo de la práctica deportiva en la población</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo3" name="incrementarFisicaSecretariaObjetivo3" class="check__estilos__lineas checkeds__ObjetivoMinisterio1" checked="checked"></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">1.3 Fortalecer el desarrollo formativo de la práctica deportiva en la población</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo3" name="incrementarFisicaSecretariaObjetivo3" class="check__estilos__lineas checkeds__ObjetivoMinisterio1"></center></td></tr>');
            }


        }

    }

    objetivosMinisterioDeporte1($(".body__objetivoEstregico__uno"));

    /*=====  End of Objetivo Ministerio 1  ======*/

    /*=============================================
    =            Objetivo Ministerio 2            =
    =============================================*/

    var objetivosMinisterioDeporte2 = function(parametro2) {

        if ($("#objetivo2Institucional").val() != "" && $("#objetivo2Institucional").val() != undefined && $("#objetivo2Institucional").val() != "no") {

            if ($("#objetivo2Institucionaltem1").val() == "si") {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados2"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">2.1 Implementar un sistema nacional de priorización de deportes en coordinación con el Sistema Nacional de Cultura Física</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo4" name="incrementarFisicaSecretariaObjetivo4" class="check__estilos__lineas checkeds__ObjetivoMinisterio2" checked="checked"></center></td></tr>');

            } else {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados2"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">2.1 Implementar un sistema nacional de priorización de deportes en coordinación con el Sistema Nacional de Cultura Física</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo4" name="incrementarFisicaSecretariaObjetivo4" class="check__estilos__lineas checkeds__ObjetivoMinisterio2"></center></td></tr>');
            }


            if ($("#objetivo2Institucionaltem2").val() == "si") {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados2"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">2.2 Renovar el Plan de Alto Rendimiento con proyección a incrementar logros deportivos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo5" name="incrementarFisicaSecretariaObjetivo5" class="check__estilos__lineas checkeds__ObjetivoMinisterio2" checked="checked"></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados2"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">2.2 Renovar el Plan de Alto Rendimiento con proyección a incrementar logros deportivos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo5" name="incrementarFisicaSecretariaObjetivo5" class="check__estilos__lineas checkeds__ObjetivoMinisterio2"></center></td></tr>');
            }

            if ($("#objetivo2Institucionaltem3").val() == "si") {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados2"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">2.3 Organizar eventos del ciclo olímpico y paralímpico</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo6" name="incrementarFisicaSecretariaObjetivo6" class="check__estilos__lineas checkeds__ObjetivoMinisterio2" checked="checked"></center></td></tr>');
            } else {

                $(parametro2).append('<tr class="objetivosSecretaria__alineados2"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">2.3 Organizar eventos del ciclo olímpico y paralímpico</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo6" name="incrementarFisicaSecretariaObjetivo6" class="check__estilos__lineas checkeds__ObjetivoMinisterio2"></center></td></tr>');
            }


        }

    }

    objetivosMinisterioDeporte2($(".body__objetivoEstregico__dos"));

    /*=====  End of Objetivo Ministerio 2  ======*/



});