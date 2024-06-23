export function storyAnimation() {
    ScrollReveal().reveal('.story__label', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.story__title', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.swiper-slide', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.story-about__goal', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 600,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.story-about__believe', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 800,
        opacity: 0,
        easing: 'ease-in-out'
    });
}

document.addEventListener("DOMContentLoaded", function() {
    storyAnimation();
});