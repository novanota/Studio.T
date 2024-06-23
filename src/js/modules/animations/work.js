export function workAnimation() {
    ScrollReveal().reveal('.work__item', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.work__item-link', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.work__item-img', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 600,
        opacity: 0,
        easing: 'ease-in-out',
    });
}

document.addEventListener("DOMContentLoaded", function() {
    workAnimation();
});