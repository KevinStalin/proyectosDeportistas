<?php

	$objeto= new usuario();
	$usuario=$objeto->usuarioCtr();
	$usuarioFuncionario=$objeto->ctrFuncionarios();

	$arrayUsuario = explode("___", $usuario);
	$arrayUsuarioFuncionario = explode("___", $usuarioFuncionario);


	$menu= new plantilla();


?>

<!--=======================================
=            Sección principal            =
========================================-->

<body id="top">

	<!--====================================
	=            Redes sociales            =
	=====================================-->
	<div class="wrapper row0">

	  <div id="topbar" class="clear"> 

	  	<!--====================================
	  	=            Línea del Head            =
	  	=====================================-->
	  	
	  	<div class="fl_left">

	      <ul class="nospace inline">
	        <li></li>
	      </ul>

	    </div>
	  	
	  	<!--====  End of Línea del Head  ====-->
	  	
	  	<!--====================================
	  	=            Redes Sociales            =
	  	=====================================-->
	  	
	  	<div class="fl_right">

	      <ul class="nospace faico clear">

	        <li>
	        	<a class="faicon-facebook" href="https://www.facebook.com/MinisterioDeporteEcuador" target="_blank">
	        		<i class="fab fa-facebook-square redes__socioales__iconos"></i>
	        	</a>
	        </li>

	        <li>
	        	<a class="faicon-twitter" href="https://twitter.com/DeporteEc" target="_blank">
	        		<i class="fab fa-twitter-square redes__socioales__iconos"></i>
	        	</a>
	        </li>

	        <li>
	        	<a class="faicon-dribble" href="https://www.youtube.com/user/DeporteEc" target="_blank">
	        		<i class="fab fa-youtube-square redes__socioales__iconos"></i>
	        	</a>
	        </li>

	        <li>
	        	<a class="faicon-linkedin" href="https://www.flickr.com/photos/MinisterioDeporteEcuador/" target="_blank">
	        		<i class="fab fa-instagram redes__socioales__iconos"></i>
	        	</a>
	        </li>

	      </ul>

	    </div>
	  	
	  	<!--====  End of Redes Sociales  ====-->

	  </div>

	</div>
	
	
	<!--====  End of Redes sociales  ====-->
	

	<!--===============================================
	=            Imagen del head Principal            =
	================================================-->

	<div class="wrapper row1">
	
		 <header id="header" class="clear"> 

		 	<div id="logo" class="fl_left">
     			<h1>
     				<a href="http://www.deporte.gob.ec/" target="_blank">
     					<img src="images/nuevoMinisterio.png">
     				</a>
     			</h1>
    		</div>
    		
		 </header>
	
	</div>
	<!--====  End of Imagen del head Principal  ====-->
	
	<!--=======================================
	=            Menús Utilitarios            =
	========================================-->
	<div class="wrapper row2">

		<nav id="mainav" class="clear"> 

			<ul class="clear" style="display: block!important;">


				
				<li>

					<!--==================================
					=            Menú Usuario            =
					===================================-->

					<?php if ($arrayUsuario[0]==2): ?>

						 <!-- <a class="nombre__usuario" disabled="">Usuario:&nbsp;<?= $arrayUsuario[3]; ?></a> -->

						 <!--=====================================
						 =            Valores ocultos            =
						 ======================================-->
						 
						 <input type="hidden" name="idRoles" id="idRoles" value="<?= $arrayUsuario[0]; ?>">

						 <input type="hidden" name="idUsuario" id="idUsuario" value="<?= $arrayUsuario[3]; ?>">
						 
						 <!--====  End of Valores ocultos  ====-->
						 
						
					<?php endif ?>

					<?php if ($arrayUsuario[0]==3): ?>

						 <!-- <a class="nombre__usuario" disabled="">Usuario:&nbsp;<?= $arrayUsuario[4] ?></a> -->

						 <!--=====================================
						 =            Valores ocultos            =
						 ======================================-->

						 <input type="hidden" name="idRoles" id="idRoles" value="<?= $arrayUsuario[0]; ?>">
						 
						 <input type="hidden" name="idUsuario" id="idUsuario" value="<?= $arrayUsuario[3]; ?>">
						 
						 <!--====  End of Valores ocultos  ====-->
						 
						
					<?php endif ?>

					<!--====  End of Menú Usuario  ====-->

					<!--===========================================
					=            Opciones Funcionarios            =
					============================================-->
					
					<?php if (!empty($usuarioFuncionario)): ?>

						<!-- <a class="nombre__usuario" disabled="">Usuario:&nbsp;<?= $arrayUsuarioFuncionario[1]." ". $arrayUsuarioFuncionario[2]; ?></a> -->


						 <!--=====================================
						 =            Valores ocultos            =
						 ======================================-->
						 
						 <input type="hidden" name="idUsuario" id="idUsuario" value="<?= $arrayUsuarioFuncionario[0]; ?>">

						 <input type="hidden" name="fisicamenteEstructura" id="fisicamenteEstructura" value="<?= $arrayUsuarioFuncionario[3]; ?>">

						 <input type="hidden" name="personaCargo" id="personaCargo" value="<?= $arrayUsuarioFuncionario[4]; ?>">

						 <input type="hidden" name="zonal" id="zonal" value="<?= $arrayUsuarioFuncionario[5]; ?>">

						 <input type="hidden" name="idRol" id="idRol" value="<?= $arrayUsuarioFuncionario[6]; ?>">
						 
						 <!--====  End of Valores ocultos  ====-->

						
					<?php endif ?>
					
					<!--====  End of Opciones Funcionarios  ====-->
					



				</li>				
				
						

				<!--========================================
				=            Maquetando el menú            =
				=========================================-->
				
				<?php

					$menu->disparadorMenu();

				?>
				
				<!--====  End of Maquetando el menú  ====-->
			

			</ul>

	    </nav>

    </div>
 
    <!--====  End of Menús Utilitarios  ====-->
	
