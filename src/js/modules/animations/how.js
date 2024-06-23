export function howAnimation() {
    ScrollReveal().reveal('.how__title', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.how__item', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 150
    });

    ScrollReveal().reveal('.how__link', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 600,
        opacity: 0,
        easing: 'ease-in-out'
    });
}

document.addEventListener("DOMContentLoaded", function() {
    howAnimation();
});