const showPasswordCheckbox = document.getElementById("show-password");
const showIcon = document.querySelector(".show");
const hiddenIcon = document.querySelector(".hidden");
const passwordInput = document.querySelector('input[type="password"]');
let showPassword = false;
showPasswordCheckbox.onclick = function () {
  if (showPassword) {
    passwordInput.type = "password";
    showIcon.style.display = "none";
    hiddenIcon.style.display = "block";
  } else {
    passwordInput.type = "text";
    showIcon.style.display = "block";
    hiddenIcon.style.display = "none";
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

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    messageDisplay.textContent =
      "Error de autenticación. Credenciales incorrectas.";
  }
});
