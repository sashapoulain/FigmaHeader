const pricing = document.querySelector(".pricing");
const login = document.querySelector(".login");

document.querySelector(".pricing").addEventListener("mouseover", function(e) {
    if (hamburger.classList.contains("active")) {
        pricing.style.borderBottom = "1px solid black";
    }
    e.preventDefault();
});
document.querySelector(".pricing").addEventListener("mouseover", function(e) {
    if (navBar.classList.contains("navbar-open")) {
        pricing.style.borderBottom = "3px solid black";
    }
    e.preventDefault();
});
document.querySelector(".pricing").addEventListener("mouseout", function(e) {
    if (navBar.classList.contains("navbar-open")) {
        pricing.style.borderBottom = "none";
    }
    e.preventDefault();
});
pricing.addEventListener("mouseout", function(e) {
    if (hamburger.classList.contains("active")) {
        pricing.style.borderBottom = "none";
    }
});

document.querySelector(".login").addEventListener("mouseover", function(e) {
    if (hamburger.classList.contains("active")) {
        login.style.borderBottom = "none";
    }
    e.preventDefault();
});

document.querySelector(".login").addEventListener("mouseover", function(e) {
    if (navBar.classList.contains("navbar-open")) {
        login.style.borderBottom = "3px solid black";
    }
    e.preventDefault();
});
document.querySelector(".login").addEventListener("mouseout", function(e) {
    if (navBar.classList.contains("navbar-open")) {
        login.style.borderBottom = "none";
    }
    e.preventDefault();
});