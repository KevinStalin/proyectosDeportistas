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
	$data4=array();
	$data5=array();
	$data6=array();
	$data7=array();
	$data8=array();
	$data9=array();
	$data10=array();
	$data11=array();
	$data12=array();

	/*=====  End of Declaración arrays  ======*/
	


	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();	

 	$query="SELECT idProyectoUnitario,(SELECT a1.paisnombre FROM poa_pais AS a1 WHERE a1.id=paisTipo) AS paisTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=provinciaUbicacion) AS provinciaUbicacion,(SELECT a1.nombreCanton FROM in_md_canton AS a1 WHERE a1.idCanton=cantonMultiples) AS cantonMultiples,(SELECT a1.nombreParroquia FROM in_md_parroquia AS a1 WHERE a1.idParroquia=parroquiaMultiples) AS parroquiaMultiples,ubicacion FROM pro_proyectounitario WHERE codigoProyecto='$codigoProyecto';";
	$resultado = $conexionEstablecida->query($query);


	while($registro = $resultado->fetch()) {

		$idProyectoUnitario=$registro['idProyectoUnitario'];
		array_push($data1, $idProyectoUnitario);

		$paisTipo=$registro['paisTipo'];
		array_push($data2, $paisTipo);

		$provinciaUbicacion=$registro['provinciaUbicacion'];
		array_push($data3, $provinciaUbicacion);

		$cantonMultiples=$registro['cantonMultiples'];
		array_push($data4, $cantonMultiples);

		$parroquiaMultiples=$registro['parroquiaMultiples'];
		array_push($data5, $parroquiaMultiples);

		$ubicacion=$registro['ubicacion'];
		array_push($data6, $ubicacion);

	}

	 $query2="SELECT idProyectoUnitarioInternacional,(SELECT a1.paisnombre FROM poa_pais AS a1 WHERE a1.id=paisTipo) AS paisTipoInterna,estado,sector,comunidad,ubicacion AS ubicacionInter FROM pro_proyectounitariointer WHERE codigoProyecto='$codigoProyecto';";
	$resultado2 = $conexionEstablecida->query($query2);


	while($registro2 = $resultado2->fetch()) {

		$idProyectoUnitarioInternacional=$registro2['idProyectoUnitarioInternacional'];
		array_push($data7, $idProyectoUnitarioInternacional);

		$paisTipoInterna=$registro2['paisTipoInterna'];
		array_push($data8, $paisTipoInterna);

		$estado=$registro2['estado'];
		array_push($data9, $estado);

		$sector=$registro2['sector'];
		array_push($data10, $sector);

		$comunidad=$registro2['comunidad'];
		array_push($data11, $comunidad);

		$ubicacionInter=$registro2['ubicacionInter'];
		array_push($data12, $ubicacionInter);

	}

	$stringidProyectoUnitario =  implode("------", $data1);
	$stringpaisTipo =  implode("------", $data2);
	$stringprovinciaUbicacion =  implode("------", $data3);
	$stringcantonMultiples =  implode("------", $data4);
	$stringparroquiaMultiples =  implode("------", $data5);
	$stringubicacion =  implode("------", $data6);
	$stringidProyectoUnitarioInternacional =  implode("------", $data7);
	$stringpaisTipoInterna =  implode("------", $data8);
	$stringestado =  implode("------", $data9);
	$stringsector =  implode("------", $data10);
	$stringcomunidad =  implode("------", $data11);
	$stringubicacionInter =  implode("------", $data12);

	$jason['stringidProyectoUnitario']=$stringidProyectoUnitario;
	$jason['stringpaisTipo']=$stringpaisTipo;
	$jason['stringprovinciaUbicacion']=$stringprovinciaUbicacion;
	$jason['stringcantonMultiples']=$stringcantonMultiples;
	$jason['stringparroquiaMultiples']=$stringparroquiaMultiples;
	$jason['stringubicacion']=$stringubicacion;
	$jason['stringidProyectoUnitarioInternacional']=$stringidProyectoUnitarioInternacional;
	$jason['stringpaisTipoInterna']=$stringpaisTipoInterna;
	$jason['stringestado']=$stringestado;
	$jason['stringsector']=$stringsector;
	$jason['stringcomunidad']=$stringcomunidad;
	$jason['stringubicacionInter']=$stringubicacionInter;

	echo json_encode($jason);