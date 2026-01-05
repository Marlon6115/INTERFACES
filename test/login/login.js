export const loginScript = () => {
  const showPasswordCheckbox = document.getElementById("show-password");
  // Seleccionamos por las clases que pusimos en el HTML
  const showIcon = document.querySelector(".show");
  const hiddenIcon = document.querySelector(".hidden-icon");
  const passwordInput = document.getElementById("password-input");

  let showPassword = false;

  showPasswordCheckbox.onclick = function () {
    if (showPassword) {
      // Estado: Ocultar contraseña (volver a puntos)
      passwordInput.type = "password";

      // Tailwind logic: 'showIcon' visible (block), 'hiddenIcon' oculto (hidden)
      showIcon.classList.remove("hidden");
      hiddenIcon.classList.add("hidden");
    } else {
      // Estado: Mostrar contraseña (texto legible)
      passwordInput.type = "text";

      // Tailwind logic: 'showIcon' oculto, 'hiddenIcon' visible
      showIcon.classList.add("hidden");
      hiddenIcon.classList.remove("hidden");
    }
    showPassword = !showPassword;
  };

  const loginForm = document.querySelector(".items-form");
  const emailInput = document.querySelector('input[type="email"]');
  const messageDisplay = document.querySelector(".error-message");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    messageDisplay.textContent = "";

    // Simulación de autenticación (Fake Auth)
    if (email === "marlon@gmail.com" && password === "password") {
      const sessionToken = `fake_auth_token_${Date.now()}`;

      const userSession = {
        isAuthenticated: true,
        username: email.split("@")[0],
        email: email,
        token: sessionToken,
      };

      localStorage.setItem("userSessionToken", sessionToken);
      localStorage.setItem("userProfile", JSON.stringify(userSession));

      // Feedback visual opcional antes de redirigir
      messageDisplay.style.color = "#4ade80"; // Verde success
      messageDisplay.textContent = "¡Bienvenido!";

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      messageDisplay.style.color = ""; // Volver al color por defecto (definido en CSS/Tailwind)
      messageDisplay.textContent =
        "Error de autenticación. Credenciales incorrectas.";
    }
  });
};
