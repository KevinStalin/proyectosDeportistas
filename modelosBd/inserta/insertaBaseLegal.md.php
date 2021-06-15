<?php

	extract($_POST);


	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);



 	$nombre__legalesArray = json_decode($nombre__legales);
 	$justificacion__legalesArray = json_decode($justificacion__legales);

 	$contadorLegal=count($nombre__legalesArray);

 	for($z=0; $z < $contadorLegal; $z++){

		$query3="INSERT INTO `ezonshar_mdepsaddb`.`pro_baselegal` (`idBaseLegal`, `nombreBaseLegal`, `justificacionBaseLegal`, `codigoProyecto`) VALUES (NULL, :nombreBaseLegal, :justificacionBaseLegal, :codigoProyecto);";
		$sql3 = $conexionEstablecida->prepare($query3);


		$sql3->bindParam(':nombreBaseLegal',$nombre__legalesArray[$z],PDO::PARAM_STR);
		$sql3->bindParam(':justificacionBaseLegal',$justificacion__legalesArray[$z],PDO::PARAM_STR);
		$sql3->bindParam(':codigoProyecto',$codigoProyecto,PDO::PARAM_STR);

		$sql3->execute();	


	 }




	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);