let sideMenu = document.querySelector(".navBar");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

let fullImageBox = document.getElementById("fullImageBox");
let fullImage = document.getElementById("fullImage");

function openFullImage(pic) {
    fullImageBox.style.display = "flex";
    fullImage.src = pic;
}

function closeFullImage() {
    fullImageBox.style.display = "none";
}

