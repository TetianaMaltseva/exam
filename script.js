// burger-menu
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.getElementById("nav-links");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
//button scroll
function scrollForm() {
  document
    .getElementById("contact-form")
    .scrollIntoView({ behavior: "smooth" });
}

const toTopBtn = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// carousel
document.addEventListener("DOMContentLoaded", function () {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Показываем 3 фото
    spaceBetween: 30, // Отступы между фото
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      290: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    // loop: true, // Бесконечная прокрутка
    // loopedSlides: 3,
  });

  // carousel 2
  let swiper2 = new Swiper(".carousel-2", {
    slidesPerView: 1,
    spaceBetween: 10,
    direction: "horizontal",
    loop: true,
    loopedSlides: 3,
    autoHeight: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: -10,
      slideShadows: false,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
});
// modal

document.querySelectorAll("[data-modal-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    modal.classList.add("active");
  });
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".modal").classList.remove("active");
  });
});

// window.addEventListener("click", (e) => {
//   if (e.target.classList.contains("modal")) {
//     e.target.classList.remove("active");
//   }
// });

// Form

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const tel = document.getElementById("tel").value;
  const agree = document.getElementById("agree").checked;
  if (!name || !tel || !agree) {
    alert("Please fill all fields and agree to data processing.");
    return;
  }
  alert("Booking submitted!");
});

//map
function initMap() {
  const location = { lat: 50.471183, lng: 30.510375 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "Cauder",
  });
}
//preloader
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});
