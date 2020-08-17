<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Inicio de sesión - UEES</title>
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
  <link rel="icon" href="https://uees.edu.ec/img/cropped-Icono-web-32x32.png" sizes="32x32" />
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/login.css">
</head>

<body>
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="./assets/images/back.jpg" alt="login" class="login-card-img">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper">
                <img src="./assets/images/logo-uees.png" alt="logo" class="logo">
              </div>
              <p class="login-card-description">Inicia sesión en tu cuenta</p>
              <form method="GET" id="login">
                <div class="form-group">
                  <label for="usuario" class="sr-only">Usuario</label>
                  <input type="text" id="usuario" class="form-control" placeholder="Ingrese su nombre de usuario"
                    name="usuario">
                </div>
                <div class="form-group mb-4">
                  <label for="clave" class="sr-only">Contraseña</label>
                  <input type="password" id="pass" class="form-control" placeholder="Ingrese su contraseña"
                    name="clave">
                </div>
                <div id="alertas" style="display: none"></div>
                <input name="login" id="iniciar" class="btn btn-block login-btn mb-4" type="button"
                  value="Iniciar Sesion" onclick="validateData();">
              </form>

              <a href="#!" onclick="contacto()" class="forgot-password-link">Olvidaste tu contraseña?</a>

              <div id="alertas"></div>

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <script src="./assets/js/jquery-3.5.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <script src="./assets/js/index.js"></script>

</body>

</html>