// ================================================== Navigation Bar effects on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


// ================================================== Scroll Top Button
const scrollTopBtn = document.querySelector('.scrollTop-btn');
window.addEventListener('scroll', function(){
    scrollTopBtn.classList.toggle('active', window.scrollY > 500);
});

scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


// ================================================== Scroll Reveal Animation
ScrollReveal({ 
    distance: '15px',
    duration: 2500,
    delay: 100
});

// ================================================== Target Elements Reveal Animation
ScrollReveal().reveal('.full-name, .section-title-01, .section-title-02, .small-title, .heading, .pr-bio, .p-bio, .odd', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.above-title, .bio, .abt-bio, .right-text, .paragraph-2, .even', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.abt-img, .s-btn, .e-btn, .btn, .home__social', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.box, .career-column', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('#particles-js', { delay: 1500, origin: 'top' });
