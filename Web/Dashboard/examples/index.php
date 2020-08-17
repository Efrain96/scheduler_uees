<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>SCHEDULER</title> </head>
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="table.css">
   
  <body>
      
    <div id="sidebar">
      <div class="toggle-btn">
        <span>&#9776</span>
      </div>
      <ul>
        <li>
          <img src="img/logo.png" alt="Logo Fazt" class="logo">
        </li>
        <li>CREAR PLANIFICACION</li>
        <li>GESTIONAR PLANIFICACION</li>
        <li>GESTIONAR ARCHIVOS</li>
        <li>GENERAR ARCHIVOS</li>
        <li>CERRAR SESION</li>
      </ul>
    </div>
<div id="main-container">
    <table>
      <caption>PLANIFICACION</caption>
      <thead>
      <tr>
        <th><a href="javascript:mostrar()">Materia</a></th>
        <th>Cod. Materia</th>
        <th><a href="javascript:mostrarprofesor()">Profesor</a></th>
        <th><button id="btnclick">Aula</button></th>
        <th>Día</th>
        <th>Hora</th>
        <th>Paralelo</th>
      </thead>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </table>
    </div>

  <!--  <div class="ventana" id="materias">-->
      <section class="form-agregar" id="materias">
        <h4>Agregar Materias</h4>
        <input class="controls" type="text" name="nombres" id="materias" placeholder="Ingrese Materia">
        <input class="botons" type="submit" value="Guardar">
        <input class="botons" type="submit" value="Agregar">
        </section>


        <section class="form-agregar" id="profesor">
          <h4>Nombre Profesor</h4>
          <input class="controls" type="text" name="nombres" id="materias" placeholder="Disponibilidad Profesor">
          <input class="botons" type="submit" value="Guardar">
          <input class="botons" type="submit" value="Agregar">
          </section>
   <!-- </div>-->
 
    <script src="main.js"></script>
    <script>
      function mostrar(){
        document.getElementById("materias").style.display="block";
               
      }
     function mostrarprofesor(){
       document.getElementById("profesor").style.display="block"
     }
    </script>
  </body>
</html>