/*=================================================
=            Tablas usuarios proyectos            =
=================================================*/


$(document).on("ready",function(){

  listarProyectosUsuarios();

});


var listarProyectosUsuarios=function(){

   var tableProyectosUsuarios =$("#tablaProyectosUsuarios").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
 
      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"modelosBd/datatablets/reporProyectosUsuarios.php", 
      "data": { 
          "idUsuario": $("#idUsuario").val()
       }     
      },
      "columns":[

 
            {"render":

                function ( data, type, row ) {

                    if (row['tipoDeportistas']=="alto") {

                      var tipoDeportistas="Alto Rendimiento";

                    }else if(row['tipoDeportistas']=="alto2"){

                      var tipoDeportistas="Alto Rendimiento para personas con discpacidad";

                    }else{

                      var tipoDeportistas=row['tipoDeportistas'];

                    }

                    return "<div style='font-size:10px'>"+tipoDeportistas+"</div>";

                }

            },

            {"render":

                function ( data, type, row ) {


                	if (row['nombreOrganismo']!=null) {

                		 return "<div style='font-size:10px'>"+row['nombreOrganismo']+"</div>";

                	}else{

                		return "<div style='font-size:10px'>"+row['nombreDeportistas']+"</div>";

                	}
                   
                }

            },

            {"render":

                function ( data, type, row ) {

					         return "<div style='font-size:10px'>"+row['nombre']+"</div>";

                }

            },

            {"render":

                function ( data, type, row ) {

					        return "<div style='font-size:10px'>"+row['monto']+"</div>";
					
                }

            },

            {"render":

                function ( data, type, row ) {

					        return "<div style='font-size:10px'>"+row['alcanse']+"</div>";
					
                }

            },

            {"render":

                function ( data, type, row ) {

					        return "<div style='font-size:10px'>"+row['codigo']+"</div>";
					
                }

            },

            {"render":

                function ( data, type, row ) {

	               	if(row['proyectoCargadoPdf']==""){

	               		var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

	               	}else{

	               		var variableConcatenadoras="<a style='font-size:10px' href='documentos/proyectos/"+row['proyectoCargadoPdf']+".pdf' target='_blank'>"+row['proyectoCargadoPdf']+".pdf</a>";

	               	}

					        if (row['estadoProyectoCarcado']==null) {

                		return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                	}
					
                }

            },

            {"render":

                function ( data, type, row ) {

                	if (row['tipoDeportistas']=="noFederado") {

					 	       if(row['curriculumDeportivoSegundo']==""){

	               			var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

	               		}else{

	               			var variableConcatenadoras="<a style='font-size:10px' href='documentos/curriculum/"+row['curriculumDeportivoSegundo']+".pdf' target='_blank'>"+row['curriculumDeportivoSegundo']+".pdf</a>";

	               		}


						        if (row['estadoCurriculumDeportivoSegundo']==null) {

	                		return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

	                	}


                	}else{

                		return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                	}

					
                }

            },


            {"render":

                function ( data, type, row ) {

                	if (row['idRol']==3) {

	                	if (row['tipoDeportistas']!="noFederado") {

							 	
		               		if(row['certificadoFederacionPdf']==""){

		               			var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

		               		}else{

		               			var variableConcatenadoras="<a style='font-size:10px' href='documentos/certificadoDeportista/"+row['certificadoFederacionPdf']+".pdf' target='_blank'>"+row['certificadoFederacionPdf']+".pdf</a>";

		               		}


							        if (row['estadoCertificadoFederacion']==null) {

		                		return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

		                	}


	                	}else{

	                		return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

	                	}


                	}else{

                		return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                	}

					
                }

            },

            {"render":

                function ( data, type, row ) {

                	if (row['idRol']==3) {

	                	if (row['tipoDeportistas']!="noFederado") {

						 	       if(row['certificadoOrganismoSuperiorPdf']==""){

		               			var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

		               		}else{

		               			var variableConcatenadoras="<a style='font-size:10px' href='documentos/certificadoSuperior/"+row['certificadoOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['certificadoOrganismoSuperiorPdf']+".pdf</a>";

		               		}


							       if (row['estadoCertificadoOrganismoSuperior']==null) {

		                		return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

		                	}


	                	}else{

	                		return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

	                	}


                	}else{

                		return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                	}

					
                }

            },

            {"render":

                function ( data, type, row ) {

                	if (row['idRol']==3) {

	                	if (row['tipoDeportistas']!="noFederado") {
						 	
		               		if(row['solicitudFederacionPdf']==""){

		               			var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

		               		}else{

		               			var variableConcatenadoras="<a style='font-size:10px' href='documentos/solicitudCertificado/"+row['solicitudFederacionPdf']+".pdf' target='_blank'>"+row['solicitudFederacionPdf']+".pdf</a>";

		               		}

							        if (row['estadoSolicitudFederacion']==null) {

		                		return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

		                	}


	                	}else{

	                		return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

	                	}


                	}else{

                		return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                	}

					
                }

            },



            {"render":

                function ( data, type, row ) {


	               if (row['tipoDeportistas']!="noFederado") {

						        if(row['avalFederacionPdf']==""){

	               			var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

	               		}else{

	               			var variableConcatenadoras="<a style='font-size:10px' href='documentos/avalFederacion/"+row['avalFederacionPdf']+".pdf' target='_blank'>"+row['avalFederacionPdf']+".pdf</a>";

	               		}

						        if (row['estadoAvalFederacion']==null) {

		                		return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

		                }


	               }else{

	                	return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

	               }


                }

            },


            {"render":

                function ( data, type, row ) {


	               if (row['tipoDeportistas']!="noFederado") {

						
	               		if(row['solciitudAvalPdf']==""){

	               			var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

	               		}else{

	               			var variableConcatenadoras="<a style='font-size:10px' href='documentos/solicitudAval/"+row['solciitudAvalPdf']+".pdf' target='_blank'>"+row['solciitudAvalPdf']+".pdf</a>";

	               		}


						        if (row['estadoSolicitudAval']==null) {

		                		return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

		                }


	               }else{

	                	return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

	               }


                }

            },

            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

                     if(row['avalOrganismoSuperiorPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/avalOrganismoSuperior/"+row['avalOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['avalOrganismoSuperiorPdf']+".pdf</a>";

                     }

                    if (row['estadoAvalOrganismoSuperior']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },

            {"render":

                function ( data, type, row ) {

                    if (row['contrato']!="" && row['contrato']!=null) {

                      return "<a style='font-size:10px' href='documentos/contratoCargado/"+row['contrato']+".pdf' target='_blank'>"+row['contrato']+".pdf</a>";

                    }else{

                      return "N/A"

                    }

                }

            },

            {"render":

                function ( data, type, row ) {

                		
                  if (row["nombreFuncionarios"]==null) {

                    var concatenados="";

                  }else{

                    var concatenados="<br><span style='color:blue;font-weight:bold;'>"+row["nombreFuncionarios"]+" "+row["apellido"]+"</span>";

                  }

                  if(row['califica']=='N' || row['certifica']=='N'){

                     return "<div style='font-size:8px'>NEGADO"+concatenados+" por: <br>"+row["observacionNiega"]+"</div>";

                  }else if(row['califica']=='A' && row['certifica']=='A'){

                    return "<div style='font-size:8px'>CERTIFICADO"+concatenados+"</div>";

                  }else if (row['califica']=='A') {

                      return "<div style='font-size:8px'>CALIFICADO"+concatenados+"</div>";

                  }else{

                      return "<div style='font-size:8px'>En revisión"+concatenados+"</div>";

                  }

                    
                }

            }


     ]

 });

}

/*=====  End of Tablas usuarios proyectos  ======*/

/*============================================
=            Tabla Subsecretarios            =
============================================*/

$(document).on("ready",function(){

  listarProyectosSubsecertarios();

});


var listarProyectosSubsecertarios=function(){

   var tableProyectosSubsecretarios =$("#tablaProyectosSubsecretarios").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
 
      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"modelosBd/datatablets/reporProyectosSubsecretarios.php", 
      "data": { 
          "fisicamenteEstructura": $("#fisicamenteEstructura").val()
       }     
      },
      "columns":[

      
            {"render":

                function ( data, type, row ) {

                    if (row['idRol']==2) {

                      return "<div style='font-size:10px'>Organismo Deportivo</div>";

                    }else{

                      return "<div style='font-size:10px'>Deportista</div>";

                    }

                    

                }

            },

 
            {"render":

                function ( data, type, row ) {

                   
                    if (row['tipoDeportistas']=="alto") {

                      var tipoDeportistas="Alto Rendimiento";

                    }else if(row['tipoDeportistas']=="alto2"){

                      var tipoDeportistas="Alto Rendimiento para personas con discpacidad";

                    }else{

                      var tipoDeportistas=row['tipoDeportistas'];

                    }

                    return "<div style='font-size:10px'>"+tipoDeportistas+"</div>";

                }

            },

            {"render":

                function ( data, type, row ) {


                  if (row['nombreOrganismo']!=null) {

                     return "<div style='font-size:10px'>"+row['nombreOrganismo']+"</div>";

                  }else{

                    return "<div style='font-size:10px'>"+row['nombreDeportistas']+"</div>";

                  }
                   
                }

            },

            {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['nombre']+"</div>";

                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['monto']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['alcanse']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['codigo']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                   if(row['proyectoCargadoPdf']==""){

                     var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                   }else{

                     var variableConcatenadoras="<a style='font-size:10px' href='documentos/proyectos/"+row['proyectoCargadoPdf']+".pdf' target='_blank'>"+row['proyectoCargadoPdf']+".pdf</a>";

                   }

                  if (row['estadoProyectoCarcado']==null) {

                    return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                  }
          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['tipoDeportistas']=="noFederado") {

                     if(row['curriculumDeportivoSegundo']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/curriculum/"+row['curriculumDeportivoSegundo']+".pdf' target='_blank'>"+row['curriculumDeportivoSegundo']+".pdf</a>";

                     }


                    if (row['estadoCurriculumDeportivoSegundo']==null) {

                      return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },


            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {

                 
                       if(row['certificadoFederacionPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/certificadoDeportista/"+row['certificadoFederacionPdf']+".pdf' target='_blank'>"+row['certificadoFederacionPdf']+".pdf</a>";

                       }


                      if (row['estadoCertificadoFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {

                       if(row['certificadoOrganismoSuperiorPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/certificadoSuperior/"+row['certificadoOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['certificadoOrganismoSuperiorPdf']+".pdf</a>";

                       }


                      if (row['estadoCertificadoOrganismoSuperior']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {
               
                       if(row['solicitudFederacionPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/solicitudCertificado/"+row['solicitudFederacionPdf']+".pdf' target='_blank'>"+row['solicitudFederacionPdf']+".pdf</a>";

                       }

                      if (row['estadoSolicitudFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },



            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

                    if(row['avalFederacionPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/avalFederacion/"+row['avalFederacionPdf']+".pdf' target='_blank'>"+row['avalFederacionPdf']+".pdf</a>";

                     }

                    if (row['estadoAvalFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },


            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

            
                     if(row['solciitudAvalPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/solicitudAval/"+row['solciitudAvalPdf']+".pdf' target='_blank'>"+row['solciitudAvalPdf']+".pdf</a>";

                     }


                    if (row['estadoSolicitudAval']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },



            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

                     if(row['avalOrganismoSuperiorPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/avalOrganismoSuperior/"+row['avalOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['avalOrganismoSuperiorPdf']+".pdf</a>";

                     }

                    if (row['estadoAvalOrganismoSuperior']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row["nombreFuncionarios"]==null) {

                    var concatenados="<br><span style='color:blue;font-weight:bold;'>Con el director</span>";

                  }else{

                    var concatenados="<br><span style='color:blue;font-weight:bold;'>"+row["nombreFuncionarios"]+" "+row["apellido"]+"</span>";

                  }

                  
                  if(row['califica']=='A' && row['certifica']=='A'){

                    return "<div style='font-size:8px'>CERTIFICADO"+concatenados+"</div>";

                  }else if (row['califica']=='A') {

                      return "<div style='font-size:8px'>CALIFICADO"+concatenados+"</div>";

                  }else{

                      return "<div style='font-size:8px'>En revisión"+concatenados+"</div>";

                  }

                    
                }

            }


     ]

 });

}

/*=====  End of Tabla Subsecretarios  ======*/

/*========================================
=            Tabla Directores            =
========================================*/

$(document).on("ready",function(){

  listarProyectosDirectores();

});


var listarProyectosDirectores=function(){

   var tableProyectosDirectores =$("#tablaProyectosDirectores").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      "pageLength": 50,
      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"modelosBd/datatablets/reporProyectosDirectores.php", 
      "data": { 
          "fisicamenteEstructura": $("#fisicamenteEstructura").val()
       }     
      },
      "columns":[

            {"render":

                function ( data, type, row ) {

                    if (row['idRol']==2) {

                      return "<div style='font-size:10px'>Organismo Deportivo</div>";

                    }else{

                      return "<div style='font-size:10px'>Deportista</div>";

                    }

                    

                }

            },

 
            {"render":

                function ( data, type, row ) {

                   
                    if (row['tipoDeportistas']=="alto") {

                      var tipoDeportistas="Alto Rendimiento";

                    }else if(row['tipoDeportistas']=="alto2"){

                      var tipoDeportistas="Alto Rendimiento para personas con discpacidad";

                    }else{

                      var tipoDeportistas=row['tipoDeportistas'];

                    }

                    return "<div style='font-size:10px'>"+tipoDeportistas+"</div>";

                }

            },


            {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row["siRespuestas"]+"</div>";
                    
                }

            },

            {"render":

                function ( data, type, row ) {


                  if (row['nombreOrganismo']!=null) {

                     return "<div style='font-size:10px'>"+row['nombreOrganismo']+"</div>";

                  }else{

                    return "<div style='font-size:10px'>"+row['nombreDeportistas']+"</div>";

                  }
                   
                }

            },

            {"render":

                function ( data, type, row ) {


                  if (row['emailOrganismo']!=null) {

                     return "<div style='font-size:10px'>"+row['emailOrganismo']+"</div>";

                  }else{

                    return "<div style='font-size:10px'>"+row['emailDeportistas']+"</div>";

                  }
                   
                }

            },


            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['nombre']+"</div>";

                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['monto']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['alcanse']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['codigo']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                   if(row['proyectoCargadoPdf']==""){

                     var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                   }else{

                     var variableConcatenadoras="<a style='font-size:10px' href='documentos/proyectos/"+row['proyectoCargadoPdf']+".pdf' target='_blank'>"+row['proyectoCargadoPdf']+".pdf</a>";

                   }

                  if (row['estadoProyectoCarcado']==null) {

                    return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                  }
          
                }

            },


            {"render":

                function ( data, type, row ) {

                  var idUsuario=$("#idUsuario").val();
                  var fisicamenteEstructura=$("#fisicamenteEstructura").val();

                  if (row['regresaTramite']=="A") {

                    $.ajax({

                      data: {idUsuario:idUsuario,fisicamenteEstructura:fisicamenteEstructura},
                      dataType: 'html',
                      type:'POST',
                      url:'modelosBd/validaciones/selectorFuncionarios.modelo.php'

                    }).done(function(listar__lugar){

                      $(".selectores__asincronos").html(listar__lugar);

                    }).fail(function(){

                      alert("hubo un error");

                    });


                    if (row['idRol']==2) {

                      return "<div style='font-size:10px; color:#004d40; font-weight:bold; text-align:justify;'>Se devuelve el trámite por: "+row["observacionRegresaTramite"]+"</div><br><div style='font-size:10px; color:#01579b; font-weight:bold; text-align:justify;'>Escoger el tipo de trámite al que pertenece</div><select style='width:100%; height:30px; font-size:10px;' class='selectores__asincronos__reasignados' idtramiteacabados='"+row['idTramite']+"'><option value='0'>--Seleccione el tipo de Organismo Deportivo--</option><option value='alto'>Alto Rendimiento</option><option value='alto2'>Alto Rendimiento para personas con discpacidad</option><option value='militarDeportiva'>Pertenece a la Federación Deportiva Militar Ecuatoriana o Federación Deportiva Policial Ecuatoriana</option><option value='formativo'>Formativo</option><option value='estudiantil'>Pertenece a nivel formativo estudiantil</option><option value='profesional'>Profesional</option><option value='recreativo'>Recreativo</option><option value='instalaciones'>Infraestructura</option></select><br><button style='background:#004d40; color:white; font-size:10px; width:100%; height:20px; padding:.3em; border-radius:.1em;' class='boton__reasignar__reenvios' idUsuarioAcabados='"+row['idTramite']+"'>REASIGNAR</button><br><div style='font-size:10px; color:#01579b; font-weight:bold; text-align:justify;'>Devolver al analista</div><select style='width:100%; height:30px; font-size:10px;' class='selectores__asincronos' idTramiteSolicitas='"+row['idTramite']+"'></select><br><button style='background:#004d40; color:white; font-size:10px; width:100%; height:20px; padding:.3em; border-radius:.1em;' class='boton__reasignar__devuelto' idUsuarioSolicitas='"+row['idTramite']+"'>REASIGNAR</button>";   

                    }else{

                      return "<div style='font-size:10px; color:#004d40; font-weight:bold; text-align:justify;'>Se devuelve el trámite por: "+row["observacionRegresaTramite"]+"</div><br><div style='font-size:10px; color:#01579b; font-weight:bold; text-align:justify;'>Escoger el tipo de trámite al que pertenece</div><select style='width:100%; height:30px; font-size:10px;' class='selectores__asincronos__reasignados' idtramiteacabados='"+row['idTramite']+"'><option value='0'>--Seleccione el tipo de deportista--</option><option value='altoRendimiento'>Pertenece a nivel de alto rendimiento</option><option value='altoRendimientoDiscapacidad'>Pertenece a nivel de alto rendimiento para personas con discapacidad</option><option value='militarDeportiva'>Pertenece a la Federación Deportiva Militar Ecuatoriana o Federación Deportiva Policial Ecuatoriana</option><option value='formativo'>Pertenece a nivel de deporte formativo</option><option value='estudiantil'>Pertenece a nivel formativo estudiantil</option><option value='profesional'>Pertenece a nivel de deporte profesional</option><option value='recreativo'>Recreativo</option><option value='instalaciones'>Infraestructura</option></select><br><button style='background:#004d40; color:white; font-size:10px; width:100%; height:20px; padding:.3em; border-radius:.1em;' class='boton__reasignar__reenvios' idUsuarioAcabados='"+row['idTramite']+"'>REASIGNAR</button><br><div style='font-size:10px; color:#01579b; font-weight:bold; text-align:justify;'>Devolver al analista</div><select style='width:100%; height:30px; font-size:10px;' class='selectores__asincronos' idTramiteSolicitas='"+row['idTramite']+"'></select><br><button style='background:#004d40; color:white; font-size:10px; width:100%; height:20px; padding:.3em; border-radius:.1em;' class='boton__reasignar__devuelto' idUsuarioSolicitas='"+row['idTramite']+"'>REASIGNAR</button>";    


                    }

                  }else{

                    $.ajax({

                      data: {idUsuario:idUsuario,fisicamenteEstructura:fisicamenteEstructura},
                      dataType: 'html',
                      type:'POST',
                      url:'modelosBd/validaciones/selectorFuncionarios.modelo.php'

                    }).done(function(listar__lugar){

                      $(".selectores__asincronos").html(listar__lugar);

                    }).fail(function(){

                      alert("hubo un error");

                    });



                    return "<select style='width:100%; height:30px; font-size:10px;' class='selectores__asincronos' idTramite='"+row['idTramite']+"'></select><br><button style='background:#01579b; color:white; font-size:10px; width:100%; height:20px; padding:.3em; border-radius:.1em;' class='boton__reasignar' idUsuario='"+row['idTramite']+"'>REASIGNAR</button>";                    

                  }

                }

            },


            {"render":

                function ( data, type, row ) {

                  if (row['tipoDeportistas']=="noFederado") {

                   if(row['curriculumDeportivoSegundo']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/curriculum/"+row['curriculumDeportivoSegundo']+".pdf' target='_blank'>"+row['curriculumDeportivoSegundo']+".pdf</a>";

                     }


                  if (row['estadoCurriculumDeportivoSegundo']==null) {

                      return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },


            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {

                 
                       if(row['certificadoFederacionPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/certificadoDeportista/"+row['certificadoFederacionPdf']+".pdf' target='_blank'>"+row['certificadoFederacionPdf']+".pdf</a>";

                       }


                   if (row['estadoCertificadoFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {

                     if(row['certificadoOrganismoSuperiorPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/certificadoSuperior/"+row['certificadoOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['certificadoOrganismoSuperiorPdf']+".pdf</a>";

                       }


                     if (row['estadoCertificadoOrganismoSuperior']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {
               
                       if(row['solicitudFederacionPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/solicitudCertificado/"+row['solicitudFederacionPdf']+".pdf' target='_blank'>"+row['solicitudFederacionPdf']+".pdf</a>";

                       }

                      if (row['estadoSolicitudFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },



            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

                    if(row['avalFederacionPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/avalFederacion/"+row['avalFederacionPdf']+".pdf' target='_blank'>"+row['avalFederacionPdf']+".pdf</a>";

                     }

                    if (row['estadoAvalFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },


            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

            
                     if(row['solciitudAvalPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/solicitudAval/"+row['solciitudAvalPdf']+".pdf' target='_blank'>"+row['solciitudAvalPdf']+".pdf</a>";

                     }


                    if (row['estadoSolicitudAval']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },



            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

                     if(row['avalOrganismoSuperiorPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/avalOrganismoSuperior/"+row['avalOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['avalOrganismoSuperiorPdf']+".pdf</a>";

                     }

                    if (row['estadoAvalOrganismoSuperior']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },

            {"render":

                function ( data, type, row ) {

                    if (row['califica']=='A') {

                      return "<div style='font-size:8px'>CALIFICADO</div>";

                    }else if(row['califica']=='A' && row['certifica']=='A'){

                      return "<div style='font-size:8px'>CERTIFICADO</div>";

                    }else{

                      return "<div style='font-size:8px'>En revisión</div>";

                    }
                    
                }

            }


     ]

 });

 obtener_data_tablaDirectores("#tablaProyectosDirectores tbody",tableProyectosDirectores);

 obtener_data_tablaDirectoresDevueltos("#tablaProyectosDirectores tbody",tableProyectosDirectores);

 obtener_data_enviarTramitesGeneradosDevueltos("#tablaProyectosDirectores tbody",tableProyectosDirectores);

}

/*==================================================
=            Cambiar de área tramitadas            =
==================================================*/

var contadorTeletrabajo=0;

var obtener_data_enviarTramitesGeneradosDevueltos=function(tbody,table){

  $(tbody).on("click","button.boton__reasignar__reenvios",function(e)
  {

        var data=table.row($(this).parents("tr")).data();

        var paqueteDeDatos = new FormData();

        if($('select[idtramiteacabados='+data.idTramite+']').val()!=0){

          var idUsuario=$('select[idtramiteacabados='+data.idTramite+']').val();


          paqueteDeDatos.append('idUsuario', idUsuario);
          paqueteDeDatos.append('idTramite', data.idTramite);

          var destino = "modelosBd/inserta/insertaUsuarioAsignadoReasignado.md.php"; 


          $.ajax({

             url: destino,
             type: 'POST',
             contentType: false,
             data: paqueteDeDatos, 
             processData: false,
             cache: false, 

             success: function(response){

                var elementos=JSON.parse(response);
                var mensaje=elementos['mensaje'];

                if(mensaje==1){

                     contadorTeletrabajo=parseInt(table.rows().count(), 10) - 1;

                     if(contadorTeletrabajo>0){

                       table.ajax.reload();

                     }else{

                        location.reload();

                     }


                    alertify.set("notifier","position", "top-right");
                    alertify.notify("Se asignó correctamente el trámite "+data.nombre, "success", 1, function(){});

                    table.ajax.reload();

                }


              },

             error: function (){ 
                alert("Algo ha fallado.");
             }

          });


        }else{

          alertify.set("notifier","position", "top-right");
          alertify.notify("Es obligatorio seleccionar a dirección se reasigna el trámite "+data.nombre, "error", 5, function(){});  

        }

  });

 }

/*=====  End of Cambiar de área tramitadas  ======*/


/*=========================================
=            Obtener devueltos            =
=========================================*/

var obtener_data_tablaDirectoresDevueltos=function(tbody,table){

  $(tbody).on("click","button.boton__reasignar__devuelto",function(e)
  {

        var data=table.row($(this).parents("tr")).data();

        var paqueteDeDatos = new FormData();

        if($('select[idTramiteSolicitas='+data.idTramite+']').val()!=""){

          var idUsuario=$('select[idTramiteSolicitas='+data.idTramite+']').val();

          if (data.emailOrganismo!=null) {

            emailEnviado=data.emailOrganismo;

          }else{

            emailEnviado=data.emailDeportistas;

          }


          paqueteDeDatos.append('idUsuario', idUsuario);
          paqueteDeDatos.append('idTramite', data.idTramite);
          paqueteDeDatos.append('emailEnviado', emailEnviado);

          var destino = "modelosBd/inserta/insertaUsuarioAsignado.md.php"; 


          $.ajax({

             url: destino,
             type: 'POST',
             contentType: false,
             data: paqueteDeDatos, 
             processData: false,
             cache: false, 

             success: function(response){

                var elementos=JSON.parse(response);
                var mensaje=elementos['mensaje'];

                if(mensaje==1){

                    alertify.set("notifier","position", "top-right");
                    alertify.notify("Se asignó correctamente el trámite", "success", 1, function(){});

                    contadorTeletrabajo=parseInt(table.rows().count(), 10) - 1;

                     if(contadorTeletrabajo>0){

                       table.ajax.reload();

                     }else{

                        location.reload();

                     }

                }


              },

             error: function (){ 
                alert("Algo ha fallado.");
             }

          });


        }else{

          alertify.set("notifier","position", "top-right");
          alertify.notify("Es obligatorio seleccionar a quien se reasigna el trámite del trámite "+data.nombre, "error", 5, function(){});  

        }

  });

 }


/*=====  End of Obtener devueltos  ======*/



/*================================================
=            Acciones del Datatablets            =
================================================*/

var obtener_data_tablaDirectores=function(tbody,table){

  $(tbody).on("click","button.boton__reasignar",function(e)
  {

        var data=table.row($(this).parents("tr")).data();

        var paqueteDeDatos = new FormData();

        if($('select[idTramite='+data.idTramite+']').val()!=""){

          var idUsuario=$('select[idTramite='+data.idTramite+']').val();

          if (data.emailOrganismo!=null) {

            emailEnviado=data.emailOrganismo;

          }else{

            emailEnviado=data.emailDeportistas;

          }


          paqueteDeDatos.append('idUsuario', idUsuario);
          paqueteDeDatos.append('idTramite', data.idTramite);
          paqueteDeDatos.append('emailEnviado', emailEnviado);

          var destino = "modelosBd/inserta/insertaUsuarioAsignado.md.php"; 


          $.ajax({

             url: destino,
             type: 'POST',
             contentType: false,
             data: paqueteDeDatos, 
             processData: false,
             cache: false, 

             success: function(response){

                var elementos=JSON.parse(response);
                var mensaje=elementos['mensaje'];

                if(mensaje==1){

                    alertify.set("notifier","position", "top-right");
                    alertify.notify("Se asignó correctamente el trámite", "success", 1, function(){});

                    contadorTeletrabajo=parseInt(table.rows().count(), 10) - 1;

                     if(contadorTeletrabajo>0){

                       table.ajax.reload();

                     }else{

                        location.reload();

                     }

                }


              },

             error: function (){ 
                alert("Algo ha fallado.");
             }

          });


        }else{

          alertify.set("notifier","position", "top-right");
          alertify.notify("Es obligatorio seleccionar a quien se reasigna el trámite del trámite "+data.nombre, "error", 5, function(){});  

        }

  });

 }


/*=====  End of Acciones del Datatablets  ======*/



/*=====  End of Tabla Directores  ======*/

/*==========================================
=            Tabla Funcionarios            =
==========================================*/

$(document).on("ready",function(){

  listarProyectosFuncionarios();

});


var listarProyectosFuncionarios=function(){

   var tableFuncionarios =$("#tablaProyectosFuncionarios").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
 
      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"modelosBd/datatablets/reporProyectosFuncionarios.php", 
      "data": { 
          "idUsuario": $("#idUsuario").val()
       }     
      },
      "columns":[

            {"render":

                function ( data, type, row ) {

                    if (row['idRol']==2) {

                      return "<div style='font-size:8px'>Organismo Deportivo</div>";

                    }else{

                      return "<div style='font-size:8px'>Deportista</div>";

                    }

                    

                }

            },

 
            {"render":

                function ( data, type, row ) {

                    if (row['tipoDeportistas']=="alto") {

                      var tipoDeportistas="Alto Rendimiento";

                    }else if(row['tipoDeportistas']=="alto2"){

                      var tipoDeportistas="Alto Rendimiento para personas con discpacidad";

                    }else{

                      var tipoDeportistas=row['tipoDeportistas'];

                    }

                    return "<div style='font-size:10px'>"+tipoDeportistas+"</div>";

                }

            },


            {"render":

                function ( data, type, row ) {


                  if (row['nombreOrganismo']!=null) {

                     return "<div style='font-size:8px'>"+row['nombreOrganismo']+"</div>";

                  }else{

                    return "<div style='font-size:8px'>"+row['nombreDeportistas']+"</div>";

                  }
                   
                }

            },


            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:8px'>"+row['nombre']+"</div>";

                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:8px'>"+row['monto']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:8px'>"+row['alcanse']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:8px'>"+row['codigo']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                   if(row['proyectoCargadoPdf']==""){

                     var variableConcatenadoras="<div style='font-size:8px'>Documento no requerido</div>";

                   }else{

                     var variableConcatenadoras="<a style='font-size:8px' href='documentos/proyectos/"+row['proyectoCargadoPdf']+".pdf' target='_blank'>"+row['proyectoCargadoPdf']+".pdf</a>";

                   }



                    return variableConcatenadoras;

                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['tipoDeportistas']=="noFederado") {

                   if(row['curriculumDeportivoSegundo']==""){

                       var variableConcatenadoras="<div style='font-size:8px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:8px' href='documentos/curriculum/"+row['curriculumDeportivoSegundo']+".pdf' target='_blank'>"+row['curriculumDeportivoSegundo']+".pdf</a>";

                     }



                      return variableConcatenadoras;


                  }else{

                    return "<br><div style='font-size:8px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },


            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {

                 
                       if(row['certificadoFederacionPdf']==""){

                         var variableConcatenadoras="<div style='font-size:8px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:8px' href='documentos/certificadoDeportista/"+row['certificadoFederacionPdf']+".pdf' target='_blank'>"+row['certificadoFederacionPdf']+".pdf</a>";

                       }


                       return variableConcatenadoras;

                    }else{

                      return "<br><div style='font-size:8px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:8px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {

                     if(row['certificadoOrganismoSuperiorPdf']==""){

                         var variableConcatenadoras="<div style='font-size:8px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:8px' href='documentos/certificadoSuperior/"+row['certificadoOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['certificadoOrganismoSuperiorPdf']+".pdf</a>";

                       }


                       return variableConcatenadoras;


                    }else{

                      return "<br><div style='font-size:8px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:8px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {
               
                       if(row['solicitudFederacionPdf']==""){

                         var variableConcatenadoras="<div style='font-size:8px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:8px' href='documentos/solicitudCertificado/"+row['solicitudFederacionPdf']+".pdf' target='_blank'>"+row['solicitudFederacionPdf']+".pdf</a>";

                       }

                       return variableConcatenadoras;

                    }else{

                      return "<br><div style='font-size:8px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:8px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },



            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

                    if(row['avalFederacionPdf']==""){

                       var variableConcatenadoras="<div style='font-size:8px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:8px' href='documentos/avalFederacion/"+row['avalFederacionPdf']+".pdf' target='_blank'>"+row['avalFederacionPdf']+".pdf</a>";

                     }

                     return variableConcatenadoras;

                 }else{

                    return "<br><div style='font-size:8px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },


            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

            
                     if(row['solciitudAvalPdf']==""){

                       var variableConcatenadoras="<div style='font-size:8px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:8px' href='documentos/solicitudAval/"+row['solciitudAvalPdf']+".pdf' target='_blank'>"+row['solciitudAvalPdf']+".pdf</a>";

                     }

                     return variableConcatenadoras;

                 }else{

                    return "<br><div style='font-size:8px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },



            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

                     if(row['avalOrganismoSuperiorPdf']==""){

                       var variableConcatenadoras="<div style='font-size:8px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:8px' href='documentos/avalOrganismoSuperior/"+row['avalOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['avalOrganismoSuperiorPdf']+".pdf</a>";

                     }


                     return variableConcatenadoras;



                 }else{

                    return "<br><div style='font-size:8px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },

            {"render":

                function ( data, type, row ) {

                    if (row['califica']=='A') {

                      return "<div style='font-size:8px'>CALIFICADO</div>";

                    }else if(row['califica']=='A' && row['certifica']=='A'){

                      return "<div style='font-size:8px'>CERTIFICADO</div>";

                    }else{

                      return "<div style='font-size:8px'>En revisión</div>";

                    }

                }

            },

            {"render":

                function ( data, type, row ) {

                    if (row['califica']=='A') {

                     return "<input type='checkbox' class='seleccionaCalificado' name='califica"+row['idTramite']+"' checked='checked'>";

                    }else{

                       return "<input type='checkbox' class='seleccionaCalificado' name='califica"+row['idTramite']+"'>";

                    }

                   

                }

            },

            {"render":

                function ( data, type, row ) {

                    if (row['certifica']=='A') {

                       return "<input type='checkbox' class='seleccionaCertificado' name='certifica"+row['idTramite']+"' checked='checked'>";

                    }else{

                      return "<input type='checkbox' class='seleccionaCertificado' name='certifica"+row['idTramite']+"'>";

                    }


                }

            },

            {"render":

                function ( data, type, row ) {

                    return "<input type='checkbox' class='seleccionarRechazoNegado' name='certifica"+row['idTramite']+"'>";

                }

            },

            {"render":

                function ( data, type, row ) {


                    return "<button style='background:#01579b; color:white; font-size:10px; width:100%; height:20px; padding:.3em; border-radius:.1em;' class='regresar__tramites' idUsuario='"+row['idTramite']+"' idUsuarioRelativo='"+row["idUsuarioRelativo"]+"'>REGRESAR TRÁMITE</button>";

                }

            }



     ]

 });

 obtener_data_certifica("#tablaProyectosFuncionarios tbody",tableFuncionarios);

 obtener_data_califica("#tablaProyectosFuncionarios tbody",tableFuncionarios);

 obtener_data_rechaza("#tablaProyectosFuncionarios tbody",tableFuncionarios);

 obtener_data_regresar("#tablaProyectosFuncionarios tbody",tableFuncionarios);

}

/*=============================================
=            Reenviar los trámites            =
=============================================*/

var contadorTeletrabajo=0;

var obtener_data_regresar=function(tbody,table){

   $(tbody).on("click","button.regresar__tramites",function(e)
  {

    var data=table.row($(this).parents("tr")).data();


    alertify.prompt('¿Está seguro en regresar el trámite '+data.nombre+" a su Director?<br>Ingrese el porque y el área al que se debería asignar", '', function(evt, value){ 


       if (value=="") {

          evt.cancel = true;

          alertify.set('notifier','position', 'top-right');
          alertify.notify('Es necesario ingresar la observación', 'error', 5, function(){});

       }else{

          var paqueteDeDatos = new FormData();

          var idUsuarioDefinidos=$(this).attr('idUsuarioRelativo');

          paqueteDeDatos.append('idTramite', data.idTramite);
          paqueteDeDatos.append('idUsuarioDefinidos', data.idUsuarioDefinidos);
          paqueteDeDatos.append('obseracionDefinida',value);  

          var destino = "modelosBd/actualiza/regresaTramite.md.php"; 

          $.ajax({

              url: destino,
              type: 'POST',
              contentType: false,
              data: paqueteDeDatos, 
              processData: false,
              cache: false, 

              success: function(response){

                var elementos=JSON.parse(response);
                var mensaje=elementos['mensaje'];

                 if (mensaje==1) {

                  alertify.set("notifier","position", "top-right");
                  alertify.notify("Se devolvió el trámite "+data.nombre, "success", 5, function(){});

                   contadorTeletrabajo=parseInt(table.rows().count(), 10) - 1;

                   if(contadorTeletrabajo==0){

                      location.reload();

                   }else{

                      table.ajax.reload();

                   }


                 }


              },

              error: function (){ 
                alert("Algo ha fallado.");
              }

           });     

        }

    }, function(){ 

         alertify.set("notifier","position", "top-right");
         alertify.notify("Se canceló la acción sobre el trámite "+data.nombre, "error", 5, function(){});

    });


  });

 }


/*=====  End of Reenviar los trámites  ======*/


/*============================================
=            Proyectos Rechazados            =
============================================*/

var obtener_data_rechaza=function(tbody,table){

  $(tbody).on("click","input.seleccionarRechazoNegado",function(e){

    var data=table.row($(this).parents("tr")).data();

    var condicion = $(this).is(":checked");

    if (condicion) {

      var condicionante='A'

    }else{

      var condicionante=null;

    }

    var cancelado=$(this);

    alertify.prompt('¿Está seguro en negar el trámite '+data.nombre+"?<br>Ingrese Observación", '', function(evt, value){ 


       if (value=="") {

          evt.cancel = true;

          alertify.set('notifier','position', 'top-right');
          alertify.notify('Es necesario ingresar la observación', 'error', 5, function(){});

       }else{

          var paqueteDeDatos = new FormData();

          paqueteDeDatos.append('tramite',3);
          paqueteDeDatos.append('idTramite', data.idTramite);
          paqueteDeDatos.append('condicionante', condicionante);
          paqueteDeDatos.append('obseracionDefinida',value);  

          var destino = "modelosBd/actualiza/actualizaCalificacion.md.php"; 

          $.ajax({

              url: destino,
              type: 'POST',
              contentType: false,
              data: paqueteDeDatos, 
              processData: false,
              cache: false, 

              success: function(response){

                var elementos=JSON.parse(response);
                var mensaje=elementos['mensaje'];

                 if (mensaje==1) {

                  alertify.set("notifier","position", "top-right");
                  alertify.notify("Se dio como rechazado el trámite "+data.nombre, "success", 5, function(){});

                   contadorTeletrabajo=parseInt(table.rows().count(), 10) - 1;

                   if(contadorTeletrabajo==0){

                      location.reload();

                   }else{

                      table.ajax.reload();

                   }


                 }


              },

              error: function (){ 
                alert("Algo ha fallado.");
              }

           });     

        }

    }, function(){ 

         alertify.set("notifier","position", "top-right");
         alertify.notify("Se canceló la acción sobre el trámite "+data.nombre, "error", 5, function(){});

         $(cancelado).removeAttr('checked');

    });


  });

 }


/*=====  End of Proyectos Rechazados  ======*/


/*================================================
=            Acciones del Datatablets           =
================================================*/

var obtener_data_certifica=function(tbody,table){

  $(tbody).on("click","input.seleccionaCalificado",function(e){

    var data=table.row($(this).parents("tr")).data();

    var condicion = $(this).is(":checked");

    if (condicion) {

      var condicionante='A'

    }else{

      var condicionante=null;

    }

    var paqueteDeDatos = new FormData();

    paqueteDeDatos.append('tramite',1);
    paqueteDeDatos.append('idTramite', data.idTramite);
    paqueteDeDatos.append('condicionante', condicionante);

    var destino = "modelosBd/actualiza/actualizaCalificacion.md.php"; 

    $.ajax({

        url: destino,
        type: 'POST',
        contentType: false,
        data: paqueteDeDatos, 
        processData: false,
        cache: false, 

        success: function(response){

          var elementos=JSON.parse(response);
          var mensaje=elementos['mensaje'];

           if (mensaje==1) {

            alertify.set("notifier","position", "top-right");
            alertify.notify("Se dio como calificado el trámite "+data.nombre, "success", 5, function(){});

             contadorTeletrabajo=parseInt(table.rows().count(), 10) - 1;

             if(contadorTeletrabajo==0){

                location.reload();

             }else{

                table.ajax.reload();

             }


           }


           if (mensaje==2) {

            alertify.set("notifier","position", "top-right");
            alertify.notify("Se deseleccionó el trámite "+data.nombre, "error", 5, function(){});


             contadorTeletrabajo=parseInt(table.rows().count(), 10) - 1;

             if(contadorTeletrabajo==0){

                location.reload();

             }else{

                table.ajax.reload();

             }

           }


        },

        error: function (){ 
          alert("Algo ha fallado.");
        }

     });


  });

 }

var obtener_data_califica=function(tbody,table){

  $(tbody).on("click","input.seleccionaCertificado",function(e){

    var data=table.row($(this).parents("tr")).data();

    if (data.califica!="A") {

      $(this).removeAttr('checked')

    }else{

      $(this).attr('checked','checked');

    }


    var condicion = $(this).is(":checked");

    if (condicion) {

      var condicionante='A';

    }else{

      var condicionante=null;

   }

    var paqueteDeDatos = new FormData();

    paqueteDeDatos.append('tramite',2);
    paqueteDeDatos.append('idTramite', data.idTramite);
    paqueteDeDatos.append('condicionante', condicionante);

    var destino = "modelosBd/actualiza/actualizaCalificacion.md.php"; 

    $.ajax({

        url: destino,
        type: 'POST',
        contentType: false,
        data: paqueteDeDatos, 
        processData: false,
        cache: false, 

        success: function(response){

          var elementos=JSON.parse(response);
          var mensaje=elementos['mensaje'];

          if (mensaje==1) {

             alertify.set("notifier","position", "top-right");
             alertify.notify("Se dio como certificado el trámite "+data.nombre, "success", 5, function(){});

             contadorTeletrabajo=parseInt(table.rows().count(), 10) - 1;

             if(contadorTeletrabajo==0){

                location.reload();

             }else{

                table.ajax.reload();

             }

          }


          if (mensaje==2) {

             alertify.set("notifier","position", "top-right");
             alertify.notify("Debe calificar al trámite "+data.nombre+" antes de marcar esta opción ", "error", 5, function(){});

          }


        },

        error: function (){ 
          alert("Algo ha fallado.");
        }

     });


  });

 }



/*=====  End of Acciones del Datatablets  ======*/


/*=====  End of Tabla Funcionarios  ======*/

/*==============================================
=            Tabla reportería final            =
==============================================*/

$(document).on("ready",function(){

  listarProyectosDefinitivos();

});


var listarProyectosDefinitivos=function(){

   var tableProyectosDefinitivos =$(".tabla__definitivos").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
 
      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"modelosBd/datatablets/reporDefinitivos.php", 
      "data": { 
          "fisicamenteEstructura": $("#fisicamenteEstructura").val()
       }     
      },
      "columns":[

      
            {"render":

                function ( data, type, row ) {

                    if (row['idRol']==2) {

                      return "<div style='font-size:10px'>Organismo Deportivo</div>";

                    }else{

                      return "<div style='font-size:10px'>Deportista</div>";

                    }

                    

                }

            },

 
            {"render":

                function ( data, type, row ) {

                    if (row['tipoDeportistas']=="alto") {

                      var tipoDeportistas="Alto Rendimiento";

                    }else if(row['tipoDeportistas']=="alto2"){

                      var tipoDeportistas="Alto Rendimiento para personas con discpacidad";

                    }else{

                      var tipoDeportistas=row['tipoDeportistas'];

                    }

                    return "<div style='font-size:10px'>"+tipoDeportistas+"</div>";

                }

            },

            {"render":

                function ( data, type, row ) {


                  if (row['nombreOrganismo']!=null) {

                     return "<div style='font-size:10px'>"+row['nombreOrganismo']+"</div>";

                  }else{

                    return "<div style='font-size:10px'>"+row['nombreDeportistas']+"</div>";

                  }
                   
                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['nombre']+"</div>";

                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['monto']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['alcanse']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['codigo']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                   if(row['proyectoCargadoPdf']==""){

                     var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                   }else{

                     var variableConcatenadoras="<a style='font-size:10px' href='documentos/proyectos/"+row['proyectoCargadoPdf']+".pdf' target='_blank'>"+row['proyectoCargadoPdf']+".pdf</a>";

                   }

                  if (row['estadoProyectoCarcado']==null) {

                    return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                  }
          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['tipoDeportistas']=="noFederado") {

                     if(row['curriculumDeportivoSegundo']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/curriculum/"+row['curriculumDeportivoSegundo']+".pdf' target='_blank'>"+row['curriculumDeportivoSegundo']+".pdf</a>";

                     }


                    if (row['estadoCurriculumDeportivoSegundo']==null) {

                      return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },


            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {

                 
                       if(row['certificadoFederacionPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/certificadoDeportista/"+row['certificadoFederacionPdf']+".pdf' target='_blank'>"+row['certificadoFederacionPdf']+".pdf</a>";

                       }


                      if (row['estadoCertificadoFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {

                       if(row['certificadoOrganismoSuperiorPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/certificadoSuperior/"+row['certificadoOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['certificadoOrganismoSuperiorPdf']+".pdf</a>";

                       }


                      if (row['estadoCertificadoOrganismoSuperior']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {
               
                       if(row['solicitudFederacionPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/solicitudCertificado/"+row['solicitudFederacionPdf']+".pdf' target='_blank'>"+row['solicitudFederacionPdf']+".pdf</a>";

                       }

                      if (row['estadoSolicitudFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },



            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

                     if(row['avalFederacionPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/avalFederacion/"+row['avalFederacionPdf']+".pdf' target='_blank'>"+row['avalFederacionPdf']+".pdf</a>";

                     }

                    if (row['estadoAvalFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },


            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

            
                     if(row['solciitudAvalPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/solicitudAval/"+row['solciitudAvalPdf']+".pdf' target='_blank'>"+row['solciitudAvalPdf']+".pdf</a>";

                     }


                     if (row['estadoSolicitudAval']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },



            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

                     if(row['avalOrganismoSuperiorPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/avalOrganismoSuperior/"+row['avalOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['avalOrganismoSuperiorPdf']+".pdf</a>";

                     }

                      if (row['estadoAvalOrganismoSuperior']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },

            {"render":

                function ( data, type, row ) {

                  if(row['califica']=='N' || row['certifica']=='N'){

                    return "<div style='font-size:10px'>NEGADO<br><span style='color:blue;font-weight:bold;'>"+row["nombreFuncionarios"]+" "+row["apellido"]+"</span></div>";

                  }else{

                   return "<div style='font-size:10px'>TRAMITADO<br><span style='color:blue;font-weight:bold;'>"+row["nombreFuncionarios"]+" "+row["apellido"]+"</span></div>";

                  }            
                    
                }

            }


     ]

 });

}


/*=====  End of Tabla reportería final  ======*/

/*==========================================
=            Reportería negados            =
==========================================*/

$(document).on("ready",function(){

  listarProyectosDefinitivosNegados();

});


var listarProyectosDefinitivosNegados=function(){

   var tableProyectosDefinitivosNegados =$(".tabla__definitivos__negados").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
 
      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"modelosBd/datatablets/reporDefinitivosNegados.php", 
      "data": { 
          "fisicamenteEstructura": $("#fisicamenteEstructura").val()
       }     
      },
      "columns":[

      
            {"render":

                function ( data, type, row ) {

                    if (row['idRol']==2) {

                      return "<div style='font-size:10px'>Organismo Deportivo</div>";

                    }else{

                      return "<div style='font-size:10px'>Deportista</div>";

                    }

                    

                }

            },

 
            {"render":

                function ( data, type, row ) {

                    if (row['tipoDeportistas']=="alto") {

                      var tipoDeportistas="Alto Rendimiento";

                    }else if(row['tipoDeportistas']=="alto2"){

                      var tipoDeportistas="Alto Rendimiento para personas con discpacidad";

                    }else{

                      var tipoDeportistas=row['tipoDeportistas'];

                    }

                    return "<div style='font-size:10px'>"+tipoDeportistas+"</div>";

                }

            },

            {"render":

                function ( data, type, row ) {


                  if (row['nombreOrganismo']!=null) {

                     return "<div style='font-size:10px'>"+row['nombreOrganismo']+"</div>";

                  }else{

                    return "<div style='font-size:10px'>"+row['nombreDeportistas']+"</div>";

                  }
                   
                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['nombre']+"</div>";

                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['monto']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                  return "<div style='font-size:10px'>"+row['alcanse']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['codigo']+"</div>";
          
                }

            },

            {"render":

                function ( data, type, row ) {

                   if(row['proyectoCargadoPdf']==""){

                     var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                   }else{

                     var variableConcatenadoras="<a style='font-size:10px' href='documentos/proyectos/"+row['proyectoCargadoPdf']+".pdf' target='_blank'>"+row['proyectoCargadoPdf']+".pdf</a>";

                   }

                  if (row['estadoProyectoCarcado']==null) {

                    return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                  }
          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['tipoDeportistas']=="noFederado") {

                     if(row['curriculumDeportivoSegundo']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/curriculum/"+row['curriculumDeportivoSegundo']+".pdf' target='_blank'>"+row['curriculumDeportivoSegundo']+".pdf</a>";

                     }


                    if (row['estadoCurriculumDeportivoSegundo']==null) {

                      return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },


            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {

                 
                       if(row['certificadoFederacionPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/certificadoDeportista/"+row['certificadoFederacionPdf']+".pdf' target='_blank'>"+row['certificadoFederacionPdf']+".pdf</a>";

                       }


                      if (row['estadoCertificadoFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {

                       if(row['certificadoOrganismoSuperiorPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/certificadoSuperior/"+row['certificadoOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['certificadoOrganismoSuperiorPdf']+".pdf</a>";

                       }


                      if (row['estadoCertificadoOrganismoSuperior']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },

            {"render":

                function ( data, type, row ) {

                  if (row['idRol']==3) {

                    if (row['tipoDeportistas']!="noFederado") {
               
                       if(row['solicitudFederacionPdf']==""){

                         var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                       }else{

                         var variableConcatenadoras="<a style='font-size:10px' href='documentos/solicitudCertificado/"+row['solicitudFederacionPdf']+".pdf' target='_blank'>"+row['solicitudFederacionPdf']+".pdf</a>";

                       }

                      if (row['estadoSolicitudFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                    }else{

                      return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                    }


                  }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                  }

          
                }

            },



            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

                     if(row['avalFederacionPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/avalFederacion/"+row['avalFederacionPdf']+".pdf' target='_blank'>"+row['avalFederacionPdf']+".pdf</a>";

                     }

                    if (row['estadoAvalFederacion']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                    }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },


            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

            
                     if(row['solciitudAvalPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/solicitudAval/"+row['solciitudAvalPdf']+".pdf' target='_blank'>"+row['solciitudAvalPdf']+".pdf</a>";

                     }


                     if (row['estadoSolicitudAval']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },



            {"render":

                function ( data, type, row ) {


                 if (row['tipoDeportistas']!="noFederado") {

                     if(row['avalOrganismoSuperiorPdf']==""){

                       var variableConcatenadoras="<div style='font-size:10px'>Documento no requerido</div>";

                     }else{

                       var variableConcatenadoras="<a style='font-size:10px' href='documentos/avalOrganismoSuperior/"+row['avalOrganismoSuperiorPdf']+".pdf' target='_blank'>"+row['avalOrganismoSuperiorPdf']+".pdf</a>";

                     }

                      if (row['estadoAvalOrganismoSuperior']==null) {

                        return variableConcatenadoras+"<br><div style='font-size:10px; color:red; font-weight:bold;'></div>";

                      }


                 }else{

                    return "<br><div style='font-size:10px; color:red; font-weight:bold;'>Documento no requerido</div>";

                 }


                }

            },

            {"render":

                function ( data, type, row ) {

                  if(row['califica']=='N' || row['certifica']=='N'){

                    return "<div style='font-size:10px'>NEGADO<br><span style='color:blue;font-weight:bold;'>"+row["nombreFuncionarios"]+" "+row["apellido"]+"</span><br>se nego por:"+row["observacionNiega"]+"</div>";

                  }else{

                   return "<div style='font-size:10px'>TRAMITADO<br><span style='color:blue;font-weight:bold;'>"+row["nombreFuncionarios"]+" "+row["apellido"]+"</span></div>";

                  }            
                    
                }

            }


     ]

 });

}


/*=====  End of Reportería negados  ======*/

/*===================================
=            Deportistas            =
===================================*/


$(document).on("ready",function(){

        $('#tablaDeportistas tfoot th').each( function () {

          var title = $("#tablaDeportistas tfoot th").eq($(this).index()).text();

            
            if (title=="Editar") {

              $(this).html('');

            }else{ 

              $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

            }
 
        });  

  listarAdminDeportistas();

});


var listarAdminDeportistas=function(){

   var tableDeportistas =$("#tablaDeportistas").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
    /*==================================
    =            Exportador            =
    ==================================*/
    
     dom: 'Bfrtip',

     buttons: {

        dom:{
            container:{
              tag:'div',
              className:'flexcontent__administrador'
            },
            buttonLiner: {
              tag: null
            }
        },

        buttons: [

              {
                        extend:    'print',
                        text:      '<i class="fa fa-print"></i>Imprimir',
                        title:'Listado',
                        titleAttr: 'Imprimir',
                        className: 'export imprimir',
              },


              {
                        extend:    'excelHtml5',
                        text:      '<i class="fa fa-file-excel-o"></i>Excel',
                        title:'Listado',
                        titleAttr: 'Excel',
                        className: 'export excel',
              },

              {
                        extend:    'pdfHtml5',
                        text:      '<i class="fa fa-file-pdf-o"></i>PDF',
                        title:'Listado',
                        titleAttr: 'PDF',
                        className: 'export pdf',


                }

        ]



      },
  
  /*=====  End of Exportador  ======*/

      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
        "method":"POST",
        "url":"modelosBd/datatablets/reporDeportistas.php"  
      },
      "columns":[

            {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['tipoOrganismo']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['cedulaUsuario']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['nombreCompleto']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['sexo']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['nombreProvincia']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['nombreCanton']+"</div>";
                    
                }

            },


           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['nombreParroquia']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['telefono']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['direccion']+"</div>";
                    
                }

           },


           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['email']+"</div>";
                    
                }

           }                     


     ]

 });

            /*===============================================================
            =            Realizar las busquedas por cada columna            =
            ===============================================================*/
              tableDeportistas.columns().every(function(){
                    
                    var datatableColumn = this;

                    var serachTetBoxes=$(this.footer()).find('input');
                  
                    serachTetBoxes.on('keyup change',function(){

                      datatableColumn.search(this.value).draw();

                    });

                    serachTetBoxes.on('click', function (e){

                      e.stopPropagation();

                    });
              });

            /*=====  End of Realizar las busquedas por cada columna  ======*/



}


/*=====  End of Deportistas  ======*/

/*=============================================
=            Organismos deportivos            =
=============================================*/


$(document).on("ready",function(){

  listarOrganismosDeportivos();

});


var listarOrganismosDeportivos=function(){

   var tableOrganismos =$("#tablaOrganismos").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
 
    /*==================================
    =            Exportador            =
    ==================================*/
    
     dom: 'Bfrtip',

     buttons: {

        dom:{
            container:{
              tag:'div',
              className:'flexcontent__administrador'
            },
            buttonLiner: {
              tag: null
            }
        },

        buttons: [

              {
                        extend:    'print',
                        text:      '<i class="fa fa-print"></i>Imprimir',
                        title:'Listado',
                        titleAttr: 'Imprimir',
                        className: 'export imprimir',
              },


              {
                        extend:    'excelHtml5',
                        text:      '<i class="fa fa-file-excel-o"></i>Excel',
                        title:'Listado',
                        titleAttr: 'Excel',
                        className: 'export excel',
              },

              {
                        extend:    'pdfHtml5',
                        text:      '<i class="fa fa-file-pdf-o"></i>PDF',
                        title:'Listado',
                        titleAttr: 'PDF',
                        className: 'export pdf',


                }

        ]



      },
  
  /*=====  End of Exportador  ======*/

      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
        "method":"POST",
        "url":"modelosBd/datatablets/reporOrganismos.php"  
      },
      "columns":[

            {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['tipoOrganismo']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['rucOrganismo']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['nombreOrganismo']+"</div>";
                    
                }

            },


           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['provincias']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['canton']+"</div>";
                    
                }

            },


           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['parroquia']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['telefono']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['direccion']+"</div>";
                    
                }

           },

  
           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['email']+"</div>";
                    
                }

           }                     


     ]

 });

}

/*=====  End of Organismos deportivos  ======*/

/*========================================
=            Proyectos tablas            =
========================================*/

$(document).on("ready",function(){

  listarProyectosTablas();

});


var listarProyectosTablas=function(){

   var tableProyectos =$("#tablaProyectos").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
 
    /*==================================
    =            Exportador            =
    ==================================*/
    
     dom: 'Bfrtip',

     buttons: {

        dom:{
            container:{
              tag:'div',
              className:'flexcontent__administrador'
            },
            buttonLiner: {
              tag: null
            }
        },

        buttons: [

              {
                        extend:    'print',
                        text:      '<i class="fa fa-print"></i>Imprimir',
                        title:'Listado',
                        titleAttr: 'Imprimir',
                        className: 'export imprimir',
              },


              {
                        extend:    'excelHtml5',
                        text:      '<i class="fa fa-file-excel-o"></i>Excel',
                        title:'Listado',
                        titleAttr: 'Excel',
                        className: 'export excel',
              },

              {
                        extend:    'pdfHtml5',
                        text:      '<i class="fa fa-file-pdf-o"></i>PDF',
                        title:'Listado',
                        titleAttr: 'PDF',
                        className: 'export pdf',


                }

        ]



      },
  
  /*=====  End of Exportador  ======*/

      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
        "method":"POST",
        "url":"modelosBd/datatablets/reporProyectos.php"  
      },
      "columns":[

            {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['tipo']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['nombreRealizado']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['nombre']+"</div>";
                    
                }

            },


           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['monto']+"</div>";
                    
                }

            },

           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['alcanse']+"</div>";
                    
                }

            },


           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['direccionPertenece']+"</div>";
                    
                }

            },
           {"render":

                function ( data, type, row ) {

                    return "<div style='font-size:10px'>"+row['fecha']+"</div>";
                    
                }

            }
            

     ]

 });

}

/*=====  End of Proyectos tablas  ======*/
