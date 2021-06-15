<?php


	class ingreso{

		 public static function ingresoCtr(){

		 	extract($_POST);

			$conexionRecuperada= new conexion();
			$conexionEstablecida=$conexionRecuperada->cConexion();


			if (isset($_POST["ingresarUsuario"])) {

				if (empty($username) || empty($password)) {

	 				echo '<script>
		 								
								alertify.set("notifier","position", "top-right");
			                    alertify.notify("Datos obligatorios", "error", 5, function(){});

			                    if($("#username").val()==""){
			                    	$("#username").addClass("error");
			                    }
			                    
			                    if($("#password").val()==""){
			                    	$("#password").addClass("error");
			                    }


					     </script>'; 


				}else{

					/*============================================
					=            Usuario Convencional            =
					============================================*/

					$password=sha1($password);

					$querySegunda="SELECT a.idOrganismosFuncio,a.idRol AS idRolTotal FROM pro_rolesdepor AS a INNER JOIN pro_federacion AS b ON a.idUsuario=b.rucOrganismo WHERE b.usuario='$username' AND b.`password`='$password';";

					$resultado = $conexionEstablecida->query($querySegunda);

					while($registro = $resultado->fetch()) {

						$idOrganismosFuncio=$registro['idOrganismosFuncio'];
						$idRolTotal=$registro['idRolTotal'];

					}



					$query2="SELECT a.idOrganismosFuncio AS idOrgasUsuarios,a.idRol AS idRolUsuarios FROM pro_rolesdepor AS a INNER JOIN pro_deportistaorganismo AS b ON a.idUsuario=b.cedulaUsuario WHERE b.usuario='$username' AND b.`password`='$password';";

					$resultado2 = $conexionEstablecida->query($query2);

					while($registro2 = $resultado2->fetch()) {

						$idOrgasUsuarios=$registro2['idOrgasUsuarios'];
						$idRolUsuarios=$registro2['idRolUsuarios'];

					}

					
					if (!empty($idOrganismosFuncio)) {

						$idUsuario=$idOrganismosFuncio;

						$idRol=$idRolTotal;

					}else if(!empty($idOrgasUsuarios)){

						$idUsuario=$idOrgasUsuarios;

						$idRol=$idRolUsuarios;						

					}
					
					
					/*=====  End of Usuario Convencional  ======*/


					/*==================================================
					=            Usuarios de talento humano            =
					==================================================*/

					$query3="SELECT a.id_usuario,a.id_rol,b.fisicamenteEstructura FROM th_usuario_roles AS a INNER JOIN th_usuario AS b ON a.id_usuario=b.id_usuario WHERE b.usuario='$username' AND b.`password`='$password';";

					$resultado3 = $conexionEstablecida->query($query3);

					while($registro3 = $resultado3->fetch()) {

						$idUsuarioTalento=$registro3['id_usuario'];
						$idRolTalento=$registro3['id_rol'];
						$fisicamenteEstructura=$registro3['fisicamenteEstructura'];

					}	
					
					
					/*=====  End of Usuarios de talento humano  ======*/
					
					
					if ($idUsuario && ($idRol == 2 || $idRol==3)) {



						date_default_timezone_set("America/Guayaquil");

						$fecha_actual = date('Y-m-d');
						$hora_actual= date('H:i:s');

						$queryAcciones="INSERT INTO `ezonshar_mdepsaddb`.`pro_registrousuario` (`idLogueos`, `fecha`, `hora`, `estado`, `idUsuario`) VALUES (NULL, '$fecha_actual', '$hora_actual', 'A', '$username');";
						$resultadoAcciones= $conexionEstablecida->exec($queryAcciones);
						
						session_start();

						$_SESSION["iniciarSesion"]="ok";
						$_SESSION["idRol"]=$idRol;
						$_SESSION["username"]=$username;
						$_SESSION['testing'] = time(); 
						    
						echo '<script>window.location="datosGenerales"</script>';

					}else if($idUsuarioTalento && ($idRolTalento == 7 || $idRolTalento==6 || $idRolTalento==4) && ($fisicamenteEstructura=24 || $fisicamenteEstructura=26)){

						session_start();

						$_SESSION["iniciarSesion"]="ok";
						$_SESSION["idUsuario"]=$idUsuarioTalento;
						$_SESSION["idRol"]=$idRolTalento;
						$_SESSION['testing'] = time(); 
						    
						echo '<script>window.location="subsecretario"</script>';

					}else if($idUsuarioTalento && $idRolTalento == 2){

						$_SESSION["iniciarSesion"]="ok";
						$_SESSION["idUsuario"]=$idUsuarioTalento;
						$_SESSION["idRol"]=$idRolTalento;
						$_SESSION['testing'] = time(); 
						    
						echo '<script>window.location="directores"</script>';

					}else if($idUsuarioTalento && $idRolTalento == 3){

						$_SESSION["iniciarSesion"]="ok";
						$_SESSION["idUsuario"]=$idUsuarioTalento;
						$_SESSION["idRol"]=$idRolTalento;
						$_SESSION['testing'] = time(); 
						    
						echo '<script>window.location="funcionarios"</script>';

					}else if($idUsuarioTalento && $idRolTalento == 1){

						$_SESSION["iniciarSesion"]="ok";
						$_SESSION["idUsuario"]=$idUsuarioTalento;
						$_SESSION["idRol"]=$idRolTalento;
						$_SESSION['testing'] = time(); 
						    
						echo '<script>window.location="deportistas"</script>';

					}else{


		 				echo '<script>

		 								
								alertify.set("notifier","position", "top-right");
			                    alertify.notify("Usuario o contraseña incorrectos", "error", 5, function(){});

						     </script>'; 


					} 

				}


		  }

	  } 

}



	


