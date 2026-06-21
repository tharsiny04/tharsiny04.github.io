const aboutBtn = document.getElementById("aboutBtn");
const contactBtn = document.getElementById("contactBtn");
const message = document.getElementById("message");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

// Scroll to About section
aboutBtn.addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Contact button message
contactBtn.addEventListener("click", function () {
  message.textContent = "Thank you for visiting my portfolio!";
});

// Mobile menu toggle
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});
