<?php

  /*======================================
  =            Página Inicial            =
  ======================================*/
  
   define('INCLUDES', 'config/');


	/*===============================
	=            Modelos            =
	===============================*/
	define('CONTROLADOR__INICIAL', 'controladores/');

	define('CONTROLADOR2', 'controladoresSesion/');

	define('CONTROLADOR__MODELOS', 'modelosBd/selector/');

	require_once CONTROLADOR__INICIAL.CONTROLADOR2.'ingreso.controlador.php';

	require_once CONTROLADOR__INICIAL.CONTROLADOR2.'sesion.controlador.php';

	require_once CONTROLADOR__MODELOS.'usuarios.modelo.php';

	
	/*=====  End of Modelos  ======*/
 
   require_once INCLUDES.'config.php';


  /*=====  End of Página Inicial  ======*/
  