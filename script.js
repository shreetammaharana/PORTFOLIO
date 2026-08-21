// Smooth scroll for internal links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Close mobile menu after clicking
    nav.classList.remove("show");
    toggleIcons(false);
  });
});

const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

// Toggle menu open/close
navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = nav.classList.toggle("show");
  toggleIcons(isOpen);
});

// Function to switch icons
function toggleIcons(open) {
  if (open) {
    menuIcon.style.opacity = "0";
    closeIcon.style.opacity = "1";
    closeIcon.style.transform = "rotate(0deg)";
  } else {
    menuIcon.style.opacity = "1";
    closeIcon.style.opacity = "0";
    closeIcon.style.transform = "rotate(-90deg)";
  }
}

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav") && !e.target.closest("#navToggle")) {
    nav.classList.remove("show");
    toggleIcons(false);
  }
});

// Close when scrolling
window.addEventListener("scroll", () => {
  nav.classList.remove("show");
  toggleIcons(false);
});

// Active link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

window.addEventListener("scroll", () => {
  let currentId = "";
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentId}`) {
      link.classList.add("active");
    }
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ================================
// INTRODUCTION SECTION SCRIPT
// ================================

// Auto pause local video when user scrolls away
const introSection = document.getElementById("introduction");
const introVideo = document.querySelector(".intro-video-wrapper video");

if (introVideo && introSection) {
  window.addEventListener("scroll", () => {
    const rect = introSection.getBoundingClientRect();

    // If section is out of view, pause video
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      introVideo.pause();
    }
  });
}

// Optional: Click to play / pause (local video only)
if (introVideo) {
  introVideo.addEventListener("click", () => {
    if (introVideo.paused) {
      introVideo.play();
    } else {
      introVideo.pause();
    }
  });
}

// Smooth scroll safety (if JS scroll is needed)
document.querySelectorAll('a[href="#introduction"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    introSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
