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


// // Create and add the cursor circle to the page
// const cursor = document.createElement("div");
// cursor.classList.add("cursor-circle");
// document.body.appendChild(cursor);

// // Track mouse position only inside the .welcome section
// const welcomeSection = document.querySelector(".welcome");

// welcomeSection.addEventListener("mousemove", (e) => {
//   const rect = welcomeSection.getBoundingClientRect();
//   const x = e.clientX;
//   const y = e.clientY;

//   cursor.style.left = `${x - 10}px`; // center the circle
//   cursor.style.top = `${y - 10}px`;
//   cursor.style.display = "block";
// });

// welcomeSection.addEventListener("mouseleave", () => {
//   cursor.style.display = "none";
// });


const arrow = document.getElementById("arrowImg");
const aboutMeSection = document.getElementById("aboutme");

window.addEventListener("scroll", () => {
    const rect = aboutMeSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Scroll range where you want the rotation to occur
    const triggerStart = windowHeight; // when section enters bottom of viewport
    const triggerEnd = windowHeight / 2; // adjust this value to make it end sooner

    // Calculate progress in that range
    const progress = (rect.top - triggerEnd) / (triggerStart - triggerEnd);
    const clamped = Math.min(Math.max(progress, 0), 1);

    // Rotate from 0 to -180
    const rotation = clamped * -180;

    arrow.style.transform = `rotate(${rotation}deg)`;
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
