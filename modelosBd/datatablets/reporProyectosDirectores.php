<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	// $conexionEstablecida->exec("set names utf8");

 	extract($_POST);

 	if ($fisicamenteEstructura==12) {

 		$variableQuery=" (a.tipoDeportistas='altoRendimiento' OR a.tipoDeportistas='militarDeportiva' OR a.tipoDeportistas='profesional' OR a.tipoDeportistas='alto') ";

 	}else if($fisicamenteEstructura==14){

 		$variableQuery=" (a.tipoDeportistas='alto2' OR a.tipoDeportistas='altoRendimientoDiscapacidad') ";

 	}else if($fisicamenteEstructura==13){

 		$variableQuery=" (a.tipoDeportistas='formativo' OR a.tipoDeportistas='estudiantil' OR a.tipoDeportistas='noFederado' OR a.tipoDeportistas='recreativo') ";

 	}else{

 		$variableQuery=" (a.tipoDeportistas='noDa') ";

 	}

 	if ($fisicamenteEstructura==15) {

		$query="SELECT a.idTramite,a.tipoDeportistas, (SELECT a1.nombreOrganismo FROM pro_federacion AS a1 WHERE a1.rucOrganismo=a.idUsuario) AS nombreOrganismo, (SELECT a2.nombreCompleto FROM pro_deportistaorganismo AS a2 WHERE a2.cedulaUsuario=a.idUsuario) AS nombreDeportistas, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombre,a.monto,a.alcanse,a.codigo,b.proyectoCargadoPdf,b.estadoProyectoCarcado,b.curriculumDeportivoSegundo,b.estadoCurriculumDeportivoSegundo, b.certificadoFederacionPdf,b.estadoCertificadoFederacion,b.certificadoOrganismoSuperiorPdf,b.estadoCertificadoOrganismoSuperior, b.solicitudFederacionPdf,b.estadoSolicitudFederacion,b.avalFederacionPdf,b.estadoAvalFederacion,b.solciitudAvalPdf,b.estadoSolicitudAval,b.avalOrganismoSuperiorPdf,b.estadoAvalOrganismoSuperior,a.fecha,a.estado,a.idRol, (SELECT a1.email FROM pro_federacion AS a1 WHERE a1.rucOrganismo=a.idUsuario) AS emailOrganismo, (SELECT a2.email FROM pro_deportistaorganismo AS a2 WHERE a2.cedulaUsuario=a.idUsuario) AS emailDeportistas, a.califica, a.certifica,a.siRespuestas,a.regresaTramite,a.observacionRegresaTramite FROM pro_proyecto AS a INNER JOIN pro_documentos AS b ON b.codigo=a.codigo WHERE a.idUsuarioRelativo IS NULL AND (a.califica IS NULL OR a.certifica IS NULL) AND a.siRespuestas='si' GROUP BY a.codigo;";

 	}else{

		$query="SELECT a.idTramite,a.tipoDeportistas, (SELECT a1.nombreOrganismo FROM pro_federacion AS a1 WHERE a1.rucOrganismo=a.idUsuario) AS nombreOrganismo, (SELECT a2.nombreCompleto FROM pro_deportistaorganismo AS a2 WHERE a2.cedulaUsuario=a.idUsuario) AS nombreDeportistas, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombre,a.monto,a.alcanse,a.codigo,b.proyectoCargadoPdf,b.estadoProyectoCarcado,b.curriculumDeportivoSegundo,b.estadoCurriculumDeportivoSegundo, b.certificadoFederacionPdf,b.estadoCertificadoFederacion,b.certificadoOrganismoSuperiorPdf,b.estadoCertificadoOrganismoSuperior, b.solicitudFederacionPdf,b.estadoSolicitudFederacion,b.avalFederacionPdf,b.estadoAvalFederacion,b.solciitudAvalPdf,b.estadoSolicitudAval,b.avalOrganismoSuperiorPdf,b.estadoAvalOrganismoSuperior,a.fecha,a.estado,a.idRol, (SELECT a1.email FROM pro_federacion AS a1 WHERE a1.rucOrganismo=a.idUsuario) AS emailOrganismo, (SELECT a2.email FROM pro_deportistaorganismo AS a2 WHERE a2.cedulaUsuario=a.idUsuario) AS emailDeportistas, a.califica, a.certifica,a.siRespuestas,a.regresaTramite,a.observacionRegresaTramite FROM pro_proyecto AS a INNER JOIN pro_documentos AS b ON b.codigo=a.codigo WHERE $variableQuery AND a.idUsuarioRelativo IS NULL AND (a.califica IS NULL OR a.certifica IS NULL) AND a.siRespuestas='no' GROUP BY a.codigo;";

 	}


	$resultado = $conexionEstablecida->query($query);

	if (!$resultado) {
		echo "error";
	}else{ 
		$arreglo=array();
		while($data=$resultado->fetch()){
			$arreglo["data"][]=$data;
		}
		echo json_encode($arreglo);
	}

 