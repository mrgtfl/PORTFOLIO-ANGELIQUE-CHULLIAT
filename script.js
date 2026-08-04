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