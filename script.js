gsap.registerPlugin(ScrollTrigger);

const cardsRow = document.querySelector('.cards-row');
const scrollWrapper = document.querySelector('.horizontal-scroll-wrapper');
const cards = gsap.utils.toArray('.card');

const totalScrollDistance = cardsRow.scrollWidth - window.innerWidth;

// Horizontal scroll animation
gsap.to(cardsRow, {
    x: -totalScrollDistance,
    ease: 'none',
    scrollTrigger: {
        id: "cardScroll",
        trigger: scrollWrapper,
        start: 'top top',
        end: () => `+=${totalScrollDistance}`,
        scrub: true,
        pin: '.horizontal-scroll-inner',
        anticipatePin: 1
    }
});



