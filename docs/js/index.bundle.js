!function(){"use strict";new Swiper(".swiper",{direction:"horizontal",slidesPerView:2.3,spaceBetween:20,grabCursor:!0,keyboard:{enabled:!0}}),document.addEventListener("DOMContentLoaded",(function(){ScrollReveal().reveal(".header__container",{origin:"top",distance:"10px",duration:800,delay:200})})),document.addEventListener("DOMContentLoaded",(function(){ScrollReveal().reveal(".home__title",{origin:"bottom",distance:"20px",duration:800,delay:200})})),document.addEventListener("DOMContentLoaded",(function(){ScrollReveal().reveal(".about__location-title",{origin:"left",distance:"20px",duration:800,delay:200}),ScrollReveal().reveal(".about__date-title",{origin:"right",distance:"20px",duration:800,delay:400}),ScrollReveal().reveal(".about__heading-text",{origin:"bottom",distance:"20px",duration:800,delay:600})})),document.addEventListener("DOMContentLoaded",(function(){ScrollReveal().reveal(".working__link",{origin:"left",distance:"50px",duration:1e3,delay:200,opacity:0,easing:"ease-in-out"}),ScrollReveal().reveal(".working__list",{origin:"bottom",distance:"30px",duration:800,delay:400,opacity:0,easing:"ease-in-out",interval:150}),ScrollReveal().reveal(".working__item",{origin:"bottom",distance:"20px",duration:600,delay:600,opacity:0,easing:"ease-in-out",interval:100})})),document.addEventListener("DOMContentLoaded",(function(){ScrollReveal().reveal(".work__item",{origin:"bottom",distance:"20px",duration:800,delay:200,opacity:0,easing:"ease-in-out",interval:200}),ScrollReveal().reveal(".work__item-link",{origin:"bottom",distance:"20px",duration:800,delay:400,opacity:0,easing:"ease-in-out"}),ScrollReveal().reveal(".work__item-img",{origin:"bottom",distance:"20px",duration:800,delay:600,opacity:0,easing:"ease-in-out"})})),document.addEventListener("DOMContentLoaded",(function(){ScrollReveal().reveal(".vision__link",{origin:"left",distance:"50px",duration:1e3,delay:200,opacity:0,easing:"ease-in-out"}),ScrollReveal().reveal(".vision__text",{origin:"bottom",distance:"30px",duration:800,delay:400,opacity:0,easing:"ease-in-out"}),ScrollReveal().reveal(".vision__item",{origin:"bottom",distance:"20px",duration:600,delay:600,opacity:0,easing:"ease-in-out",interval:200})})),document.addEventListener("DOMContentLoaded",(function(){ScrollReveal().reveal(".how__title",{origin:"bottom",distance:"20px",duration:800,delay:200,opacity:0,easing:"ease-in-out"}),ScrollReveal().reveal(".how__item",{origin:"bottom",distance:"20px",duration:800,delay:400,opacity:0,easing:"ease-in-out",interval:150}),ScrollReveal().reveal(".how__link",{origin:"bottom",distance:"20px",duration:800,delay:600,opacity:0,easing:"ease-in-out"})})),function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),o=document.querySelector(".nav-icon");e.onclick=function(){t.classList.toggle("mobile-nav--open"),o.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}}()}();