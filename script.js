/* ================= HEADER SCROLL ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }
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

  navItems.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });

}


/* ================= CARRUSEL ================= */

const serviceImages = {

  interiorismo: [
    "interior1.jpg",
    "interior2.jpg",
    "interior3.jpg"
  ],

  mobiliario: [
    "mobiliario1.jpg",
    "mobiliario2.jpg",
    "mobiliario3.jpg"
  ],

  obra: [
    "obra1.jpg",
    "obra2.jpg",
    "obra3.jpg"
  ]

};

let images = [];
let current = 0;

const modal = document.getElementById("carouselModal");
const carouselImage = document.getElementById("carouselImage");


function openCarousel(service) {

  images = serviceImages[service] || [];

  current = 0;

  if (images.length === 0) return;

  if (carouselImage) {
    carouselImage.src = images[current];
  }

  if (modal) {
    modal.style.display = "flex";
  }

}


function closeCarousel() {

  if (modal) {
    modal.style.display = "none";
  }

}


function nextSlide() {

  current = (current + 1) % images.length;

  if (carouselImage) {
    carouselImage.src = images[current];
  }

}


function prevSlide() {

  current = (current - 1 + images.length) % images.length;

  if (carouselImage) {
    carouselImage.src = images[current];
  }

}


/* cerrar modal click fuera */

if (modal) {

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeCarousel();
    }
  });

}


/* cerrar modal con tecla ESC */

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {
    closeCarousel();
  }

});


/* ================= HERO VIDEOS EN COLA ================= */

const heroVideo = document.getElementById("heroVideo");

if (heroVideo) {

  const heroVideos = [
    "video_hero1.mp4",
    "video_hero2.mp4"
  ];

  let currentVideo = 0;

  heroVideo.addEventListener("ended", () => {

    currentVideo++;

    if (currentVideo >= heroVideos.length) {
      currentVideo = 0;
    }

    heroVideo.src = heroVideos[currentVideo];
    heroVideo.play();

  });

}