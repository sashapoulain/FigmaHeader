document.querySelector(".enterprise").addEventListener("mouseover", () => {
    if (!hamburger.classList.contains("active")) {
        enterprise.classList.add("over");
        if (enterprise.classList.contains("over")) {
            dropdown3.style.display = "block";
        }
    }
});
dropdown3.addEventListener("mouseover", () => {
    dropdown3.style.display = "block";
});
dropdown3.addEventListener("mouseout", () => {
    dropdown3.style.display = "none";
});
document.querySelector(".enterprise").addEventListener("click", function(e) {
    if (hamburger.classList.contains("active")) {
        if (enterprise.classList.contains("show")) {
            enterprise.classList.remove("show");
            enterpriseLink.classList.remove("show");
            enterpriseLink.style.display = "none";
        } else {
            enterprise.classList.add("show");
            enterpriseLink.classList.add("show");
            enterpriseLink.style.display = "block";
        }
    }
    e.preventDefault();
});