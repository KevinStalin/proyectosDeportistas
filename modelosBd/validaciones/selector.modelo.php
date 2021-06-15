<?php

	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	extract($_POST);

	class lugar{

		public static function lugarFuncion($indicador){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	

 			extract($_POST);

 			if ($indicador==1) {

	 			$query="SELECT DISTINCT idProvincia,nombreProvincia FROM in_md_provincias;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige una provincia--</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idProvincia"]."'>".utf8_decode(utf8_encode($registro["nombreProvincia"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==2){


 				$query="SELECT DISTINCT idCanton,nombreCanton FROM in_md_canton WHERE idProvincia=$provincia;";
			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un cantón-</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idCanton"]."'>".utf8_decode(utf8_encode($registro["nombreCanton"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==3){

 				$query="SELECT DISTINCT idParroquia,nombreParroquia FROM in_md_parroquia WHERE idCanton='$canton';";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige una parroquia-</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["idParroquia"]."'>".utf8_decode(utf8_encode($registro["nombreParroquia"]))."</option>";

			 	}

			 	return $listas;

 			}else if($indicador==4){

 				$query="SELECT id,paisnombre FROM poa_pais;";

			 	$resultado = $conexionEstablecida->query($query);

			 	$listas="<option value=''>--Elige un país-</option>";

			 	while($registro = $resultado->fetch()) {
			 	
			 		$listas.="<option value='".$registro["id"]."'>".utf8_decode(utf8_encode($registro["paisnombre"]))."</option>";

			 	}

			 	return $listas;

 			}

		}

	}


	echo lugar::lugarFuncion($indicador);

