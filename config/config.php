<?php
	
	/*=====================================
	=            Controladores           =
	=====================================*/

	/*=================================
	=            Generales            =
	=================================*/
	

	define('CONTROLADOR', 'controladores/');

	define('CONTROLADOR3', 'controladorPlantilla/');

	define('CONTROLADOR6', 'conexion/');


	require_once CONTROLADOR6.'conexion.php';

	require_once CONTROLADOR.CONTROLADOR3.'plantilla.controlador.php';

	require_once CONTROLADOR.CONTROLADOR3.'plantilla.general.controlador.php';


	/*=====  End of Generales  ======*/
	
	
	/*=====  End of Controladores  ======*/
	
