<?php

	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';


	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();	

 	extract($_POST);


	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');


	$query="UPDATE pro_proyecto SET regresaTramite='A',observacionRegresaTramite='$obseracionDefinida',horaRegresar='$hora_actual',fechaRegresar='$fecha_actual',idUsuarioRelativo=NULL,califica=NULL,certifica=NULL WHERE idTramite='$idTramite';";

	$resultado= $conexionEstablecida->exec($query);


	$mensaje=1;
 	$jason['mensaje']=$mensaje;
	echo json_encode($jason);



