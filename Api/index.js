const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const mysql = require("mysql");

//npm init -y primero
//npm install --save express mysql body-parser cors es segundo

var corsOptions = {
  origin: "http//127.0.0.1:5500",
  optionsSuccessStatus: 200,
};
app.use(cors());

// parsea la application/json
app.use(bodyParser.json());

//crea la conexion a la base de datos
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "scheduler",
});

//se conecta a la base de datos
conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Conectado...");
});

//funcionalidades de la api

//mostrar todos los usuarios
app.get("/api/usuarios", (req, res) => {
  let sql = "SELECT * FROM usuarios";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

/*
//mostrar un usuario por id
app.get("/api/usuarios/:id", (req, res) => {
  let sql = "SELECT * FROM usuarios WHERE id=" + req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

*/

//mostrar un usuario por usuario
app.get("/api/usuarios/:usuario", (req, res) => {
  let sql = "SELECT * FROM usuarios WHERE usuario='" + req.params.usuario + "'";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//agregar un usuario
app.post("/api/usuarios", (req, res) => {
  let data = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    correo: req.body.correo,
    usuario: req.body.usuario,
    pass: req.body.pass,
  };
  let sql = "INSERT INTO usuarios SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//agregar una planificacion
app.post("/api/agregarPlanificacion", (req, res) => {
  let data = {
    materia: req.body.materia,
    codigo: req.body.codigo,
    nombre_profesor: req.body.nProfesor,
    apellido_profesor: req.body.aProfesor,
    codigo_profesor: req.body.codProfesor,
    contrato_profesor: req.body.contratoProfesor,
    dia: req.body.dia,
    hora: req.body.hora,
    aula: req.body.aula,
    titulo_planificacion: req.body.titulo,
    descripcion_planificacion: req.body.descripcion,
    id: req.body.id,
    periodo: req.body.periodo,
    carrera: req.body.carrera,
    malla: req.body.malla,
  };
  let sql = "INSERT INTO planificaciones SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//borrar planificacion por id
app.delete("/api/agregarPlanificacion/:id", (req, res) => {
  let sql = "DELETE FROM planificaciones WHERE id='" + req.params.id + "'";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//mostrar planificaciones por id
app.get("/api/agregarPlanificacion/:id", (req, res) => {
  let sql = "SELECT * FROM planificaciones WHERE id='" + req.params.id + "'";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//mostrar planificaciones totales
app.get("/api/agregarPlanificacion", (req, res) => {
  let sql = "SELECT * FROM planificaciones";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//actualizar usuario
app.put("/api/usuarios/:id", (req, res) => {
  let sql =
    "UPDATE usuarios SET nombre='" +
    req.body.nombre +
    "', apellido='" +
    req.body.apellido +
    "'correo='" +
    req.body.correo +
    "'usuario='" +
    req.body.usuario +
    "'pass='" +
    req.body.pass +
    "' WHERE id=" +
    req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//borrar usuario
app.delete("/api/usuario/:id", (req, res) => {
  let sql = "DELETE FROM usuarios WHERE id='" + req.params.id + "'";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});


//Puerto del servidor
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000...");
});
