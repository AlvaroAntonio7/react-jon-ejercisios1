<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "pruebareact";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Manejar solicitudes GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // Consulta a la base de datos
  $sql = "SELECT * FROM perfiles";
  $result = $conn->query($sql);

  // Crear una lista de objetos
  $perfiles = array();
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $perfil = array(
        "id" => $row["id"],
        "nombre" => $row["nombre"],
        "cargo" => $row["cargo"],
        "descripcion" => $row["descripcion"]
      );
      array_push($perfiles, $perfil);
    }
  }

  // Devolver la lista de objetos en una respuesta tipo JSON
  header('Content-Type: application/json');
  echo json_encode($perfiles);
}

// Manejar solicitudes POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtener los datos del cuerpo de la solicitud
  $data = json_decode(file_get_contents('php://input'), true);

  // Insertar los datos en la base de datos
  $sql = "INSERT INTO perfiles (nombre, cargo, descripcion) VALUES ('" . $data["nombre"] . "', '" . $data["cargo"] . "', '" . $data["descripcion"] . "')";
  if ($conn->query($sql) === TRUE) {
    // Obtener el ID del nuevo registro
    $id = $conn->insert_id;

    // Crear un objeto con los campos id, nombre, cargo y descripcion
    $perfil = array(
      "id" => $id,
      "nombre" => $data["nombre"],
      "cargo" => $data["cargo"],
      "descripcion" => $data["descripcion"]
    );

    // Devolver el objeto en una respuesta tipo JSON
    header('Content-Type: application/json');
    echo json_encode($perfil);
  } else {
    // Devolver un mensaje de error en una respuesta tipo JSON
    header('Content-Type: application/json');
    echo json_encode(array("message" => "Error: " . $sql . "<br>" . $conn->error));
  }
}

// Cerrar la conexión
$conn->close();



/*

CREATE TABLE perfiles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre TEXT,
  cargo TEXT,
  descripcion TEXT
);

INSERT INTO perfiles (nombre, cargo, descripcion) VALUES
  ('Juan Perez', 'Gerente de Ventas', 'Encargado de liderar el equipo de ventas'),
  ('Maria Rodriguez', 'Analista de Marketing', 'Encargada de analizar las tendencias del mercado'),
  ('Pedro Gomez', 'Desarrollador de Software', 'Encargado de desarrollar nuevas aplicaciones');

*/
?>


