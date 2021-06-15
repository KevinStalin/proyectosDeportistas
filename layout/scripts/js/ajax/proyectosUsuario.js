$(document).on("ready", () => {
    console.log("Valor-->", $("#ID_usuario").val());
    listaTramiteRealizado();
});

let listaTramiteRealizado = () => {
    console.log("Valor2->", $("#ID_usuario").val());
    $.ajax({
        type: "POST",
        url: "modelosBd/datatablets/reporProyectosUsuarios2.php",
        data: { "idUsuario": $("#ID_usuario").val(), "nombrePasante": "Kevin" },
        processData: false,
        cache: false,
        success: (response) => {
            console.log("RESPUESTA");
            console.log(response);
            var elementos = JSON.parse(response);
            console.log(elementos);

            let muestra = elementos.data.map((data) => {
                let tabla = '';
                tabla += '<tr><td>' + data['tipoDeportistas'] + '</td></tr>';
                tabla += '<tr><td>' + data['nombreOrganismo'] + '</td></tr>';
                tabla += '<tr><td>' + data['nombreDeportistas'] + '</td></tr>';
                return tabla;
            });
            document.getElementById("resultados_tramite").innerHTML = muestra;


        }
    });
}