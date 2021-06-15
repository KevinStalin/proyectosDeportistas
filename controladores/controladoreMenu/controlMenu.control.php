<?php

	/*========================================
	=            Control de menús            =
	========================================*/
	
	class menu{


		private static $nomenclatura='.view.php';

		private static $vista = 'vistas/'; 

		private static $vistaGeneral = 'vistasGenerales/'; 

		private static $menusSeccionales = 'menusSeccionales/'; 

		private static $menuInicial = 'menuInicial'; 

		private static $menuOrganismoUsuario = 'menuOrganismoUsuario';

		private static $menuSubsecretario = 'menuSubsecretario';

		private static $menuDirector = 'menuDirector';

		private static $menuFuncionario = 'menuFuncionario';

		public function disparadorMenu(){

			if (isset($_GET["ruta"])) {

				if ($_GET["ruta"]=="ingreso") {

					require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales.self::$menuInicial.self::$nomenclatura;

				}else if($_GET["ruta"]=="datosGenerales"){

					require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales.self::$menuOrganismoUsuario.self::$nomenclatura;

				}else if($_GET["ruta"]=="subsecretario"){

					require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales.self::$menuSubsecretario.self::$nomenclatura;

				}else if($_GET["ruta"]=="menuDirector"){

					require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales.self::$menuDirector.self::$nomenclatura;
					
				}else if($_GET["ruta"]=="menuFuncionario"){

					require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales.self::$menuFuncionario.self::$nomenclatura;
					
				}


			}else{

				require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales.self::$menuInicial.self::$nomenclatura;

			}

		}

	}
	

	/*=====  End of Control de menús  ======*/
