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
const thumbsContainer = document.getElementById("carouselThumbs");


function showImage() {

  carouselImage.style.opacity = 0;

  setTimeout(() => {

    carouselImage.src = images[current];
    carouselImage.style.opacity = 1;

    updateThumbs();

  }, 150);

}

function generateThumbs() {

  if (!thumbsContainer) return;

  thumbsContainer.innerHTML = "";

  images.forEach((img, index) => {

    const thumb = document.createElement("img");

    thumb.src = img;

    if (index === current) {
      thumb.classList.add("active");
    }

    thumb.addEventListener("click", () => {

      current = index;
      showImage();
      updateThumbs();

    });

    thumbsContainer.appendChild(thumb);

  });

}

function updateThumbs() {

  const thumbs = document.querySelectorAll(".carousel-thumbnails img");

  thumbs.forEach((thumb, i) => {

    thumb.classList.toggle("active", i === current);

  });

}

function openCarousel(service) {

  if (!serviceImages[service]) return;

  images = serviceImages[service];
  current = 0;

  carouselImage.src = images[current];
  modal.style.display = "flex";

  generateThumbs();

}


function closeCarousel() {

  modal.style.display = "none";

}


function nextSlide() {

  current = (current + 1) % images.length;
  showImage();

}


function prevSlide() {

  current = (current - 1 + images.length) % images.length;
  showImage();

}


/* cerrar modal clic fuera */

if (modal) {

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeCarousel();
    }
  });

}


/* cerrar con ESC */

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {
    closeCarousel();
  }

});


/* ===== SWIPE MOBILE ===== */

let startX = 0;
let endX = 0;

const carouselContent = document.querySelector(".carousel-content");

if (carouselContent) {

  carouselContent.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  carouselContent.addEventListener("touchend", (e) => {

    endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
      nextSlide();
    }

    if (endX - startX > 50) {
      prevSlide();
    }

  });

}

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