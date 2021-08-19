// Navigation Menu Toggler
var header = document.querySelector(".js-header");
var hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
    header.classList.toggle("menu-open");
});

// JQuery Scripts
// $(document).ready(function () {
//     // Footer year
//     var year = new Date().getFullYear();
//     $("#footer-year").text(year);
// });
