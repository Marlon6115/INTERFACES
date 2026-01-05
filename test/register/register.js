const showPasswordCheckbox = document.querySelectorAll(".show-password");

showPasswordCheckbox.forEach((button) => {
  let showPassword = false;
  const passwordInput = document.getElementById(`show-password-${button.id}`);
  button.onclick = () => {
    if (showPassword) {
      passwordInput.type = "password";
      button.querySelector(".show").style.display = "none";
      button.querySelector(".hidden").style.display = "block";
    } else {
      passwordInput.type = "text";
      button.querySelector(".show").style.display = "block";
      button.querySelector(".hidden").style.display = "none";
    }
    showPassword = !showPassword;
  };
});

const password = document.getElementById("show-password-1");
const confirmPassword = document.getElementById("show-password-2");
const formRegister = document.getElementById("register-form");
const errorMsg = document.querySelector(".error-message");

function validarCoincidencia() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Las contraseñas no coinciden.");
    errorMsg.textContent = "Error: Las contraseñas no coinciden.";
  } else {
    confirmPassword.setCustomValidity("");
    errorMsg.textContent = "";
  }
}

confirmPassword.addEventListener("input", validarCoincidencia);

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  validarCoincidencia();
  if (formRegister.checkValidity()) {
    window.location.href = "./login.html";
  } else {
    return false;
  }
});
