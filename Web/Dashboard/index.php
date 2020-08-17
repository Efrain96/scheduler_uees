<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://uees.edu.ec/img/cropped-Icono-web-32x32.png" sizes="32x32" />
  <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src='https://kit.fontawesome.com/a076d05399.js'></script>
  <link rel="stylesheet" href="./css/estilos.css">
  <link rel="stylesheet" href="./css/StyleFinal.css">
  <title>Planificación</title>
</head>

<body>
  <!--Menú despliegable-->
  <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
    <a href="" class="logo"><img src="./img/logouees.png" alt="Logos UEES" width="110px"
        style="padding-right: 25px"></a>
    <a href="./index.html" class="left-button-option">
      <h3>Crear
        planificación <i class='far fa-address-card' style='font-size:24px'></i></h3>
    </a>
    <a href="./gestionar.html" class="left-button-option">
      <h3>Gestionar
        planificación <i class='far fa-address-card' style='font-size:24px'></i></h3>
    </a>
    <a href="../Login/index.html" class="left-button-option left-button-option-close">
      <h3>Cerrar
        sesión <i class='fas fa-power-off' style='font-size: 24px'></i></h3>
    </a>
  </div>

  <!--Administrador-->
  <div id="main">
    <button class="openbtn" onclick="openNav()">☰</button>
    <br>
    <div class="container-fluid">
      <div class="row">

        <div class="col-md-2">
          <!--Tabla de registro-->
          <div class="tabla-principal">
            <h4>Seleccione su periodo, carrera y malla para realizar la planificación</h4>
            <hr>
            <form class="pcm">
              <div class="form-group">
                <label for="periodo">Periodo</label>
                <select class="form-control" id="periodo" name="periodo">
                  <option selected>Ordinario 1</option>
                  <option>Ordinario 2</option>
                  <option>Extraordinario</option>
                </select>
              </div>
              <div class="form-group">
                <label for="carrera">Carrera</label>
                <select class="form-control" id="carrera" name="carrera">
                  <option selected>Computación</option>
                  <option>Telecomunicaciónes</option>
                </select>
              </div>
              <div class="form-group">
                <label for="malla">Malla</label>
                <select class="form-control" id="malla" name="malla">
                  <option selected>2014</option>
                  <option>2019</option>
                </select>
              </div>
              <br>
              <button type="button" id="guardarPCM" class="btn btn-outline-light btn-lg btn-block">Guardar</button>
            </form>
            <hr>
          </div>

        </div>
        <div class="col-md-10">

          <br>
          <div class="container-fluid">
            <div class="row" align="center">
              <div class="col-md-8">
                <h2>Gestor de planificaciónes para la Facultad de Ingenierias UEES</h2>
              </div>
              <div class="col-md-4">
                <button type="button" class="btn btn-lg btn-dark" data-toggle="modal" data-target="#registro">
                  Ingrese su Registro
                </button>
                <button type="button" class="btn btn-lg btn-dark guardar" data-toggle="modal" data-target="#guardar">
                  Guardar Planificación
                </button>
              </div>
            </div>
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
      </div>
    </div>


  </div>

  <div class="modal fade" id="registro">
    <div class="modal-dialog">
      <div class="modal-content" align="center">
        <div class="modal-body">
          <img src="img/logoueesrojo.png" alt="logo uees" width="100px" height="70px">
          <h1 style="text-align: center; font-size: 24px; font-weight: bold;">Registro de Materias</h1>
          <hr>
          <div align="center">
            <form autocomplete="off" class="agregarMateria">
              <div class="form-group">
                <h4>Busque su materia</h4>
                <br>
                <div class="form-row">
                  <div class="col">
                    <div class="autocomplete">
                      <input id="materias" type="text" name="materias" placeholder="Materia">
                    </div>
                  </div>
                  <div class="col">
                    <input id="codigo" type="text" name="codigo" placeholder="Código de la materia" value="029348"
                      readonly>
                  </div>
                </div>

              </div>
              <br>
              <div class="form-group">
                <h5>Ingrese los siguientes datos de su profesor</h5>
                <br>
                <div class="form-row">
                  <div class="col">
                    <input type="text" name="nProfesor" class="form-control" placeholder="Nombre del Profesor">
                  </div>
                  <div class="col">
                    <input type="text" name="aProfesor" class="form-control" placeholder="Apellido del Profesor">
                  </div>
                </div>
                <br>
                <div class="form-row">
                  <div class="col">
                    <input type="text" name="codProfesor" class="form-control" placeholder="Cód. Profesor">
                  </div>
                  <br>
                  <div class="col">
                    <input type="text" name="contratoProfesor" class="form-control" placeholder="Tipo de contrato">
                  </div>
                </div>
              </div>
              <br>
              <div class="form-group">
                <h5>Ingrese los datos de la clase</h5>
                <br>
                <div class="row">
                  <div class="col">
                    <select class="form-control" id="dia" name="dia">
                      <option value="">Selecione el dia</option>
                      <option value="Lunes">Lunes - Miercoles</option>
                      <option value="Martes">Martes - Jueves</option>
                      <option value="Miercoles">Viernes</option>
                    </select>
                  </div>
                  <div class="col">
                    <input type="text" name="hora" class="form-control" placeholder="Ingrese la Hora">
                  </div>
                  <div class="col">
                    <input type="text" name="aula" class="form-control" placeholder="Ingrese el Aula">
                  </div>
                </div>
              </div>
            </form>
            <br>
            <div class="modal-footer">
              <button type="button" class="btn btn-lg btn-danger" data-dismiss="modal">Cerrar</button>
              <button id="agregarRegistros" type="button" class="btn btn-lg btn-info" data-dismiss="modal">Agregar
                Registro</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal de guardado -->
  <div class="modal fade" id="guardar" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ingresa los siguientes datos para guardar la planificación</h5>
        </div>
        <div class="modal-body">
          <form class="obtenerPlanificacion">
            <h5>Titulo de planificación:</h5>
            <input type="text" name="tituloPlanificacion" placeholder="Título descriptivo">
            <br>
            <br>
            <h5>Descripción:</h5>
            <textarea class="form-control" name="comentarioPlanificacion" rows="10"
              cols="40">Escriba aqui su descripción...</textarea>
            <br>
            <br>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-lg btn-danger" data-dismiss="modal">Cerrar</button>
          <button id="guardarPlanificacion" type="button" class="btn btn-lg btn-info">Guardar</button>
        </div>
      </div>
    </div>
  </div>

  <script src="./js/jquery-3.5.1.min.js"></script>
  <script src="./js/popper.min.js"></script>
  <script src="./js/js-busqueda.js"></script>
  <script src="./bootstrap/js/bootstrap.min.js"></script>
  <script src="./js/get-data.js"></script>

</body>

</html>