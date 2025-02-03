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

    // carousel 2
    // let swiper2 = new Swiper(".mySwiper2",{
    //     effect: "coverflow",
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: "auto",
    //     coverflowEffect: {
    //         rotate: 0,
    //         stretch: 0,
    //         depth: 100,
    //         modifier: 1,
    //         slideShadows: false,
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true, /* Делаем бегунок кликабельным */
    //     },
    // });
});

