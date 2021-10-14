
var form = document.getElementById('user-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        });
    }
    else {
        Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'Formulario Enviado!',
        })
        form.reset()
    }
})





