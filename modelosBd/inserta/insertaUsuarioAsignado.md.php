<?php

	extract($_POST);


	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	require_once "../../Swift/lib/swift_required.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

	$query="UPDATE pro_proyecto SET idUsuarioRelativo='$idUsuario' WHERE idTramite='$idTramite';";
	$resultado= $conexionEstablecida->exec($query);


 	$query10="SELECT c.idTramite,CONCAT(a.nombre,a.apellido,' ')  AS nombreFuncionario,b.descripcionFisicamenteEstructura,c.nombre,a.email FROM th_usuario AS a INNER JOIN th_fisicamenteestructura AS b ON a.fisicamenteEstructura=b.id_FisicamenteEstructura INNER JOIN pro_proyecto AS c ON a.id_usuario=c.idUsuarioRelativo WHERE id_usuario='$idUsuario' ORDER BY c.idTramite DESC LIMIT 1";

	$resultado10 = $conexionEstablecida->query($query10);

	while($registro10 = $resultado10->fetch()) {

		$nombreFuncionario=$registro10['nombreFuncionario'];
		$nombre=$registro10['nombre'];
		$email=$registro10['email'];


	}		


	/*======================================================
	=            Enviar correo desde php mailer            =
	======================================================*/

	$from="soporte@deporte.gob.ec";

	$transport = Swift_SmtpTransport::newInstance('mail.deporte.gob.ec',465,'ssl');

	$transport->setUsername('soporte@deporte.gob.ec');

	$transport->setPassword('Deporte/1122');	
														
	$message = Swift_Message::newInstance();
													
	$message->setTo($email);

	$body="<head><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /><title>SECRETARÍA DEL DEPORTE</title><style type='text/css'>body {background:#EEE; padding:30px; font-size:12px;}</style></head><body><span style='font-weight:bold; font-style: oblique;'>Estimado/a ".$nombreFuncionario.",</span><br><br>Se informa que le ha sido reasignado el proyecto <span style='font-weight:bold;'>".$nombre."</span><br><br>Para revisarlo, por favor dar clic <a href='https://aplicativos.deporte.gob.ec/proyectosDeportistas/ingreso' target='_blank'>aquí</a><br><br><span style='font-weight:bold;'>Saludos cordiales.</span></body></html></head>";

	$message->setSubject('ACERPRO Reasignación de proyecto');

	$message->setBody($body);

	$message->setContentType('text/html');

	$message->setFrom(array($from => 'ACERPRO Reasignación de proyecto'));

	$mailer = Swift_Mailer::newInstance($transport);

	$mailer->send($message);


	/*=====  End of Enviar correo desde php mailer  ======*/



	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);	