$(document).ready(function () {

/*=======================================
=            Tabla ubicación            =
=======================================*/
var contadorUbicacion=0;

var ubicacionGeografica=function(parametro1,parametro2){

	$(parametro1).click(function(e){

		contadorUbicacion++;

		$(parametro2).append('<table id="tablaUbiacion'+contadorUbicacion+'" style="margin-top:1em;" class="fila__paises__grupales"><tr><td style="padding:.5em;"><center>Escoger a que tipo pertenece</center></td><td style="padding:.5em;" id="filaSelector'+contadorUbicacion+'"><center><select style="width:100%;height:25px;" id="tipoUbicacion'+contadorUbicacion+'" name="tipoUbicacion'+contadorUbicacion+'" idContador="'+contadorUbicacion+'" class="tipoUbicacion"><option value="">--Escoger si es nacional o internacional--</option><option value="1">Nacional</option><option value="2">Internacional</option></select></center></td><td><center><button style="padding:.5em; text-align:center; background:#b71c1c; color:white" id="eliminar'+contadorUbicacion+'" idContador="'+contadorUbicacion+'">ELIMINAR</button></center></td></tr></table>');

		/*=====================================
		=            Eliminar Fila            =
		=====================================*/
		
		$("#eliminar"+contadorUbicacion).click(function(e){

			var idContador=$(this).attr('idContador');

			$("#tablaUbiacion"+idContador).remove();

		});
		
		/*=====  End of Eliminar Fila  ======*/
		

		/*==========================================
		=            Generador de tabla            =
		==========================================*/
		
		$("#tipoUbicacion"+contadorUbicacion).change(function(e){

			var idContador=$(this).attr('idContador');

			$(".fila__anadidas"+idContador).remove();

			if ($(this).val()==0) {

				alertify.set("notifier","position", "top-right");
	            alertify.notify("Es necesario escoger un tipo de ubicación", "error", 4, function(){});	

			}else if($(this).val()==1){

				$("#tablaUbiacion"+idContador).append('<tr class="fila__anadidas'+idContador+' fila__paises__grupales" style="padding:.5em;"><td style="padding:.5em;"><center>País</center></td><td style="padding:.5em;"><center>ECUADOR<input type="hidden" id="paisTipo'+idContador+'" name="paisTipo'+idContador+'" value="103" class="paisTipo"/></center></td></tr><tr class="fila__anadidas'+idContador+'" style="padding:.5em;"><td style="padding:.5em;"><center>Provincia</center></td><td style="padding:.5em;"><center><select id="provinciaUbicacion'+idContador+'" name="provinciaUbicacion'+idContador+'" style="padding:.5em;width:100%;" class="provinciaUbicacion"></select></center></td></tr><tr class="fila__anadidas'+idContador+'" style="padding:.5em;"><td style="padding:.5em;"><center>Cantón</center></td><td style="padding:.5em;"><center><select id="cantonMultiples'+idContador+'" name="cantonMultiples'+idContador+'" style="padding:.5em; width:100%;" class="cantonMultiples"></select></center></td></tr><tr class="fila__anadidas'+idContador+'" style="padding:.5em;"><td style="padding:.5em;"><center>Parroquia</center></td><td style="padding:.5em;"><center><select id="parroquiaMultiples'+idContador+'" name="parroquiaMultiples'+idContador+'" style="padding:.5em; width:100%;" class="parroquiaMultiples"></select></center></td></tr><tr class="fila__anadidas'+idContador+'" style="padding:.5em;"><td style="padding:.5em;">Ubicación específica (Nombre del coliseo, estadio, otros, si aplica)</td><td style="padding:.5em;"><textarea id="ubicacion'+idContador+'" name="ubicacion'+idContador+'" class="ubicacion" style="width:100%; height:75px;"></textarea></td></tr>');


					/*==================================
					=            Provincias            =
					==================================*/

					var provinciasMultiples=function(parametro1){

						indicador=1;

						$.ajax({

						  data: {indicador:indicador},
					      dataType: 'html',
					      type:'POST',
						  url:'modelosBd/validaciones/selector.modelo.php'

						}).done(function(listar__lugar){

						  $(parametro1).html(listar__lugar);

						}).fail(function(){

						  alert("hubo un error");

						});


					}

					provinciasMultiples($("#provinciaUbicacion"+idContador));				
					
					
					/*=====  End of Provincias  ======*/
				
					/*================================
					=            Cantones            =
					================================*/

					var cantonesMultiples=function(parametro1,parametro2){

						$(parametro2).change(function(){

							indicador=2;

							provincia=$(this).val();

							$.ajax({

							  data: {indicador:indicador,provincia:provincia},
						      dataType: 'html',
						      type:'POST',
							  url:'modelosBd/validaciones/selector.modelo.php'

							}).done(function(listar__lugar){

							  $(parametro1).html(listar__lugar);

							}).fail(function(){

							  alert("hubo un error");

							});


						});

					}

					cantonesMultiples($("#cantonMultiples"+idContador),$("#provinciaUbicacion"+idContador));					
										
					
					/*=====  End of Cantones  ======*/

					/*=================================
					=            Parroquia            =
					=================================*/
					var parroquiaMultiples=function(parametro1,parametro2){

						$(parametro2).change(function(){

							indicador=3;

							canton=$(this).val();

							$.ajax({

							  data: {indicador:indicador,canton:canton},
						      dataType: 'html',
						      type:'POST',
							  url:'modelosBd/validaciones/selector.modelo.php'

							}).done(function(listar__lugar){

							  $(parametro1).html(listar__lugar);

							}).fail(function(){

							  alert("hubo un error");

							});


						});

					}

					parroquiaMultiples($("#parroquiaMultiples"+idContador),$("#cantonMultiples"+idContador));						
					
					
					/*=====  End of Parroquia  ======*/
					
					


			}else if($(this).val()==2){


				$("#tablaUbiacion"+idContador).append('<tr class="fila__anadidas'+idContador+'" style="padding:.5em;"><td style="padding:.5em;"><center>País</center></td><td style="padding:.5em;"><center><select id="paisTipoInter'+idContador+'" name="paisTipoInter'+idContador+'" style="width:100%;" class="paisTipoInter"></select></center></td></tr><tr class="fila__anadidas'+idContador+'" style="padding:.5em;"><td style="padding:.5em;"><center>Estado</center></td><td><center><input style="width:96%;height:35px;" id="estado'+idContador+'" name="estado'+idContador+'" class="estado"></center></td></tr><tr class="fila__anadidas'+idContador+'" style="padding:.5em;"><td style="padding:.5em;"><center>Sector</center></td><td style="padding:.5em;"><center><input style="width:100%;height:35px;" id="sector'+idContador+'" name="sector'+idContador+'" class="sector"></center></td></tr><tr class="fila__anadidas'+idContador+'" style="padding:.5em;"><td style="padding:.5em;"><center>Comunidad</center></td><td style="padding:.5em;"><center><input style="width:100%;height:35px;" id="comunidad'+idContador+'" name="comunidad'+idContador+'" class="comunidad"></center></td></tr><tr class="fila__anadidas'+idContador+'" style="padding:.5em;"><td style="padding:.5em;">Ubicación específica (Nombre del coliseo, estadio, otros, si aplica)</td><td style="padding:.5em;"><textarea id="ubicacionInter'+idContador+'" name="ubicacionInter'+idContador+'" style="width:100%; height:75px;" class="ubicacionInter"></textarea></td></tr>');


					/*========================================
					=            Seleccionar País            =
					========================================*/

					var paisUbicacionMultiples=function(parametro1){

						indicador=4;

						$.ajax({

						  data: {indicador:indicador},
					      dataType: 'html',
					      type:'POST',
						  url:'modelosBd/validaciones/selector.modelo.php'

						}).done(function(listar__lugar){

						  $(parametro1).html(listar__lugar);

						}).fail(function(){

						  alert("hubo un error");

						});


					}

					paisUbicacionMultiples($("#paisTipoInter"+idContador));				
									
					
					/*=====  End of Seleccionar País  ======*/


			}

		});		
		
		/*=====  End of Generador de tabla  ======*/
		

	});

}

ubicacionGeografica($("#anadirUbicacion"),$(".ubicaciones__geograficas"));

/*=====  End of Tabla ubicación  ======*/


/*===============================================
=            Tablas base Geografícas            =
===============================================*/

var contadorBaseLegal=0;

var baseLegales=function(parametro1,parametro2){

	$(parametro1).click(function(e){

		contadorBaseLegal++;

		$(parametro2).append('<table id="tablaBaseLegal'+contadorBaseLegal+'" style="margin-top:1em;" class="tabla__legal"><tr><td style="padding:.5em;">Nombre de la Base Legal</td><td style="padding:.5em;"><input type="text" style="width:100%;" id="nombreBaseLegal'+contadorBaseLegal+'" name="nombreBaseLegal'+contadorBaseLegal+'" class="nombre__legales obligatorios__legales"></td></tr><tr><center><td style="padding:.5em;">Justificación de la Base Legal</center></td><td style="padding:.5em;"><center><textarea type="text" style="width:100%;" id="justificacionBaseLegal'+contadorBaseLegal+'" name="justificacionBaseLegal'+contadorBaseLegal+'" class="justificacion__legales obligatorios__legales"></textarea><div class="minimo__caracteres'+contadorBaseLegal+' error__conjuntos__bases__legales"></div></center></td><td><center><button style="padding:.5em; text-align:center; background:#b71c1c; color:white" id="eliminarBaseLegal'+contadorBaseLegal+'" idContador="'+contadorBaseLegal+'">ELIMINAR</button></center></td></tr></table>');

		/*=====================================
		=            Eliminar Fila            =
		=====================================*/
		
		$("#eliminarBaseLegal"+contadorBaseLegal).click(function(e){

			var idContador=$(this).attr('idContador');

			$("#tablaBaseLegal"+idContador).remove();

		});
		
		/*=====  End of Eliminar Fila  ======*/
		

		/*=========================================
		=            Minímo caracteres            =
		=========================================*/
		
		var longitudCaracteresMinimaConjuntos=function(parametro1,parametro2,counter){

			$(parametro1).keyup(function(e){

			   var words = $(parametro1).val().split(' '); 

			   if(words.length < parametro2){

			        counter.html("Son minimo <strong>"+parametro2+" palabras</strong>");

			        counter.css("color","red");

			    }else{

			      counter.html("");

			      counter.css("color","black");

			      counter.css("font-size","10px");

			    }

			 });

		}

		longitudCaracteresMinimaConjuntos($("#justificacionBaseLegal"+contadorBaseLegal),10,$(".minimo__caracteres"+contadorBaseLegal));
		
		
		/*=====  End of Minímo caracteres  ======*/
		

	});

}

baseLegales($("#anadirBaseLegal"),$(".bases__legales"));

/*=====  End of Tablas base Geografícas  ======*/

/*===================================================
=            Tabla objetivos específicos            =
===================================================*/

var contadorObjetivoEspecificos=0;

var objetivosEspecificos=function(parametro1,parametro2){

	$(parametro1).click(function(e){

		contadorObjetivoEspecificos++;

		$(parametro2).append('<table id="tablaObjetivosEspecificos'+contadorObjetivoEspecificos+'" class="tabla__objetivo__especifico" style="margin-top:1em;"><tr><td style="padding:.5em;"><textarea id="objetivoEspecificos'+contadorObjetivoEspecificos+'" name="objetivoEspecificos'+contadorObjetivoEspecificos+'" class="obligatorio__elementos especificos__grupales" style="width:100%; height:75px;" class="counter__objetivos'+contadorObjetivoEspecificos+' palabras__minimas__objetivosEspecificos"></textarea><div class="longitud__minima__grupal longitud__grupal'+contadorObjetivoEspecificos+'"></div></td><td style="padding:.5em;"><center><button style="padding:.5em; text-align:center; background:#b71c1c; color:white" id="eliminarEspecificos'+contadorObjetivoEspecificos+'" idContador="'+contadorObjetivoEspecificos+'">ELIMINAR</button></center></td></tr></table>');

		/*=====================================
		=            Eliminar Fila            =
		=====================================*/
		
		$("#eliminarEspecificos"+contadorObjetivoEspecificos).click(function(e){

			var idContador=$(this).attr('idContador');

			$("#tablaObjetivosEspecificos"+idContador).remove();

		});
		
		/*=====  End of Eliminar Fila  ======*/
		

		/*=========================================
		=            Minímo caracteres            =
		=========================================*/
		
		var longitudCaracteresMinimaConjuntosEspecificos=function(parametro1,parametro2,counter){

			$(parametro1).keyup(function(e){

			   var words = $(parametro1).val().split(' '); 

			   if(words.length < parametro2){

			        counter.html("Son minimo <strong>"+parametro2+" palabras</strong>");

			        counter.css("color","red");

			    }else{

			      counter.html("");

			      counter.css("color","black");

			      counter.css("font-size","10px");

			    }

			 });

		}

		longitudCaracteresMinimaConjuntosEspecificos($("#objetivoEspecificos"+contadorObjetivoEspecificos),15,$(".longitud__grupal"+contadorObjetivoEspecificos));
		
		
		/*=====  End of Minímo caracteres  ======*/
		

	});

}

objetivosEspecificos($("#anadirObjetivosEspecificos"),$(".objetivos__especificos"));

/*=====  End of Tabla objetivos específicos  ======*/


/*========================================
=            Lineas Políticas            =
========================================*/

/*=======================================
=            Llamar checkeds            =
=======================================*/

	function validacionRegistroChecksCrea(parametro1){

		var sumadorCheked=0;

	     $(parametro1).each(function(index) {
	         var condicion = $(parametro1).is(":checked");
	         if (condicion) {
	         	sumadorCheked++;
	         }
	     });

	     if (sumadorCheked>0) {
	     	return true;
	     }else{
	     	return false;
	     }

	}

/*=====  End of Llamar checkeds  ======*/



var lineasPoliticas=function(parametro1,parametro2,parametro3){


	$(parametro1).click(function(e){

		var condicion = $(parametro1).is(":checked");

		/*===============================
		=            Línea 1            =
		===============================*/
		
		var condicionLinea1 = $("#linea1").is(":checked");

		var checkedsLinea1=validacionRegistroChecksCrea(".checkeds__linea1");
		
		/*=====  End of Línea 1  ======*/
		

		/*===============================
		=            Línea 2            =
		===============================*/
		
		var condicionLinea2= $("#linea2").is(":checked");

		var checkedsLinea2=validacionRegistroChecksCrea(".checkeds__linea2");
		
		/*=====  End of Línea 2  ======*/

		/*===============================
		=            Línea 3            =
		===============================*/
		
		var condicionLinea3= $("#linea3").is(":checked");

		var checkedsLinea3=validacionRegistroChecksCrea(".checkeds__linea3");		
		
		/*=====  End of Línea 3  ======*/
		
		if(parametro3==3 && checkedsLinea3==true && !condicionLinea3){

			alertify.set("notifier","position", "top-right");
			alertify.notify("No se puede deseleccionar debido a que tiene marcado un objetivo estratégico en la línea política 3", "error", 5, function(){});

			e.preventDefault(); 

		}else if(parametro3==2 && checkedsLinea2==true && !condicionLinea2){

			alertify.set("notifier","position", "top-right");
			alertify.notify("No se puede deseleccionar debido a que tiene marcado un objetivo estratégico en la línea política 2", "error", 5, function(){});

			e.preventDefault(); 

		}else if (parametro3==1 && checkedsLinea1==true && !condicionLinea1) {


			alertify.set("notifier","position", "top-right");
			alertify.notify("No se puede deseleccionar debido a que tiene marcado un objetivo estratégico en la línea política 1", "error", 5, function(){});

			e.preventDefault(); 

		}else if (condicion) {

			switch (parametro3) {

	  			case 1:
	  				
	  				if (!condicionLinea1) {

	  					$(parametro2).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__1"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">Objetivo Estratégico 1: Contar con un marco jurídico funcional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 1: Contar con un marco jurídico funcional" id="objetivo1" name="objetivo1" class="check__estilos__lineas checkeds__linea1"></center></td></tr></table>');


 						$(parametro2).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__2"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__2">Objetivo Estratégico 2: Desarrollar un sistema de comunicación del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 2: Desarrollar un sistema de comunicación del DEFIRE" id="objetivo2" name="objetivo2" class="check__estilos__lineas checkeds__linea1"></center></td></tr></table>');


	  					$(parametro2).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__3"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__3">Objetivo Estratégico 3: Instaurar un sistema de formación y actualización continua para los actores del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 3: Instaurar un sistema de formación y actualización continua para los actores del DEFIRE" id="objetivo3" name="objetivo3" class="check__estilos__lineas checkeds__linea1"></center></td></tr></table>');



						$(parametro2).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__4"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__4">Objetivo Estratégico 4: Implementar un sistema nacional de información del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 4: Implementar un sistema nacional de información del DEFIRE" id="objetivo4" name="objetivo4" class="check__estilos__lineas checkeds__linea1"></center></td></tr></table>');


						$(parametro2).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__5"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__5">Objetivo Estratégico 5: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 5: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE" id="objetivo5" name="objetivo5" class="check__estilos__lineas checkeds__linea1"></center></td></tr></table>');

						$(parametro2).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__6"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__6">Objetivo Estratégico 6: Garantizar la participación ciudadana en la política pública del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 6: Garantizar la participación ciudadana en la política pública del DEFIRE" id="objetivo6" name="objetivo6" class="check__estilos__lineas checkeds__linea1"></center></td></tr></table>');

						$(parametro2).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__7"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__7">Objetivo Estratégico 7: Propiciar la investigación aplicada al DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 7: Propiciar la investigación aplicada al DEFIRE" id="objetivo7" name="objetivo7" class="check__estilos__lineas checkeds__linea1"></center></td></tr></table>');


	  					$(parametro2).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__8"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__8">Objetivo Estratégico 8: Lograr sostenibilidad financiera del sistema nacional del DEFIRE y sus organismos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 8: Lograr sostenibilidad financiera del sistema nacional del DEFIRE y sus organismos" id="objetivo8" name="objetivo8" class="check__estilos__lineas checkeds__linea1"></center></td></tr></table>');


						$(parametro2).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__9"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__9">Objetivo Estratégico 9: Establecer modelos de gestión de calidad en los organismos del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 9: Establecer modelos de gestión de calidad en los organismos del DEFIRE" id="objetivo9" name="objetivo9" class="check__estilos__lineas checkeds__linea1"></center></td></tr></table>');


	  					$(parametro2).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__10"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__10">Objetivo Estratégico 10: Optimizar la infraestructura del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 10: Optimizar la infraestructura del DEFIRE" id="objetivo10" name="objetivo10" class="check__estilos__lineas checkeds__linea1"></center></td></tr></table>');


	  					$(parametro2).append('<table class="objetivos__alineados1 objetivos__alineados1Objetivo__11"><tr class="objetivos__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__11">Objetivo Estratégico 11: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" texto="Objetivo Estratégico 11: Lograr un modelo de coordinación y coparticipación interinstitucional del DEFIRE" id="objetivo11" name="objetivo11" class="check__estilos__lineas checkeds__linea1"></center></td></tr></table>');


	  				}

	  				
	  				/*======================================
	  				=            Generar tablas            =
	  				======================================*/
	  				
	  				var generarTablasEspecificas=function(parametro1,parametro2,parametro3,parametro4){

						$(parametro1).click(function(){

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

							}else{


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

					generarTablasEspecificas($("#objetivo1"),$(".objetivos__alineados1Objetivo__1"),1,$(".objetivo__indicador__1"));
					generarTablasEspecificas($("#objetivo2"),$(".objetivos__alineados1Objetivo__2"),2,$(".objetivo__indicador__2"));
					generarTablasEspecificas($("#objetivo3"),$(".objetivos__alineados1Objetivo__3"),3,$(".objetivo__indicador__3"));
	  				generarTablasEspecificas($("#objetivo4"),$(".objetivos__alineados1Objetivo__4"),4,$(".objetivo__indicador__4"));
					generarTablasEspecificas($("#objetivo5"),$(".objetivos__alineados1Objetivo__5"),5,$(".objetivo__indicador__5"));
					generarTablasEspecificas($("#objetivo6"),$(".objetivos__alineados1Objetivo__6"),6,$(".objetivo__indicador__6"));
					generarTablasEspecificas($("#objetivo7"),$(".objetivos__alineados1Objetivo__7"),7,$(".objetivo__indicador__7"));
					generarTablasEspecificas($("#objetivo8"),$(".objetivos__alineados1Objetivo__8"),8,$(".objetivo__indicador__8"));
					generarTablasEspecificas($("#objetivo9"),$(".objetivos__alineados1Objetivo__9"),9,$(".objetivo__indicador__9"));
	  				generarTablasEspecificas($("#objetivo10"),$(".objetivos__alineados1Objetivo__10"),10,$(".objetivo__indicador__10"));
					generarTablasEspecificas($("#objetivo11"),$(".objetivos__alineados1Objetivo__11"),11,$(".objetivo__indicador__11"));
					

	  				/*=====  End of Generar tablas  ======*/
	  				

	  			break;

	  			case 2:

	  				if(!condicionLinea2){

	  					$(parametro2).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__1"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__1">Objetivo Estratégico 1: Conseguir que los ciudadanos adopten la cultura física</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos1" name="objetivoLineaDos1" class="check__estilos__lineas checkeds__linea2"></center></td></tr></table>');

		  				$(parametro2).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__2"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__2">Objetivo Estratégico 2: Posicionar al país como sede de eventos internacionales del DEFIRE</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos2" name="objetivoLineaDos2" class="check__estilos__lineas checkeds__linea2"></center></td></tr></table>');

		  				$(parametro2).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__3"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__3">Objetivo Estratégico 3: Promover la práctica de la educación física en el sistema educativo</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos3" name="objetivoLineaDos3" class="check__estilos__lineas checkeds__linea2"></center></td></tr></table>');

		  				 $(parametro2).append('<table class="objetivos__alineados2 objetivos__alineados2Objetivo__4"><tr class="objetivos__alineados2"><td style="padding:.5em; width:90%;" class="objetivo2__indicador__4">Objetivo Estratégico 4: Incrementar la oferta de programas para cada grupo etario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="objetivoLineaDos4" name="objetivoLineaDos4" class="check__estilos__lineas checkeds__linea2"></center></td></tr></table>');

	  				}

		  				/*======================================
		  				=            Generar tablas            =
		  				======================================*/
		  	  			var generarTablasEspecificas2=function(parametro1,parametro2,parametro3,parametro4){

							$(parametro1).click(function(){

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

											$(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.1 Estímulo para el desarrollo de eventos internacionales del DEFIRE en conjunto con los entes territoriales, organismos deportivos, e instituciones públicas y privadas</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo1" name="posicionarPaisObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo2" /></center></td></tr>');

											$(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.2 Preparación de la dirigencia ecuatoriana en liderazgo para el posicionamiento a nivel internacional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo2" name="posicionarPaisObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo2" /></center></td></tr>');

											$(parametro2).append('<tr class="objetivos__alineados2Objetivo2 objetivos__alineados2"><td style="padding:.5em; width:90%;">2.3 Desarrollo de programas que resalte la labor de los atletas, entrenadores, dirigentes y voluntariado, a través del reconocimiento local, zonal, nacional e internacional</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="posicionarPaisObjetivo3" name="posicionarPaisObjetivo3" class="check__estilos__lineas checkeds__linea2Objetivo2" /></center></td></tr>');


										break;

										case 3:

											$(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.1 Implementación de la oferta de programas incluyentes para la oferta de programas incluyentes para la población estudiantil</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo1" name="practicaEducacionFisicaObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo3" /></center></td></tr>');

											$(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.2 Implementación de centros especializados de educación física incluyente en alianza con los gobiernos locales y empresa privada</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo2" name="practicaEducacionFisicaObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo3" /></center></td></tr>');

											$(parametro2).append('<tr class="objetivos__alineados2Objetivo3 objetivos__alineados2"><td style="padding:.5em; width:90%;">3.3 Implementación de eventos deportivos incluyentes que permitan la integración del sistema</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="practicaEducacionFisicaObjetivo3" name="practicaEducacionFisicaObjetivo3" class="check__estilos__lineas checkeds__linea2Objetivo3" /></center></td></tr>');


										break;

										case 4:

											$(parametro2).append('<tr class="objetivos__alineados2Objetivo4 objetivos__alineados2"><td style="padding:.5em; width:90%;">4.1 Masificación del DEFIRE con una amplia gama de oferta de programas por grupo etario</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="masificacionDefireObjetivo1" name="masificacionDefireObjetivo1" class="check__estilos__lineas checkeds__linea2Objetivo4" /></center></td></tr>');

											$(parametro2).append('<tr class="objetivos__alineados2Objetivo4 objetivos__alineados2"><td style="padding:.5em; width:90%;">4.2 Gama de oferta de programas para personas con discapacidad</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="masificacionDefireObjetivo2" name="masificacionDefireObjetivo2" class="check__estilos__lineas checkeds__linea2Objetivo4" /></center></td></tr>');

										break;


									}				


								}else{

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

		  				generarTablasEspecificas2($("#objetivoLineaDos1"),$(".objetivos__alineados2Objetivo__1"),1,$(".objetivo2__indicador__1"));
		  				generarTablasEspecificas2($("#objetivoLineaDos2"),$(".objetivos__alineados2Objetivo__2"),2,$(".objetivo2__indicador__2"));
		  				generarTablasEspecificas2($("#objetivoLineaDos3"),$(".objetivos__alineados2Objetivo__3"),3,$(".objetivo2__indicador__3"));
		  				generarTablasEspecificas2($("#objetivoLineaDos4"),$(".objetivos__alineados2Objetivo__4"),4,$(".objetivo2__indicador__4"));


		  				/*=====  End of Generar tablas  ======*/
		  				

	  			break;

	  			case 3:

	  				if(!condicionLinea3){

		  				$(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__1"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__1">Objetivo Estratégico 1: Mejorar significativamente las posiciones</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres1" name="objetivoLineaTres1" class="check__estilos__lineas checkeds__linea3"></center></td></tr></table>');

		  				$(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__2"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__2">Objetivo Estratégico 2: Implementar un sistema nacional de preparación y competición</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres2" name="objetivoLineaTres2" class="check__estilos__lineas checkeds__linea3"></center></td></tr></table>');

		  				$(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__3"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__3">Objetivo Estratégico 3: Incrementar la población de atletas convencionales y con discapacidad con resultados deportivos a nivel regional, continental y mundial</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres3" name="objetivoLineaTres3" class="check__estilos__lineas checkeds__linea3"></center></td></tr></table>');

		  				$(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__4"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__4">Objetivo Estratégico 4: Implementar las acciones del control dopaje en las delegaciones nacionales que representen al país</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres4" name="objetivoLineaTres4" class="check__estilos__lineas checkeds__linea3"></center></td></tr></table>');

		  				$(parametro2).append('<table class="objetivos__alineados3 objetivos__alineados3Objetivo__5"><tr class="objetivos__alineados3"><td style="padding:.5em; width:90%;" class="objetivo3__indicador__5">Objetivo Estratégico 5: Potenciar un sistema nacional de educación y prevención temprana del dopaje</td><td style="padding:.5em; width:90%;"><center><input type="checkbox" id="objetivoLineaTres5" name="objetivoLineaTres5" class="check__estilos__lineas checkeds__linea3"></center></td></tr></table>');

		  			}

	  				/*======================================
	  				=            Generar Tablas            =
	  				======================================*/
	  				
		  	  		var generarTablasEspecificas3=function(parametro1,parametro2,parametro3,parametro4){

						$(parametro1).click(function(){

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

							}else{

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

					generarTablasEspecificas3($("#objetivoLineaTres1"),$(".objetivos__alineados3Objetivo__1"),1,$(".objetivo3__indicador__1"));			
					generarTablasEspecificas3($("#objetivoLineaTres2"),$(".objetivos__alineados3Objetivo__2"),2,$(".objetivo3__indicador__2"));	
					generarTablasEspecificas3($("#objetivoLineaTres3"),$(".objetivos__alineados3Objetivo__3"),3,$(".objetivo3__indicador__3"));	
					generarTablasEspecificas3($("#objetivoLineaTres4"),$(".objetivos__alineados3Objetivo__4"),4,$(".objetivo3__indicador__4"));	
					generarTablasEspecificas3($("#objetivoLineaTres5"),$(".objetivos__alineados3Objetivo__5"),5,$(".objetivo3__indicador__5"));	
	  				
	  				/*=====  End of Generar Tablas  ======*/
	  				

	  			break;


	  		}


		}else{

			switch (parametro3) {

	  			case 1:
	  				
	  				$(".objetivos__alineados1").remove();

	  			break;

	  			case 2:
	  				
	  				$(".objetivos__alineados2").remove();

	  			break;

	  			case 3:
	  				
	  				$(".objetivos__alineados3").remove();

	  			break;


	  		}


		}


	});

}

lineasPoliticas($("#lineaPolitica1"),$(".body__politica1Contenedor"),1);
lineasPoliticas($("#lineaPolitica2"),$(".body__politica2Contenedor"),2);
lineasPoliticas($("#lineaPolitica3"),$(".body__politica3Contenedor"),3);

/*=====  End of Lineas Políticas  ======*/


/*========================================================
=            Objetivos Secretaría del deporte            =
========================================================*/

var objetivosSecretariaDelDeporte=function(parametro1,parametro2,parametro3){

	$(parametro1).click(function(e){

		var condicion = $(parametro1).is(":checked");

		if (condicion) {

			switch (parametro3) {

				case 1:

					$(parametro2).append('<tr class="objetivosSecretaria__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">1.1 Crear e implementar la Política Pública de la Cultura Física</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo1" name="incrementarFisicaSecretariaObjetivo1" class="check__estilos__lineas checkeds__ObjetivoMinisterio1"></center></td></tr>');

					$(parametro2).append('<tr class="objetivosSecretaria__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">1.2 Generar mecanismos de accesibilidad a la práctica de actividad física en igualdad de condiciones y oportunidades</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo2" name="incrementarFisicaSecretariaObjetivo2" class="check__estilos__lineas checkeds__ObjetivoMinisterio1"></center></td></tr>');

					$(parametro2).append('<tr class="objetivosSecretaria__alineados1"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">1.3 Fortalecer el desarrollo formativo de la práctica deportiva en la población</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo3" name="incrementarFisicaSecretariaObjetivo3" class="check__estilos__lineas checkeds__ObjetivoMinisterio1"></center></td></tr>');

				break;

				case 2:

					$(parametro2).append('<tr class="objetivosSecretaria__alineados2"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">2.1 Implementar un sistema nacional de priorización de deportes en coordinación con el Sistema Nacional de Cultura Física</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo4" name="incrementarFisicaSecretariaObjetivo4" class="check__estilos__lineas checkeds__ObjetivoMinisterio2"></center></td></tr>');

					$(parametro2).append('<tr class="objetivosSecretaria__alineados2"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">2.2 Renovar el Plan de Alto Rendimiento con proyección a incrementar logros deportivos</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo5" name="incrementarFisicaSecretariaObjetivo5" class="check__estilos__lineas checkeds__ObjetivoMinisterio2"></center></td></tr>');

					$(parametro2).append('<tr class="objetivosSecretaria__alineados2"><td style="padding:.5em; width:90%;" class="objetivo__indicador__1">2.3 Organizar eventos del ciclo olímpico y paralímpico</td><td style="padding:.5em; width:10%;"><center><input type="checkbox" id="incrementarFisicaSecretariaObjetivo6" name="incrementarFisicaSecretariaObjetivo6" class="check__estilos__lineas checkeds__ObjetivoMinisterio2"></center></td></tr>');

				break;


			}


		}else{

			switch (parametro3) {

				case 1:

					$(".objetivosSecretaria__alineados1").remove();

				break;

				case 2:

					$(".objetivosSecretaria__alineados2").remove();

				break;


			}


		}

	});

}

objetivosSecretariaDelDeporte($("#objetivoEstregicoSecretaria1"),$(".body__objetivoEstregico__uno"),1);
objetivosSecretariaDelDeporte($("#objetivoEstregicoSecretaria2"),$(".body__objetivoEstregico__dos"),2);

/*=====  End of Objetivos Secretaría del deporte  ======*/



});