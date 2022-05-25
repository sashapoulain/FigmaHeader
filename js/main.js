const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const button = document.querySelector(".button");
const navBar = document.querySelector(".navbar");
const productsLink = document.querySelector(".products-link");
const productsDiv = document.querySelector(".productsDiv");
const productClicked = document.querySelector(".click-product-menu");
const enterpriseLink = document.querySelector(".enterprise-link");
const enterprise = document.querySelector(".enterprise");
const dropdown3 = document.querySelector(".dropdown3");
const dropdown3List = document.querySelector(".dropdown3-list");

document.querySelector(".products-link").addEventListener("mouseover", () => {
    if (!hamburger.classList.contains("active")) {
        productsLink.classList.add("over");
        if (productsLink.classList.contains("over")) {
            productsDiv.style.display = "flex";
        }
    }
});
productsDiv.addEventListener("mouseover", () => {
    productsDiv.style.display = "flex";
});
productsDiv.addEventListener("mouseout", () => {
    productsDiv.style.display = "none";
});

document
    .querySelector(".products-link")
    .addEventListener("click", function(e) {
        if (hamburger.classList.contains("active")) {
            if (productsLink.classList.contains("show")) {
                productsLink.classList.remove("show");
                productClicked.classList.remove("show");
                productClicked.style.display = "none";
            } else {
                productsLink.classList.add("show");
                productClicked.classList.add("show");
                productClicked.style.display = "block";
            }
        }
        e.preventDefault();
    });

//just controlling things to make it work
function control() {
    if (hamburger.classList.contains("active")) {} else {}
}

function navbarOpen() {
    control();
    if (navBar.classList.contains("navbar-open")) {
        navBar.classList.remove("navbar-open");
    } else {
        navBar.appendChild(button);
        button.style.display = "block";
    }
}

document.querySelector(".hamburger").addEventListener("click", function(e) {
    navbarOpen();
    e.preventDefault();
    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        button.style.display = "block";
        navBar.classList.add("navbar-open");
    } else {
        hamburger.classList.add("active");
        navMenu.classList.add("active");
        button.style.display = "none";
        navBar.classList.remove("navbar-open");
    }
});