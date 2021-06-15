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
			

	$contador=0;

	if ($proyectoCargado!='no') {

		$tipo = $_FILES['proyectoCargado']['type']; 
		$archivotmp = $_FILES['proyectoCargado']['tmp_name'];
		$destino="../../documentos/proyectos";

		$proyectoCargadoPdf=$idUsuario."-".$codigoUsuarios;

		if($tipo!="application/pdf"){

			$contador=$contador+1;

		}

		rename($archivotmp,"$destino/$proyectoCargadoPdf.pdf");

	}



	if ($curriculumDeportivoSegundo!='no' && !empty($_FILES['curriculumDeportivoSegundo']['tmp_name'])) {

		$tipo = $_FILES['curriculumDeportivoSegundo']['type']; 
		$archivotmp = $_FILES['curriculumDeportivoSegundo']['tmp_name'];
		$destino="../../documentos/curriculum";

		$curriculumDeportivoPdf=$idUsuario."-".$codigoUsuarios;

		if($tipo!="application/pdf"){

			$contador=$contador+1;

		}

		rename($archivotmp,"$destino/$curriculumDeportivoPdf.pdf");

	}

	if ($certificadoFederacion!='no' && !empty($_FILES['certificadoFederacion']['tmp_name'])) {


		$tipo = $_FILES['certificadoFederacion']['type']; 
		$archivotmp = $_FILES['certificadoFederacion']['tmp_name'];
		$destino="../../documentos/certificadoDeportista";

		$certificadoFederacionPdf=$idUsuario."-".$codigoUsuarios;

		if($tipo!="application/pdf"){

			$contador=$contador+1;

		}


		rename($archivotmp,"$destino/$certificadoFederacionPdf.pdf");

	}


	if ($certificadoOrganismoSuperior!='no' && !empty($_FILES['certificadoOrganismoSuperior']['tmp_name'])) {

		$tipo = $_FILES['certificadoOrganismoSuperior']['type']; 
		$archivotmp = $_FILES['certificadoOrganismoSuperior']['tmp_name'];
		$destino="../../documentos/certificadoSuperior";

		$certificadoOrganismoSuperiorPdf=$idUsuario."-".$codigoUsuarios;

		if($tipo!="application/pdf"){

			$contador=$contador+1;

		}

		rename($archivotmp,"$destino/$certificadoOrganismoSuperiorPdf.pdf");

	}


	if ($solicitudFederacion!='no' && !empty($_FILES['solicitudFederacion']['tmp_name'])) {

		$tipo = $_FILES['solicitudFederacion']['type']; 
		$archivotmp = $_FILES['solicitudFederacion']['tmp_name'];
		$destino="../../documentos/solicitudCertificado";

		$solicitudFederacionPdf=$idUsuario."-".$codigoUsuarios;

		if($tipo!="application/pdf"){

			$contador=$contador+1;

		}

		rename($archivotmp,"$destino/$solicitudFederacionPdf.pdf");

	}

	if ($avalFederacion!='no' && !empty($_FILES['avalFederacion']['tmp_name'])) {

		$tipo = $_FILES['avalFederacion']['type']; 
		$archivotmp = $_FILES['avalFederacion']['tmp_name'];
		$destino="../../documentos/avalFederacion";

		$avalFederacionPdf=$idUsuario."-".$codigoUsuarios;

		if($tipo!="application/pdf"){

			$contador=$contador+1;

		}

		rename($archivotmp,"$destino/$avalFederacionPdf.pdf");

	}


	if ($solciitudAval!='no' && !empty($_FILES['solciitudAval']['tmp_name'])) {

		$tipo = $_FILES['solciitudAval']['type']; 
		$archivotmp = $_FILES['solciitudAval']['tmp_name'];
		$destino="../../documentos/solicitudAval";

		$solciitudAvalPdf=$idUsuario."-".$codigoUsuarios;

		if($tipo!="application/pdf"){

			$contador=$contador+1;

		}

		rename($archivotmp,"$destino/$solciitudAvalPdf.pdf");

	}


	if ($avalOrganismoSuperior!='no' && !empty($_FILES['avalOrganismoSuperior']['tmp_name'])) {

		$tipo = $_FILES['avalOrganismoSuperior']['type']; 
		$archivotmp = $_FILES['avalOrganismoSuperior']['tmp_name'];
		$destino="../../documentos/avalOrganismoSuperior";

		$avalOrganismoSuperiorPdf=$idUsuario."-".$codigoUsuarios;

		if($tipo!="application/pdf"){

			$contador=$contador+1;

		}

		rename($archivotmp,"$destino/$avalOrganismoSuperiorPdf.pdf");

	}

	if ($contratoCargado!='no') {

		$tipo = $_FILES['contratoCargado']['type']; 
		$archivotmp = $_FILES['contratoCargado']['tmp_name'];
		$destino="../../documentos/contratoCargado";

		$contratoPdf=$idUsuario."-".$codigoUsuarios;

		if($tipo!="application/pdf" && !empty($archivotmp)){

			$contador=$contador+1;

		}

		if (!empty($archivotmp)) {

			rename($archivotmp,"$destino/$contratoPdf.pdf");

		}

		

	}


	$query2="SELECT nombre AS proyectoIgual FROM pro_proyecto WHERE nombre='$nombreProyecto' AND idUsuario='$idUsuario';";
	$resultado2 = $conexionEstablecida->query($query2);

	while($registro2 = $resultado2->fetch()) {

		$proyectoIgual=$registro2['proyectoIgual'];

	}

	if(!empty($proyectoIgual)){

		$mensaje=3;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);


	}else if($contador==0){

		$query="INSERT INTO `ezonshar_mdepsaddb`.`pro_proyecto` (`idTramite`, `nombre`, `monto`, `alcanse`, `idUsuario`, `siRespuestas`, `idRol`, `fecha`, `hora`, `codigo`, `certificadoFederaciones`, `rechazoPorque`, `avales`, `rechazoPorqueAval`, `tipoDeportistas`) VALUES (NULL, '$nombreProyecto', '$monto', '$alcanse', '$idUsuario', '$siRespuestas', '$idRoles', '$fecha_actual', '$hora_actual', '$codigoUsuarios', '$certificadoFederaciones', '$rechazoPorque', '$avales', '$rechazoPorqueAval','$tipoDeportistas');";
		$resultado= $conexionEstablecida->exec($query);
		

		if (!empty($archivotmp)) {

			$query2="INSERT INTO `ezonshar_mdepsaddb`.`pro_documentos` (`idDocumentos`, `usuario`, `proyectoCargadoPdf`, `curriculumDeportivoSegundo`, `certificadoFederacionPdf`, `certificadoOrganismoSuperiorPdf`, `solicitudFederacionPdf`, `avalFederacionPdf`, `solciitudAvalPdf`, `avalOrganismoSuperiorPdf`, `fecha`, `hora`, `codigo`, `contrato`, `contratoCargadoCheck`) VALUES (NULL, '$idUsuario', '$proyectoCargadoPdf', '$curriculumDeportivoPdf', '$certificadoFederacionPdf', '$certificadoOrganismoSuperiorPdf', '$solicitudFederacionPdf', '$avalFederacionPdf', '$solciitudAvalPdf', '$avalOrganismoSuperiorPdf', '$fecha_actual', '$hora_actual', '$codigoUsuarios','$contratoPdf','$contratoCargadoCheck');";

	   }else{

	   		$query2="INSERT INTO `ezonshar_mdepsaddb`.`pro_documentos` (`idDocumentos`, `usuario`, `proyectoCargadoPdf`, `curriculumDeportivoSegundo`, `certificadoFederacionPdf`, `certificadoOrganismoSuperiorPdf`, `solicitudFederacionPdf`, `avalFederacionPdf`, `solciitudAvalPdf`, `avalOrganismoSuperiorPdf`, `fecha`, `hora`, `codigo`, `contrato`, `contratoCargadoCheck`) VALUES (NULL, '$idUsuario', '$proyectoCargadoPdf', '$curriculumDeportivoPdf', '$certificadoFederacionPdf', '$certificadoOrganismoSuperiorPdf', '$solicitudFederacionPdf', '$avalFederacionPdf', '$solciitudAvalPdf', '$avalOrganismoSuperiorPdf', '$fecha_actual', '$hora_actual', '$codigoUsuarios',NULL,'$contratoCargadoCheck');";

	   }


		$resultado2= $conexionEstablecida->exec($query2);

		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);


		if($siRespuestas=="si"){

			$query10="SELECT a.email,c.descripcionFisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_fisicamenteestructura AS c ON c.id_FisicamenteEstructura=a.fisicamenteEstructura WHERE a.fisicamenteEstructura=15 AND b.id_rol=2 ORDER BY a.id_usuario ASC LIMIT 1;";


		}else if ($tipoDeportistas=="altoRendimiento" || $tipoDeportistas=="militarDeportiva" || $tipoDeportistas=="profesional" || $tipoDeportistas=="alto") {
		
	 		$query10="SELECT a.email,c.descripcionFisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_fisicamenteestructura AS c ON c.id_FisicamenteEstructura=a.fisicamenteEstructura WHERE a.fisicamenteEstructura=12 AND b.id_rol=2 ORDER BY a.id_usuario ASC LIMIT 1;";

		}else if($tipoDeportistas=="alto2" || $tipoDeportistas=="altoRendimientoDiscapacidad"){

			$query10="SELECT a.email,c.descripcionFisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_fisicamenteestructura AS c ON c.id_FisicamenteEstructura=a.fisicamenteEstructura WHERE a.fisicamenteEstructura=14 AND b.id_rol=2 ORDER BY a.id_usuario ASC LIMIT 1;";

		}else if($tipoDeportistas=="formativo" || $tipoDeportistas=="estudiantil" || $tipoDeportistas=="noFederado" || $tipoDeportistas=="recreativo"){

			$query10="SELECT a.email,c.descripcionFisicamenteEstructura FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_fisicamenteestructura AS c ON c.id_FisicamenteEstructura=a.fisicamenteEstructura WHERE a.fisicamenteEstructura=13 AND b.id_rol=2 ORDER BY a.id_usuario ASC LIMIT 1;";

		}

		$resultado10 = $conexionEstablecida->query($query10);

		while($registro10 = $resultado10->fetch()) {

			$email=$registro10['email'];
			$descripcionFisicamenteEstructura=$registro10['descripcionFisicamenteEstructura'];

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

		$body="<head><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /><title>SECRETARÍA DEL DEPORTE</title><style type='text/css'>body {background:#EEE; padding:30px; font-size:12px;}</style></head><body><span style='font-weight:bold; font-style: oblique;'>Estimado/a,</span><br><br>Se informa que ha sido ingresado en la <span style='font-weight:bold;'>".$descripcionFisicamenteEstructura."</span> el proyecto <span style='font-weight:bold;'>".$nombreProyecto."</span><br><br>Para revisarlo, por favor dar clic <a href='https://aplicativos.deporte.gob.ec/proyectosDeportistas/ingreso' target='_blank'>aquí</a><br><br><span style='font-weight:bold;'>Saludos cordiales.</span></body></html></head>";

		$message->setSubject('ACERPRO Nuevo Proyecto');

		$message->setBody($body);

		$message->setContentType('text/html');

		$message->setFrom(array($from => 'ACERPRO Nuevo Proyecto'));

		$mailer = Swift_Mailer::newInstance($transport);

		$mailer->send($message);



		/*=====  End of Enviar correo desde php mailer  ======*/


	}else{

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}

