const API = "http://localhost:3000/api";

$(document).ready(function () {
  load().then((data) => {
    var arregloResponse = data.response;
    console.log(arregloResponse);
    chargeData(arregloResponse);

    $("a.ver").click(function () {
      loadModal(arregloResponse, $(this).data("ident"));
    });

    $("button.plan").click(function () {
      let id = $(this).data("id");
      let arregloEnviado = [];

      arregloResponse.forEach((element) => {
        if (element.id == id) {
          arregloEnviado.push(element);
        }
      });
      console.log(arregloEnviado);
      cargar(arregloEnviado);
    });
  });
});

async function deletePlan(id) {
  var url = API + `/agregarPlanificacion/${id}`;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");

  let requestOptionsDelete = {
    headers: myHeaders,
    method: "DELETE",
    redirect: "follow",
  };

  let confirmacion = confirm("Esta seguro de realizar esta acción?");

  if (confirmacion == true) {
    let deleteResponse = await fetch(url, requestOptionsDelete);
    let datosDelete = deleteResponse.json();
    console.log(datosDelete);
    location.reload();
  }
}

async function load() {
  var url = API + "/agregarPlanificacion";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");

  let requestOptionsFind = {
    headers: myHeaders,
    method: "GET",
    redirect: "follow",
  };
  let revisionResponse = await fetch(url, requestOptionsFind);
  let datosRevision = revisionResponse.json();
  console.log(datosRevision);
  return datosRevision;
}

function chargeData(responseLoad) {
  var cajaAgregado = $("#box");
  let guardadoId = 0;

  responseLoad.forEach((element) => {
    if (element.id != guardadoId) {
      cajaAgregado.append(
        `       
                <div class="col-sm-6">
                    <br>
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">${element.titulo_planificacion}</h5>
                        <p class="card-text">${element.descripcion_planificacion}</p>
                        <a href="#" class="btn btn-dark ver" data-toggle="modal" data-ident="${element.id}" data-target="#plan">Ver la planificación</a>
                        
                        <button class="btn btn-info plan" data-id="${element.id}")">Editar planificación</button>
                        <a href="#" class="btn btn-danger" onclick="deletePlan(${element.id})">Borrar Planificación</a>
                      </div>
                    </div>
                  </div>
                `
      );
    }
    guardadoId = element.id;
  });
}

function loadModal(responseLoad, id) {
  let obtenerModal = $("#modalInsert");
  let contadorUnico = 0;

  obtenerModal.html(
    `
        <div class="modal-content">
            <div class="modal-body">
            <br>
            <div class="titulo">
            </div>
            <br>
            <!--Tablas-->
            <table class="tabla">
              <tr>
                <!--Formulario de materia-->
                <th class="contenedor-materia">
                  <h3 style="font-weight: bold; font-size: 20px;">Materia</h3>
                </th>
                <!--Codigo de materia-->
                <th style="text-align: center;">
                  <h3 style="font-weight: bold; font-size: 20px;">Cód. materia</h3>
                </th>
                <!--Formulario de profesor-->
                <th>
                  <h3 style="font-weight: bold; font-size: 20px;">Profesor</h3>
                </th>
                <!--form de dia-->
                <th>
                  <h3 style="font-weight: bold; font-size: 20px;">Día</h3>
                </th>
                <!--form hora-->
                <th>
                  <h3 style="font-weight: bold; font-size: 20px;">Hora</h3>
                </th>
                <!--form aula-->
                <th>
                  <h3 style="font-weight: bold; font-size: 20px;">Aula</h3>
                </th>
              </tr>
            </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        `
  );
  console.log(responseLoad[1].titulo_planificacion);
  let titulo = $(".titulo");
  let footer = $(".modal-footer");

  responseLoad.forEach((element) => {
    if (element.id == id) {
      imprimirDatoMateria(element);
      if (contadorUnico == 0) {
        titulo.append(`<h4>${element.titulo_planificacion}</h4>`);
        footer.prepend(
          `<button class="btn btn-dark" onclick="generatePDF('${element.titulo_planificacion}')">Generar Archivo</button>`
        );
        contadorUnico++;
      }
    }
  });
}

function imprimirDatoMateria(dato) {
  const tablaRegistro = $(".tabla");
  tablaRegistro.append(
    `
      <tr>
      <td>${dato.materia}</td>
      <td>${dato.codigo}</td>
      <td>${dato.nombre_profesor}</td>
      <td>${dato.dia}</td>
      <td>${dato.hora}</td>
      <td>${dato.aula}</td>
      </td>
      `
  );
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function generatePDF(nombreArchivo) {
  let confirmacion = confirm(
    "Una vez generado el archivo la planificación no podrá ser editada"
  );
  if (confirmacion) {
    var doc = new jsPDF("l", "mm", [500, 210]);
    var elementHTML = $("#plan").html();
    var specialElementHandlers = {
      "#elementH": function (element, renderer) {
        return true;
      },
    };

    console.log(elementHTML);

    doc.fromHTML(elementHTML, 5, 5, {
      width: 500,
      elementHandlers: specialElementHandlers,
    });

    // Save the PDF
    doc.save(`${nombreArchivo}.pdf`);
  }
}

function cargar(data) {
  let confirmar = confirm(
    "Se redirigira a la pestaña de edición de planificación"
  );
  console.log(data);
  if (confirmar) {
    localStorage.clear();
    localStorage.setItem("objetoEditablePlanificacion", JSON.stringify(data));
    location.replace("./index.html");
  }
}
