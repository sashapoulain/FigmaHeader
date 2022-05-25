const communityLink = document.querySelector(".community-link");
const comDiv = document.querySelector(".gen-div");
const comDropDown = document.querySelector(".comunitydropdown");
const comDropDownList = document.querySelector(".comdropdownlist");

document.querySelector(".community-link").addEventListener("mouseover", () => {
    if (!hamburger.classList.contains("active")) {
        communityLink.classList.add("over");
        if (communityLink.classList.contains("over")) {
            comDiv.style.display = "flex";
        }
    }
});

comDiv.addEventListener("mouseover", () => {
    comDiv.style.display = "flex";
});
comDiv.addEventListener("mouseout", () => {
    comDiv.style.display = "none";
});

document
    .querySelector(".community-link")
    .addEventListener("click", function(e) {
        if (hamburger.classList.contains("active")) {
            if (communityLink.classList.contains("show")) {
                communityLink.classList.remove("show");
                comDropDown.classList.remove("show");
                comDropDown.style.display = "none";
            } else {
                communityLink.classList.add("show");
                comDropDown.classList.add("show");
                comDropDown.style.display = "block";
            }
        }
        e.preventDefault();
    });