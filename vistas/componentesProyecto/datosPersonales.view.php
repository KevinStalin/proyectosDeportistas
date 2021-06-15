<?php

$objeto = new usuario();


$usuario = $objeto->usuarioCtr();
$rucReconocidos = $objeto->ctrOrganismoRuc();

$arrayUsuario = explode("___", $usuario);

$datosGenerales = $objeto->ctrDatosGenerales();
$arrayDatosGenerales = explode("___", $datosGenerales);

?>


<!--======================================
=            Datos Personales            =
=======================================-->

<form id="datosGeneralesFormularios" class="panel-body">

    <!--=====================================================
    =            Contenido Principal formularios            =
    ======================================================-->

    <input type="hidden" id="codigoTipoElegido" name="codigoTipoElegido" value="<?= $arrayUsuario[0]; ?>" />

    <?php if ($arrayUsuario[0] == 2) : ?>

        <div class="row">

            <div class="col-sm-12 col-xs-12">

                <div class="rotulo__referencias">Datos de la entidad solicitante: organismo deportivo o entidad solicitante</div>

            </div>

        </div>

        <div class="row">

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Nombre</div>

            </div>

            <div class="col-xs-6 col-sm-4">

                <div><?= $arrayUsuario[4]; ?></div>

                <input type="hidden" name="organismo" id="organismo" value="<?= $arrayUsuario[4] ?>">

            </div>

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Ruc</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <div><?= $arrayUsuario[3]; ?></div>

                <input type="hidden" name="rucOrganismo" id="rucOrganismo" value="<?= $arrayUsuario[3] ?>">

            </div>

        </div>

        <div class="row">

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Provincia</div>

            </div>

            <div class="col-xs-6 col-sm-2 text-left">

                <div><?= $arrayUsuario[5]; ?></div>

                <input type="hidden" name="provinciaOrganismo" id="provinciaOrganismo" value="<?= $arrayUsuario[5] ?>">

            </div>

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Cantón</div>

            </div>

            <div class="col-xs-6 col-sm-2 text-left">

                <div><?= $arrayUsuario[6]; ?></div>

                <input type="hidden" name="cantonOrganismo" id="cantonOrganismo" value="<?= $arrayUsuario[6] ?>">

            </div>


            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Parroquia</div>

            </div>

            <div class="col-xs-6 col-sm-2 text-left">

                <div><?= $arrayUsuario[7]; ?></div>

                <input type="hidden" name="parroquiaOrganismo" id="parroquiaOrganismo" value="<?= $arrayUsuario[7] ?>">

            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2">

                <div class="rotulo__referencias">Calle Principal</div>

            </div>

            <div class="col-xs-12 col-sm-10">

                <div>

                    <?php if (empty($arrayDatosGenerales[2])) : ?>

                        <textarea id="callePrincipal" name="callePrincipal" class="text__areas obligatorios__datosGenerales"><?= $arrayUsuario[9]; ?></textarea>

                    <?php else : ?>

                        <textarea id="callePrincipal" name="callePrincipal" class="text__areas obligatorios__datosGenerales"><?= $arrayDatosGenerales[2]; ?></textarea>

                    <?php endif ?>


                </div>

            </div>

        </div>

        <div class="row">

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Numeración</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <div>

                    <?php if (empty($arrayDatosGenerales[4])) : ?>

                        <input id="numeracion" name="numeracion" class="numeracion text__areas solo__numero obligatorios__datosGenerales" />

                    <?php else : ?>

                        <input id="numeracion" name="numeracion" class="numeracion text__areas solo__numero obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[4]; ?>" />

                    <?php endif ?>


                </div>

            </div>

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Calle Secundaria</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <div>

                    <?php if (empty($arrayDatosGenerales[3])) : ?>

                        <input id="calleSecundaria" name="calleSecundaria" class="text__areas obligatorios__datosGenerales" />

                    <?php else : ?>

                        <input id="calleSecundaria" name="calleSecundaria" class="text__areas obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[3]; ?>" />

                    <?php endif ?>


                </div>

            </div>

            <div class="col-xs-12 col-sm-2">

                <div class="rotulo__referencias">Referencia</div>

            </div>

            <div class="col-xs-12 col-sm-10">

                <div>

                    <?php if (empty($arrayDatosGenerales[5])) : ?>

                        <textarea id="referencia" name="referencia" class="text__areas obligatorios__datosGenerales"></textarea>

                    <?php else : ?>

                        <textarea id="referencia" name="referencia" class="text__areas obligatorios__datosGenerales"><?= $arrayDatosGenerales[5]; ?></textarea>

                    <?php endif ?>

                </div>

            </div>

        </div>

    <?php endif ?>

    <!--====  End of Contenido Principal formularios  ====-->

    <div class="row">

        <div class="col-sm-12 col-xs-12">

            <div class="rotulo__referencias"> Datos de la persona natural: representante legal del organismo deportivo, representante legal de la entidad solicitante, deportista, o persona natural solicitantee</div>

        </div>

    </div>

    <?php if ($arrayUsuario[0] == 2) : ?>

        <div class="row">

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Nombres y apellidos:</div>

            </div>

            <div class="col-xs-6 col-sm-4">

                <div><?= $arrayUsuario[13]; ?></div>

                <input type="hidden" name="nombreRepresentante" id="nombreRepresentante" value="<?= $arrayUsuario[13] ?>">

            </div>

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Cédula:</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <div><?= $arrayUsuario[12]; ?></div>

                <input type="hidden" name="cedulaRepresentante" id="cedulaRepresentante" value="<?= $arrayUsuario[12] ?>">

            </div>

        </div>

        <div class="row">

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Provincia</div>

            </div>

            <div class="col-xs-6 col-sm-2 text-left">

                <div>

                    <?php if (empty($arrayDatosGenerales[6])) : ?>

                        <select class="form-styling text__errores obligatorio__organismo provincia obligatorios__datosGenerales" id="provinciaActa" name="provinciaActa"></select>

                    <?php else : ?>

                        <div><?= $arrayDatosGenerales[16]; ?></div>

                        <input type="hidden" class="form-styling text__errores obligatorio__organismo provincia obligatorios__datosGenerales" id="provinciaActa" name="provinciaActa" value="<?= $arrayDatosGenerales[6]; ?>" />

                    <?php endif ?>

                </div>

            </div>

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Cantón</div>

            </div>

            <div class="col-xs-6 col-sm-2 text-left">

                <div>

                    <?php if (empty($arrayDatosGenerales[7])) : ?>

                        <select class="form-styling text__errores obligatorio__organismo canton obligatorios__datosGenerales" id="cantonActa" name="cantonActa"></select>

                    <?php else : ?>

                        <div><?= $arrayDatosGenerales[17]; ?></div>

                        <input type="hidden" class="form-styling text__errores obligatorio__organismo canton obligatorios__datosGenerales" id="cantonActa" name="cantonActa" value="<?= $arrayDatosGenerales[7]; ?>" />

                    <?php endif ?>


                </div>

            </div>


            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Parroquia</div>

            </div>

            <div class="col-xs-6 col-sm-2 text-left">

                <div>

                    <?php if (empty($arrayDatosGenerales[8])) : ?>

                        <select class="form-styling text__errores obligatorio__organismo parroquia obligatorios__datosGenerales" id="parroquiaActa" name="parroquiaActa"></select>

                    <?php else : ?>

                        <div><?= $arrayDatosGenerales[18]; ?></div>

                        <input type="hidden" class="form-styling text__errores obligatorio__organismo canton obligatorios__datosGenerales" id="parroquiaActa" name="parroquiaActa" value="<?= $arrayDatosGenerales[8]; ?>" />

                    <?php endif ?>

                </div>

            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2">

                <div class="rotulo__referencias">Calle Principal</div>

            </div>

            <div class="col-xs-12 col-sm-10">

                <div>

                    <?php if (empty($arrayDatosGenerales[9])) : ?>

                        <textarea id="callePrincipalReprese" name="callePrincipalReprese" class="text__areas obligatorios__datosGenerales"><?= $arrayUsuario[9]; ?></textarea>

                    <?php else : ?>

                        <textarea id="callePrincipalReprese" name="callePrincipalReprese" class="text__areas obligatorios__datosGenerales"><?= $arrayDatosGenerales[9]; ?></textarea>

                    <?php endif ?>

                </div>

            </div>

        </div>

        <div class="row">

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Numeración</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <div>

                    <?php if (empty($arrayDatosGenerales[10])) : ?>

                        <input id="numeracionReprese" name="numeracionReprese" class="numeracion text__areas solo__numero obligatorios__datosGenerales" />


                    <?php else : ?>

                        <input id="numeracionReprese" name="numeracionReprese" class="numeracion text__areas solo__numero obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[10]; ?>" />

                    <?php endif ?>

                </div>

            </div>


            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Calle Secundaria</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <div>


                    <?php if (empty($arrayDatosGenerales[11])) : ?>

                        <input id="calleSecundariaRepre" name="calleSecundariaRepre" class="text__areas obligatorios__datosGenerales" />


                    <?php else : ?>

                        <input id="calleSecundariaRepre" name="calleSecundariaRepre" class="text__areas obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[11]; ?>" />

                    <?php endif ?>


                </div>

            </div>


            <div class="col-xs-12 col-sm-2">

                <div class="rotulo__referencias">Referencia</div>

            </div>

            <div class="col-xs-12 col-sm-10">

                <div>


                    <?php if (empty($arrayDatosGenerales[12])) : ?>

                        <textarea id="referenciaRepre" name="referenciaRepre" class="text__areas obligatorios__datosGenerales"></textarea>

                    <?php else : ?>

                        <textarea id="referenciaRepre" name="referenciaRepre" class="text__areas obligatorios__datosGenerales"><?= $arrayDatosGenerales[12]; ?></textarea>

                    <?php endif ?>


                </div>

            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2">

                <div class="rotulo__referencias">Correo:</div>

            </div>

            <div class="col-xs-12 col-sm-10">

                <?php if (empty($arrayDatosGenerales[13])) : ?>

                    <div><input type="text" name="correoRepre" id="correoRepre" class="text__areas correoRepre obligatorios__datosGenerales" value="<?= $arrayUsuario[10]; ?>" /></div>

                <?php else : ?>

                    <div><input type="text" name="correoRepre" id="correoRepre" class="text__areas correoRepre obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[13]; ?>" /></div>

                <?php endif ?>

            </div>

            <div class="correoRepreValida col-xs-12 col-sm-12"></div>

        </div>

        <div class="row">

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Convencional:</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <?php if (empty($arrayDatosGenerales[14])) : ?>

                    <div><input type="text" name="telConvencionalRepre" id="telConvencionalRepre" class="text__areas solo__numero telefono__convencional telefonos__usados obligatorios__datosGenerales" /></div>

                <?php else : ?>

                    <div><input type="text" name="telConvencionalRepre" id="telConvencionalRepre" class="text__areas solo__numero telefono__convencional telefonos__usados obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[14]; ?>" /></div>

                <?php endif ?>

            </div>

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Celular:</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <?php if (empty($arrayDatosGenerales[15])) : ?>

                    <div>
                        <div><input type="text" name="telCelularRepre" id="telCelularRepre" class="text__areas solo__numero telefono__celular telefonos__usados obligatorios__datosGenerales" value="<?= $arrayUsuario[8]; ?>" /></div>
                    </div>

                <?php else : ?>

                    <div>
                        <div><input type="text" name="telCelularRepre" id="telCelularRepre" class="text__areas solo__numero telefono__celular telefonos__usados obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[15]; ?>" /></div>
                    </div>

                <?php endif ?>


            </div>

        </div>

    <?php else : ?>


        <div class="row">

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Nombres y apellidos:</div>

            </div>

            <div class="col-xs-6 col-sm-4">

                <div><?= $arrayUsuario[4]; ?></div>

                <input type="hidden" name="nombreCiudadano" id="nombreCiudadano" value="<?= $arrayUsuario[4] ?>">

            </div>

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Cédula:</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <div><?= $arrayUsuario[3]; ?></div>

                <input type="hidden" name="cedulaCiudadano" id="cedulaCiudadano" value="<?= $arrayUsuario[3] ?>">

            </div>

        </div>

        <div class="row">

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Provincia</div>

            </div>

            <div class="col-xs-6 col-sm-2 text-left">

                <div>
                    <?= $arrayUsuario[7] ?>
                    <input type="hidden" name="provinciaCiudadano" id="provinciaCiudadano" value="<?= $arrayUsuario[7] ?>">
                </div>

            </div>

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Cantón</div>

            </div>

            <div class="col-xs-6 col-sm-2 text-left">

                <div>
                    <?= $arrayUsuario[8] ?>
                    <input type="hidden" name="cantonCiudadano" id="cantonCiudadano" value="<?= $arrayUsuario[8] ?>">
                </div>

            </div>


            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Parroquia</div>

            </div>

            <div class="col-xs-6 col-sm-2 text-left">

                <div>
                    <?= $arrayUsuario[9] ?>
                    <input type="hidden" name="parroquiaCiudadano" id="parroquiaCiudadano" value="<?= $arrayUsuario[8] ?>">
                </div>

            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2">

                <div class="rotulo__referencias">Calle Principal</div>

            </div>

            <div class="col-xs-12 col-sm-10">

                <div>

                    <?php if (empty($arrayDatosGenerales[0])) : ?>

                        <textarea id="callePrincipalCiudadano" name="callePrincipalCiudadano" class="text__areas obligatorios__datosGenerales"><?= $arrayUsuario[9]; ?></textarea>

                    <?php else : ?>

                        <textarea id="callePrincipalCiudadano" name="callePrincipalCiudadano" class="text__areas obligatorios__datosGenerales"><?= $arrayDatosGenerales[0]; ?></textarea>

                    <?php endif ?>

                </div>

            </div>

        </div>

        <div class="row">

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Numeración</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <div>

                    <?php if (empty($arrayDatosGenerales[1])) : ?>

                        <input id="numeracionCiudadao" name="numeracionCiudadao" class="numeracion text__areas solo__numero obligatorios__datosGenerales" />

                    <?php else : ?>

                        <input id="numeracionCiudadao" name="numeracionCiudadao" class="numeracion text__areas solo__numero obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[1]; ?>" />

                    <?php endif ?>


                </div>

            </div>


            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Calle Secundaria</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <div>

                    <?php if (empty($arrayDatosGenerales[2])) : ?>

                        <input id="calleSecundariaCiudadano" name="calleSecundariaCiudadano" class="text__areas obligatorios__datosGenerales" />

                    <?php else : ?>

                        <input id="calleSecundariaCiudadano" name="calleSecundariaCiudadano" class="text__areas obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[2] ?>" />

                    <?php endif ?>

                </div>

            </div>


            <div class="col-xs-12 col-sm-2">

                <div class="rotulo__referencias">Referencia</div>

            </div>

            <div class="col-xs-12 col-sm-10">

                <div>

                    <?php if (empty($arrayDatosGenerales[3])) : ?>

                        <textarea id="referenciaCiudadano" name="referenciaCiudadano" class="text__areas obligatorios__datosGenerales"></textarea>

                    <?php else : ?>

                        <textarea id="referenciaCiudadano" name="referenciaCiudadano" class="text__areas obligatorios__datosGenerales"><?= $arrayDatosGenerales[3] ?></textarea>

                    <?php endif ?>

                </div>

            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2">

                <div class="rotulo__referencias">Correo:</div>

            </div>

            <div class="col-xs-12 col-sm-10">

                <?php if (empty($arrayDatosGenerales[4])) : ?>

                    <div><input type="text" name="correoCiudadano" id="correoCiudadano" class="text__areas correo__ciudadano obligatorios__datosGenerales" value="<?= $arrayUsuario[12]; ?>" /></div>

                <?php else : ?>

                    <div><input type="text" name="correoCiudadano" id="correoCiudadano" class="text__areas correo__ciudadano obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[4]; ?>" /></div>

                <?php endif ?>

            </div>

            <div class="correoCiudadanoValida col-xs-12 col-sm-12"></div>

        </div>

        <div class="row">

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Convencional:</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <?php if (empty($arrayDatosGenerales[5])) : ?>

                    <div><input type="text" name="telCiudadano" id="telCiudadano" class="text__areas solo__numero telefono__convencional telefonos__usados obligatorios__datosGenerales" /></div>

                <?php else : ?>

                    <div><input type="text" name="telCiudadano" id="telCiudadano" class="text__areas solo__numero telefono__convencional telefonos__usados obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[5]; ?>" /></div>

                <?php endif ?>


            </div>

            <div class="col-xs-6 col-sm-2">

                <div class="rotulo__referencias">Celular:</div>

            </div>

            <div class="col-xs-6 col-sm-4 text-left">

                <div>

                    <?php if (empty($arrayDatosGenerales[6])) : ?>

                        <input type="text" name="telCelularCiudadano" id="telCelularCiudadano" class="text__areas solo__numero telefono__celular telefonos__usados obligatorios__datosGenerales" value="<?= $arrayUsuario[10]; ?>" />

                    <?php else : ?>

                        <input type="text" name="telCelularCiudadano" id="telCelularCiudadano" class="text__areas solo__numero telefono__celular telefonos__usados obligatorios__datosGenerales" value="<?= $arrayDatosGenerales[6]; ?>" />

                    <?php endif ?>

                </div>

            </div>

        </div>

    <?php endif ?>

    <br>

    <div class="row">

        <div class="col-xs-12 col-sm-12 text-right">

            <button type="button" id="enviarDatosGenerales" name="enviarDatosGenerales" class="btn btn-primary"><i class="far fa-save"></i>&nbsp;ENVIAR</button>

            <div class="enviarDatosGenerales__reload"></div>

        </div>

    </div>

</form>

<!--====  End of Datos Personales  ====-->