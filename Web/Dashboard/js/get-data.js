const API = "http://localhost:3000/api";

//funciones para obtener datos

function obtenerDatos(formulario) {
  let formData = $(formulario).serializeArray();
  imprimirDatoMateria(formData);
  $(formulario)[0].reset();
  return formData;
}

function obtenerSoloDatos(formulario) {
  let formData = $(formulario).serializeArray();
  console.log(formData);
  $(formulario)[0].reset();
  return formData;
}

function obtenerDatosPCM(formulario) {
  let formData = $(formulario).serializeArray();
  return formData;
}

//funciones para imprimir datos

function imprimirDatoMateria(dato) {
  const tablaRegistro = $(".tabla");
  tablaRegistro.append(
    `
    <tr>
    <td>${dato[0].value}</td>
    <td>${dato[1].value}</td>
    <td>${dato[2].value}</td>
    <td>${dato[6].value}</td>
    <td>${dato[7].value}</td>
    <td>${dato[8].value}</td>
    </td>
    `
  );
}

function imprimirDatoMateria2(dato) {
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

//funcion de servidor

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

  let deleteResponse = await fetch(url, requestOptionsDelete);
  let datosDelete = deleteResponse.json();
  console.log(datosDelete);
}

async function enviarDatosServidor(arregloPlanificacion) {
  let url = API + `/agregarPlanificacion`;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");

  let registros = arregloPlanificacion[0];
  let definicionPlanificacion = arregloPlanificacion[1];
  let pcm = arregloPlanificacion[2];

  let registrosJSON = [];
  let idUnico;

  data == null
    ? (idUnico = Math.floor(Math.random() * 1000 + 1))
    : (idUnico = data[0].id);

  registros.forEach((registro) => {
    var reg = {
      materia: registro[0].value,
      codigo: registro[1].value,
      nProfesor: registro[2].value,
      aProfesor: registro[3].value,
      codProfesor: registro[4].value,
      contratoProfesor: registro[5].value,
      dia: registro[6].value,
      hora: registro[7].value,
      aula: registro[8].value,
      titulo: definicionPlanificacion[0].value,
      descripcion: definicionPlanificacion[1].value,
      id: idUnico,
      periodo: pcm[0][0].value,
      carrera: pcm[0][1].value,
      malla: pcm[0][2].value,
    };
    registrosJSON.push(reg);
  });

  console.log(registrosJSON);

  for (i = 0; i < registrosJSON.length; i++) {
    var requestOptionsInsert = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(registrosJSON[i]),
      redirect: "follow",
    };

    let insertarResponse = await fetch(url, requestOptionsInsert);
    let datosInsertar = insertarResponse.json();
    console.log(datosInsertar);
  }
}

//Funciones laterales

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//Main program

console.log("ready!");
var guardadoDatosTabla = [];
var guardadoDatosPlanificacion = [];
var guardadoDatosPCM = [];
var data = JSON.parse(localStorage.getItem("objetoEditablePlanificacion"));

if (data != null) {
  console.log(data);
  $(".guardar").removeAttr("data-toggle");
  $(".guardar").removeAttr("data-target");
  $(".guardar").attr("onclick", "guardar()");
  data.forEach((element) => {
    imprimirDatoMateria2(element);
    let elemento = [
      { name: "materias", value: element.materia },
      { name: "codigo", value: "029348" },
      { name: "nProfesor", value: element.nombre_profesor },
      { name: "aProfesor", value: element.apellido_profesor },
      { name: "codProfesor", value: element.codigo_profesor },
      { name: "contratoProfesor", value: element.contrato_profesor },
      { name: "dia", value: element.dia },
      { name: "hora", value: element.hora },
      { name: "aula", value: element.aula },
    ];
    guardadoDatosTabla.push(elemento);
  });
  localStorage.clear();
}

//Funciones de botones

$("#agregarRegistros").click(function () {
  let confirmacion = confirm(
    "¿Estas seguro de que deseas continuar?\n Luego de esta operacion no hay opción a cambios"
  );
  if (confirmacion) {
    guardadoDatosTabla.push(obtenerDatos("form.agregarMateria"));
    console.log(guardadoDatosTabla);
  }
});

$("#guardarPCM").click(function () {
  if (guardadoDatosPCM.length == 0) {
    guardadoDatosPCM.push(obtenerDatosPCM("form.pcm"));
    console.log(guardadoDatosPCM);
  }
});

$("#guardarPlanificacion").click(function () {
  let confirmacion = confirm(
    "¿Estas seguro de que deseas continuar?\n Luego de esta operacion no hay opción a cambios"
  );
  if (confirmacion) {
    guardadoDatosPlanificacion.push(guardadoDatosTabla);
    guardadoDatosPlanificacion.push(
      obtenerSoloDatos("form.obtenerPlanificacion")
    );
    guardadoDatosPlanificacion.push(guardadoDatosPCM);
    console.log(guardadoDatosPlanificacion);

    if (data != null) {
      deletePlan(data[0].id);
    }
    enviarDatosServidor(guardadoDatosPlanificacion).then(() => {
      location.replace("./gestionar.html");
    });
  }
});

function guardar() {
  let confirmacion = confirm(
    "¿Estas seguro de que deseas continuar?\n Luego de esta operacion no hay opción a cambios"
  );
  if (confirmacion) {
    guardadoDatosPlanificacion.push(guardadoDatosTabla);

    let datosPlanificacion = [
      { name: "tituloPlanificacion", value: data[0].titulo_planificacion },
      {
        name: "comentarioPlanificacion",
        value: data[0].descripcion_planificacion,
      },
    ];

    guardadoDatosPlanificacion.push(datosPlanificacion);
    guardadoDatosPlanificacion.push(guardadoDatosPCM);
    console.log(guardadoDatosPlanificacion);

    deletePlan(data[0].id);
    enviarDatosServidor(guardadoDatosPlanificacion).then(() => {
      location.replace("./gestionar.html");
    });
  }
}
