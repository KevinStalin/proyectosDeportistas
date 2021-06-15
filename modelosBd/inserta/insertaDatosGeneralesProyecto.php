<?php

	extract($_POST);


	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

 	if($codigoTipoElegido==2){

 		/*===================================================================
 		=            Actualizar direccion de Organismo Deportivo            =
 		===================================================================*/
 		
 	 	$query="UPDATE pro_federacion SET direccion=:direccion WHERE rucOrganismo=:rucOrganismo;";
 		$sql = $conexionEstablecida->prepare($query);
 		$sql->bindParam(':direccion',$callePrincipal,PDO::PARAM_STR);
 		$sql->bindParam(':rucOrganismo',$rucOrganismo,PDO::PARAM_STR);
 		$sql->execute();
	
 		/*=====  End of Actualizar direccion de Organismo Deportivo  ======*/
 		
 		/*========================================================================
 		=            Insertar Información de representante Federación            =
 		========================================================================*/
 		
 		$query2 = $conexionEstablecida->prepare("SELECT idFederacion FROM pro_federacion WHERE rucOrganismo=:rucOrganismo;");
		$query2->execute(array('rucOrganismo'=>htmlentities(trim($rucOrganismo), ENT_QUOTES)));

		while($registro = $query2->fetch()) {
			$idFederacion=$registro['idFederacion'];
		}

		$query4 = $conexionEstablecida->prepare("SELECT idFederacion FROM pro_direccionesfederacion WHERE idFederacion=:idFederacion;");
		$query4->execute(array('idFederacion'=>htmlentities(trim($idFederacion), ENT_QUOTES)));

		while($registro2 = $query4->fetch()) {
			$idFederacion=$registro2['idFederacion'];
		}


		$query2="INSERT INTO `ezonshar_mdepsaddb`.`pro_direccionesfederacion` (`idDireccionOrganismo`, `callePrincipal`, `calleSecundaria`, `numeracion`, `referencia`, `idFederacion`) VALUES (NULL, :callePrincipal, :calleSecundaria, :numeracion, :referencia, :idFederacion);";
		$sql2 = $conexionEstablecida->prepare($query2);

	 	$sql2->bindParam(':callePrincipal',$callePrincipal,PDO::PARAM_STR);
	 	$sql2->bindParam(':calleSecundaria',$calleSecundaria,PDO::PARAM_STR);
	 	$sql2->bindParam(':numeracion',$numeracion,PDO::PARAM_STR);
	 	$sql2->bindParam(':referencia',$referencia,PDO::PARAM_STR);
	 	$sql2->bindParam(':idFederacion',$idFederacion,PDO::PARAM_INT);
	 	$sql2->execute();	
					
 		/*=====  End of Insertar Información de representante Federación  ======*/
 		
 		/*===================================================================
 		=            Actualiza información de los representantes            =
 		===================================================================*/

 		$query3="UPDATE pro_representante SET cedulaRepresentante=:cedulaRepresentante,nombreReperesentante=:nombreRepresentante,provincia=:provinciaActa,canton=:cantonActa,parroquia=:parroquiaActa,callePrincipal=:callePrincipalReprese,numeracion=:numeracionReprese,calleSecundaria=:calleSecundariaRepre,referencia=:referenciaRepre,email=:correoRepre,convencional=:telConvencionalRepre,celular=:telCelularRepre WHERE idFederacion=:idFederacion;";
 		$sql3 = $conexionEstablecida->prepare($query3);
 		$sql3->bindParam(':cedulaRepresentante',$cedulaRepresentante,PDO::PARAM_STR);
 		$sql3->bindParam(':nombreRepresentante',$nombreRepresentante,PDO::PARAM_STR);
 		$sql3->bindParam(':provinciaActa',$provinciaActa,PDO::PARAM_STR);
 		$sql3->bindParam(':cantonActa',$cantonActa,PDO::PARAM_STR);
 		$sql3->bindParam(':parroquiaActa',$parroquiaActa,PDO::PARAM_STR);
 		$sql3->bindParam(':callePrincipalReprese',$callePrincipalReprese,PDO::PARAM_STR);
 		$sql3->bindParam(':numeracionReprese',$numeracionReprese,PDO::PARAM_STR);
 		$sql3->bindParam(':calleSecundariaRepre',$calleSecundariaRepre,PDO::PARAM_STR);
 		$sql3->bindParam(':referenciaRepre',$referenciaRepre,PDO::PARAM_STR);
 		$sql3->bindParam(':correoRepre',$correoRepre,PDO::PARAM_STR);
 		$sql3->bindParam(':telConvencionalRepre',$telConvencionalRepre,PDO::PARAM_STR);
 		$sql3->bindParam(':telCelularRepre',$telCelularRepre,PDO::PARAM_STR);
 		$sql3->bindParam(':idFederacion',$idFederacion,PDO::PARAM_INT);

 		$sql3->execute();	

 		/*=====  End of Actualiza información de los representantes  ======*/
 		

 	}else{

 		$query2 = $conexionEstablecida->prepare("SELECT idAteleta FROM pro_deportistaorganismo WHERE cedulaUsuario='$cedulaCiudadano';");
		$query2->execute(array('idAteleta'=>htmlentities(trim($idAteleta), ENT_QUOTES)));

		while($registro = $query2->fetch()) {
			$idAteleta=$registro['idAteleta'];
		}

 		$query3="UPDATE pro_deportistaorganismo SET callePrincipalCiudadano=:callePrincipalCiudadano,numeracionCiudadao=:numeracionCiudadao, calleSecundariaCiudadano=:calleSecundariaCiudadano, referenciaCiudadano=:referenciaCiudadano, email=:correoCiudadano, telCiudadano=:telCiudadano, telefono=:telCelularCiudadano WHERE idAteleta=:idAteleta;";
 		$sql3 = $conexionEstablecida->prepare($query3);

 		$sql3->bindParam(':callePrincipalCiudadano',$callePrincipalCiudadano,PDO::PARAM_STR);
 		$sql3->bindParam(':numeracionCiudadao',$numeracionCiudadao,PDO::PARAM_STR);
 		$sql3->bindParam(':calleSecundariaCiudadano',$calleSecundariaCiudadano,PDO::PARAM_STR);
 		$sql3->bindParam(':referenciaCiudadano',$referenciaCiudadano,PDO::PARAM_STR);
 		$sql3->bindParam(':correoCiudadano',$correoCiudadano,PDO::PARAM_STR);
 		$sql3->bindParam(':telCiudadano',$telCiudadano,PDO::PARAM_STR);
 		$sql3->bindParam(':telCelularCiudadano',$telCelularCiudadano,PDO::PARAM_STR);
 		$sql3->bindParam(':idAteleta',$idAteleta,PDO::PARAM_INT);

 		$sql3->execute();	


 	}


	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);