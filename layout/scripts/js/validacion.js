$(document).ready(function () {


/*============================================
=            Eliminar los errores            =
============================================*/

$('.text__errores').on('input', function (e){

	$(this).removeClass('error');

});

/*=====  End of Eliminar los errores  ======*/

/*====================================
=            Solo números            =
====================================*/

 $(".solo__numero").on('input', function () {

     this.value = this.value.replace(/[^0-9]/g, '');

 });


 $(".solo__numero__montos").on('input', function () {

     this.value = this.value.replace(/[^0-9,.]/g, '').replace(',','.');

 });


 $(".no__especiales").on('input', function () {

     this.value = this.value.replace(/^[^A-Za-z]+$/g, '');

 });

/*=====  End of Solo números  ======*/


/*=========================================
=            valida caracteres            =
=========================================*/

var validarCaracteres=function(parametro1,parametro2,parametro3,parametro4){

	$(parametro1).keyup(function(e){


	 if (parametro2.test($(this).val().trim())){

	    	$(parametro3).html("");


	  }else {

	  		switch (parametro4) {

	  			case 0:
	  				$(parametro3).html("Correo electrónico no válido debe tener @ y un .");
	  			break;

	  			case 1:
	  				$(parametro3).html("El usuario debe comenzar con letras y no debe tener caracteres especiales, debe tener un mínimo de 4 caracteres y máximo de 16 caracteres (Solo se acepta @,punto,- y _)");
	  			break;

	  			case 2:
	  				$(parametro3).html("La contraseña debe comenzar con letras y no puede tener caracteres especiales y debe tener un mínimo de 5 caracteres y máximo de 16");
	  			break;

	  			case 3:
	  				$(parametro3).html("La contraseña debe comenzar con letras y no puede tener caracteres especiales y debe tener un mínimo de 5 caracteres y máximo de 16");
	  			break;

	  		}

	    	

	        $(parametro3).css("color","red");

	        $(parametro3).css("font-size","10px");

	  }


	 });

}

validarCaracteres($(".email__validar"),/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/,$(".counterCorreo"),0);

validarCaracteres($(".validar__usuario"),/^[a-zA-Z0-9\.\@\-\_\.]{4,16}$/,$(".counterUsuario"),1);

validarCaracteres($(".contrasena__uno"),/^[a-zA-Z0-9]{5,16}/,$(".counterContrasena"),2);

validarCaracteres($(".contrasena__dos"),/^[a-zA-Z0-9]{5,16}/,$(".counterContrasenaConfirmar"),3);

validarCaracteres($(".correoRepre"),/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/,$(".correoRepreValida"),0);

validarCaracteres($(".correo__ciudadano"),/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/,$(".correoCiudadanoValida"),0);

/*=====  End of valida caracteres  ======*/


/*==================================================
=            Validar igualdad de campos            =
==================================================*/

var passwordConfimacion=function(parametro1,parametro2,parametro3){

$(parametro2).keyup(function(e){

	var arreglo=new Array();

	var variable1="";
	var variable2="";

	$(parametro1).each(function(index) {
		variable1=$(this).val();
	});

	$(parametro2).each(function(index) {
		variable2=$(this).val();
	});

	if(variable1!=variable2){

		$(parametro3).html("Las dos contraseñas no coinciden");

		$(parametro3).css("color","blue");

		$(parametro3).css("font-size","10px");

	}else{

		$(".counterIgualdad").html("");

	}

  });

}

passwordConfimacion($(".password__secuenciales__0"),$(".password__secuencialesSegundo__0"),$(".counterIgualdad"));
passwordConfimacion($(".password__secuenciales__1"),$(".password__secuencialesSegundo__1"),$(".counterIgualdad"));

/*=====  End of Validar igualdad de campos  ======*/


/*=============================================
=            Longitud de elementos            =
=============================================*/

var longitudCaracteres=function(parametro1,parametro2,counter){

$(parametro1).keyup(function(e){

   if($(this).val().length > parametro2){

        $(this).val($(this).val().substr(0, parametro2));

        counter.html("Son máximo <strong>"+parametro2+"caracteres</strong>");

        counter.css("color","red");

    }else{

      // counter.html("<strong>"+$(this).val().length +"</strong>");

      counter.css("color","black");

      counter.css("font-size","10px");

    }


 });

}

longitudCaracteres($(".cedula__longitud"),10,$(".counterCedula"));

longitudCaracteres($(".cedula__longitud"),10,$(".counterCedulaRepresentanteLegal"));

longitudCaracteres($(".ruc__longitud"),13,$(".counterRuc"));

longitudCaracteres($(".ruc__longitud__deportistas"),13,$(".counter__ruc__deportistas"));

longitudCaracteres($(".cedula__longitud"),15,$(".counterTelfonos"));

longitudCaracteres($("#nombreProyecto"),100,$(".counter__proyecto"));

longitudCaracteres($("#alcanse"),100,$(".counter__alcanse"));

longitudCaracteres($(".numeracion"),10,$(".counter__numeracion"));

longitudCaracteres($(".telefonos__usados"),10,$(".counter__numeracion"));

/*=====  End of Longitud de elementos  ======*/

/*=========================================
=            Minímo caracteres            =
=========================================*/
		
var longitudCaracteresMinimaConjuntos=function(parametro1,parametro2,counter){

	$(parametro1).keyup(function(e){

		var words = $(parametro1).val().split(' '); 

		if(words.length < parametro2){

			counter.html("Son mínimo <strong>"+parametro2+" palabras</strong>");

			counter.css("color","red");

		}else{

			 counter.html("");

			 counter.css("color","black");

			 counter.css("font-size","10px");

		}

	});

}

longitudCaracteresMinimaConjuntos($("#analisisSituacionActual"),150,$(".counter__analisisSituacional"));
longitudCaracteresMinimaConjuntos($("#justificacionCaracterizacion"),200,$(".counter__justificacion"));
longitudCaracteresMinimaConjuntos($("#objetivoGeneralCaracterizacion"),20,$(".counter__objetivoGeneral"));
longitudCaracteresMinimaConjuntos($("#alineacionEstrategicaCampos"),40,$(".counter__alineacion"))		
		
/*=====  End of Minímo caracteres  ======*/


/*===============================
=            Celular            =
===============================*/

var celularValidas=function(parametro1){

	$(parametro1).click(function(){

		$(this).val('09');

	});


	$(parametro1).keyup(function(e){

	 	if($(this).val().length<=2){

	 		if(e.keyCode == 8){

	 			$(this).val('09');

	 		}

	 	}

	});

}

celularValidas($(".telefono__celular"));

/*=====  End of Celular  ======*/


/*====================================
=            Convencional            =
====================================*/

var convencionalValidas=function(parametro1){

	$(parametro1).click(function(){

		$(this).val('02');

	});


	$(parametro1).keyup(function(e){

	 	if($(this).val().length<=2){

	 		if(e.keyCode == 8){

	 			$(this).val('02');

	 		}

	 	}

	});

}

convencionalValidas($(".telefono__convencional"));

/*=====  End of Convencional  ======*/


/*==============================================
=            Recuperar credenciales            =
==============================================*/

var recuperarCredenciales=function(parametro1,parametro2,parametro3){

	$(parametro1).click(function(){

		var paqueteDeDatos = new FormData();

		paqueteDeDatos.append('codigoGenerado', $('#codigoGenerado').prop('value'));

		paqueteDeDatos.append('usuarioIngresados', $('#usuarioIngresados').prop('value'));

		var destino="modelosBd/validaciones/selectorContrasenas.modelo.php";

		$.ajax({

			type:"POST",
	        url: destino,
	        type: 'POST',
	        contentType: false,
	        data: paqueteDeDatos, 
	        processData: false,
	        cache: false, 

			success:function(response){

				var elementos=JSON.parse(response);
	            var mensaje=elementos['mensaje'];
	            var idUsuario=elementos['idUsuario'];

	            if (mensaje==1) {

					alertify.set("notifier","position", "top-right");
	                alertify.notify("Usuario o código no existen", "error", 4, function(){});	

	            }else if(mensaje==2){



					alertify.set("notifier","position", "top-right");
	                alertify.notify("Datos Coinciden", "success", 4, function(){});	

	                $(parametro2).val(idUsuario);

	                $(parametro1).hide();  		

	                $(parametro3).show();  	

	            }

			}

		});

	});


}

recuperarCredenciales($("#registrarCredenciales"),$("#contrasenasGeneradas"),$(".escondido__codigo"));


/*=====  End of Recuperar credenciales  ======*/

/*======================================
=            Reenvía código            =
======================================*/

var reenviarCodigo=function(parametro1,parametro2){

	$(parametro1).click(function(){

		if($(parametro2).val()=="" || $(parametro2).val()==undefined){


			alertify.set("notifier","position", "top-right");
		    alertify.notify("Es obligatorio ingresar el usuario", "error", 4, function(){});	

		}else{

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('usuarioIngresados', $('#usuarioIngresados').prop('value'));

			var destino="modelosBd/validaciones/selectorContrasenasReenvio.modelo.php";

			$.ajax({

				type:"POST",
		        url: destino,
		        type: 'POST',
		        contentType: false,
		        data: paqueteDeDatos, 
		        processData: false,
		        cache: false, 

				success:function(response){

					var elementos=JSON.parse(response);
		            var mensaje=elementos['mensaje'];
		            var email=elementos['email'];

		            if (mensaje==1) {

						alertify.set("notifier","position", "top-right");
		                alertify.notify("Usuario no registrado", "error", 4, function(){});	

		            }else if(mensaje==2){

		            	alertify.set("notifier","position", "top-right");
		                alertify.notify("Su email registrado es "+email, "success", 4, function(){});	

						$(".oculto__informacion").show(); 	

						$(".boton__reenvios").hide();

		            }

				}

			});

		}

	});


}

reenviarCodigo($("#reenviaCodigo"),$("#usuarioIngresados"));

/*=====  End of Reenvía código  ======*/


/*==============================================
=            con los radios bootoms            =
==============================================*/

var radioInformacionVisible=function(parametro1,parametro2){

	$(parametro1).click(function(){
	
		if ($(this).val()=="si") {

			$(parametro2).show();

		}else{

			$(parametro2).hide();
		}

	});


}

radioInformacionVisible($(".carga__proyecto"),$(".proyecto__cargas"));


var radioInformacionVisible2=function(parametro1,parametro2,parametro3){

	$(parametro1).click(function(){
	
		if ($(this).val()=="si") {

			$(parametro2).show();

			$(parametro3).hide();

		}else{

			$(parametro3).show();

			$(parametro2).hide();

		}

	});


}
radioInformacionVisible2($(".carga__certificadoFederacion"),$(".certificado__federativos"),$(".oculto__razon"));

radioInformacionVisible2($(".porque__no__tiene"),$(".certificado__organismo__superior"),$(".solicitud__federaciones"));

radioInformacionVisible2($(".carga__avales"),$(".aval__documento"),$(".oculto__razon__aval"));

radioInformacionVisible2($(".porque__no__tiene__aval"),$(".aval__organismo__superior"),$(".aval__solciitudes__federaciones"));

/*=====  End of con los radios bootoms  ======*/



/*=====================================================================
=            Activar validación al salir del campo activos            =
=====================================================================*/

$('#nombreOrganismoDeportista').on('keyup', function (e){

	if ($("#tipoAtleta").val()=="noFederado") {

		$(".documentos__no__deportistas").show();

		$(".documentos__deportistas").hide();

	}else{

		$(".documentos__deportistas").show();

		$(".documentos__no__deportistas").hide();

		if ($("#tipoAtleta").val()=="profesional") {

			$("#certificadoFederacion option[value='0']").html('--Seleccione si posee certificado de federación o liga profecional-');
		
		}else{

			$("#certificadoFederacion option[value='0']").html('--Seleccione si posee certificado de federación-');

		}

	}

});

/*=====  End of Activar validación al salir del campo activos  ======*/


/*===============================
=            Checbox            =
===============================*/

var checkboxFunciones=function(parametro1,parametro2,parametro3){

	$(parametro1).click(function(){
	
	    var condicion = $(this).is(":checked");

	    if (condicion) {

	      $(parametro2).hide();

	      $(parametro3).show();

	    }else{

	      $(parametro2).show();

	      $(parametro3).hide();

	   }


	});


}
checkboxFunciones($("#checkboxProyecto2020"),$(".oculto__proyecto2020"),$(".oculto__contratos"));

/*=====  End of Checbox  ======*/


/*========================================
=            Números a letras            =
========================================*/

var numeroALetras = (function() {

    function Unidades(num){

        switch(num)
        {
            case 1: return 'UN';
            case 2: return 'DOS';
            case 3: return 'TRES';
            case 4: return 'CUATRO';
            case 5: return 'CINCO';
            case 6: return 'SEIS';
            case 7: return 'SIETE';
            case 8: return 'OCHO';
            case 9: return 'NUEVE';
        }

       return '';

    }

    function Decenas(num){

        let decena = Math.floor(num/10);
        let unidad = num - (decena * 10);

        switch(decena)
        {
            case 1:
                switch(unidad)
                {
                    case 0: return 'DIEZ';
                    case 1: return 'ONCE';
                    case 2: return 'DOCE';
                    case 3: return 'TRECE';
                    case 4: return 'CATORCE';
                    case 5: return 'QUINCE';
                    default: return 'DIECI' + Unidades(unidad);
                }
            case 2:
                switch(unidad)
                {
                    case 0: return 'VEINTE';
                    default: return 'VEINTI' + Unidades(unidad);
                }
            case 3: return DecenasY('TREINTA', unidad);
            case 4: return DecenasY('CUARENTA', unidad);
            case 5: return DecenasY('CINCUENTA', unidad);
            case 6: return DecenasY('SESENTA', unidad);
            case 7: return DecenasY('SETENTA', unidad);
            case 8: return DecenasY('OCHENTA', unidad);
            case 9: return DecenasY('NOVENTA', unidad);
            case 0: return Unidades(unidad);
        }
    }//Unidades()

    function DecenasY(strSin, numUnidades) {
        if (numUnidades > 0)
            return strSin + ' Y ' + Unidades(numUnidades)

        return strSin;
    }//DecenasY()

    function Centenas(num) {
        let centenas = Math.floor(num / 100);
        let decenas = num - (centenas * 100);

        switch(centenas)
        {
            case 1:
                if (decenas > 0)
                    return 'CIENTO ' + Decenas(decenas);
                return 'CIEN';
            case 2: return 'DOSCIENTOS ' + Decenas(decenas);
            case 3: return 'TRESCIENTOS ' + Decenas(decenas);
            case 4: return 'CUATROCIENTOS ' + Decenas(decenas);
            case 5: return 'QUINIENTOS ' + Decenas(decenas);
            case 6: return 'SEISCIENTOS ' + Decenas(decenas);
            case 7: return 'SETECIENTOS ' + Decenas(decenas);
            case 8: return 'OCHOCIENTOS ' + Decenas(decenas);
            case 9: return 'NOVECIENTOS ' + Decenas(decenas);
        }

        return Decenas(decenas);
    }//Centenas()

    function Seccion(num, divisor, strSingular, strPlural) {
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let letras = '';

        if (cientos > 0)
            if (cientos > 1)
                letras = Centenas(cientos) + ' ' + strPlural;
            else
                letras = strSingular;

        if (resto > 0)
            letras += '';

        return letras;
    }//Seccion()

    function Miles(num) {
        let divisor = 1000;
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let strMiles = Seccion(num, divisor, 'UN MIL', 'MIL');
        let strCentenas = Centenas(resto);

        if(strMiles == '')
            return strCentenas;

        return strMiles + ' ' + strCentenas;
    }//Miles()

    function Millones(num) {
        let divisor = 1000000;
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let strMillones = Seccion(num, divisor, 'UN MILLON DE', 'MILLONES DE');
        let strMiles = Miles(resto);

        if(strMillones == '')
            return strMiles;

        return strMillones + ' ' + strMiles;
    }//Millones()

    return function NumeroALetras(num, currency) {
        currency = currency || {};
        let data = {
            numero: num,
            enteros: Math.floor(num),
            centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
            letrasCentavos: '',
            letrasMonedaPlural: currency.plural || 'PESOS CHILENOS',//'PESOS', 'Dólares', 'Bolívares', 'etcs'
            letrasMonedaSingular: currency.singular || 'PESO CHILENO', //'PESO', 'Dólar', 'Bolivar', 'etc'
            letrasMonedaCentavoPlural: currency.centPlural || 'CHIQUI PESOS CHILENOS',
            letrasMonedaCentavoSingular: currency.centSingular || 'CHIQUI PESO CHILENO'
        };

        if (data.centavos > 0) {
            data.letrasCentavos = 'CON ' + (function () {
                    if (data.centavos == 1)
                        return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular;
                    else
                        return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;
                })();
        };

        if(data.enteros == 0)
            return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
        if (data.enteros == 1)
            return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
        else
            return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
    };

})();



$(".presupuesto__calculado").keyup(function(){
	
	$(".presupuestoLetras").val(numeroALetras($(this).val(), {plural: 'dólares de los Estados Unidos de Norteamérica',singular: 'dólar de los Estados Unidos de Norteamérica',centPlural: 'centavos',centSingular: 'centavo'}));

});

/*=====  End of Números a letras  ======*/


/*===========================================
=            Sección de eventos             =
===========================================*/

$('.entidad').on('change', function (e){

	if($(this).attr('validador')==1){

		$(".edita__2").val("0");

		$("#registro").hide();

		if ($(this).val()=="ciudadano") {

			$("#tipoAtleta").show();

			$("#tipoOrganismo").hide();

			$(".ingreso__usuarios").hide();

			$(".ingreso__organismosDeportivos").hide();

			$("#registro").hide();

			$("#porqueCertificado").val("0");

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").hide();

			$("#certificadoOrganismoSuperior").hide();

			$("#solicitudCertificacionRealizada").hide();

			$(".informacion__club__deportista").hide();

		}else if($(this).val()=="organismo"){

			$("#tipoAtleta").hide();

			$("#tipoOrganismo").show();

			$(".ingreso__usuarios").hide();

			$(".ingreso__organismosDeportivos").hide();

			$("#registro").hide();

			$("#porqueCertificado").val("0");

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").hide();

			$("#certificadoOrganismoSuperior").hide();

			$("#solicitudCertificacionRealizada").hide();

			$(".informacion__club__deportista").hide();


		}else{

			$("#tipoAtleta").hide();

			$("#tipoOrganismo").hide();

			$(".ingreso__usuarios").hide();

			$(".ingreso__organismosDeportivos").hide();

			$("#registro").hide();

			$("#porqueCertificado").val("0");

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").hide();

			$("#certificadoOrganismoSuperior").hide();

			$("#solicitudCertificacionRealizada").hide();

			$(".informacion__club__deportista").hide();

		}		

	}else if($(this).attr('validador')==2){

		$("#certificadoFederacion").val("0");

		$(".ingreso__usuarios").show();

		$(".ingreso__organismosDeportivos").hide();




		if ($("#tipoAtleta").val()=="profesional") {

			$("#certificadoFederacion option[value='0']").html('--Seleccione si posee certificado de federación o liga profecional-');
			
		}else{

			$("#certificadoFederacion option[value='0']").html('--Seleccione si posee certificado de federación-');

		}


		if($(this).val()=="0"){

			$(".ingreso__usuarios").hide();

			$("#registro").hide();

			$("#porqueCertificado").val("0");

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").hide();

			$("#certificadoOrganismoSuperior").hide();

			$("#solicitudCertificacionRealizada").hide();

		}else if($(this).val()=="noFederado"){

			$(".documentos__deportistas").hide();

			$("#registro").show();

			$("#porqueCertificado").val("0");

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").hide();

			$("#certificadoOrganismoSuperior").hide();

			$("#solicitudCertificacionRealizada").hide();

		}else{

			$(".documentos__no__deportistas").hide();

			$("#registro").show();

			$("#porqueCertificado").val("0");

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").hide();

			$("#certificadoOrganismoSuperior").hide();

			$("#solicitudCertificacionRealizada").hide();

		}



	}else if($(this).attr('validador')==3){

		$(".ingreso__organismosDeportivos").show();

		$(".ingreso__usuarios").hide();

		$("#registro").hide();

		if($(this).val()=="0"){

			$(".ingreso__organismosDeportivos").hide();

			$("#porqueCertificado").val("0");

		}else if($(this).val()=="recreativo"){

			$(".documentos__no__alto__rendimiento").show();

			$("#registro").show();

			$("#porqueCertificado").val("0");

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").hide();

			$("#certificadoOrganismoSuperior").hide();

			$("#solicitudCertificacionRealizada").hide();

		}else{

			$(".documentos__no__alto__rendimiento").hide();

			$("#registro").show();

			$("#porqueCertificado").val("0");

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").hide();

			$("#certificadoOrganismoSuperior").hide();

			$("#solicitudCertificacionRealizada").hide();

		}

	}else if($(this).attr('validador')==4){

		if($(this).val()=="si"){

			$("#certificadoOpsub").show();

			$("#respuestaDePeticion").hide();

			if ($("#tipoAtleta").val()=="profesional") {

				$(".label__texto__archivos").text("Cargar certificado de la federación o liga profesional");

			}else{

				$(".label__texto__archivos").text("Cargar certificado de la federación");	

			}


			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").text("");

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").hide();

			$("#certificadoOrganismoSuperior").hide();

			$("#solicitudCertificacionRealizada").hide();

			$("#porqueCertificado option[value='1']").html('--Porque la federación me rechazo--');

			$("#porqueCertificado option[value='2']").html('--Porque no tengo respuesta de la federación--');

			$("#registro").show();	

		}else if($(this).val()=="no"){

			$("#certificadoOpsub").hide();

			if ($("#tipoAtleta").val()=="militarDeportiva" || $("#tipoAtleta").val()=="formativo" || $("#tipoAtleta").val()=="profesional") {


				swal({
	               type: "warning",
	               title: "No se puede negar a cargar el certificado de la federación",
	               showConfirmButton: true,
	               confirmButtonText: "Cerrar",
	               timer: 4000
	             });

				$("#registro").hide();

			}else{

				$(".respuestas__certificadosFederaciones").show();
		
				$("#porqueCertificado option[value='1']").html('--Porque la federación o liga profesional me rechazo--');

				$("#porqueCertificado option[value='2']").html('--Porque no tengo respuesta de la federación o liga profecional--');

				$("#registro").show();			

			}

			$(".label__texto__archivos").text("");


		}else{

			$("#certificadoOpsub").hide();

			$("#respuestaDePeticion").hide();

			$(".label__texto__archivos").text("");

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").text("");

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").hide();

			$("#certificadoOrganismoSuperior").hide();

			$("#solicitudCertificacionRealizada").hide();



		}

	}else if($(this).attr('validador')==5){
		

		if($(this).val()==1){

			$(".label__texto__archivos__negativos").show();

			if ($("#tipoAtleta").val()=="profesional") {

				$(".label__texto__archivos__negativos").text("Cargar la certificación del organismo superior a la federación (comite olimpico ecuatoriano, o comite paralimpico ecuatoriano, o federación deportiva nacional del Ecuador) o liga profesional");

			}else{

				$(".label__texto__archivos__negativos").text("Cargar la certificación del organismo superior a la federación (comite olimpico ecuatoriano, o comite paralimpico ecuatoriano, o federación deportiva nacional del Ecuador)");

			}
		

			$("#certificadoOrganismoSuperior").show();

			$("#solicitudCertificacionRealizada").hide();

		}else if($(this).val()==2){

			$(".label__texto__archivos__negativos").show();

			if ($("#tipoAtleta").val()=="profesional") {

				$(".label__texto__archivos__negativos").text("Cargar la solicitud de certificacion realizada a la federación o liga profesional");

			}else{

				$(".label__texto__archivos__negativos").text("Cargar la solicitud de certificacion realizada a la federación");

			}


			$("#solicitudCertificacionRealizada").show();

			$("#certificadoOrganismoSuperior").hide();


		}else{

			$(".respuestas__certificadosFederaciones").hide();

			$(".label__texto__archivos__negativos").hide();

			$("#certificadoOrganismoSuperior").hide();

			$("#solicitudCertificacionRealizada").hide();

		}


	}

});

/*=====  End of Sección de eventos   ======*/

/*================================
=            Toll tip            =
================================*/

$('[data-toggle="tooltip"]').tooltip();

/*=====  End of Toll tip  ======*/



});