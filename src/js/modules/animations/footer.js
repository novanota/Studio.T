export function footerAnimation() {
    ScrollReveal().reveal('.footer__title', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.footer__office-text, .footer__office-list, .footer__connect-list, .footer__join, .footer__follow', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200 
    });

    ScrollReveal().reveal('.footer__input, .footer__join-link, .footer__follow-link', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 600,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 100 
    });
}

document.addEventListener("DOMContentLoaded", function() {
    footerAnimation();
});