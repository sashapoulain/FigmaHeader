const english = document.querySelector(".english");
const englishDropdown = document.querySelector(".dropdown1");
const englishClickdrop = document.querySelector(".englishd");
const englishClickList = document.querySelector(".englishdlist");

document.querySelector(".english").addEventListener("mouseover", () => {
    if (!hamburger.classList.contains("active")) {
        english.classList.add("over");
        if (english.classList.contains("over")) {
            englishDropdown.style.display = "block";
        }
    }
});
englishDropdown.addEventListener("mouseover", () => {
    englishDropdown.style.display = "block";
});
englishDropdown.addEventListener("mouseout", () => {
    englishDropdown.style.display = "none";
});

document.querySelector(".english").addEventListener("click", function(e) {
    if (hamburger.classList.contains("active")) {
        if (english.classList.contains("show")) {
            english.classList.remove("show");
            englishClickdrop.classList.remove("show");
            englishClickdrop.style.display = "none";
        } else {
            english.classList.add("show");
            englishClickdrop.classList.add("show");
            englishClickdrop.style.display = "block";
        }
    }
    e.preventDefault();
});