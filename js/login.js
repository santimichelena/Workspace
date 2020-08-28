//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("boton").addEventListener("click", function (e){
        let password = document.getElementById("inputPassword");
        let email = document.getElementById("inputEmail");
        let camposCompletos = true;
        if (password.value === '' || email.value === ''){
            camposCompletos = false;
            alert("Debes ingresar los datos!");
        }
        if (camposCompletos){
          
                       localStorage.setItem('User-Logged', JSON.stringify({ email: inputEmail.value}));
                  
                       window.location = 'inicio.html';
        }
    });

});