<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

	$conexionEstablecida->exec("set names utf8");

	$query="SELECT IF(a.tipoOrganismo='altoRendimiento','Alto Rendimiento',IF(a.tipoOrganismo='altoRendimientoDiscapacidad','Alto Rendimiento para personas con Discapacidad',CONCAT(UPPER(LEFT(a.tipoOrganismo,1)),SUBSTR(a.tipoOrganismo,2)))) AS tipoOrganismo,a.cedulaUsuario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreCompleto, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreCompleto,a.sexo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provincia) AS nombreProvincia, (SELECT a1.nombreCanton FROM in_md_canton AS a1 WHERE a1.idCanton=a.canton) AS nombreCanton, (SELECT a1.nombreParroquia FROM in_md_parroquia AS a1 WHERE a1.idParroquia=a.parroquia) AS nombreParroquia,a.telefono,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.direccion, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS direccion,a.email FROM pro_deportistaorganismo AS a;";

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

 