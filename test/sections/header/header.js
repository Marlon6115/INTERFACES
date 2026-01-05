export const header = () => {
  const welcome = document.querySelector(".welcome");
  const userModule = document.querySelector(".user-module");
  const guestModule = document.querySelector(".guest-module");
  const logoutButton = document.getElementById("logout");
  
  const tokenRecuperado = localStorage.getItem("userProfile");

  // Validación simple para asegurar que los elementos existen
  if (!userModule || !guestModule) return;

  if (tokenRecuperado) {
    console.log("Token de sesión:", JSON.parse(tokenRecuperado));
    // Sobrescribimos la clase 'hidden' de Tailwind con estilo en línea
    userModule.classList.add("flex");
    guestModule.classList.remove = ("hidden");
    
    if (welcome) {
      welcome.textContent = `Hola, ${JSON.parse(tokenRecuperado).username}`;
    }
  } else {
    console.log("No se encontró ningún token.");
    userModule.style.display = "none";
    guestModule.style.display = "flex";
  }

  if (logoutButton) {
    logoutButton.onclick = () => {
      localStorage.removeItem("userProfile");
      userModule.style.display = "none";
      guestModule.style.display = "flex";
      if (welcome) welcome.textContent = "";
      window.location.reload();
    };
  }
};