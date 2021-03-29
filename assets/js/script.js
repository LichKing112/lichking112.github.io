// Implement Sticky/fixed navigation bar on scroll
let navbar = document.querySelector(".navbar");
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add("is-fixed-top");
        navbar.classList.add("navbar-fixed");
    }
    else {
        navbar.classList.remove("is-fixed-top");
        navbar.classList.remove("navbar-fixed");
    }
};
// Implement smooth scrolling on Anchor elements.
document
    .querySelectorAll('a[href^="#"]')
    .forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
// Dark or Light theme handler
document.querySelector(".toggle").addEventListener("click", function () {
    this.classList.add("animate");
    setTimeout(() => {
        this.classList.toggle("active");
        document.documentElement.classList.toggle("theme-dark");
    }, 150);
    setTimeout(() => this.classList.remove("animate"), 300);
});
// Mobile navigation bar functionality
document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }
});
