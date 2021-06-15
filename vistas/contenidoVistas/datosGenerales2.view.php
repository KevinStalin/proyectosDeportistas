<?php

	$objeto= new usuario();

	$usuario=$objeto->usuarioCtr();
  $rucReconocidos=$objeto->ctrOrganismoRuc();

	$arrayUsuario = explode("___", $usuario);

	$menu= new plantilla();

?>

<style>

@media (max-width: 750px) {

  .formulario__ingreso{
    width: 100%;
  }

  .btn-signup {
      width: 50%;
  }

  .moviendo__externamente{
    position: relative;
    left: -15%;
  }


}

</style>


  <input type="hidden" name="tipoDeportistas" id="tipoDeportistas" value="<?= $arrayUsuario[2]; ?>">

  <div class="contenido__general">

    <?php if ($arrayUsuario[0]==2): ?>

      <div class="clase__contenedora">
        <span class="codigo__estilizados">CÓDIGO DEL PROYECTO: </span>&nbsp;&nbsp;<input type="text" class="codigo__estilizados" name="codigoUsuarios" id="codigoUsuarios" value="<?= $arrayUsuario[11]; ?>" disabled="">
      </div>                
    <?php endif ?>

    <?php if ($arrayUsuario[0]==3): ?>

      <div class="clase__contenedora">
        <span class="codigo__estilizados">CÓDIGO DEL PROYECTO: </span>&nbsp;&nbsp;<input type="text" class="codigo__estilizados" name="codigoUsuarios" id="codigoUsuarios" disabled="" value="<?= $arrayUsuario[13]; ?>">
      </div>    

    <?php endif ?>

  </div>

<div class="wrapper row3">

  <div class="contenido__general">
		
  	<div class="formulario__ingreso">


      <div class="clase__contenedora" style="width: 40%;">

        <label class="label__formularios__2" style="font-weight:bold; color:#01579b!important;">Marque la siguiente casilla si el programa o proyecto fue financiado en el ejercicio fiscal 2020</label>

        &nbsp;&nbsp;

        <input type="checkbox" name="checkboxProyecto2020" id="checkboxProyecto2020" style="width: 50px; height: 50px; position:relative; top:10px;">

      </div>


  		<label class="label__formularios__2">* Nombre del proyecto</label>

  		<input type="text" class="obligatorios__proyecto campos__proyectos no__especiales obligatorios" name="nombreProyecto" id="nombreProyecto">

  		<div class="counter__proyecto"></div>

  		<label class="label__formularios__2">* Monto</label>

  		<input type="text" class="obligatorios__proyecto campos__proyectos solo__numero__montos obligatorios" name="monto" id="monto">

  		<label class="label__formularios__2">* Alcance</label>

  		<textarea class="obligatorios__proyecto campos__proyectos no__especiales obligatorios" name="alcanse" id="alcanse" style="height:75px;"></textarea>

  		<div class="counter__alcanse"></div>

  		<div class="contenedor__de__informacion" style="font-size:12px;">
  			Marque la siguiente casilla si su proyecto esta 100% relacionado con la Construcción, remodelación y mantenimiento de escenarios e infraestructura deportiva
  		</div>

  		<div class="clase__contenedora">

	  		<input type="checkbox" name="checkboxRelacionado" id="checkboxRelacionado" style="width: 20px; height: 20px;">

  		</div>

  		<label class="label__formularios__2">* Cargar Proyecto</label>

  		<input type="file" class="obligatorios__proyecto campos__proyectos" name="proyectoCargado" id="proyectoCargado">


      <label class="label__formularios__2 oculto__contratos">Cargar Contrato</label>

      <input type="file" class="obligatorios__proyecto campos__proyectos oculto__contratos" name="contratoCargado" id="contratoCargado">


      <div class="oculto__proyecto2020" style="position:relative; left:30%; width: 100%;">

      <?php if ($arrayUsuario[2]=="noFederado"): ?>


          <select class="obligatorios__proyecto campos__proyectos obligatorios__dos" id="tipoOrganismoNoFederado" name="tipoOrganismoNoFederado" validador="3">

            <option value="">--A que sector del deporte se orienta su proyecto--</option>
            <option value="alto">Alto Rendimiento</option>
            <option value="alto2">Alto Rendimiento para personas con discpacidad</option>
            <option value="militarDeportiva">Pertenece a la Federación Deportiva Militar Ecuatoriana o Federación Deportiva Policial Ecuatoriana</option>
            <option value="formativo">Formativo</option>
            <option value="estudiantil">Pertenece a nivel formativo estudiantil</option>
            <option value="profesional">Profesional</option>
            <option value="recreativo">Recreativo</option>
            
          </select>
        
      <?php endif ?>

      <?php if ($arrayUsuario[0]==3): ?>

        <input type="hidden" name="tipoDeportistas" id="tipoDeportistas" value="<?= $arrayUsuario[2]; ?>">

        <!--==================================
        =            Certificados            =
        ===================================-->
        
         <?php if ($arrayUsuario[2]=="noFederado"): ?>

           <label class="label__formularios__2 contenedor__radios__labels__2">* Cargar curriculum deportivo con los datos sustentados documentalmente y certificaciones que acrediten su trayectoria deportiva</label>

           <input type="file" class="obligatorios__proyecto campos__proyectos" name="curriculumDeportivoSegundo" id="curriculumDeportivoSegundo">
          
        <?php else: ?>

          <?php if ($arrayUsuario[2]!="profesional"): ?>

             <label class="label__formularios__2">* ¿Posee certificado de Federación?</label>
            
          <?php else: ?>

             <label class="label__formularios__2">* ¿Posee certificado de Federación o liga Profesional?</label>
            
          <?php endif ?>

         
          <div class="clase__contenedora" style="position:relative; left:-29%;">

            <label class="label__formularios__2">Si</label>&nbsp;&nbsp;&nbsp;

            <input type="radio" name="certificadoFederaciones" class="estilos__radios carga__certificadoFederacion" value="si">

              
            <label class="label__formularios__2 separador__de__radios">No</label>&nbsp;&nbsp;&nbsp;

            <input type="radio" name="certificadoFederaciones" value="no" class="estilos__radios carga__certificadoFederacion">

          </div>
          
        <?php endif ?>       
        
        <!--====  End of Certificados  ====-->
        

      <?php endif ?>



      <!--============================
      =            Avales            =
      =============================-->
      
       <?php if ($arrayUsuario[0]==2 && $arrayUsuario[2]!="recreativo" && empty($rucReconocidos)): ?>

        <!--==================================
        =            Certificados            =
        ===================================-->

         <input type="hidden" name="tipoDeportistas" id="tipoDeportistas" value="<?= $arrayUsuario[2]; ?>">
        
          <label class="label__formularios__2">* ¿Posee aval?</label>

          <div class="clase__contenedora" style="position:relative; left:-29%;">

            <label class="label__formularios__2">Si</label>&nbsp;&nbsp;&nbsp;

            <input type="radio" name="avales" class="estilos__radios carga__avales" value="si">
              
            <label class="label__formularios__2 separador__de__radios">No</label>&nbsp;&nbsp;&nbsp;

            <input type="radio" name="avales" value="no" class="estilos__radios carga__avales">

          </div>
              
        <!--====  End of Certificados  ====-->
        
      <?php endif ?>
     
     <?php if ($arrayUsuario[0]==2 && $arrayUsuario[2]=="recreativo"): ?>

          <input type="hidden" name="tipoDeportistas" id="tipoDeportistas" value="<?= $arrayUsuario[2]; ?>">
       
           <label class="label__formularios__2 contenedor__radios__labels__2 moviendo__externamente">* Cargar curriculum deportivo con los datos sustentados documentalmente y certificaciones que acrediten su trayectoria deportiva</label>

           <input type="file" class="obligatorios__proyecto campos__proyectos" name="curriculumDeportivoSegundo" id="curriculumDeportivoSegundo">

     <?php endif ?>
      
      <!--====  End of Avales  ====-->



      <!--==================================
      =            Certificados            =
      ===================================-->

      <?php if ($arrayUsuario[2]!="profesional"): ?>
        
        <label class="label__formularios__2 certificado__federativos ">* Cargar certificado de la federación</label>

        <input type="file" class="obligatorios__proyecto campos__proyectos certificado__federativos" name="certificadoFederacion" id="certificadoFederacion">

      <?php else: ?>
        
        <label class="label__formularios__2 certificado__federativos moviendo__externamente">* Cargar certificado de la federación o liga profesional</label>

        <input type="file" class="obligatorios__proyecto campos__proyectos certificado__federativos" name="certificadoFederacion" id="certificadoFederacion">

      <?php endif ?>
      

      <label class="label__formularios__2 oculto__razon">* ¿Por qué no tiene certificado?</label>

      <div class="clase__contenedora oculto__razon" style="position:relative; left:-29%;">

          <?php if ($arrayUsuario[2]!="profesional"): ?>
            
            <label class="label__formularios__2 contenedor__radios__labels">Porque la federación nego la solicitud</label>&nbsp;&nbsp;&nbsp;

            <input type="radio" name="rechazoPorque" class="estilos__radios porque__no__tiene" value="si">

                
            <label class="label__formularios__2 separador__de__radios contenedor__radios__labels">Porque no tengo respuesta de la federación</label>&nbsp;&nbsp;&nbsp;

            <input type="radio" name="rechazoPorque" value="no" class="estilos__radios porque__no__tiene">

          <?php else: ?>
            
            <label class="label__formularios__2 contenedor__radios__labels">Porque federación o liga profesional nego la solicitud</label>&nbsp;&nbsp;&nbsp;

            <input type="radio" name="rechazoPorque" class="estilos__radios porque__no__tiene" value="si">

                
            <label class="label__formularios__2 separador__de__radios contenedor__radios__labels">Porque federación o liga profesional no responde aún</label>&nbsp;&nbsp;&nbsp;

            <input type="radio" name="rechazoPorque" value="no" class="estilos__radios porque__no__tiene">

          <?php endif ?>



      </div>


      <?php if ($arrayUsuario[2]!="profesional"): ?>
        
        <label class="label__formularios__2 certificado__organismo__superior contenedor__radios__labels__2 moviendo__externamente">Cargar la respuesta del organismo superior (Comité Olímpico Ecuatoriano, o Comité Paralímpico Ecuatoriano, o Federación Deportiva Nacional del Ecuador), de ser el caso</label>

        <input type="file" class="obligatorios__proyecto campos__proyectos certificado__organismo__superior" name="certificadoOrganismoSuperior" id="certificadoOrganismoSuperior">

        <label class="label__formularios__2 solicitud__federaciones contenedor__radios__labels__2 moviendo__externamente">* Cargar la solicitud de certificación realizada a la federación</label>

        <input type="file" class="obligatorios__proyecto campos__proyectos solicitud__federaciones" name="solicitudFederacion" id="solicitudFederacion">

      <?php else: ?>
        
        <label class="label__formularios__2 certificado__organismo__superior contenedor__radios__labels__2 moviendo__externamente">* Cargar respuesta de liga profesional o federacion</label>

        <input type="file" class="obligatorios__proyecto campos__proyectos certificado__organismo__superior" name="certificadoOrganismoSuperior" id="certificadoOrganismoSuperior">

        <label class="label__formularios__2 solicitud__federaciones contenedor__radios__labels__2 moviendo__externamente">* Cargar la solicitud de certificación realizada a la federación o liga profesional</label>

        <input type="file" class="obligatorios__proyecto campos__proyectos solicitud__federaciones" name="solicitudFederacion" id="solicitudFederacion">

      <?php endif ?>


     
      
      <!--====  End of Certificados  ====-->
      

      <!--============================
      =            Avales            =
      =============================-->
      
       <?php if ($arrayUsuario[0]==3 && $arrayUsuario[2]!="noFederado"): ?>

        <!--==================================
        =            Certificados            =
        ===================================-->

        <?php if ($arrayUsuario[2]!="profesional"): ?>
          
          <label class="label__formularios__2">* ¿Posee aval de la Federación?</label>

        <?php else: ?>

          <label class="label__formularios__2">* ¿Posee aval de la Federación o liga Profesional?</label>
          
        <?php endif ?>
        
          

          <div class="clase__contenedora" style="position:relative; left:-29%;">

            <label class="label__formularios__2">Si</label>&nbsp;&nbsp;&nbsp;

            <input type="radio" name="avales" class="estilos__radios carga__avales" value="si">
              
            <label class="label__formularios__2 separador__de__radios">No</label>&nbsp;&nbsp;&nbsp;

            <input type="radio" name="avales" value="no" class="estilos__radios carga__avales">


          </div>
              
        <!--====  End of Certificados  ====-->
        
      <?php endif ?>
     
      
      <!--====  End of Avales  ====-->

      <?php if ($arrayUsuario[2]!="profesional"): ?>
          
        <label class="label__formularios__2 aval__documento contenedor__radios__labels__2 moviendo__externamente">* Cargar el aval del organismo superior (Comité Olímpico Ecuatoriano, o Comité Paralímpico Ecuatoriano, o Federación Deportiva Nacional del Ecuador), (de ser el caso)</label>

        <input type="file" class="obligatorios__proyecto campos__proyectos aval__documento" name="avalFederacion" id="avalFederacion">

      <?php else: ?>
        
        <label class="label__formularios__2 aval__documento contenedor__radios__labels__2">* Cargar el aval de la federación o liga Profesional</label>

        <input type="file" class="obligatorios__proyecto campos__proyectos aval__documento" name="avalFederacion" id="avalFederacion">

      <?php endif ?>
      

      <label class="label__formularios__2 oculto__razon__aval">* ¿Por qué no tiene aval?</label>

      <div class="clase__contenedora oculto__razon__aval" style="position:relative; left:-29%;">

          <?php if ($arrayUsuario[2]!="profesional"): ?>
            
              <label class="label__formularios__2 contenedor__radios__labels">La federación nego el aval</label>&nbsp;&nbsp;&nbsp;

              <input type="radio" name="rechazoPorqueAval" class="estilos__radios porque__no__tiene__aval" value="si">

          <?php else: ?>
            
              <label class="label__formularios__2 contenedor__radios__labels">Porque la federación o liga profesional nego el aval</label>&nbsp;&nbsp;&nbsp;

              <input type="radio" name="rechazoPorqueAval" class="estilos__radios porque__no__tiene__aval" value="si">

          <?php endif ?>



          <?php if ($arrayUsuario[2]!="profesional"): ?>
            
              <label class="label__formularios__2 separador__de__radios contenedor__radios__labels">La federación no responde aún</label>&nbsp;&nbsp;&nbsp;

              <input type="radio" name="rechazoPorqueAval" value="no" class="estilos__radios porque__no__tiene__aval">

          <?php else: ?>
            
            <label class="label__formularios__2 separador__de__radios contenedor__radios__labels">Porque la federación o liga profesional no responde aún</label>&nbsp;&nbsp;&nbsp;

            <input type="radio" name="rechazoPorqueAval" value="no" class="estilos__radios porque__no__tiene__aval">

          <?php endif ?>

              
      </div>


      <?php if ($arrayUsuario[2]!="profesional"): ?>
        
          <label class="label__formularios__2 aval__organismo__superior contenedor__radios__labels__2 moviendo__externamente">Cargar la respuesta del organismo superior (Comité Olímpico Ecuatoriano, o Comité Paralímpico Ecuatoriano, o Federación Deportiva Nacional del Ecuador), de ser el caso</label>

          <input type="file" class="obligatorios__proyecto campos__proyectos aval__organismo__superior" name="solciitudAval" id="solciitudAval">

          <label class="label__formularios__2 aval__solciitudes__federaciones contenedor__radios__labels__2 moviendo__externamente">* Cargar la solicitud de aval realizada a la federación</label>

          <input type="file" class="obligatorios__proyecto campos__proyectos aval__solciitudes__federaciones" name="avalOrganismoSuperior" id="avalOrganismoSuperior">

      <?php else: ?>
        
          <label class="label__formularios__2 aval__organismo__superior contenedor__radios__labels__2 moviendo__externamente">Cargar respuesta de liga profesional o federacion</label>

          <input type="file" class="obligatorios__proyecto campos__proyectos aval__organismo__superior" name="solciitudAval" id="solciitudAval">

          <label class="label__formularios__2 aval__solciitudes__federaciones contenedor__radios__labels__2 moviendo__externamente">* Cargar la solicitud de aval realizada a la federación o liga profesional</label>

          <input type="file" class="obligatorios__proyecto campos__proyectos aval__solciitudes__federaciones" name="avalOrganismoSuperior" id="avalOrganismoSuperior">

      <?php endif ?>


     </div>

     <button class="btn-signup" id="enviarProyecto" name="enviarProyecto">ENVIAR</button>

     <div class="imagen__reload" style="width: 40px; height: 40px;"></div>

  	</div>

  </div>

</div>

<!--====  End of Modal llamado al registrarse  ====-->
