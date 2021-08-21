// Navigation Menu Toggler
var header = document.querySelector(".js-header");
var hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
    header.classList.toggle("menu-open");
});

// HNG Task
var firstName = "Favour";
var lastName = "Samuel";
var fullName = firstName + " " + lastName;

console.log(fullName);
