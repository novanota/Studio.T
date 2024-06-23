export function aboutAnimation() {
    ScrollReveal().reveal('.about__location-title', {
        origin: 'left',
        distance: '20px',
        duration: 800,
        delay: 200
    });

    ScrollReveal().reveal('.about__date-title', {
        origin: 'right',
        distance: '20px',
        duration: 800,
        delay: 400
    });

    ScrollReveal().reveal('.about__heading-text', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 600
    });
}

document.addEventListener("DOMContentLoaded", function() {
    aboutAnimation();
});