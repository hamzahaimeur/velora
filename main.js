// --- nav scrolled ---

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// --- brand ---

const scrollTopElements = document.querySelectorAll(".brand, .back-top");

scrollTopElements.forEach((element) => {
  element.addEventListener("click", (e) => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// --- animation ---

const aboutObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll(`
  .reveal,
  .story-reveal,
  .menu-reveal,
  .menu-grid,
  .reservation,
  .gallery-reveal,
  .gallery-featured-reveal,
  .gallery-card-reveal,
  .gallery-bottom-reveal,
  .contact-reveal,
  .footer-reveal
`).forEach(el => {
  aboutObserver.observe(el);
});

// --- links --- 

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(
  ".nav-links a, .mobile-links a"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      const id = entry.target.id;

      navLinks.forEach((link) => {

        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${id}`
        );

      });

    });

  },
  {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// --- mobile menu ---

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".mobile-links a");
const mobileBtn = document.querySelector(".mobile-btn");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

function closeMenu() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

links.forEach(link => {
  link.addEventListener("click", closeMenu);
});

mobileBtn.addEventListener("click", closeMenu);

// --- Menu Filter ---

const categoryBtns = document.querySelectorAll(".category-btn");
const menuCards = document.querySelectorAll(".menu-card");

categoryBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    categoryBtns.forEach(button => {
      button.classList.remove("active");
    });

    btn.classList.add("active");

    const category = btn.dataset.category;

    let delay = 0;

    menuCards.forEach(card => {

      const isVisible =
        category === "all" ||
        card.dataset.category === category;

      if (isVisible) {

        card.classList.remove("show-card");

        card.style.display = "";

        setTimeout(() => {
          card.classList.add("show-card");
        }, delay);

        delay += 90;

      } else {

        card.classList.remove("show-card");

        card.style.display = "none";

      }

    });

  });

});

menuCards.forEach(card => {
  card.style.display = "";  
  card.classList.add("show-card");
});

// --- backToTop ---

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});