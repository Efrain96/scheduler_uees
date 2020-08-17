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
    <div class="container">
      <dicv class="row">
        <div class="col-md-12">
          <h2>Gestion de Planificaciónes</h2>
        </div>
      </dicv>
    </div>
    <br>

    <div class="container">
      <div class="row" id="box">
      </div>
    </div>
  </div>

  <!-- Modal View -->
  <div class="modal fade" id="plan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document" id="modalInsert">
    </div>
  </div>
  <div id="elementH"></div>


  <script src="./js/jquery-3.5.1.min.js"></script>
  <script src="./js/popper.min.js"></script>
  <script src="./bootstrap/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
  <script src="./js/load-plan.js"></script>



</body>

</html>