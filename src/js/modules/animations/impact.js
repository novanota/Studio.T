export function impactAnimation() {
    ScrollReveal().reveal('.impact__label', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.impact__title', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.impact__text', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 600,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.impact__item', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.impact__item-name', {
        origin: 'left',
        distance: '50px',
        duration: 800,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.impact__item-where', {
        origin: 'left',
        distance: '50px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.impact__item-position', {
        origin: 'left',
        distance: '50px',
        duration: 800,
        delay: 600,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.impact__item-text', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 800,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });
}

document.addEventListener("DOMContentLoaded", function() {
    impactAnimation();
});