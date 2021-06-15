<?php
	
	class usuario{

		public static function  usuarioCtr(){

		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$conexionEstablecida->exec("set names utf8");

 			if(!empty($_SESSION["username"])){

				if ($_SESSION["idRol"]==2) {
 			
					$query2="SELECT a.idFederacion,a.rucOrganismo,a.nombreOrganismo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provinciaFederacion) AS provinciaFederacion,(SELECT a1.nombreCanton FROM in_md_canton AS a1 WHERE a1.idCanton=a.cantonFederacion) AS cantonFederacion,(SELECT a1.nombreParroquia FROM in_md_parroquia AS a1 WHERE a1.idParroquia=a.parroquiaFederacion) AS parroquiaFederacion,a.telefono,a.direccion,a.email,b.idTramite,SUBSTRING(nombreOrganismo, 1, 3) AS nombreCompletoSin,YEAR(NOW()) AS anioFechas,a.tipoOrganismo,c.cedulaRepresentante,c.nombreReperesentante FROM pro_federacion AS a INNER JOIN pro_representante AS c ON c.idFederacion=a.idFederacion LEFT JOIN pro_proyecto AS b ON a.usuario=b.idUsuario  WHERE a.usuario='".$_SESSION["username"]."' GROUP BY a.usuario ORDER BY b.idTramite ASC LIMIT 1;";

					$resultado2 = $conexionEstablecida->query($query2);

					while($registro2 = $resultado2->fetch()) {

						$idFederacion=$registro2['idFederacion'];
						$rucOrganismo=$registro2['rucOrganismo'];
						$nombreOrganismo=$registro2['nombreOrganismo'];
						$provinciaFederacion=$registro2['provinciaFederacion'];
						$cantonFederacion=$registro2['cantonFederacion'];
						$parroquiaFederacion=$registro2['parroquiaFederacion'];
						$telefono=$registro2['telefono'];
						$direccion=$registro2['direccion'];
						$email=$registro2['email'];
						$nombreCompletoSin=$registro2['nombreCompletoSin'];
						$anioFechas=$registro2['anioFechas'];
						$tipoOrganismo=$registro2['tipoOrganismo'];
						$cedulaRepresentante=$registro2['cedulaRepresentante'];
						$nombreReperesentante=$registro2['nombreReperesentante'];
			
					}


					$query3="SELECT idTramite FROM pro_proyecto WHERE idUsuario='$rucOrganismo' ORDER BY idTramite DESC LIMIT 1;";

					$resultado3 = $conexionEstablecida->query($query3);

					while($registro3 = $resultado3->fetch()) {

						$idTramite=$registro3['idTramite'];

					}


					$query4="SELECT COUNT(idTramite) AS contador FROM pro_proyecto WHERE idUsuario='$rucOrganismo';";

					$resultado4 = $conexionEstablecida->query($query4);

					while($registro4 = $resultado4->fetch()) {

						$contador=$registro4['contador'];

					}

					if (empty($idTramite)) {
						$idTramite=0;
					}else{
						$idTramite=$idTramite;
					}

					$contador=$contador+1;

					$codigo=$contador."-".$rucOrganismo."-".$nombreCompletoSin."-".$anioFechas;

					$concateneador=$_SESSION["idRol"]."___".$idFederacion."___".$tipoOrganismo."___".$rucOrganismo."___".$nombreOrganismo."___".$provinciaFederacion."___".$cantonFederacion."___".$parroquiaFederacion."___".$telefono."___".$direccion."___".$email."___".$codigo."___".$cedulaRepresentante."___".$nombreReperesentante;


 				}else if($_SESSION["idRol"]==3){

					$query2="SELECT a.idAteleta,a.tipoOrganismo,a.cedulaUsuario,a.nombreCompleto,a.fechaNacimiento,a.sexo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provincia) AS provincia, (SELECT a1.nombreCanton FROM in_md_canton AS a1 WHERE a1.idCanton=a.canton) AS canton, (SELECT a1.nombreParroquia FROM in_md_parroquia AS a1 WHERE a1.idParroquia=a.parroquia) AS parroquia,a.telefono,a.direccion,a.email,b.idTramite,SUBSTRING(nombreCompleto, 1, 3) AS nombreCompletoSin,YEAR(NOW()) AS anioFechas FROM pro_deportistaorganismo AS a LEFT JOIN pro_proyecto AS b ON a.usuario=b.idUsuario WHERE a.usuario='".$_SESSION["username"]."' GROUP BY a.usuario ORDER BY b.idTramite ASC LIMIT 1;";

					$resultado2 = $conexionEstablecida->query($query2);


					while($registro2 = $resultado2->fetch()) {

						$idAteleta=$registro2['idAteleta'];
						$tipoOrganismo=$registro2['tipoOrganismo'];
						$cedulaUsuario=$registro2['cedulaUsuario'];
						$nombreCompleto=$registro2['nombreCompleto'];
						$fechaNacimiento=$registro2['fechaNacimiento'];
						$sexo=$registro2['sexo'];
						$provincia=$registro2['provincia'];
						$canton=$registro2['canton'];
						$parroquia=$registro2['parroquia'];
						$telefono=$registro2['telefono'];
						$direccion=$registro2['direccion'];
						$email=$registro2['email'];
						$nombreCompletoSin=$registro2['nombreCompletoSin'];
						$anioFechas=$registro2['anioFechas'];

					}

					$query3="SELECT idTramite FROM pro_proyecto WHERE idUsuario='$cedulaUsuario' ORDER BY idTramite DESC LIMIT 1;";

					$resultado3 = $conexionEstablecida->query($query3);

					while($registro3 = $resultado3->fetch()) {

						$idTramite=$registro3['idTramite'];

					}

					$query4="SELECT COUNT(idTramite) AS contador FROM pro_proyecto WHERE idUsuario='$cedulaUsuario';";

					$resultado4 = $conexionEstablecida->query($query4);

					while($registro4 = $resultado4->fetch()) {

						$contador=$registro4['contador'];

					}

					if (empty($idTramite)) {
						$idTramite=0;
					}else{
						$idTramite=$idTramite;
					}

					$contador=$contador+1;

					$codigo=$contador."-".$cedulaUsuario."-".str_replace('Ã', 'N',$nombreCompletoSin)."-".$anioFechas;


					$concateneador=$_SESSION["idRol"]."___".$idAteleta."___".$tipoOrganismo."___".$cedulaUsuario."___".$nombreCompleto."___".$fechaNacimiento."___".$sexo."___".$provincia."___".$canton."___".$parroquia."___".$telefono."___".$direccion."___".$email."___".$codigo;


 				}

		  		return $concateneador;			


 			}else{

 				return false;

 			}

 			
		}

		public static function ctrFuncionarios(){

		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			if(!empty($_SESSION["idUsuario"])){

	 			$conexionEstablecida->exec("set names utf8");

				$query="SELECT a.id_usuario,a.nombre,a.apellido,a.fisicamenteEstructura,a.PersonaACargo,a.zonal,b.id_rol FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE a.id_usuario='".$_SESSION["idUsuario"]."';";

				$resultado = $conexionEstablecida->query($query);

				while($registro = $resultado->fetch()) {

					$id_usuario=$registro['id_usuario'];
					$nombre=$registro['nombre'];
					$apellido=$registro['apellido'];
					$fisicamenteEstructura=$registro['fisicamenteEstructura'];
					$PersonaACargo=$registro['PersonaACargo'];
					$zonal=$registro['zonal'];
					$id_rol=$registro['id_rol'];


				}

				$concateneador=$id_usuario."___".$nombre."___".$apellido."___".$fisicamenteEstructura."___".$PersonaACargo."___".$zonal."___".$id_rol;

				return $concateneador;

 			}else{

 				return false;

 			}


		}

		public static function ctrOrganismoRuc(){


			$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			if(!empty($_SESSION["username"])){

				if ($_SESSION["idRol"]==2) {

					$query2="SELECT ruc FROM pro_sinaval WHERE ruc='".$_SESSION["username"]."';";
					$resultado2 = $conexionEstablecida->query($query2);

					while($registro2 = $resultado2->fetch()) {

						$ruc=$registro2['ruc'];
			
					}

					$concateneador=$ruc;

 				}else if($_SESSION["idRol"]==3){

 					$concateneador="";

 				}

		  		return $concateneador;			


 			}else{

 				return false;

 			}



		}

		public static function ctrDatosGenerales(){


			$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			if(!empty($_SESSION["username"])){

				if ($_SESSION["idRol"]==2) {

					$query2="SELECT a.idFederacion,a.direccion,b.callePrincipal,b.calleSecundaria,b.numeracion,b.referencia,c.provincia AS provinciaRe, c.canton AS cantonRe, c.parroquia AS parroquiaRe, c.callePrincipal AS callePrincipalRe, c.numeracion AS numeracionRe, c.calleSecundaria AS calleSecundariaRe, c.referencia AS referenciaRe, c.email AS emailRe, c.convencional AS convencionalRe, c.celular AS celularRe,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=c.provincia) AS provinciaNombre,(SELECT a1.nombreCanton FROM in_md_canton AS a1 WHERE a1.idCanton=c.canton) AS cantonNombre, (SELECT a1.nombreParroquia FROM in_md_parroquia AS a1 WHERE a1.idParroquia=c.parroquia) AS parroquiaNombre  FROM pro_federacion AS a INNER JOIN pro_direccionesfederacion AS b ON b.idFederacion=a.idFederacion INNER JOIN pro_representante AS c ON c.idFederacion=a.idFederacion WHERE a.rucOrganismo='".$_SESSION["username"]."' ORDER BY b.idDireccionOrganismo DESC LIMIT 1;";
					$resultado2 = $conexionEstablecida->query($query2);

					while($registro2 = $resultado2->fetch()) {

						$idFederacion=$registro2['idFederacion'];
						$direccion=$registro2['direccion'];
						$callePrincipal=$registro2['callePrincipal'];
						$calleSecundaria=$registro2['calleSecundaria'];
						$numeracion=$registro2['numeracion'];
						$referencia=$registro2['referencia'];
						$provinciaRe=$registro2['provinciaRe'];
						$cantonRe=$registro2['cantonRe'];
						$parroquiaRe=$registro2['parroquiaRe'];
						$callePrincipalRe=$registro2['callePrincipalRe'];
						$numeracionRe=$registro2['numeracionRe'];
						$calleSecundariaRe=$registro2['calleSecundariaRe'];
						$referenciaRe=$registro2['referenciaRe'];
						$emailRe=$registro2['emailRe'];
						$convencionalRe=$registro2['convencionalRe'];
						$celularRe=$registro2['celularRe'];
						$provinciaNombre=$registro2['provinciaNombre'];
						$cantonNombre=$registro2['cantonNombre'];
						$parroquiaNombre=$registro2['parroquiaNombre'];

						$concateneador=$idFederacion."___".$direccion."___".$callePrincipal."___".$calleSecundaria."___".$numeracion."___".$referencia."___".$provinciaRe."___".$cantonRe."___".$parroquiaRe."___".$callePrincipalRe."___".$numeracionRe."___".$calleSecundariaRe."___".$referenciaRe."___".$emailRe."___".$convencionalRe."___".$celularRe."___".$provinciaNombre."___".$cantonNombre."___".$parroquiaNombre;
			
					}


 				}else if($_SESSION["idRol"]==3){

					$query2="SELECT callePrincipalCiudadano,numeracionCiudadao,calleSecundariaCiudadano,referenciaCiudadano,email,telCiudadano,telefono FROM pro_deportistaorganismo WHERE cedulaUsuario='".$_SESSION["username"]."';";
					$resultado2 = $conexionEstablecida->query($query2);

					while($registro2 = $resultado2->fetch()) {

						$callePrincipalCiudadano=$registro2['callePrincipalCiudadano'];
						$numeracionCiudadao=$registro2['numeracionCiudadao'];
						$calleSecundariaCiudadano=$registro2['calleSecundariaCiudadano'];
						$referenciaCiudadano=$registro2['referenciaCiudadano'];
						$email=$registro2['email'];
						$telCiudadano=$registro2['telCiudadano'];
						$telefono=$registro2['telefono'];

						$concateneador=$callePrincipalCiudadano."___".$numeracionCiudadao."___".$calleSecundariaCiudadano."___".$referenciaCiudadano."___".$email."___".$telCiudadano."___".$telefono;
			
					}


 				}

		  		return $concateneador;			


 			}else{

 				return false;

 			}



	}

	public static function ctrProyectosFunciones($parametro){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

		$query="SELECT nombreProyecto,presupuestoLetras,sectorRecreacion,sectorDeporteFormativo,sectorDeporteConvencional,sectorDeporteAltoRendimiento,sectorDeporteProfesional,presupuesto FROM pro_proyetosreferencias WHERE codigoProyecto='$parametro' ORDER BY idProyectoReferencias DESC LIMIT 1;";
		$resultado = $conexionEstablecida->query($query);	

		while($registro2 = $resultado->fetch()) {

			$nombreProyecto=$registro2['nombreProyecto'];
			$presupuestoLetras=$registro2['presupuestoLetras'];
			$sectorRecreacion=$registro2['sectorRecreacion'];
			$sectorDeporteFormativo=$registro2['sectorDeporteFormativo'];
			$sectorDeporteConvencional=$registro2['sectorDeporteConvencional'];
			$sectorDeporteAltoRendimiento=$registro2['sectorDeporteAltoRendimiento'];
			$sectorDeporteProfesional=$registro2['sectorDeporteProfesional'];
			$presupuesto=$registro2['presupuesto'];

			$concateneador=$nombreProyecto."___".$presupuestoLetras."___".$sectorRecreacion."___".$sectorDeporteFormativo."___".$sectorDeporteConvencional."___".$sectorDeporteAltoRendimiento."___".$sectorDeporteProfesional."___".$presupuesto;
			
		}

		return $concateneador;	

	}


	public static function ctrAlineacionEstrategica($parametro){


		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

		$query="SELECT analisisSituacionActual,justificacionCaracterizacion,objetivoGeneralCaracterizacion FROM pro_caracterizacion WHERE codigo='$parametro' ORDER BY idCaracterizacion DESC LIMIT 1;";
		$resultado = $conexionEstablecida->query($query);	

		while($registro2 = $resultado->fetch()) {

			$analisisSituacionActual=$registro2['analisisSituacionActual'];
			$justificacionCaracterizacion=$registro2['justificacionCaracterizacion'];
			$objetivoGeneralCaracterizacion=$registro2['objetivoGeneralCaracterizacion'];


			$concateneador=$analisisSituacionActual."___".$justificacionCaracterizacion."___".$objetivoGeneralCaracterizacion;
			
		}

		return $concateneador;	

	}

	public static function ctrAlineacion($parametro){


		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

		$query="SELECT alineacionEstrategica,linea1,linea2,linea3,objetivo1Linea1,objetivo2Linea1,objetivo3Linea1,objetivo4Linea1,objetivo5Linea1,objetivo6Linea1,objetivo7Linea1,objetivo8Linea1,objetivo9Linea1,objetivo10Linea1,objetivo11Linea1,objetivo1Linea2,objetivo2Linea2,objetivo3linea2,objetivo4Linea2,objetivo1Linea3,objetivo2Linea3,objetivo3Linea3,objetivo4Linea3,objetivo5Linea3,objetivo1Institucional,objetivo2Institucional,objetivo1Linea1Item1,objetivo1Linea1Item2,objetivo1Linea1Item3,objetivo2Linea1Item1,objetivo2Linea1Item2,objetivo2Linea1Item3,objetivo2Linea1Item4,objetivo3Linea1Item1,objetivo3Linea1Item2,objetivo3Linea1Item3,objetivo3Linea1Item4,objetivo4Linea1Item1,objetivo5Linea1Item1,objetivo6Linea1Item1,objetivo6Linea1Item2,objetivo7Linea1Item1,objetivo7Linea1Item2,objetivo8Linea1Item1,objetivo8Linea1Item2,objetivo8Linea1Item3,objetivo8Linea1Item4,objetivo8Linea1Item5,objetivo9Linea1Item1,objetivo10Linea1Item1,objetivo10Linea1Item2,objetivo10Linea1Item3,objetivo10Linea1Item4,objetivo10Linea1Item5,objetivo11Linea1Item1,objetivo11Linea1Item2,objetivo1Linea2Item1,objetivo1Linea2Item2,objetivo1Linea2Item3,objetivo1Linea2Item4,objetivo2Linea2Item1,objetivo2Linea2Item2,objetivo2Linea2Item3,objetivo3Linea2Item1,objetivo3Linea2Item2,objetivo3Linea2Item3,objetivo4Linea2Item1,objetivo4Linea2Item2,objetivo1Linea3Item1,objetivo1Linea3Item2,objetivo1Linea3Item3,objetivo1Linea3Item4,objetivo1Linea3Item5,objetivo1Linea3Item6,objetivo2Linea3Item1,objetivo2Linea3Item2,objetivo3Linea3Item1,objetivo3Linea3Item2,objetivo3Linea3Item3,objetivo4Linea3Item1,objetivo4Linea3Item2,objetivo5Linea3Item1,objetivo5Linea3Item2,objetivo1Institucionaltem1,objetivo1Institucionaltem2,objetivo1Institucionaltem3,objetivo2Institucionaltem1,objetivo2Institucionaltem2,objetivo2Institucionaltem3 FROM pro_alineacion WHERE codigo='$parametro' ORDER BY idLineaPolitica DESC LIMIT 1;";
		$resultado = $conexionEstablecida->query($query);	

		while($registro2 = $resultado->fetch()) {

			$alineacionEstrategica=$registro2['alineacionEstrategica'];
			$linea1=$registro2['linea1'];
			$linea2=$registro2['linea2'];
			$linea3=$registro2['linea3'];
			$objetivo1Linea1=$registro2['objetivo1Linea1'];
			$objetivo2Linea1=$registro2['objetivo2Linea1'];
			$objetivo3Linea1=$registro2['objetivo3Linea1'];
			$objetivo4Linea1=$registro2['objetivo4Linea1'];
			$objetivo5Linea1=$registro2['objetivo5Linea1'];
			$objetivo6Linea1=$registro2['objetivo6Linea1'];
			$objetivo7Linea1=$registro2['objetivo7Linea1'];
			$objetivo8Linea1=$registro2['objetivo8Linea1'];
			$objetivo9Linea1=$registro2['objetivo9Linea1'];
			$objetivo10Linea1=$registro2['objetivo10Linea1'];
			$objetivo11Linea1=$registro2['objetivo11Linea1'];
			$objetivo1Linea2=$registro2['objetivo1Linea2'];
			$objetivo2Linea2=$registro2['objetivo2Linea2'];
			$objetivo3linea2=$registro2['objetivo3linea2'];
			$objetivo4Linea2=$registro2['objetivo4Linea2'];
			$objetivo1Linea3=$registro2['objetivo1Linea3'];
			$objetivo2Linea3=$registro2['objetivo2Linea3'];
			$objetivo3Linea3=$registro2['objetivo3Linea3'];
			$objetivo4Linea3=$registro2['objetivo4Linea3'];
			$objetivo5Linea3=$registro2['objetivo5Linea3'];
			$objetivo1Institucional=$registro2['objetivo1Institucional'];
			$objetivo2Institucional=$registro2['objetivo2Institucional'];
			$objetivo1Linea1Item1=$registro2['objetivo1Linea1Item1'];
			$objetivo1Linea1Item2=$registro2['objetivo1Linea1Item2'];
			$objetivo1Linea1Item3=$registro2['objetivo1Linea1Item3'];
			$objetivo2Linea1Item1=$registro2['objetivo2Linea1Item1'];
			$objetivo2Linea1Item2=$registro2['objetivo2Linea1Item2'];
			$objetivo2Linea1Item3=$registro2['objetivo2Linea1Item3'];
			$objetivo2Linea1Item4=$registro2['objetivo2Linea1Item4'];
			$objetivo3Linea1Item1=$registro2['objetivo3Linea1Item1'];
			$objetivo3Linea1Item2=$registro2['objetivo3Linea1Item2'];
			$objetivo3Linea1Item3=$registro2['objetivo3Linea1Item3'];
			$objetivo3Linea1Item4=$registro2['objetivo3Linea1Item4'];
			$objetivo4Linea1Item1=$registro2['objetivo4Linea1Item1'];
			$objetivo5Linea1Item1=$registro2['objetivo5Linea1Item1'];
			$objetivo6Linea1Item1=$registro2['objetivo6Linea1Item1'];
			$objetivo6Linea1Item2=$registro2['objetivo6Linea1Item2'];
			$objetivo7Linea1Item1=$registro2['objetivo7Linea1Item1'];
			$objetivo7Linea1Item2=$registro2['objetivo7Linea1Item2'];
			$objetivo8Linea1Item1=$registro2['objetivo8Linea1Item1'];
			$objetivo8Linea1Item2=$registro2['objetivo8Linea1Item2'];
			$objetivo8Linea1Item3=$registro2['objetivo8Linea1Item3'];
			$objetivo8Linea1Item4=$registro2['objetivo8Linea1Item4'];
			$objetivo8Linea1Item5=$registro2['objetivo8Linea1Item5'];
			$objetivo9Linea1Item1=$registro2['objetivo9Linea1Item1'];
			$objetivo10Linea1Item1=$registro2['objetivo10Linea1Item1'];
			$objetivo10Linea1Item2=$registro2['objetivo10Linea1Item2'];
			$objetivo10Linea1Item3=$registro2['objetivo10Linea1Item3'];
			$objetivo10Linea1Item4=$registro2['objetivo10Linea1Item4'];
			$objetivo10Linea1Item5=$registro2['objetivo10Linea1Item5'];
			$objetivo11Linea1Item1=$registro2['objetivo11Linea1Item1'];
			$objetivo11Linea1Item2=$registro2['objetivo11Linea1Item2'];
			$objetivo1Linea2Item1=$registro2['objetivo1Linea2Item1'];
			$objetivo1Linea2Item2=$registro2['objetivo1Linea2Item2'];
			$objetivo1Linea2Item3=$registro2['objetivo1Linea2Item3'];
			$objetivo1Linea2Item4=$registro2['objetivo1Linea2Item4'];
			$objetivo2Linea2Item1=$registro2['objetivo2Linea2Item1'];
			$objetivo2Linea2Item2=$registro2['objetivo2Linea2Item2'];
			$objetivo2Linea2Item3=$registro2['objetivo2Linea2Item3'];
			$objetivo3Linea2Item1=$registro2['objetivo3Linea2Item1'];
			$objetivo3Linea2Item2=$registro2['objetivo3Linea2Item2'];
			$objetivo3Linea2Item3=$registro2['objetivo3Linea2Item3'];
			$objetivo4Linea2Item1=$registro2['objetivo4Linea2Item1'];
			$objetivo4Linea2Item2=$registro2['objetivo4Linea2Item2'];
			$objetivo1Linea3Item1=$registro2['objetivo1Linea3Item1'];
			$objetivo1Linea3Item2=$registro2['objetivo1Linea3Item2'];
			$objetivo1Linea3Item3=$registro2['objetivo1Linea3Item3'];
			$objetivo1Linea3Item4=$registro2['objetivo1Linea3Item4'];
			$objetivo1Linea3Item5=$registro2['objetivo1Linea3Item5'];
			$objetivo1Linea3Item6=$registro2['objetivo1Linea3Item6'];
			$objetivo2Linea3Item1=$registro2['objetivo2Linea3Item1'];
			$objetivo2Linea3Item2=$registro2['objetivo2Linea3Item2'];
			$objetivo3Linea3Item1=$registro2['objetivo3Linea3Item1'];
			$objetivo3Linea3Item2=$registro2['objetivo3Linea3Item2'];
			$objetivo3Linea3Item3=$registro2['objetivo3Linea3Item3'];
			$objetivo4Linea3Item1=$registro2['objetivo4Linea3Item1'];
			$objetivo4Linea3Item2=$registro2['objetivo4Linea3Item2'];
			$objetivo5Linea3Item1=$registro2['objetivo5Linea3Item1'];
			$objetivo5Linea3Item2=$registro2['objetivo5Linea3Item2'];
			$objetivo1Institucionaltem1=$registro2['objetivo1Institucionaltem1'];
			$objetivo1Institucionaltem2=$registro2['objetivo1Institucionaltem2'];
			$objetivo1Institucionaltem3=$registro2['objetivo1Institucionaltem3'];
			$objetivo2Institucionaltem1=$registro2['objetivo2Institucionaltem1'];
			$objetivo2Institucionaltem2=$registro2['objetivo2Institucionaltem2'];
			$objetivo2Institucionaltem3=$registro2['objetivo2Institucionaltem3'];


			$concateneador=$alineacionEstrategica."___".$linea1."___".$linea2."___".$linea3."___".$objetivo1Linea1."___".$objetivo2Linea1."___".$objetivo3Linea1."___".$objetivo4Linea1."___".$objetivo5Linea1."___".$objetivo6Linea1."___".$objetivo7Linea1."___".$objetivo8Linea1."___".$objetivo9Linea1."___".$objetivo10Linea1."___".$objetivo11Linea1."___".$objetivo1Linea2."___".$objetivo2Linea2."___".$objetivo3linea2."___".$objetivo4Linea2."___".$objetivo1Linea3."___".$objetivo2Linea3."___".$objetivo3Linea3."___".$objetivo4Linea3."___".$objetivo5Linea3."___".$objetivo1Institucional."___".$objetivo2Institucional."___".$objetivo1Linea1Item1."___".$objetivo1Linea1Item2."___".$objetivo1Linea1Item3."___".$objetivo2Linea1Item1."___".$objetivo2Linea1Item2."___".$objetivo2Linea1Item3."___".$objetivo2Linea1Item4."___".$objetivo3Linea1Item1."___".$objetivo3Linea1Item2."___".$objetivo3Linea1Item3."___".$objetivo3Linea1Item4."___".$objetivo4Linea1Item1."___".$objetivo5Linea1Item1."___".$objetivo6Linea1Item1."___".$objetivo6Linea1Item2."___".$objetivo7Linea1Item1."___".$objetivo7Linea1Item2."___".$objetivo8Linea1Item1."___".$objetivo8Linea1Item2."___".$objetivo8Linea1Item3."___".$objetivo8Linea1Item4."___".$objetivo8Linea1Item5."___".$objetivo9Linea1Item1."___".$objetivo10Linea1Item1."___".$objetivo10Linea1Item2."___".$objetivo10Linea1Item3."___".$objetivo10Linea1Item4."___".$objetivo10Linea1Item5."___".$objetivo11Linea1Item1."___".$objetivo11Linea1Item2."___".$objetivo1Linea2Item1."___".$objetivo1Linea2Item2."___".$objetivo1Linea2Item3."___".$objetivo1Linea2Item4."___".$objetivo2Linea2Item1."___".$objetivo2Linea2Item2."___".$objetivo2Linea2Item3."___".$objetivo3Linea2Item1."___".$objetivo3Linea2Item2."___".$objetivo3Linea2Item3."___".$objetivo4Linea2Item1."___".$objetivo4Linea2Item2."___".$objetivo1Linea3Item1."___".$objetivo1Linea3Item2."___".$objetivo1Linea3Item3."___".$objetivo1Linea3Item4."___".$objetivo1Linea3Item5."___".$objetivo1Linea3Item6."___".$objetivo2Linea3Item1."___".$objetivo2Linea3Item2."___".$objetivo3Linea3Item1."___".$objetivo3Linea3Item2."___".$objetivo3Linea3Item3."___".$objetivo4Linea3Item1."___".$objetivo4Linea3Item2."___".$objetivo5Linea3Item1."___".$objetivo5Linea3Item2."___".$objetivo1Institucionaltem1."___".$objetivo1Institucionaltem2."___".$objetivo1Institucionaltem3."___".$objetivo2Institucionaltem1."___".$objetivo2Institucionaltem2."___".$objetivo2Institucionaltem3;
			
		}

		return $concateneador;	

	}

}

