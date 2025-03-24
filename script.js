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
