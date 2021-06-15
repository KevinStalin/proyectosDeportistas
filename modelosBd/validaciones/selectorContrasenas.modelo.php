<?php

	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	extract($_POST);

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();	


	$query="SELECT idUsuario FROM pro_codigogenerado WHERE idUsuario='$usuarioIngresados' AND codigo='$codigoGenerado' ORDER BY idUsuario DESC LIMIT 1;";
	$resultado = $conexionEstablecida->query($query);


	while($registro = $resultado->fetch()) {
		$idUsuario=$registro['idUsuario'];					
	}

	if (empty($idUsuario)) {
		
		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);	

	}else{


		$mensaje=2;
		$jason['mensaje']=$mensaje;
		$jason['idUsuario']=$usuarioIngresados;
		echo json_encode($jason);

	}