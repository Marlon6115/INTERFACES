const formRegistro = document.getElementById("registroForm");

formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        cedula: document.getElementById("cedula").value,
        fechaNac: document.getElementById("fecha").value,
        email: document.getElementById("email").value,
        direccion: document.getElementById("direccion").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    console.log("Usuario capturado:", user);

    // Leer usuarios previos
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Agregar nuevo usuario
    users.push(user);

    // Guardar en localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    // Redirigir al login
    window.location.href = "login.html";

});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Leer usuarios guardados
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Buscar usuario con correo o username
    const userFound = users.find(
        u => (u.email === email || u.username === email) && u.password === password
    );

    console.log("Usuarios registrados:", users);
    console.log("Usuario ingresado:", email, password);

    if (!userFound) {
        alert("Usuario o contraseña incorrectos");
        return;
    }

    // Guardar usuario actual
    localStorage.setItem("currentUser", JSON.stringify(userFound));
    alert("Login Exitoso")
    window.location.href = "index.html";
});