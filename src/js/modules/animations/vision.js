export function visionAnimation() {
    ScrollReveal().reveal('.vision__link', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.vision__text', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.vision__item', {
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        delay: 600,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });
}

document.addEventListener("DOMContentLoaded", function() {
    visionAnimation();
});