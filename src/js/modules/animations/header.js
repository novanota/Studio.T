export function headerAnimation() {
    ScrollReveal().reveal('.header__container', {
        origin: 'top',
        distance: '10px',
        duration: 800,
        delay: 200
    });
}

document.addEventListener("DOMContentLoaded", function() {
    headerAnimation();
});