export function homeAnimation() {
    ScrollReveal().reveal('.home__title', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 200
    });
}

document.addEventListener("DOMContentLoaded", function() {
    homeAnimation();
});