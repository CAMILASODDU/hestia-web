/* ================= HEADER SCROLL ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});


/* ================= MENU HAMBURGUESA ================= */

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

if (hamburger) {

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  /* Cerrar menú al hacer click en un link */
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  /* Si vuelve a desktop, cerrar menú */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });

}


/* ================= CARRUSEL ================= */

const images = [
  "interior1.jpg",
  "interior2.jpg",
  "interior3.jpg"
];

let current = 0;

function openCarousel() {
  current = 0; // siempre empieza desde la primera
  document.getElementById("carouselImage").src = images[current];
  document.getElementById("carouselModal").style.display = "flex";
}

function closeCarousel() {
  document.getElementById("carouselModal").style.display = "none";
}

function nextSlide() {
  current = (current + 1) % images.length;
  document.getElementById("carouselImage").src = images[current];
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  document.getElementById("carouselImage").src = images[current];
}


/* Cerrar modal haciendo click fuera de la imagen */

const modal = document.getElementById("carouselModal");

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeCarousel();
  }
});