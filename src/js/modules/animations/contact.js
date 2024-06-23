export function contactAnimation() {
    ScrollReveal().reveal('.contact__title', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.contact__text', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.contact__email-title', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 600,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.contact__email-link', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 800,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.contact__link', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 1000,
        opacity: 0,
        easing: 'ease-in-out'
    });
}

document.addEventListener("DOMContentLoaded", function() {
    contactAnimation();
});