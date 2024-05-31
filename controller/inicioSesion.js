const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    
    const datosUsuario = {
        nombre : nombre,
        email : email

    }
    const datosJSON = JSON.stringify(datosUsuario);
    localStorage.setItem('datosUsuario', datosJSON);
    alert('Datos enviados correctamente.');
    formulario.reset();
});