lucide.createIcons();

// - section - 

const sections = document.querySelectorAll("section");

const allLinks = document.querySelectorAll(
  ".nav-links a, .mobile-links a"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        allLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => observer.observe(section));

// - nav - 

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// - scrollTopBtn - 

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const topImg = document.getElementById("top");

topImg.style.cursor = "pointer";

topImg.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// menuLinks

const hamburger = document.querySelector(".hamburger");
const menuPanel = document.querySelector(".menu-panel");
const closeBtn = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");
const menuLinks = document.querySelectorAll(".menu-panel a");

function openMenu() {
  menuPanel.classList.add("active");
  overlay.classList.add("active");
}

function closeMenu() {
  menuPanel.classList.remove("active");
  overlay.classList.remove("active");
}

hamburger.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// menuData

const menuData = {
  starters: [
    {
      name: "HUMMUS",
      price: "TBD",
      desc: "Creamy hummus, tahini, olive oil, chickpeas, paprika, parsley",
      img: "assets/menu/hummus.png"
    },
    {
      name: "FATTOUSH SALAD",
      price: "TBD",
      desc: "Crisp vegetables, mixed greens, sumac, olive oil, pita crisps",
      img: "assets/menu/salad.png"
    },
    {
      name: "FALAFEL",
      price: "TBD",
      desc: "Crispy chickpea fritters, tahini sauce, pickles, fresh herbs",
      img: "assets/menu/falafel.png"
    }
  ],

  main: [
    {
      name: "GRILLED CHICKEN",
      price: "TBD",
      desc: "Halal grilled chicken with herbs and vegetables",
      img: "assets/menu/chicken.png"
    },
    {
      name: "LAMB SHANK",
      price: "TBD",
      desc: "Slow cooked halal lamb with special sauce",
      img: "assets/menu/lamb.png"
    }
  ],

  signature: [
    {
      name: "MIXED GRILL",
      price: "TBD",
      desc: "Premium halal mixed grill platter",
      img: "assets/menu/grill.png"
    }
  ],

  desserts: [
    {
      name: "KUNAFA",
      price: "TBD",
      desc: "Traditional kunafa with pistachio topping",
      img: "assets/menu/kunafa.png"
    },
    {
      name: "CHEESECAKE",
      price: "TBD",
      desc: "Creamy cheesecake with berry sauce",
      img: "assets/menu/cheesecake.png"
    }
  ],

  drinks: [
    {
      name: "ORANGE JUICE",
      price: "TBD",
      desc: "Freshly squeezed orange juice",
      img: "assets/menu/orange.png"
    },
    {
      name: "MINT LEMONADE",
      price: "TBD",
      desc: "Fresh lemon with mint and ice",
      img: "assets/menu/lemonade.png"
    }
  ]
};

const mobileList = document.querySelector("#menu-mobile .menu-list");
const mobileTitle = document.querySelector("#menu-mobile .menu-category-title");
const mobileButtons = document.querySelectorAll("#menu-mobile .menu-categories button");

// create mobile card
function createMobileCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";

  card.innerHTML = `
    <div class="menu-image">
      <img src="${item.img}" alt="${item.name}">
    </div>

    <div class="menu-content">
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
      <span class="price">${item.price}</span>
    </div>

    <button class="reserve-btn2" data-name="${item.name}">
      Reserve
    </button>
  `;

  return card;
}

// render category mobile
function renderMobile(category) {
  mobileList.innerHTML = "";

  mobileTitle.innerHTML = `
    <h3>${category.toUpperCase()}</h3>
    <div class="menu-divider">
      <span></span>
      <div class="diamond"></div>
      <span></span>
    </div>
  `;

  menuData[category].forEach(item => {
    mobileList.appendChild(createMobileCard(item));
  });
}

// buttons click
mobileButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    mobileButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    renderMobile(btn.dataset.category);
  });
});

const col1 = document.querySelector(".menu-col1");
const col2 = document.querySelector(".menu-col2");

// title
function createTitle(text) {
  const h3 = document.createElement("h3");
  h3.className = "menu-title";
  h3.textContent = text;
  return h3;
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".reserve-btn2");

  if (!btn) return;

  const itemName = btn.dataset.name;

  document.querySelector("form")
    .scrollIntoView({ behavior: "smooth" });

  const input = document.querySelector("#selectedItem");
  if (input) {
    input.value = itemName;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderMobile("starters");
});

// gallery animation

const galleryItems = document.querySelectorAll(".gallery-item");

const galleryObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

      galleryObserver.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.2
});

galleryItems.forEach((item, index) => {

  item.style.transitionDelay = `${index * 100}ms`;

  galleryObserver.observe(item);

});

