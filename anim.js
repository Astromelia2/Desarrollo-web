const iconoCorreo = document.querySelector('.img_artx4[src="Images/iconocorreo.jpg"]');
const formulario = document.querySelector('form');

iconoCorreo.addEventListener('click', function() {
  alert('escribenos a: asadosalbarrilmym@gmail.com');
});

// Evento al enviar el formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
  
    // Validar el formulario
    if (validarFormulario()) {
      // Obtener datos del formulario
      const nombre = document.getElementById("NombreUsuario").value;
      const edad = document.getElementById("EdadUsuario").value;
      const email = document.getElementById("emailUsuario").value;
      const comentario = document.getElementById("Comentario").value;
  
      // Crear un objeto con los datos del formulario y la fecha actual
      const datosFormulario = {
        nombre,
        edad,
        email,
        comentario,
        fecha: new Date().toLocaleString(), // Fecha actual formateada
      };
  
      // Convertir el objeto a cadena JSON y guardarlo en localStorage
      localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));
  
      // Puedes hacer más cosas aquí, como mostrar un mensaje de éxito, limpiar el formulario, etc.
      alert('Formulario enviado correctamente');
      formulario.reset();
    }
  });

function validarFormulario() {
    // Validar nombre y apellido
    const nombre = document.getElementById("NombreUsuario").value;
    if (nombre.split(" ").length !== 2) {
      alert("El nombre debe tener dos palabras.");
      return false;
    }  
    // Validar edad
    const edad = document.getElementById("EdadUsuario").value;
    if (edad < 18) {
      alert("La edad debe ser superior a 18 años");
      return false;
    }
  
    // Si todo es v&aacute;lido, se devuelve true
    return true;
  }

// Verificar si hay datos almacenados
if (localStorage.getItem('datosFormulario')) {
    // Recuperar y convertir la cadena JSON a un objeto JavaScript
    const datosFormulario = JSON.parse(localStorage.getItem('datosFormulario'));
  
    // Acceder a los datos individuales
    const nombre = datosFormulario.NombreUsuario;
    const edad = datosFormulario.EdadUsuario;
    const email = datosFormulario.emailUsuario;
    const comentario = datosFormulario.Comentario;
    const fecha = datosFormulario.fecha;
  
    // Hacer algo con los datos, por ejemplo, mostrarlos en la consola
    console.log('Nombre:', nombre);
    console.log('Edad:', edad);
    console.log('Email:', email);
    console.log('Comentario:', comentario);
    console.log('Fecha:', fecha);
  } else {
    // No hay datos almacenados
    console.log('No hay datos almacenados en localStorage.');
  }