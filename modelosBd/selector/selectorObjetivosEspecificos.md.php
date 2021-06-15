<?php

	extract($_POST);


	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	/*==========================================
	=            Declaración arrays            =
	==========================================*/
	
	$data1=array();
	$data2=array();

	/*=====  End of Declaración arrays  ======*/
	


	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();	

 	$query="SELECT idObjetivosEspecificos,objetivosEspecificos FROM pro_objetivosEspecificos WHERE codigo='$codigoProyecto';";
	$resultado = $conexionEstablecida->query($query);


	while($registro = $resultado->fetch()) {

		$objetivosEspecificos=$registro['objetivosEspecificos'];
		array_push($data1, $objetivosEspecificos);

		$idObjetivosEspecificos=$registro['idObjetivosEspecificos'];
		array_push($data2, $idObjetivosEspecificos);
	}


	$stringobjetivosEspecificos=  implode("------", $data1);
	$stringidObjetivosEspecificos=  implode("------", $data2);

	$jason['stringobjetivosEspecificos']=$stringobjetivosEspecificos;
	$jason['stringidObjetivosEspecificos']=$stringidObjetivosEspecificos;

	echo json_encode($jason);