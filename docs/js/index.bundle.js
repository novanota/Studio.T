!function(){"use strict";new Swiper(".swiper",{direction:"horizontal",slidesPerView:2.5,spaceBetween:14,grabCursor:!0}),function(){const e=document.querySelector(".mobile-nav-btn"),o=document.querySelector(".mobile-nav"),n=document.querySelector(".nav-icon");e.onclick=function(){o.classList.toggle("mobile-nav--open"),n.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}}()}();