<?php

	extract($_POST);


	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	/*==========================================
	=            Declaración arrays            =
	==========================================*/
	
	$data1=array();
	$data2=array();
	$data3=array();

	/*=====  End of Declaración arrays  ======*/
	


	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();	

 	$query="SELECT idBaseLegal, nombreBaseLegal, justificacionBaseLegal FROM pro_baseLegal WHERE codigoProyecto='$codigoProyecto';";
	$resultado = $conexionEstablecida->query($query);


	while($registro = $resultado->fetch()) {

		$idBaseLegal=$registro['idBaseLegal'];
		array_push($data1, $idBaseLegal);

		$nombreBaseLegal=$registro['nombreBaseLegal'];
		array_push($data2, $nombreBaseLegal);

		$justificacionBaseLegal=$registro['justificacionBaseLegal'];
		array_push($data3, $justificacionBaseLegal);

	}


	$stringidBaseLegal=  implode("------", $data1);
	$stringnombreBaseLegal =  implode("------", $data2);
	$stringjustificacionBaseLegal =  implode("------", $data3);

	$jason['stringidBaseLegal']=$stringidBaseLegal;
	$jason['stringnombreBaseLegal']=$stringnombreBaseLegal;
	$jason['stringjustificacionBaseLegal']=$stringjustificacionBaseLegal;

	echo json_encode($jason);