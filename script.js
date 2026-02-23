// ===== MENU MOBILE =====
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}


// ===== LINK ACTIVO SEGÚN URL REAL =====
const links = document.querySelectorAll(".nav a, .mobile-nav a");

let currentPath = window.location.pathname;

// Si estás en la raíz
if (currentPath === "/" || currentPath === "") {
  currentPath = "/index.html";
}

links.forEach(link => {
  const linkPath = new URL(link.href).pathname;

  if (linkPath === currentPath) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});


// ===== FAQ - SOLO UNO ABIERTO =====
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      items.forEach(other => {
        if (other !== item) {
          other.removeAttribute("open");
        }
      });
    }
  });
});