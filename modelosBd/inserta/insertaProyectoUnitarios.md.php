<?php

	extract($_POST);


	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);



 	$paisTipoArray = json_decode($paisTipo);
 	$paisTipoInterArray = json_decode($paisTipoInter);
 	$provinciaUbicacionArray = json_decode($provinciaUbicacion);
 	$cantonMultiplesArray = json_decode( $cantonMultiples);
 	$parroquiaMultiplesArray = json_decode( $parroquiaMultiples);
 	$ubicacionArray = json_decode( $ubicacion);
 	$ubicacionInterArray = json_decode( $ubicacionInter);
 	$estadoArray = json_decode( $estado);
 	$sectorArray = json_decode( $sector);
 	$comunidadArray = json_decode( $comunidad);
 	$tipoUbicacionArray = json_decode( $tipoUbicacion);

 	
 	$query="INSERT INTO `ezonshar_mdepsaddb`.`pro_proyetosreferencias` (`idProyectoReferencias`, `codigoProyecto`, `nombreProyecto`, `presupuestoLetras`, `sectorRecreacion`, `sectorDeporteFormativo`, `sectorDeporteConvencional`, `sectorDeporteAltoRendimiento`, `sectorDeporteProfesional`, `presupuesto`) VALUES (NULL, :codigoProyecto, :nombreProyecto, :presupuestoLetras, :sectorRecreacion, :sectorDeporteFormativo, :sectorDeporteConvencional, :sectorDeporteAltoRendimiento, :sectorDeporteProfesional,:presupuesto);";
 	$sql = $conexionEstablecida->prepare($query);

 	$sql->bindParam(':codigoProyecto',$codigoProyecto,PDO::PARAM_STR);
 	$sql->bindParam(':nombreProyecto',$nombreProyecto,PDO::PARAM_STR);
 	$sql->bindParam(':presupuestoLetras',$presupuestoLetras,PDO::PARAM_STR);
 	$sql->bindParam(':sectorRecreacion',$sectorRecreacion,PDO::PARAM_STR);
 	$sql->bindParam(':sectorDeporteFormativo',$sectorDeporteFormativo,PDO::PARAM_STR);
 	$sql->bindParam(':sectorDeporteConvencional',$sectorDeporteConvencional,PDO::PARAM_STR);
 	$sql->bindParam(':sectorDeporteAltoRendimiento',$sectorDeporteAltoRendimiento,PDO::PARAM_STR);
 	$sql->bindParam(':sectorDeporteProfesional',$sectorDeporteProfesional,PDO::PARAM_STR);
 	$sql->bindParam(':presupuesto',$presupuesto,PDO::PARAM_STR);
	$sql->execute();	

	if (!empty($paisTipo)) {
		
		$contadorNacional=count($provinciaUbicacionArray);

	 	for ($i=0; $i < $contadorNacional; $i++) { 

	 		
		 	$query2="INSERT INTO `ezonshar_mdepsaddb`.`pro_proyectounitario` (`idProyectoUnitario`, `codigoProyecto`, `paisTipo`, `provinciaUbicacion`, `cantonMultiples`, `parroquiaMultiples`, `ubicacion`, `tipoUbicacion`) VALUES (NULL, :codigoProyecto,:paisTipo, :provinciaUbicacion, :cantonMultiples, :parroquiaMultiples, :ubicacion, :tipoUbicacion);";
		 	$sql2 = $conexionEstablecida->prepare($query2);

		 	$sql2->bindParam(':codigoProyecto',$codigoProyecto,PDO::PARAM_STR);
		 	$sql2->bindParam(':paisTipo',$paisTipoArray[$i],PDO::PARAM_STR);
		 	$sql2->bindParam(':provinciaUbicacion',$provinciaUbicacionArray[$i],PDO::PARAM_STR);
		 	$sql2->bindParam(':cantonMultiples',$cantonMultiplesArray[$i],PDO::PARAM_STR);
		 	$sql2->bindParam(':parroquiaMultiples',$parroquiaMultiplesArray[$i],PDO::PARAM_STR);
		 	$sql2->bindParam(':ubicacion',$ubicacionArray[$i],PDO::PARAM_STR);
		 	$sql2->bindParam(':tipoUbicacion',$tipoUbicacionArray[$i],PDO::PARAM_STR);

		 	$sql2->execute();	

	 	}


	}


 	if (!empty($paisTipoInter)) {

 		$contadorInternacional=count($estadoArray);

 		for($z=0; $z < $contadorInternacional; $z++){

		 	$query3="INSERT INTO `ezonshar_mdepsaddb`.`pro_proyectounitariointer` (`idProyectoUnitarioInternacional`, `codigoProyecto`, `paisTipo`, `ubicacion`, `estado`, `sector`, `comunidad`, `tipoUbicacion`) VALUES (NULL, :codigoProyecto, :paisTipoInter, :ubicacionInter, :estadoInter, :sectorInter, :comunidadInter, :tipoUbicacionInter);";
		 	$sql3 = $conexionEstablecida->prepare($query3);


		 	$sql3->bindParam(':codigoProyecto',$codigoProyecto,PDO::PARAM_STR);
		 	$sql3->bindParam(':paisTipoInter',$paisTipoInterArray[$z],PDO::PARAM_STR);
		 	$sql3->bindParam(':ubicacionInter',$ubicacionInterArray[$z],PDO::PARAM_STR);
		 	$sql3->bindParam(':estadoInter',$estadoArray[$z],PDO::PARAM_STR);
		 	$sql3->bindParam(':sectorInter',$sectorArray[$z],PDO::PARAM_STR);	
		 	$sql3->bindParam(':comunidadInter',$comunidadArray[$z],PDO::PARAM_STR);	
		 	$sql3->bindParam(':tipoUbicacionInter',$tipoUbicacionArray[$z],PDO::PARAM_STR);	

		 	$sql3->execute();	


	 	}


 	}



	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);