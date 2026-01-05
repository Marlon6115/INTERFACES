const showPasswordBtn = document.getElementById("show-password");
const passwordInput = document.getElementById("password-input");

const icons = showPasswordBtn.querySelectorAll("img");
const iconShow = icons[0];
const iconHide = icons[1];

const loginForm = document.querySelector("form");
const emailInput = document.querySelector('input[type="email"]');
const messageDisplay = document.querySelector(".error-message");

showPasswordBtn.onclick = () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    iconShow.classList.add("hidden");
    iconShow.classList.remove("block");

    iconHide.classList.remove("hidden");
    iconHide.classList.add("block");
  } else {
    passwordInput.type = "password";

    iconShow.classList.remove("hidden");
    iconShow.classList.add("block");

    iconHide.classList.add("hidden");
    iconHide.classList.remove("block");
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  messageDisplay.textContent = "";

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
    messageDisplay.style.color = "#4ade80";
    messageDisplay.textContent = "Login exitoso. Redirigiendo...";

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1000);
  } else {
    messageDisplay.style.color = "#ef4444";
    messageDisplay.textContent =
      "Error de autenticación. Credenciales incorrectas.";
  }
});
