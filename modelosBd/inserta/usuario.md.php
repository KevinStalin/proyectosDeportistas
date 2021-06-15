<?php

	extract($_POST);


	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	require_once "../../Swift/lib/swift_required.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);


	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');
			

 	/*===============================================
	=            Funciones estructuradas            =
	===============================================*/
	
	function generarCodigo($longitud) {
		 $key = '';
		 $pattern = '1234567890abcdefghijklmnopqrstuvwxyz';
		 $max = strlen($pattern)-1;
		 for($i=0;$i < $longitud;$i++) $key .= $pattern{mt_rand(0,$max)};
		 return $key;
	}
	 
	/*=====  End of Funciones estructuradas  ======*/

	$codigo=generarCodigo(6);


 	if ($entidad=="organismo") {


 		$query10="SELECT idFederacion AS idFederacionComparador FROM pro_federacion WHERE rucOrganismo='$rucOrganismo';";

		$resultado10 = $conexionEstablecida->query($query10);

		while($registro10 = $resultado10->fetch()) {

			$idFederacionComparador=$registro10['idFederacionComparador'];

		}		

		if (!empty($idFederacionComparador)) {


			$mensaje=2;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}else{


	 		$query="INSERT INTO `ezonshar_mdepsaddb`.`pro_federacion` (`idFederacion`, `tipoOrganismo`, `rucOrganismo`, `nombreOrganismo`, `provinciaFederacion`, `cantonFederacion`, `parroquiaFederacion`, `telefono`, `direccion`, `email`, `curriculumDeportivo`, `fecha`, `hora`, `usuario`) VALUES (NULL, '$tipoOrganismo', '$rucOrganismo', '$nombreOrganismo', '$provinciaFederacion', '$cantonFederacion', '$parroquiaFederacion', '$telefono', '$direccion', '$email', NULL,'$fecha_actual','$hora_actual','$rucOrganismo');";
			$resultado= $conexionEstablecida->exec($query);


			$query2="SELECT MAX(idFederacion) AS idFederacion FROM pro_federacion;";						
			$resultado2 = $conexionEstablecida->query($query2);

			while($registro = $resultado2->fetch()) {
				$idFederacion=$registro['idFederacion'];					
			}

			$query3="INSERT INTO `ezonshar_mdepsaddb`.`pro_representante` (`idRepresentante`, `cedulaRepresentante`, `nombreReperesentante`, `idFederacion`) VALUES (NULL, '$representanteLegalCedula', '$representanteLegal', '$idFederacion');";
			$resultado3= $conexionEstablecida->exec($query3);


			$query4="INSERT INTO `ezonshar_mdepsaddb`.`pro_codigogenerado` (`idCodigoGenerado`, `idUsuario`, `codigo`) VALUES (NULL, '$rucOrganismo', '$codigo');";
			$resultado4= $conexionEstablecida->exec($query4);



			$query5="INSERT INTO `ezonshar_mdepsaddb`.`pro_rolesdepor` (`idOrganismosFuncio`, `idUsuario`, `idRol`) VALUES (NULL, '$rucOrganismo', '2');";
			$resultado5= $conexionEstablecida->exec($query5);

			$usuario=$rucOrganismo;



			/*======================================================
			=            Enviar correo desde php mailer            =
			======================================================*/

			$from="soporte@deporte.gob.ec";

			$transport = Swift_SmtpTransport::newInstance('mail.deporte.gob.ec',465,'ssl');

			$transport->setUsername('soporte@deporte.gob.ec');

			$transport->setPassword('Deporte/1122');	
														
			$message = Swift_Message::newInstance();
													
			$message->setTo($email);

			$body="<head><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /><title>SECRETARÍA DEL DEPORTE</title><style type='text/css'>body {background:#EEE; padding:30px; font-size:12px;}</style></head><body><span style='font-weight:bold; font-style: oblique;'>SECRETARÍA DEL DEPORTE,</span><br><br>El código generado es:<br><br><span style='font-size:12px; font-weight:bold;'>Código:</span>&nbsp;$codigo<br>Su usuario es:$usuario</body></html></head>";

			$message->setSubject('Recuperación de Contraseña');

			$message->setBody($body);

			$message->setContentType('text/html');

			$message->setFrom(array($from => 'Recuperación de Contraseña'));

			$mailer = Swift_Mailer::newInstance($transport);

			$mailer->send($message);



			/*=====  End of Enviar correo desde php mailer  ======*/




			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}
 		

 	}else if($entidad=="ciudadano"){
 		

		$query11="SELECT idAteleta FROM pro_deportistaorganismo WHERE cedulaUsuario='$cedulaUsuario';";

		$resultado11 = $conexionEstablecida->query($query11);

		while($registro11 = $resultado11->fetch()) {

			$idAteleta=$registro11['idAteleta'];

		}	


		if (!empty($idAteleta)) {
		
			$mensaje=2;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}else{

			$query="INSERT INTO `ezonshar_mdepsaddb`.`pro_deportistaorganismo` (`idAteleta`, `tipoOrganismo`, `cedulaUsuario`, `nombreCompleto`, `fechaNacimiento`, `sexo`, `provincia`, `canton`, `parroquia`, `telefono`, `direccion`, `email`, `certificadoFederacion`, `certificadoOpsub`, `porqueCertificado`, `certificadoOrganismoSuperior`, `solicitudCertificacionRealizada`, `curriculum`, `fecha`, `hora`, `usuario`) VALUES (NULL, '$tipoAtleta', '$cedulaUsuario', '$nombreCompleto', '$fechaNacimiento', '$sexo', '$provincia', '$canton', '$parroquia', '$telefono', '$direccion', '$email', NULL, NULL, '$porqueCertificado', NULL, NULL, NULL, '$fecha_actual', '$hora_actual','$cedulaUsuario');";
			$resultado= $conexionEstablecida->exec($query);

			$query2="SELECT MAX(idAteleta) AS idAteleta FROM pro_deportistaorganismo;";						
			$resultado2 = $conexionEstablecida->query($query2);

			while($registro = $resultado2->fetch()) {
				$idAteleta=$registro['idAteleta'];					
			}

			$query3="INSERT INTO `ezonshar_mdepsaddb`.`pro_atletafederacion` (`intFederacionDeportista`, `rucOrganismoDeportista`, `nombreOrganismoDeportista`, `idAteleta`) VALUES (NULL, '$rucOrganismoDeportista', '$nombreOrganismoDeportista', '$idAteleta');";
			$resultado3= $conexionEstablecida->exec($query3);

			

			$query4="INSERT INTO `ezonshar_mdepsaddb`.`pro_codigogenerado` (`idCodigoGenerado`, `idUsuario`, `codigo`) VALUES (NULL, '$cedulaUsuario', '$codigo');";
			$resultado4= $conexionEstablecida->exec($query4);

			$query5="INSERT INTO `ezonshar_mdepsaddb`.`pro_rolesdepor` (`idOrganismosFuncio`, `idUsuario`, `idRol`) VALUES (NULL, '$cedulaUsuario', '3');";
			$resultado5= $conexionEstablecida->exec($query5);


			$usuario=$cedulaUsuario;


			/*======================================================
			=            Enviar correo desde php mailer            =
			======================================================*/

			$from="soporte@deporte.gob.ec";

			$transport = Swift_SmtpTransport::newInstance('mail.deporte.gob.ec',465,'ssl');

			$transport->setUsername('soporte@deporte.gob.ec');

			$transport->setPassword('Deporte/1122');	
														
			$message = Swift_Message::newInstance();
													
			$message->setTo($email);

			$body="<head><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /><title>SECRETARÍA DEL DEPORTE</title><style type='text/css'>body {background:#EEE; padding:30px; font-size:12px;}</style></head><body><span style='font-weight:bold; font-style: oblique;'>SECRETARÍA DEL DEPORTE,</span><br><br>El código generado es:<br><br><span style='font-size:12px; font-weight:bold;'>Código:</span>&nbsp;$codigo<br>Su usuario es:$usuario</body></html></head>";

			$message->setSubject('Recuperación de Contraseña');

			$message->setBody($body);

			$message->setContentType('text/html');

			$message->setFrom(array($from => 'Recuperación de Contraseña'));

			$mailer = Swift_Mailer::newInstance($transport);

			$mailer->send($message);



			/*=====  End of Enviar correo desde php mailer  ======*/




			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}


 	}





