const formulario = document.querySelector('form');

// Validar nombre
const validarNombre = function() {
  const nombreUsuario = document.getElementById('nombreUsuario').value;
  const patron = /^[a-zA-Z]+ [a-zA-Z]+$/; // dos palabras alfabéticas
  if (!patron.test(nombreUsuario)) {
    alert("El nombre de usuario debe contener solo letras del alfabeto, sin tildes y tener dos palabras.");
    return false;
  }
  return true;
};

// Validar edad
const validarEdad = function() {
  const edadUsuario = document.getElementById('edadUsuario').value;
  if (edadUsuario < 18) {
    alert("La edad debe ser mayor a 18.");
    return false;
  }
  return true;
};

// Validar formulario
const validarFormulario = function() {
  return validarNombre() && validarEdad();
};

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

  if (!validarFormulario()) {
    return;
    
  }

  // Obtener datos del formulario
  const nombreUsuario = document.getElementById('nombreUsuario').value;
  const edadUsuario = document.getElementById('edadUsuario').value;
  const emailUsuario = document.getElementById('emailUsuario').value;
  const comentario = document.getElementById('comentario').value;

  // Guardar los datos en la consola
  console.log(nombreUsuario);
  console.log(edadUsuario);
  console.log(emailUsuario);
  console.log(comentario);
});