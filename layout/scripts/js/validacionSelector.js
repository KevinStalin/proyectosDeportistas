$(document).ready(function () {

/*=========================================
=            Valida Selectores            =
=========================================*/


var provincias=function(parametro1){

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

provincias($("#provincia"));
provincias($("#provinciaFederacion"));
provincias($("#provinciaActa"));


var cantones=function(parametro1,parametro2){

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

cantones($("#canton"),$("#provincia"));
cantones($("#cantonFederacion"),$("#provinciaFederacion"));
cantones($("#cantonActa"),$("#provinciaActa"));


var parroquias=function(parametro1,parametro2){

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

parroquias($("#parroquia"),$("#canton"));
parroquias($("#parroquiaFederacion"),$("#cantonFederacion"));
parroquias($("#parroquiaActa"),$("#cantonActa"));

/*=====  End of Valida Selectores  ======*/

});