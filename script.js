/* =======================
        NAVBAR
======================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        navbar.classList.add("show");

    }else{

        navbar.classList.remove("show");

    }

});

/* =======================
        FADE UP AU SCROLL
======================= */
const fadeElements = document.querySelectorAll(`
    .about-image,
    .about-text h2,
    .about-text h3,
    .about-text p,
    .highlight,
    .looking-for .section-title,
    .looking-for h2,
    .looking-for p,
    .tag
`);

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("is-visible");
            fadeObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: .18,
    rootMargin: "0px 0px -60px 0px"
});

fadeElements.forEach((element, index) => {

    element.classList.add("fade-up");
    element.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
    fadeObserver.observe(element);

});
