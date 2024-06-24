export const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    spaceBetween: 20,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },

    breakpoints: {
        1440: {
            slidesPerView: 2.2,
        },

        1295: {
            slidesPerView: 2,
        },
    }
});
