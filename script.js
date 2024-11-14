// script.js
// Configuración del contador regresivo
const countdown = () => {
    const eventDate = new Date("August 28, 2025 09:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
};

const countdownInterval = setInterval(countdown, 1000);

// Efecto parallax para el banner
window.addEventListener("scroll", function() {
    const scrolled = window.pageYOffset;
    const background = document.querySelector(".hero-background");

    if (background) {
        // Ajusta el 0.5 para controlar la velocidad del parallax
        background.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Para asegurarnos de que la imagen del banner se carga correctamente
window.addEventListener("load", function() {
    const background = document.querySelector(".hero-background");
    if (background) {
        background.style.opacity = "1";
    }
});
