// Variables
const SEGUNDOS_ENTRE_DIAPOSITIVAS = 2; // <---- IMPORTANTE
const CAROUSEL = document.querySelector(".carousel");
const SLIDERS = CAROUSEL.querySelectorAll(".carousel__slider");

// Funciones

async function autoPlay(posicionPartida = SLIDERS.length) {
  // Obtiene el siguiente indice
  const SIGUIENTE_POSICION =
    SLIDERS.length - 1 > posicionPartida ? posicionPartida + 1 : 0;
  // Mueve el scroll al siguiente slider
  SLIDERS[SIGUIENTE_POSICION].scrollIntoView({ block: "center" });
  // Retardo antes de volver a ejecutarse
  await new Promise((res) => {
    setTimeout(res, SEGUNDOS_ENTRE_DIAPOSITIVAS * 1000);
  });
  // Creamos un objeto IntersectionObserver
  observerCarousel = new IntersectionObserver((entries) => {
        // Comprobamos todas las intesecciones.
        entries.forEach((entry) => {
            // Si es observable, entra
            if (entry.isIntersecting) {
              // Activamos
              autoPlay(SIGUIENTE_POSICION)
            }
        });
    });

  // Añado a mi Observable que quiero observar. En este caso el carousel
  observerCarousel.observe(CAROUSEL);
}

// Ejecuta
autoPlay();