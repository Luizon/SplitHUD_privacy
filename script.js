const toggleBtn = document.getElementById("langToggle");
const title = document.getElementById("title");
const intro = document.getElementById("intro");
const permTitle = document.getElementById("permTitle");
const permList = document.getElementById("permList");
const footer = document.getElementById("footer");

const translations = {
  es: {
    title: "Aviso de Privacidad",
    button: "English",
    intro: `SplitHUD no recopila, almacena ni comparte información personal del usuario.  
    La única información que se transmite es hacia la API pública de speedrun.com,  
    exclusivamente para obtener datos sobre juegos, categorías y tablas de clasificación.  
    Esta información es introducida manualmente por el usuario para realizar búsquedas específicas.`,
    permTitle: "SplitHUD solicita permisos para:",
    permList: [
      "Mostrar notificaciones que indican cuándo el temporizador está activo.",
      "Permitir al usuario cerrar el temporizador en cualquier momento.",
      "Superponer el temporizador flotante sobre otras aplicaciones (como juegos).",
      "Acceder a internet para validar conexión antes de consultar la API."
    ],
    footer: "SplitHUD es completamente gratuito y no contiene publicidad."
  },
  en: {
    title: "Privacy Policy",
    button: "Español",
    intro: `SplitHUD does not collect, store, or share any personal user information.  
    The only data transmitted is to the public speedrun.com API,  
    solely to retrieve information about games, categories, and leaderboards.  
    This data is manually entered by the user to perform specific searches.`,
    permTitle: "SplitHUD requests permissions to:",
    permList: [
      "Show notifications indicating when the timer is active.",
      "Allow the user to close the timer at any time.",
      "Overlay the floating timer on top of other apps (such as games).",
      "Access the internet to validate connection before querying the API."
    ],
    footer: "SplitHUD is completely free and contains no ads."
  }
};

let currentLang = "es";

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  const t = translations[currentLang];

  title.textContent = t.title;
  intro.textContent = t.intro;
  permTitle.textContent = t.permTitle;
  footer.textContent = t.footer;
  toggleBtn.textContent = t.button;

  permList.innerHTML = "";
  t.permList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    permList.appendChild(li);
  });
});