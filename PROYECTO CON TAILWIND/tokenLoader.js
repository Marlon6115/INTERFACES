const userModule = document.getElementById("user-module");
const guestModule = document.getElementById("guest-module");
const welcome = document.getElementById("welcome");
console.log("modulos,", userModule, guestModule, welcome);
const logoutButton = document.getElementById("logout");

const tokenRecuperado = localStorage.getItem("userProfile");

if (tokenRecuperado) {
  console.log("Token de sesión:", JSON.parse(tokenRecuperado));
  userModule.style.display = "flex";
  guestModule.style.display = "none";

  if (welcome) {
    console.log("Welcome element found", tokenRecuperado);
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
  };
}
