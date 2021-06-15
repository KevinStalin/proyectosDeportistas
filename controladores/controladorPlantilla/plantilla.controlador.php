<?php

	class plantilla{

			private static $nomenclatura='.view.php';

			private static $vista = 'vistas/'; 

			private static $vistaGeneral = 'vistasGenerales/'; 

			private static $contenidoVistas = 'contenidoVistas/'; 

			private static $componentesProyecto = 'componentesProyecto/'; 

			private static $header = 'header'; 

			private static $menu = 'menu'; 

			private static $footer = 'footer'; 

			private $rutaInicial='ingreso';

			private static $menusSeccionales = 'menusSeccionales/'; 

			private static $menuInicial = 'menuInicial'; 

			private static $menuOrganismoUsuario = 'menuOrganismoUsuario';


			public static function ctrPlantilla(){

				include "controladores/controladorPlantilla/plantilla.general.controlador.php";

			}

			public function plantillaHead(){

				require_once self::$vista.self::$vistaGeneral.self::$header.self::$nomenclatura;

			}	


			public function plantillaMenu(){

				require_once self::$vista.self::$vistaGeneral.self::$menu.self::$nomenclatura;

			}	


			public function componentesProyecto($parametro1){

				switch ($parametro1) {

					case 1:
					     require_once self::$vista.self::$componentesProyecto."datosPersonales".self::$nomenclatura;
					break;

					case 2:
					     require_once self::$vista.self::$componentesProyecto."proyecto".self::$nomenclatura;
					break;

					case 3:
					     require_once self::$vista.self::$componentesProyecto."baseLegal".self::$nomenclatura;
					break;

					case 4:
					     require_once self::$vista.self::$componentesProyecto."caracterizacion".self::$nomenclatura;
					break;

					case 5:
					     require_once self::$vista.self::$componentesProyecto."alineacionEstrategica".self::$nomenclatura;
					break;

					case 6:
					     require_once self::$vista.self::$componentesProyecto."aporteProyecto".self::$nomenclatura;
					break;

				}

			}


			public function disparadorMenu(){

				if (isset($_GET["ruta"])) {

					if ($_GET["ruta"]=="ingreso") {

						require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales."menuInicial".self::$nomenclatura;

					}else if($_GET["ruta"]=="datosGenerales" || $_GET["ruta"]=="proyectosUsuarios"){

						require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales."menuOrganismoUsuario".self::$nomenclatura;

					}else if($_GET["ruta"]=="subsecretario" || $_GET["ruta"]=="tramitesRealizados3" || $_GET["ruta"]=="tramitesNegados3"){

						require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales."menuSubsecretario".self::$nomenclatura;

					}else if($_GET["ruta"]=="directores" || $_GET["ruta"]=="tramitesRealizados2" || $_GET["ruta"]=="tramitesNegados2"){

						require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales."menuDirector".self::$nomenclatura;

					}else if($_GET["ruta"]=="funcionarios" || $_GET["ruta"]=="tramitesRealizados" || $_GET["ruta"]=="tramitesNegados"){

						require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales."menuFuncionario".self::$nomenclatura;

					}else if($_GET["ruta"]=="deportistas" || $_GET["ruta"]=="organismos" || $_GET["ruta"]=="proyectosAdmin"){

						require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales."menuAdmin".self::$nomenclatura;

					}

				}else{

					require_once self::$vista.self::$vistaGeneral.self::$menusSeccionales."menuInicial".self::$nomenclatura;

				}

			}

			public function plantillaContenido(){

				if (isset($_GET["ruta"])) {
					
					switch ($_GET["ruta"]) {

					    case "ingreso":
					        require_once self::$vista.self::$contenidoVistas."ingreso".self::$nomenclatura;
					    break;

			    		case "datosGenerales":
					        require_once self::$vista.self::$contenidoVistas."datosGenerales".self::$nomenclatura;
					    break;

			    		case "proyectosUsuarios":
					        require_once self::$vista.self::$contenidoVistas."proyectosUsuarios".self::$nomenclatura;
					    break;

			    		case "subsecretario":
					        require_once self::$vista.self::$contenidoVistas."subsecretario".self::$nomenclatura;
					    break;

			    		case "directores":
					        require_once self::$vista.self::$contenidoVistas."directores".self::$nomenclatura;
					    break;

			    		case "funcionarios":
					        require_once self::$vista.self::$contenidoVistas."funcionarios".self::$nomenclatura;
					    break;

			    		case "tramitesRealizados":
					        require_once self::$vista.self::$contenidoVistas."tramitesRealizados".self::$nomenclatura;
					    break;

			    		case "tramitesRealizados2":
					        require_once self::$vista.self::$contenidoVistas."tramitesRealizados2".self::$nomenclatura;
					    break;

			    		case "tramitesRealizados3":
					        require_once self::$vista.self::$contenidoVistas."tramitesRealizados3".self::$nomenclatura;
					    break;

			    		case "tramitesNegados":
					        require_once self::$vista.self::$contenidoVistas."tramitesNegados".self::$nomenclatura;
					    break;

		    			case "tramitesNegados2":
					        require_once self::$vista.self::$contenidoVistas."tramitesNegados2".self::$nomenclatura;
					    break;

		    			case "tramitesNegados3":
					        require_once self::$vista.self::$contenidoVistas."tramitesNegados3".self::$nomenclatura;
					    break;

	    				case "deportistas":
					        require_once self::$vista.self::$contenidoVistas."deportistas".self::$nomenclatura;
					    break;

	    				case "organismos":
					        require_once self::$vista.self::$contenidoVistas."organismos".self::$nomenclatura;
					    break;

	    				case "proyectosAdmin":
					        require_once self::$vista.self::$contenidoVistas."proyectosAdmin".self::$nomenclatura;
					    break;


					    case "salir":
					        require_once self::$vista.self::$contenidoVistas."salir".self::$nomenclatura;
					    break;
					}

				}else{

					require_once self::$vista.self::$contenidoVistas.$this->rutaInicial.self::$nomenclatura;

				}


			}


			public function plantillaFooter(){

				require_once self::$vista.self::$vistaGeneral.self::$footer.self::$nomenclatura;


			}	

	}