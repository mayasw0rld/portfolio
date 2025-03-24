gsap.registerPlugin(ScrollTrigger);

const cardsRow = document.querySelector('.cards-row');
const scrollWrapper = document.querySelector('.horizontal-scroll-wrapper');

const totalScrollDistance = cardsRow.scrollWidth - window.innerWidth;

// GSAP Horizontal Scroll Animation
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


