<?php

	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	extract($_POST);

	class calificacion{

		public static function tramitesFunciones($tramite){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	

 			extract($_POST);


			date_default_timezone_set("America/Guayaquil");

			$fecha_actual = date('Y-m-d');
			$hora_actual= date('H:i:s');
			

 			if ($tramite==1) {

				$query="UPDATE pro_proyecto SET califica='$condicionante',fechaCalifica='$fecha_actual',horaCalifica='$hora_actual' WHERE idTramite='$idTramite';";
				$resultado= $conexionEstablecida->exec($query);

	 			$query2="SELECT idTramite FROM pro_proyecto WHERE califica='A' AND idTramite='$idTramite';";
			 	$resultado2 = $conexionEstablecida->query($query2);


			 	while($registro2 = $resultado2->fetch()) {
			 	
			 		$idTramiteBaseDeDatos=$registro2["idTramite"];

			 	}

			 	if (empty($idTramiteBaseDeDatos)) {
			 		
			 		$mensaje=2;

			 	}else{

			 		$mensaje=1;

			 	}

				

 			}else if($tramite==2){


	 			$query2="SELECT idTramite FROM pro_proyecto WHERE califica='A' AND idTramite='$idTramite';";
			 	$resultado2 = $conexionEstablecida->query($query2);


			 	while($registro2 = $resultado2->fetch()) {
			 	
			 		$idTramiteBaseDeDatos=$registro2["idTramite"];

			 	}

			 	if (empty($idTramiteBaseDeDatos)) {
			 		
			 		$mensaje=2;

			 	}else{

			 		$query="UPDATE pro_proyecto SET certifica='$condicionante',fechaCertifica='$fecha_actual',horaCertifica='$hora_actual' WHERE idTramite='$idTramite';";
					$resultado= $conexionEstablecida->exec($query);

					$mensaje=1;

			 	}


 			}else if($tramite==3){

 					$query="UPDATE pro_proyecto SET certifica='N',califica='N',fechaCalifica='$fecha_actual',horaCalifica='$hora_actual',fechaCertifica='$fecha_actual',horaCertifica='$hora_actual',observacionNiega='$obseracionDefinida' WHERE idTramite='$idTramite';";
					$resultado= $conexionEstablecida->exec($query);

					$mensaje=1;


 			}


 			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}

	}


	echo calificacion::tramitesFunciones($tramite);

