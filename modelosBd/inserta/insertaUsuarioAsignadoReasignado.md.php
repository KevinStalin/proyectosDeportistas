<?php

	extract($_POST);


	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	require_once "../../Swift/lib/swift_required.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

 	if ($idUsuario=="instalaciones") {
 		
		$query="UPDATE pro_proyecto SET tipoDeportistas='$idUsuario',siRespuestas='si',regresaTramite=NULL, idUsuarioRelativo=NULL WHERE idTramite='$idTramite';";
		$resultado= $conexionEstablecida->exec($query);

 	}else{

		$query="UPDATE pro_proyecto SET tipoDeportistas='$idUsuario',regresaTramite=NULL,siRespuestas='no', idUsuarioRelativo=NULL WHERE idTramite='$idTramite';";
		$resultado= $conexionEstablecida->exec($query);

 	}

	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);	