!function(){"use strict";new Swiper(".swiper",{direction:"horizontal",slidesPerView:2.3,spaceBetween:20,grabCursor:!0,keyboard:{enabled:!0}}),document.addEventListener("DOMContentLoaded",(function(){ScrollReveal().reveal(".header__container",{origin:"top",distance:"10px",duration:800,delay:200})})),document.addEventListener("DOMContentLoaded",(function(){ScrollReveal().reveal(".home__title",{origin:"bottom",distance:"20px",duration:800,delay:200})})),document.addEventListener("DOMContentLoaded",(function(){ScrollReveal().reveal(".about__location-title",{origin:"left",distance:"20px",duration:800,delay:200}),ScrollReveal().reveal(".about__date-title",{origin:"right",distance:"20px",duration:800,delay:400}),ScrollReveal().reveal(".about__heading-text",{origin:"bottom",distance:"20px",duration:800,delay:600})})),document.addEventListener("DOMContentLoaded",(function(){ScrollReveal().reveal(".working__link",{origin:"left",distance:"50px",duration:1e3,delay:200,opacity:0,easing:"ease-in-out"}),ScrollReveal().reveal(".working__list",{origin:"bottom",distance:"30px",duration:800,delay:400,opacity:0,easing:"ease-in-out",interval:150}),ScrollReveal().reveal(".working__item",{origin:"bottom",distance:"20px",duration:600,delay:600,opacity:0,easing:"ease-in-out",interval:100})})),function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),n=document.querySelector(".nav-icon");e.onclick=function(){t.classList.toggle("mobile-nav--open"),n.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}}()}();