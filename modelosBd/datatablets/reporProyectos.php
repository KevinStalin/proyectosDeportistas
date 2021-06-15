<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	$conexionEstablecida->exec("set names utf8");

 	extract($_POST);


	$query="SELECT IF(a.idRol=2,'ORGANISMO DEPORTIVO','ATLETA') AS tipo,IF((SELECT a1.nombreOrganismo FROM pro_federacion AS a1 WHERE a1.usuario=a.idUsuario AND nombreOrganismo IS NOT NULL) IS NOT NULL,(SELECT a1.nombreOrganismo FROM pro_federacion AS a1 WHERE a1.usuario=a.idUsuario AND nombreOrganismo IS NOT NULL),(SELECT a1.nombreCompleto FROM pro_deportistaorganismo AS a1 WHERE a1.usuario=a.idUsuario AND nombreCompleto IS NOT NULL)) AS nombreRealizado,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombre,a.monto,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.alcanse, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS alcanse,IF(a.siRespuestas='si','DIRECCION DE INFRAESTRUCTURA DEPORTIVA',IF(a.tipoDeportistas='altoRendimiento' OR a.tipoDeportistas='militarDeportiva' OR a.tipoDeportistas='profesional' OR a.tipoDeportistas='alto','DIRECCION DE DEPORTE CONVENCIONAL PARA EL ALTO RENDIMIENTO',IF(a.tipoDeportistas='alto2' OR a.tipoDeportistas='altoRendimientoDiscapacidad','DIRECCION DE DEPORTE PARA PERSONAS CON DISCAPACIDAD','DIRECCION DE DEPORTE FORMATIVO Y EDUCACION FISICA'))) AS direccionPertenece,a.fecha,IF(a.califica='N' AND a.certifica='N','NEGADO',IF(a.califica='A' AND (a.certifica IS NULL OR a.certifica!='A'),'CALIFICADO',IF(a.califica='A' AND a.certifica='A','CERTIFICADO',IF(a.califica!='A' OR a.califica IS NULL,'AUN NO ES REVISADO','N/A')))) AS estado,IF(b.contratoCargadoCheck='si' AND b.contrato IS NOT NULL,'2020','2021') AS periodoEjecucion, IF(a.idUsuarioRelativo IS NULL,'no',(SELECT CONCAT(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM th_usuario AS a1 WHERE a1.id_usuario=a.idUsuarioRelativo)) AS nombreCompleto,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.observacionNiega, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS observacionNiega, IF((SELECT a1.nombreOrganismo FROM pro_federacion AS a1 WHERE a1.usuario=a.idUsuario AND nombreOrganismo IS NOT NULL) IS NOT NULL,(SELECT a1.email FROM pro_federacion AS a1 WHERE a1.usuario=a.idUsuario AND nombreOrganismo IS NOT NULL),(SELECT a1.email FROM pro_deportistaorganismo AS a1 WHERE a1.usuario=a.idUsuario AND nombreCompleto IS NOT NULL)) AS emailRealizado,IF((SELECT a1.nombreOrganismo FROM pro_federacion AS a1 WHERE a1.usuario=a.idUsuario AND nombreOrganismo IS NOT NULL) IS NOT NULL,(SELECT a1.telefono FROM pro_federacion AS a1 WHERE a1.usuario=a.idUsuario AND nombreOrganismo IS NOT NULL),(SELECT a1.telefono FROM pro_deportistaorganismo AS a1 WHERE a1.usuario=a.idUsuario AND nombreCompleto IS NOT NULL)) AS telefonoRealizado,a.fechaCalifica  FROM pro_proyecto AS a INNER JOIN pro_documentos AS b ON a.codigo=b.codigo GROUP BY a.nombre;";

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

 