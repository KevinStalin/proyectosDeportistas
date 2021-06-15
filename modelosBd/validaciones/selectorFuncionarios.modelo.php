<?php

	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	extract($_POST);

	class lugar{

		public static function lugarFuncion(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	

 			$conexionEstablecida->exec("set names utf8");

 			extract($_POST);

 			if ($fisicamenteEstructura==1) {

 				$data=array();

 				$query="SELECT id_usuario,nombre,apellido FROM th_usuario WHERE PersonaACargo='$idUsuario';";
				$resultado = $conexionEstablecida->query($query);
 				


 				$query2="SELECT id_usuario,nombre,apellido FROM th_usuario WHERE PersonaACargo='$idUsuario';";
				$resultado2 = $conexionEstablecida->query($query2);

				while($registro2 = $resultado2->fetch()) {

					$id_usuarioBases=$registro2['id_usuario'];

					array_push($data, $id_usuarioBases);

				}

				$dataString = implode(" OR PersonaACargo=", $data);

 				$query3="SELECT id_usuario,nombre,apellido FROM th_usuario WHERE PersonaACargo=$dataString;";
				$resultado3 = $conexionEstablecida->query($query3);


 			}else{

 				$query="SELECT id_usuario,nombre,apellido FROM th_usuario WHERE PersonaACargo='$idUsuario';";
				$resultado = $conexionEstablecida->query($query);

 			}

			$listas="<option value=''>--Elige un funcionario--</option>";

			if ($fisicamenteEstructura==1) {

				while($registro3 = $resultado3->fetch()) {
				 	
				 	$listas.="<option value='".$registro3["id_usuario"]."'>".utf8_decode(utf8_encode($registro3["nombre"]))." ".utf8_decode(utf8_encode($registro3["apellido"]))."</option>";

				}

			}else{

				while($registro = $resultado->fetch()) {
				 	
				 	$listas.="<option value='".$registro["id_usuario"]."'>".utf8_decode(utf8_encode($registro["nombre"]))." ".utf8_decode(utf8_encode($registro["apellido"]))."</option>";

				}

			}

			return $listas;

		}

	}


	echo lugar::lugarFuncion();

