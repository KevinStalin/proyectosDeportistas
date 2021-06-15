<?php

	extract($_POST);


	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);



 	$obligatorio__elementosArray = json_decode($obligatorio__elementos);

 	
 	$query="INSERT INTO `ezonshar_mdepsaddb`.`pro_caracterizacion` (`idCaracterizacion`, `analisisSituacionActual`, `justificacionCaracterizacion`, `objetivoGeneralCaracterizacion`, `codigo`) VALUES (NULL, :analisisSituacionActual, :justificacionCaracterizacion, :objetivoGeneralCaracterizacion, :codigo);";
 	$sql = $conexionEstablecida->prepare($query);

 	$sql->bindParam(':analisisSituacionActual',$analisisSituacionActual,PDO::PARAM_STR);
 	$sql->bindParam(':justificacionCaracterizacion',$justificacionCaracterizacion,PDO::PARAM_STR);
 	$sql->bindParam(':objetivoGeneralCaracterizacion',$objetivoGeneralCaracterizacion,PDO::PARAM_STR);
 	$sql->bindParam(':codigo',$codigoProyecto,PDO::PARAM_STR);
	$sql->execute();	


	if (!empty($obligatorio__elementos)) {
		
		$contadorObjetivosEspecificos=count($obligatorio__elementosArray);

	 	for ($i=0; $i < $contadorObjetivosEspecificos; $i++) { 

	 		
		 	$query2="INSERT INTO `ezonshar_mdepsaddb`.`pro_objetivosespecificos` (`idObjetivosEspecificos`, `objetivosEspecificos`, `codigo`) VALUES (NULL, :objetivosEspecificos, :codigo);";
		 	$sql2 = $conexionEstablecida->prepare($query2);

		 	$sql2->bindParam(':objetivosEspecificos',$obligatorio__elementosArray[$i],PDO::PARAM_STR);
		 	$sql2->bindParam(':codigo',$codigoProyecto,PDO::PARAM_STR);

		 	$sql2->execute();	

	 	}


	}



	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);