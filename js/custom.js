// A $( document ).ready() block.
$(document).ready(function() {
    // Banner
    $('.slider').slick({
            draggable: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            dots: false,
            fade: true,
            speed: 900,
            infinite: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100
        })
        // banner ends
});
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sos-cards",
        start: "top 0px",
        end: "+=9800",
        toggleActions: "restart none none complete",
        scrub: 1,
        pin: true,
    }
});
tl.from(".heading", { opacity: 0, y: 100, duration: 0.5 }, "1.5")
    .to(".heading", { opacity: 0, y: -100 }, "<1.5")
    .to(".cable", { opacity: 1, x: 0, y: 0, stagger: 0.5 })
    .to(".opacity", { opacity: 0, y: -100, duration: 0.8 })
    .to(".fix", { rotationY: 90, duration: 0.8 })
    .to(".flip", { rotationY: 0, duration: 0.8, opacity: 1 })
    .from(".plug", { opacity: 0, y: 300, duration: 1.5 }, "<-0.2")
    .to(".chip", { y: 150, opacity: 0, })
    .to(".plug", { opacity: 0 })
    .to(".flip", { rotationY: 90, duration: 0.8 }, "<-0.1")
    .to(".fix", { rotationY: 0, duration: 0.8 })
    .to(".iphone-12", { opacity: 1 }, "<")
    .from(".iphone-12", { y: 600, duration: 1 }, "<")
    .from(".dark-bg", { y: "100%" })
    .from(".slides", { y: 80, opacity: 0, duration: 0.5, stagger: 0.3 })
    .to(".slides", { y: -80, opacity: 0, duration: 0.5, stagger: 0.3 })
    .to(".dark-bg", { y: "-100%", duration: 1 })
    .to(".iphone-12", { y: -800, duration: 0.5 }, "<")
    .to(".fix", { rotationY: 90, duration: 0.8 })
    .from(".sl-charger", { rotationY: 90 })
    .from(".sl-phone", { y: 300, opacity: 0 })
    .from(".sl-text", { opacity: 0, y: 150 }, "<0.5")
    .from(".sl-text-bottom", { opacity: 0, y: 150 }, "<0.5")
    .to(".sl-phone", { y: -300, opacity: 0 }, "<1")
    .to(".sl-text", { opacity: 0, y: -150 }, "<")
    .to(".sl-text-bottom", { opacity: 0, }, "<")
    .to(".sl-charger", { opacity: 0, duration: 0.3 })
    .to(".fix", { rotationY: 0, duration: 1 }, "<")
    .from(".light-bg", { y: "100%", duration: 1.5 })
    .to(".fix", { y: 100, duration: 1 }, "<-0.2")
    .from(".wrapper-closed", { opacity: 0, duration: 0.1 }, "<0.3")
    .from(".wrapper-closed", { y: 300, duration: 1 }, "<0.3")
    .to(".fix", { opacity: 0 })
    .to(".battery-wrap-top", { rotate: 0, duration: 1 })