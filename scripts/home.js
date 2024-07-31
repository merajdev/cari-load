document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // You can adjust the scroll value as needed
            navbar.classList.add("navbar-scrolled");
            navbar.classList.remove("bg-body-transparent");
        } else {
            navbar.classList.remove("navbar-scrolled");
            navbar.classList.add("bg-body-transparent");
        }
    });
});