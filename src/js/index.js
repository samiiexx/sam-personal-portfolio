const firstName = "Favour";
const lastName = "Samuel";

var fullName = firstName + " " + lastName;

console.log(fullName);

// Hamburger Menu
var hamburgerMenu = document.querySelector(".hamburger-menu");
var header = document.getElementById("header");

hamburgerMenu.addEventListener("click", function () {
    header.classList.toggle("menu-open");
});
