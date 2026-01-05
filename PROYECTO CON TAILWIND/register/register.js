document.addEventListener("DOMContentLoaded", () => {
    const showPasswordButtons = document.querySelectorAll(".toggle-password-btn");
  
    showPasswordButtons.forEach((button) => {
      let isPasswordVisible = false;
      
      const passwordInput = document.getElementById(`show-password-${button.id}`);
      
      const iconShow = button.querySelector(".icon-show");  
      const iconHidden = button.querySelector(".icon-hidden");
  
      button.onclick = () => {
        if (isPasswordVisible) {
          passwordInput.type = "password";
          
          iconShow.classList.remove("hidden");
          iconShow.classList.add("block");
          
          iconHidden.classList.remove("block");
          iconHidden.classList.add("hidden");
        } else {
          passwordInput.type = "text";
          
          iconShow.classList.remove("block");
          iconShow.classList.add("hidden");
          
          iconHidden.classList.remove("hidden");
          iconHidden.classList.add("block");
        }
        isPasswordVisible = !isPasswordVisible;
      };
    });
  
    const password = document.getElementById("show-password-1");
    const confirmPassword = document.getElementById("show-password-2");
    const formRegister = document.getElementById("register-form");
    const errorMsg = document.querySelector(".error-message");
  
    function validarCoincidencia() {
      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Las contraseñas no coinciden.");
        errorMsg.style.color = "#ef4444"; 
        errorMsg.textContent = "Error: Las contraseñas no coinciden.";
      } else {
        confirmPassword.setCustomValidity("");
        errorMsg.textContent = "";
      }
    }
  
    confirmPassword.addEventListener("input", validarCoincidencia);
    password.addEventListener("input", validarCoincidencia);
  
    formRegister.addEventListener("submit", (e) => {
      validarCoincidencia();
      
      if (!formRegister.checkValidity()) {
        e.preventDefault(); 
        return false;
      }
      
      e.preventDefault(); 
      
      errorMsg.style.color = "#4ade80"; 
      errorMsg.textContent = "Registro exitoso. Redirigiendo...";
      
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    });
  });