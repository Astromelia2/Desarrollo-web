<?php

    include 'connect.php';

    // Captura de variables
    $documento = $_POST["documento"];
    $nombreapellido = $_POST["nombreUsuario"];
    $genero = $_POST["Genero"];
    $ciudad = $_POST["Ciudad"];
    $edad = $_POST["edadUsuario"];
    $email = $_POST["emailUsuario"];
    $comentario = $_POST["comentario"];
    $login = $_POST["nombreUsuario2"];
    $password = $_POST["password"];


    echo "<h2>Información Capturada:</h2>";           
    echo "<p>Documento: $documento</p>";
    echo "<p>Nombre y Apellido: $nombreapellido</p>";
    echo "<p>Género: $genero</p>";
    echo "<p>Ciudad de Nacimiento: $ciudad</p>";
    echo "<p>Edad: $edad</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Comentario: $comentario</p>";
    echo "<p>Login: $login</p>";
    echo "<p>Password: $password</p>";

    //Insertar un registro 
    $sql = "INSERT INTO registro (documento, nombreUsuario, Genero, Ciudad, edadUsuario, emailUsuario, comentario, nombreUsuario2, password)
        VALUES ('$documento', '$nombreapellido', '$genero', '$ciudad', '$edad','$email', '$comentario', '$login', '$password')";

    if (mysqli_query($conn, $sql)){
        echo "Se ha creado satisfactoriamente";
    } else{
        echo "Error" . $sql . "<br>" . mysqli_error($conn);

    }
    
    mysqli_close($conn);
    


?>
