const toggleBtn = document.getElementById("langToggle");
const title = document.getElementById("title");
const content = document.getElementById("content");

const translations = {
  es: {
    title: "Aviso de Privacidad",
    button: "English",
    content: `SplitHUD no recopila, almacena ni comparte información personal del usuario.  
    La única información que se transmite es hacia la API pública de speedrun.com,  
    exclusivamente para obtener datos sobre juegos, categorías y tablas de clasificación.  
    Esta información es introducida manualmente por el usuario para realizar búsquedas específicas.  

    SplitHUD solicita permisos para:
    <ul>
      <li>Mostrar notificaciones que indican cuándo el temporizador está activo.</li>
      <li>Permitir al usuario cerrar el temporizador en cualquier momento.</li>
      <li>Superponer el temporizador flotante sobre otras aplicaciones (como juegos).</li>
      <li>Acceder a internet para validar conexión antes de consultar la API.</li>
    </ul>

    SplitHUD es completamente gratuito y no contiene publicidad.`
  },
  en: {
    title: "Privacy Policy",
    button: "Español",
    content: `SplitHUD does not collect, store, or share any personal user information.  
    The only data transmitted is to the public speedrun.com API,  
    solely to retrieve information about games, categories, and leaderboards.  
    This data is manually entered by the user to perform specific searches.  

    SplitHUD requests permissions to:
    <ul>
      <li>Show notifications indicating when the timer is active.</li>
      <li>Allow the user to close the timer at any time.</li>
      <li>Overlay the floating timer on top of other apps (such as games).</li>
      <li>Access the internet to validate connection before querying the API.</li>
    </ul>

    SplitHUD is completely free and contains no ads.`
  }
};

let currentLang = "es";

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  title.textContent = translations[currentLang].title;
  content.innerHTML = translations[currentLang].content;
  toggleBtn.textContent = translations[currentLang].button;
});