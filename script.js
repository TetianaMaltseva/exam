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
        spaceBetween: 20, // Отступы между фото

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true, // Бесконечная прокрутка
    });

    let swiper2 = new Swiper(".carousel-2", {
        slidesPerView: 3,
        // spaceBetween: 10,
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
       
    })
});

// carousel 2



// const track = document.querySelector(".slider-track");
// const thumb = document.querySelector(".scrollbar-thumb");
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;
// const slideWidth = 610; // Ширина слайда + отступ

// let index = 0;

// function moveSlides() {
//     track.style.transform = `translateX(-${index * slideWidth}px)`;
//     thumb.style.transform = `translateX(${(index / (totalSlides - 3)) * 200}px)`;
// }

// // Управление слайдерами по клику
// track.addEventListener('wheel',(e) => {
//     e.preventDefault();
//     if (e.deltaY < 0) {
//         index--;
//     } else {
//         index++;
//     }
//     handleInfiniteScroll();
//     moveSlides();
// });

// function handleInfiniteScroll() {
//     if (index >= totalSlides) {
//         index = 0;
//     } else if (index < 0) {
//         index = totalSlides - 1;
//     }
// }

