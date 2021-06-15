<?php

	session_start();

	class recuperandoLogeo{

		public static function ctrrecuperandoLogeo(){

			if (isset($_SESSION["iniciarSesion"]) && $_SESSION["iniciarSesion"]=="ok"){			


				}else{

				 session_start();   
				 session_unset();  
				 session_destroy();
				 echo '<script>window.location = "ingreso";</script>';
				 
			}	
						
		}

	}