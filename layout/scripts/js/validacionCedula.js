$(document).ready(function () {


	/*=========================================
	=            Buscar por cedula            =
	=========================================*/
	
	var cedulaBuscadora=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6){

	  $(parametro1).click(function(e){


	  	  $(parametro1).hide();
	 	
	  	  $(parametro2).html('<img src="images/reloadGit.webp" style="height:35px; margin-left: .5em; border-radius: .5em; cursor: pointer;">');

	      $.ajax({

	          url:"php/dinardap.php",
	          type:"POST",
	          dataType:"json",
	          data:"cedula="+$(parametro3).val(),
	          success:function(datos){


	               if (datos.mensaje==10) {
	                 
	                  swal({
	                    type: "warning",
	                    title: "La cédula no existe",
	                    showConfirmButton: true,
	                    confirmButtonText: "Cerrar",
	                    timer: 4000
	                  });

	                  $(parametro2).html('');

	                  $(parametro1).show();

	               }else{

	                  // recuperación de datos de la dinardap
	                  $(parametro4).val(datos.nombre);

	                  if (parametro5!=false) {

		                  $(parametro5).val(datos.sexo);
		                  $(parametro6).val(datos.fechaNacimiento);

	                  }

	                  $(parametro2).html('');

	                  $(parametro1).show();

	               }
	             
	               

	          },
	          error:function(response,status,error)
	          {
	            alert("no encontrado");
	          } 

	     });

	  });

	}

	cedulaBuscadora($("#buscarCedula"),$(".contenedor__cedula__registro"),$("#cedulaUsuario"),$("#nombreCompleto"),$("#sexo"),$("#fechaNacimiento"));
	cedulaBuscadora($("#buscarCedulaRepresentanteLegal"),$(".contenedor__cedula__representante__legal"),$("#representanteLegalCedula"),$("#representanteLegal"),false,false);
	
	/*=====  End of Buscar por cedula  ======*/
	

	/*======================================
	=            Buscar por Ruc            =
	======================================*/
	
	var rucBuscador=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6,parametro7,parametro8){

	  $(parametro1).click(function(e){


	  	  $(parametro1).hide();
	 	
	  	  $(parametro2).html('<img src="images/reloadGit.webp" style="height:35px; margin-left: .5em; border-radius: .5em; cursor: pointer;">');

	      $.ajax({

	          url:"php/dinardapSegundo.php",
	          type:"POST",
	          dataType:"json",
	          data:"cedula="+$(parametro3).val(),
	          success:function(datos){


	               if (datos.razonSocial=="") {
	                 
	                  swal({
	                    type: "warning",
	                    title: "El ruc no existe",
	                    showConfirmButton: true,
	                    confirmButtonText: "Cerrar",
	                    timer: 4000
	                  });

	                  $(parametro2).html('');

	                  $(parametro1).show();

	               }else{

	                  // recuperación de datos de la dinardap
	                  $(parametro4).val(datos.razonSocial);

	                  $(parametro2).html('');

	                  $(parametro1).show();

	                  if (parametro8==true) {

		                  if ($(parametro7).val()=="noFederado") {

		                  	$(parametro6).hide();

		                  	$(parametro5).show();

		                  }else{

		                  	$(parametro5).hide();

		                  	$(parametro6).show();

							if ($(parametro7).val()=="profesional") {

								$("#certificadoFederacion option[value='0']").html('--Seleccione si posee certificado de federación o liga profecional-');
							
							}else{

								$("#certificadoFederacion option[value='0']").html('--Seleccione si posee certificado de federación-');

							}	                  	


		                  }

	                  }

	               }
	             
	               

	          },
	          error:function(response,status,error)
	          {
	            alert("no encontrado");
	          } 

	     });

	  });

	}

	rucBuscador($("#buscarRuc"),$(".contenedor__ruc__registro"),$("#rucOrganismoDeportista"),$("#nombreOrganismoDeportista"),$(".documentos__no__deportistas"),$(".documentos__deportistas"),$("#tipoAtleta"),true);	

	rucBuscador($("#buscarRucOrganismo"),$(".contenedor__ruc__organismo"),$("#rucOrganismo"),$("#nombreOrganismo"),false);	
	
	/*=====  End of Buscar por Ruc  ======*/
	

});