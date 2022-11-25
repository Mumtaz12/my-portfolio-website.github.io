//scroll up

const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);

});
//navigation bar effect on scrollBehavior: 
window.addEventListener("scroll", function() {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// services section - model
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");
var modal = function(modalClick) {
    serviceModals[modalClick].classList.add("active");
}
learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i);
    });
});
modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});
//resposive navigation menu toggle
const menuBtn = document.querySelectorAll(".nav-menu-btn");
const closeBtn = document.querySelectorAll(".nav-close-btn");
const navigation = document.querySelectorAll(".navigation");
const navItem = document.querySelectorAll(".nav-items a");
menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");

});
closeBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

//portfolio section -model
const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick) {
    portfolioModals[modalClick].classList.add("active");
}
imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});
//common reveal option  to create reveal animationPlayState: 
ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 100
})

// target  elemnet nad specify option to create animation: 
ScrollReveal().reveal('.home .info h2, .section-title-01, ,section-title-02', {
    delay: 500,
    origin: 'left'
});
ScrollReveal().reveal('.home .info h3, .home .info p,.about-info,.btn', {
    delay: 600,
    origin: 'right'
});
ScrollReveal().reveal('.home .info .btn', {
    delay: 700,
    origin: 'bottom'
});
ScrollReveal().reveal('.media-icons i, .contact-left li ', { delay: 500, origin: 'left', interval: 200 });

ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description,.services-description,.contact-card,.client-swiper, .contact-left h2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card,.education,.portfolio, .img-card', { delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200 });