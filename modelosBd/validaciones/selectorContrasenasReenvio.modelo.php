<?php

	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	require_once "../../Swift/lib/swift_required.php";


	extract($_POST);

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();	


	$query="SELECT a.usuario AS usuarioFederacion,a.email AS emailFederacion FROM pro_federacion AS a WHERE a.usuario='$usuarioIngresados';";
	$resultado = $conexionEstablecida->query($query);


	while($registro = $resultado->fetch()) {
		$usuario=$registro['usuarioFederacion'];	
		$email=$registro['emailFederacion'];					
	}


	$query2="SELECT a.usuario AS usuarioAtleta,a.email AS emailAtleta FROM pro_deportistaorganismo AS a WHERE a.usuario='$usuarioIngresados';";
	$resultado2 = $conexionEstablecida->query($query2);

	while($registro2 = $resultado2->fetch()) {
		$usuario=$registro2['usuarioAtleta'];	
		$email=$registro2['emailAtleta'];					
	}


	if (empty($usuario)) {
		
		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);	

	}else{

	
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
	

		$query4="INSERT INTO `ezonshar_mdepsaddb`.`pro_codigogenerado` (`idCodigoGenerado`, `idUsuario`, `codigo`) VALUES (NULL, '$usuario', '$codigo');";
		$resultado4= $conexionEstablecida->exec($query4);


		/*======================================================
		=            Enviar correo desde php mailer            =
		======================================================*/

		$from="soporte@deporte.gob.ec";

		$transport = Swift_SmtpTransport::newInstance('mail.deporte.gob.ec',465,'ssl');

		$transport->setUsername('soporte@deporte.gob.ec');

		$transport->setPassword('Deporte/1122');	
														
		$message = Swift_Message::newInstance();

		$message->setTo($email);

													
		$body="<head><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /><title>SECRETARÍA DEL DEPORTE</title><style type='text/css'>body {background:#EEE; padding:30px; font-size:12px;}</style></head><body><span style='font-weight:bold; font-style: oblique;'>SECRETARÍA DEL DEPORTE,</span><br><br>El código generado para el aplicativo ACERPRO es:<br><br><span style='font-size:12px; font-weight:bold;'>Código:</span>&nbsp;$codigo</body></html></head>";

		$message->setSubject('Recuperación de Contraseña');

		$message->setBody($body);

		$message->setContentType('text/html');

		$message->setFrom(array($from => 'Recuperación de Contraseña'));

		$mailer = Swift_Mailer::newInstance($transport);

		$mailer->send($message);



		/*=====  End of Enviar correo desde php mailer  ======*/


		$mensaje=2;
		$jason['mensaje']=$mensaje;
		$jason['email']=$email;
		echo json_encode($jason);

	}