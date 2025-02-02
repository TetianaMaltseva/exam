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
});