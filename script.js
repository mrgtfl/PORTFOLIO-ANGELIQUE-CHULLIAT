/* =======================
        NAVBAR
======================= */
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

if(navbar && !hero){

    navbar.classList.add("show");

}

if(navbar && hero){

    window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        navbar.classList.add("show");

    }else{

        navbar.classList.remove("show");

    }

    });

}

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
    .tag,
    .experience-header span,
    .experience-header h1,
    .experience-header p,
    .projects-header span,
    .projects-header h1,
    .projects-header p,
    .case-study,
    .skills-header span,
    .skills-header h1,
    .skills-header p,
    .skills-overview span,
    .skills-section-heading,
    .skill-card,
    .soft-skills span,
    .tools-grid article,
    .languages-grid article,
    .education-header span,
    .education-header h1,
    .education-header p,
    .education-item,
    .education-side section
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

/* =======================
        TIMELINE
======================= */
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
            timelineObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: .25,
    rootMargin: "0px 0px -80px 0px"
});

timelineItems.forEach((item, index) => {

    item.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
    timelineObserver.observe(item);

});

const missionToggles = document.querySelectorAll(".missions-toggle");

missionToggles.forEach((toggle) => {

    toggle.addEventListener("click", () => {

        const timelineItem = toggle.closest(".timeline-item");
        const isOpen = timelineItem.classList.toggle("is-open");

        toggle.setAttribute("aria-expanded", isOpen);
        toggle.textContent = isOpen ? "Masquer les missions" : "Voir les missions";

    });

});

const caseToggles = document.querySelectorAll(".case-toggle");

caseToggles.forEach((toggle) => {

    toggle.addEventListener("click", () => {

        const caseStudy = toggle.closest(".case-study");
        const isOpen = caseStudy.classList.toggle("is-open");

        toggle.setAttribute("aria-expanded", isOpen);
        toggle.textContent = isOpen ? "Masquer" : "Découvrir";

    });

});
