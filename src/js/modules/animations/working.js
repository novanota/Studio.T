export function workingAnimation() {
    ScrollReveal().reveal('.working__link', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.working__list', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 150
    });

    ScrollReveal().reveal('.working__item', {
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        delay: 600,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 100
    });
}

document.addEventListener("DOMContentLoaded", function() {
    workingAnimation();
});