<?php

	extract($_POST);


	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';


	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();	

	$query2="SELECT idFederacion FROM pro_federacion WHERE rucOrganismo='$contrasenasGeneradas';";
	$resultado2 = $conexionEstablecida->query($query2);


	while($registro2 = $resultado2->fetch()) {
		$idFederacion=$registro2['idFederacion'];					
	}

	$query3="SELECT idAteleta FROM pro_deportistaorganismo WHERE cedulaUsuario='$contrasenasGeneradas';";
	$resultado3 = $conexionEstablecida->query($query3);


	while($registro3 = $resultado3->fetch()) {
		$idAteleta=$registro3['idAteleta'];					
	}


	$password=sha1($passwordGenerados);

	if (!empty($idFederacion)) {
			
		$query4="UPDATE pro_federacion SET `password`='$password',estado='A' WHERE idFederacion='$idFederacion';";
		$resultado4= $conexionEstablecida->exec($query4);

	}else if(!empty($idAteleta)){

		$query4="UPDATE pro_deportistaorganismo SET `password`='$password',estado='A' WHERE idAteleta='$idAteleta';";
		$resultado4= $conexionEstablecida->exec($query4);		
			
	}

	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);