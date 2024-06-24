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

        1290: {
            slidesPerView: 2,
        },

        876: {
            slidesPerView: 1.8,
        },

        676: {
            slidesPerView: 1.5,
        },

        476: {
            slidesPerView: 1.2,
        },

        376: {
            slidesPerView: 1.1,
        },
    }
});
