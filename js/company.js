const company = document.querySelector(".company");
const companyList = document.querySelector(".dropdown-list2");
const componydropdown = document.querySelector(".componyd");
const companydList = document.querySelector(".comdlist");

document.querySelector(".company").addEventListener("mouseover", () => {
    if (!hamburger.classList.contains("active")) {
        company.classList.add("over");
        if (company.classList.contains("over")) {
            companyList.style.display = "block";
        }
    }
});
companyList.addEventListener("mouseover", () => {
    companyList.style.display = "block";
});
companyList.addEventListener("mouseout", () => {
    companyList.style.display = "none";
});

document.querySelector(".company").addEventListener("click", function(e) {
    if (hamburger.classList.contains("active")) {
        if (company.classList.contains("show")) {
            company.classList.remove("show");
            componydropdown.classList.remove("show");
            componydropdown.style.display = "none";
        } else {
            company.classList.add("show");
            componydropdown.classList.add("show");
            componydropdown.style.display = "block";
        }
    }
    e.preventDefault();
});