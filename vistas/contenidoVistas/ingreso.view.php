<style>

@media (max-width: 750px) {

	.frame,.frame2 {
	    width: 100%!important;
	}

	.btn-signup {
	    width: 50%;
	}

	.buscador__realizador{
		width: 15%;
	}

	.elementos__accesibles__anexos{

		width: 100%;

	}


}

</style>

<script>

$(document).ready(function () {

  $(".activacion__de__credenciales").click(function(e){

  	$(".validacion__texto").text("");

  	$(".validacion__texto").text("GENERACIÓN DE CREDENCIALES");

  });

});


</script>

<div class="wrapper row3">

	<div class="contenido__general">

		
  		<div class="frame formulario__inicial">

    		<div class="nav">

		      <ul class="links">

		        <li class="signin-active inicio__sesiones"><a class="btn" confirmador="ingreso">Ingreso</a></li>
		        <li class="signup-inactive inicio__sesiones"><a class="btn" confirmador="salida">Registrarse</a></li>

		      </ul>

    		</div>

		    <div ng-app ng-init="checked = false" class="elemento__contenedor__formularios">

				<form class="form-signin"  method="post" name="ingresoFormulario" id="ingresoFormulario">

					  <div style="font-size:8px; font-weight:bold; margin-bottom:1em; text-align:center; color:#b71c1c;">PARA MEJOR EXPERIENCIA SE RECOMIENDA LLENAR EL FORMULARIO DESDE UNA COMPUTADORA</div>

			          <label for="username" class="label__formularios">USUARIO</label>
			          <input class="form-styling text__errores" type="text" name="username" id="username" placeholder=""/>
			          <label for="password" class="label__formularios">CONTRASEÑA</label>
			          <input class="form-styling text__errores" type="password" name="password" id="password" placeholder=""/>

			          <div class="btn-animate">
			            <button type="submit"  class="btn-signin" name="ingresarUsuario" id="ingresarUsuario">INGRESAR</button>
			          </div>

				      

				      <?php


						require_once CONTROLADOR.CONTROLADOR3.'plantilla.general.controlador.php';

						require_once CONTROLADOR.CONTROLADOR2.'ingreso.controlador.php';

				         $ingreso= new ingreso();
				         $ingreso->ingresoCtr();
				      ?>     

					 <div class="activacion__de__credenciales" data-toggle="modal" data-target="#modalRegistro">RECUPERAR CREDENCIALES</div>  

				</form>
			        
				<div class="form-signup formulario__ingresos">


					<label for="fullname" class="label__formularios">Seleccione el tipo de solicitante</label>

					<select class="entidad selector__inicial" id="entidad" name="entidad" validador="1">

						<option value="0">--Seleccione el tipo de solicitante--</option>
						<option value="organismo">Organismo Deportivo / persona jurídica</option>
						<option value="ciudadano">Deportista /  persona natural</option>
						
					</select>


					<select class="entidad selector__inicial edita__2" id="tipoAtleta" name="tipoAtleta" validador="2">

						<option value="0">--Seleccione el tipo de deportista--</option>
						<option value="altoRendimiento">Pertenece a nivel de alto rendimiento</option>
						<option value="altoRendimientoDiscapacidad">Pertenece a nivel de alto rendimiento para personas con discapacidad</option>
						<option value="militarDeportiva">Pertenece a la Federación Deportiva Militar Ecuatoriana o Federación Deportiva Policial Ecuatoriana</option>
						<option value="formativo">Pertenece a nivel de deporte formativo</option>
						<option value="estudiantil">Pertenece a nivel formativo estudiantil</option>
						<option value="profesional">Pertenece a nivel de deporte profesional</option>
						<option value="noFederado">Ninguna de las anteriores</option>
						
					</select>

					<select class="entidad selector__inicial edita__2" id="tipoOrganismo" name="tipoOrganismo" validador="3">

						<option value="0">--Seleccione el tipo de Organismo Deportivo--</option>
						<option value="alto">Alto Rendimiento</option>
						<option value="alto2">Alto Rendimiento para personas con discpacidad</option>
						<option value="militarDeportiva">Pertenece a la Federación Deportiva Militar Ecuatoriana o Federación Deportiva Policial Ecuatoriana</option>
						<option value="formativo">Formativo</option>
						<option value="estudiantil">Pertenece a nivel formativo estudiantil</option>
						<option value="profesional">Profesional</option>
						<option value="recreativo">Recreativo</option>
						
					</select>

					<!--=========================================================
					=            Formulario de Organismos Deportivos            =
					==========================================================-->
					
					<form class="ingreso__organismosDeportivos clase__contenedora" id="organismos" name="organismos" method="POST">

						<div class="seccion__1">

						  <label for="fullname" class="label__formularios">* Ingresar Ruc</label>

						  <div class="clase__contenedora">
					          <input type="text" class="form-styling text__errores obligatorio__organismo ruc__longitud solo__numero" name="rucOrganismo" id="rucOrganismo" placeholder=""/>
					           <a class="buscador__realizador" id="buscarRucOrganismo" name="buscarRucOrganismo"><i class="fas fa-search icono__buscadores"></i></a>
					          <div class="contenedor__ruc__organismo"></div>
					      </div>
					      <div class="counterRuc"></div>

				          <label for="fullname" class="label__formularios">* Nombre Organismo deportivo</label>
				          <input type="text" class="form-styling text__errores obligatorio__organismo" name="nombreOrganismo" id="nombreOrganismo"  placeholder="" disabled="" />

				          <label for="fullname" class="label__formularios">* Provincia</label>
				          <select class="form-styling text__errores obligatorio__organismo provincia" id="provinciaFederacion" name="provinciaFederacion"></select>


				          <label for="fullname" class="label__formularios">* Cantón</label>
				          <select class="form-styling text__errores obligatorio__organismo canton" id="cantonFederacion" name="cantonFederacion"></select>


				          <label for="fullname" class="label__formularios">* Parroquia</label>
				          <select class="form-styling text__errores obligatorio__organismo parroquia" id="parroquiaFederacion" name="parroquiaFederacion"></select>

				          <label for="confirmpassword" class="label__formularios">* Celular</label>
				          <input type="text" class="form-styling text__errores obligatorio__organismo cedula__longitud solo__numero telefono__celular"  name="telefono" id="telefono"  placeholder=""/>
				          <div class="counterTelfonos"></div>


						</div>


						<div class="seccion__2">


				          <label class="label__formularios">* Dirección</label>
				          <input type="text" class="form-styling text__errores obligatorio__organismo"  name="direccion" id="direccion" placeholder=""/>

				          <label for="email" class="label__formularios">* Correo Electronico</label>
				          <input type="text" class="form-styling text__errores obligatorio__organismo email__validar" name="email" id="email" placeholder=""/>

				          <div class="counterCorreo"></div>


							
				          <label for="confirmpassword" class="label__formularios">* Cédula repersentante Legal</label>


				          <div class="clase__contenedora">
					          <input type="text" class="form-styling text__errores obligatorio__organismo cedula__longitud solo__numero" name="representanteLegalCedula" id="representanteLegalCedula"  placeholder=""/>
							  <a class="buscador__realizador" id="buscarCedulaRepresentanteLegal" name="buscarCedulaRepresentanteLegal"><i class="fas fa-search icono__buscadores"></i></a>
				          	  <div class="contenedor__cedula__representante__legal"></div>	          
				      	  </div>

				      	  <div class="counterCedulaRepresentanteLegal"></div>

				          <label for="confirmpassword" class="label__formularios">* Representante Legal</label>
				          <input type="text" class="form-styling text__errores obligatorio__organismo" name="representanteLegal" id="representanteLegal" placeholder="" disabled=""/>

				         <div class="clase__contenedora">

                            <span class="acuerdo__de__responsabilidad" data-toggle="modal" data-target="#terminosCondiciones" style="cursor: pointer; color:#bf360c;">Acepto los términos y condiciones</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox"  class="terminosCondicionesChecked" />

                         </div>

				          

						</div>

			         </form>
	
					
					<!--====  End of Formulario de Organismos Deportivos  ====-->
					

			         <!--=======================================================
			         =            Formulario de Ingreso de Usuarios            =
			         ========================================================-->

					<form class="ingreso__usuarios clase__contenedora" id="ciudadanos" name="ciudadanos" method="POST">

						<div class="seccion__1">

						  <label for="fullname" class="label__formularios">* Ingresar Cédula</label>

						  <div class="clase__contenedora">
				          	<input type="text" class="form-styling text__errores obligatorio__usuario cedula__longitud solo__numero" name="cedulaUsuario" id="cedulaUsuario"  placeholder=""/>
				          	<a class="buscador__realizador" id="buscarCedula" name="buscarCedula"><i class="fas fa-search icono__buscadores"></i></a>
				          	<div class="contenedor__cedula__registro"></div>
				      	  </div>

				          <div class="counterCedula"></div>

				          <label for="fullname" class="label__formularios">* Nombre Completo</label>
				          <input type="text" class="form-styling text__errores obligatorio__usuario"  name="nombreCompleto" id="nombreCompleto"  placeholder=""  disabled=""/>

				          <label for="fullname" class="label__formularios">* Fecha de nacimiento</label>
				          <input type="text" class="form-styling text__errores obligatorio__usuario"  name="fechaNacimiento" id="fechaNacimiento"  placeholder=""  disabled=""/>

				          <label for="fullname" class="label__formularios">* Sexo</label>
				          <input type="text" class="form-styling text__errores obligatorio__usuario"  name="sexo" id="sexo"  placeholder=""  disabled=""/>

				          <label for="fullname" class="label__formularios">* Provincia</label>
				          <select class="form-styling text__errores obligatorio__usuario provincia" id="provincia" name="provincia"></select>


				          <label for="fullname" class="label__formularios">* Cantón</label>
				          <select class="form-styling text__errores obligatorio__usuario canton" id="canton" name="canton"></select>


				          <label for="fullname" class="label__formularios">* Parroquia</label>
				          <select class="form-styling text__errores obligatorio__usuario parroquia" id="parroquia" name="parroquia"></select>


				          <label for="confirmpassword" class="label__formularios">* Celular</label>
				          <input type="text" class="form-styling text__errores obligatorio__usuario cedula__longitud solo__numero telefono__celular"  name="telefono"  id="telefono2" placeholder=""/>
				          <div class="counterTelfonos"></div>

			      		</div>

			         
			         	<div class="seccion__2">


				          <label for="confirmpassword" class="label__formularios">* Dirección</label>
				          <input type="text" class="form-styling text__errores obligatorio__usuario"  name="direccion" id="direccion2" placeholder=""/>

				          <label for="email" class="label__formularios">* Correo Electronico</label>
				          <input type="text" class="form-styling text__errores obligatorio__usuario email__validar"name="email" id="email2" placeholder=""/>

				          <div class="counterCorreo"></div>

						 <label for="fullname" class="label__formularios">Ingresar Ruc de la federación a la que pertenece (opcional)</label>

						 <div class="clase__contenedora">

					          <input type="text" class="form-styling text__errores ruc__longitud__deportistas solo__numero" name="rucOrganismoDeportista" id="rucOrganismoDeportista" placeholder=""/>
					          <a class="buscador__realizador" id="buscarRuc" name="buscarRuc"><i class="fas fa-search icono__buscadores"></i></a>
					          <div class="contenedor__ruc__registro"></div>

				     	 </div>

				     	  <div class="counter__ruc__deportistas"></div>

						 <label for="fullname" class="label__formularios">Nombre Federación</label>
				         <input type="text" class="form-styling text__errores" name="nombreOrganismoDeportista" id="nombreOrganismoDeportista" placeholder="" disabled="" />					          
				         <div class="clase__contenedora">

                            <span class="acuerdo__de__responsabilidad" data-toggle="modal" data-target="#terminosCondiciones" style="cursor: pointer; color:#bf360c;">Acepto los términos y condiciones</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox"  class="terminosCondicionesChecked" />

                         </div>


				         </div>
			          
			         </form>			         
			         
			         
			         <!--====  End of Formulario de Ingreso de Usuarios  ====-->
			         
			         	

			          <button class="btn-signup" id="registro" name="registro">Registrarse</button>

			          <div class="git__registro"></div>


				</div>
		      
		    </div>

      
  		</div>
  		<br>

  		<a href="documentosAnexos/MANUAL DE USUARIO ACERPRO.pdf" style="font-size: 24px; font-weight: bold;" target="_blank">Manual de Usuario &nbsp;<i class="fas fa-download"></i></a>

  		<div class="elementos__accesibles__anexos">

  			<div class="relaciones">

				<div class="titulos__anexos">Formato de Proyecto</div>

				<br>

				<a href="documentosAnexos/FORMATO DE PROYECTO (1).doc">Descargar formato &nbsp;<i class="fas fa-download"></i></a>
				<a href="documentosAnexos/anexo componente 4.6.doc">Descargar anexo para proyecto &nbsp;<i class="fas fa-download"></i></a>
				
			
			</div>

			<br>
			<br>

			<div class="relaciones">

				<div class="titulos__anexos">Normativa</div>

				<br>

				<a href="documentosAnexos/manual_proceso.pdf" target="_blank">Manual del Proceso &nbsp;<i class="fas fa-download"></i></a>
				<a href="documentosAnexos/CONTENIDO ACUERDO 450.pdf" target="_blank">Contenido Acuerdo 450 &nbsp;<i class="fas fa-download"></i></a>
				<a href="documentosAnexos/acuerdo_0045_reforma_auspicios_aprobadorv-signed.pdf" target="_blank">Contenido Acuerdo 0045 &nbsp;<i class="fas fa-download"></i></a>
				<a href="documentosAnexos/ESTRATEGIAS PARA ALINEAR PROGRAMAS Y PROYECTOS.pdf" target="_blank">Estrategias para alinear programas y proyecto &nbsp;<i class="fas fa-download"></i></a>

			</div>

		</div>
    
	</div>


</div>


<!--====================================================
=            Modales Terminos y condiciones            =
=====================================================-->

<div id="terminosCondiciones" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

      <div class="modal-dialog modal-lg">

        <div class="modal-content">

          <div class="modal-header">
            
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h6><strong><center>POLÍTICA DE PRIVACIDAD</center></strong></h6>
            
          </div>
          
          <div class="modal-body">
          
            <div class="box-body">
                
              <div class="form-group agrupador__containers">
            

                <div class="bloques__necesarios"style="text-align:justify; padding-right:.5em; padding-left:.5em;">

				<div style="font-weight: bold; position: relative; left: 35%;">TÉRMINOS Y CONDICIONES DE USO</div>
				<br>
				<br>
				El presente documento establece los términos y condiciones mediante las cuales regirá
				el uso de las aplicaciones desarrolladas por la Secretaría del Deporte domiciliada en la
				ciudad San Francisco de Quito, Distrito Metropolitano.
				<br>
				<br>
				<div style="font-weight: bold; font-style: oblique;">Condiciones generales</div>
				<br>

				<ul>
					<li>El dominio deporte.gob.ec y sus subdominios son titularidad de la institución.</li>
					<br>
					<li>El usuario se compromete a leer los términos y condiciones aquí establecidos,
					previamente al ingreso de la aplicación, por tanto, en caso de realizar el acceso con sus
					credenciales se entiende que cuenta con el conocimiento integral de este documento y
					la consecuente aceptación de la totalidad de sus estipulaciones.</li>
					<br>
					<li>El uso de las aplicaciones implica la expresa y plena aceptación de las condiciones aquí
					expuestas, sin perjuicio de aquellas particulares que pudieran aplicarse a algunos de los
					servicios concretos ofrecidos a través del mismo.</li>
					<br>
					<li>El contenido de los trámites es administrado por la Secretaría del Deporte y de la misma
					manera se podrá efectuar, en cualquier momento y sin necesidad de previo aviso,
					modificaciones y actualizaciones sobre la información contenida que les corresponda en
					los aplicativos, así como suspender temporalmente el acceso al mismo de forma
					discrecional o temporal.</li>
				</ul>

				<br>

				<div style="font-weight: bold; font-style: oblique;">Obligaciones de los usuarios</div>
				<br>

				El Usuario se obliga a usar la aplicación y los contenidos encontrados en ella de una
				manera diligente, correcta, lícita y en especial, se compromete a NO realizar las
				conductas descritas a continuación:

				<br>

				<ul>

					<li>Utilizar los contenidos de forma, con fines o efectos contrarios a la ley, a la moral
					y a las buenas costumbres generalmente aceptadas o al orden público.</li>
					<br>
					<li>Reproducir, copiar, representar, utilizar, distribuir, transformar o modificar los
					contenidos de la aplicación, por cualquier procedimiento o sobre cualquier
					soporte, total o parcial, o permitir el acceso del público a través de cualquier
					modalidad de comunicación pública.</li>
					<br>
					<li>Utilizar los contenidos de cualquier manera que entrañen un riesgo de daño o
					inutilización de la aplicación o de los contenidos o de terceros.</li>
					<br>
					<li>Suprimir, eludir o manipular el derecho de autor y demás datos identificativos
					de los derechos de autor incorporados a los contenidos, así como los dispositivos
					técnicos de protección, o cualquier mecanismo de información que pudieren
					tener los contenidos.</li>
					<br>
					<li>Emplear los contenidos y, en particular, la información de cualquier clase
					obtenida a través de la aplicación para distribuir, transmitir, remitir, modificar,
					rehusar o reportar la publicidad o los contenidos de esta con fines de venta
					directa o con cualquier otra clase de finalidad comercial, mensajes no solicitados
					dirigidos a una pluralidad de personas con independencia de su finalidad, así
					como comercializar o divulgar de cualquier modo dicha información.</li>
					<br>
					<li>No permitir que terceros ajenos a usted usen la aplicación con sus credenciales.</li>
					<br>
					<li>Utilizar la aplicación y los contenidos con fines lícitos y/o ilícitos, contrarios a lo
					establecido en estos términos y condiciones, o al uso mismo de la aplicación, que
					sean lesivos de los derechos e intereses de terceros, o que de cualquier forma
					puedan dañar, inutilizar, sobrecargar o deteriorar la aplicación y los contenidos
					o impedir la normal utilización o disfrute de esta y de los contenidos por parte
					de los usuarios.</li>
			
				</ul>

				<br>



				<div style="font-weight: bold; font-style: oblique;">Responsabilidad de la Secretaría del Deporte</div>

				<ul>

					<li>La Secretaría del Deporte será la responsable de garantizar disponibilidad, continuidad
					y buen funcionamiento de la aplicación.</li>
					<br>

					<li>La institución podrá bloquear, interrumpir o restringir el acceso a esta cuando lo
					considere necesario para el mejoramiento de la aplicación o por dada de baja de la
					misma.
					</li>
					<br>

					<li>Se recomienda al usuario tomar medidas adecuadas y actuar diligentemente al
					momento de acceder a la aplicación, como, por ejemplo, contar con programas de
					protección, antivirus, para manejo de malware, spyware y herramientas similares.</li>
					
				</ul>

				<br>


				<div style="font-weight: bold; font-style: oblique;">La Secretaría del Deporte no será responsable por:</div>
					
				<ul>

					<li>Fuerza mayor o caso fortuito.</li>
					<br>
					<li>Por la pérdida, extravío o hurto de su dispositivo o equipo que implique el acceso
					de terceros a la aplicación.</li>
					<br>
					<li>Por errores en la digitación o accesos por parte del cliente.</li>
					<br>
					<li>Denegación y retirada del acceso a la aplicación
					<li>En el evento en que un usuario incumpla estos términos y condiciones, o cualquier
					disposición que resulten de aplicación, La Secretaría del Deporte podrá suspender su
					acceso a la aplicación.</li>
					
				   </ul>

				   <br>

					<div style="font-weight: bold; font-style: oblique;">Términos y condiciones</div>

					<ul>

						<li>El Usuario acepta expresamente los términos y condiciones, siendo requisito esencial
						para la utilización de la aplicación.</li>
						<br>
						<li>En el evento en que se encuentre en desacuerdo con estos términos y condiciones,
						solicitamos abandonar la aplicación inmediatamente.</li>
						<br>
						<li>La Secretaría del Deporte podrá modificar los presentes términos y condiciones,
						notificando a los usuarios de la aplicación mediante publicación en la página web
						<a href="https://www.deporte.gob.ec/" target="_blank">www.deporte.gob.ec</a> o mediante la difusión de las modificaciones por algún medio
						electrónico, y/o correo electrónico, lo cual se entenderá aceptado por el usuario si éste
						continua con el uso de la aplicación.</li>

					</ul>

                </div>

              </div>
            
            </div>
          
          </div>

        </div>
      
      </div>

</div>

<!--====  End of Modales Terminos y condiciones  ====-->


<!--==================================================
=            Modal llamado al registrarse            =
===================================================-->

<div id="modalRegistro" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog">

    <div class="modal-content">

       <div class="modal-header">
            
            <button type="button" class="close" data-dismiss="modal">&times;</button>

            <h6 class="validacion__texto"><strong><center>GENERACIÓN DE CREDENCIALES (SE PROCEDIÓ A ENVIAR UN CORREO CON EL CÓDIGO PARA VALIDAR SU USUARIO)</center></strong></h6>


      </div>    	

      <div class="modal-body">

        <div class="box-body">

        	<div class="contenedor__modal">

        		<p style="font-size: 10px; font-weight: bold;">(Su usuario es el número de cedula en caso de ser deportista y Ruc en caso de ser federación)</p>


        		<div class="clase__contenedora">

	        		<label for="fullname" class="label__formularios">INGRESAR USUARIO</label>
					<input type="text" class="form-styling text__errores"  name="usuarioIngresados" id="usuarioIngresados"  placeholder=""/>

				</div>

				<button class="botones__modales boton__reenvios" id="reenviaCodigo" name="reenviaCodigo">CONFIRMAR USUARIO</button>

				<div class="oculto__informacion">

	        		<div class="clase__contenedora">

		        		<label for="fullname" class="label__formularios">INGRESAR EL CÓDIGO QUE LLEGO A SU CORREO</label>
						<input type="text" class="form-styling text__errores"  name="codigoGenerado" id="codigoGenerado"  placeholder=""/>

					</div>


	        		<div class="clase__contenedora escondido__codigo">

	        			<input type="hidden" name="contrasenasGeneradas" id="contrasenasGeneradas">

		        		<label for="fullname" class="label__formularios">DIGITAR SU NUEVA CONTRASEÑA</label>
						<input type="password" class="form-styling text__errores"  name="passwordGenerados" id="passwordGenerados"  placeholder=""/>

					</div>

					<button class="botones__modales" id="registrarCredenciales" name="registrarCredenciales">REGISTRAR CÓDIGO</button>

					<button class="botones__modales escondido__codigo" id="generarContrasena" name="generarContrasena">GENERAR CONTRASEÑA</button>

				</div>

        	</div>

        </div>

      </div>

    </div>

  </div>

</div>

<!--====  End of Modal llamado al registrarse  ====-->
