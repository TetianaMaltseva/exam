// burger-menu
document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navLinks = document.getElementById("nav-links");

    burgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
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
      }
        // loop: true, // Бесконечная прокрутка
        // loopedSlides: 3,
    });

            // carousel 2
    let swiper2 = new Swiper(".carousel-2", {
        slidesPerView: 1,
        spaceBetween: 10,
        direction: 'horizontal',
        loop: true,
        loopedSlides: 3,
        autoHeight: true,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: -10,
          slideShadows: false,
        //   stretch: 10,
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            // when window width is >= 640px
            992: {
              slidesPerView: 3,
              spaceBetween: 10
            }
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
             dynamicBullets: true,
        },
       
    })

    
});
// modal
document.querySelector('.full').addEventListener('click', () => {
  document.getElementById('menu-modal').classList.add('active');
});
function closeModal() {
  document.getElementById('menu-modal').classList.remove('active');
}

// Form

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const tel = document.getElementById('tel').value;
  const consent = document.getElementById('consent').checked;
  if (!name || !tel || !consent) {
      alert('Please fill all fields and agree to data processing.');
      return;
  }
  alert('Booking submitted!');
});

//preloader
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});


