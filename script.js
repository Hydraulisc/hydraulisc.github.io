const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuWrapper = document.querySelector(".menu-wrapper");
const hasCollapsible = document.querySelectorAll(".has-collapsible");
const toggleAnimB = document.querySelector(".nav_anim_toggle_child");
const drip1 = document.querySelector(".dripplets");

window.onload = function() {
    const dripCookie = getCookie("drip");

    if(!dripCookie){
        returnDrip();
    } else if(dripCookie == "true") {
        returnDrip();
    } else if(dripCookie == "false") {
        noDrip();
    }
}

// simple link redirect funct for buttons
function redirect(link) {
    window.location.href = link;
}

// simple cookie reader
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2)
        return parts.pop().split(";").shift();
}

function noDrip() {
    // Set the expiration date to one year from now
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    // Set the cookie with the name "drip" and the desired value
    document.cookie = "drip=" + false + "; expires=" + expirationDate.toUTCString() + "; SameSite=Strict";
    drip1.style.display = "none";
    toggleAnimB.innerHTML = `<img src="/assets/icons/drop.png" style="max-width: 32px;">`
}

function returnDrip() {
    // Set the expiration date to one year from now
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    // Set the cookie with the name "drip" and the desired value
    document.cookie = "drip=" + true + "; expires=" + expirationDate.toUTCString() + "; SameSite=Strict";
    drip1.style.display = "block";
    toggleAnimB.innerHTML = `<img src="/assets/icons/nodrop.png" style="max-width: 32px;">`
}

// Navbar Drip Animation Toggle
toggleAnimB.addEventListener("click", function(){
    const dripCookie = getCookie("drip");

    if(!dripCookie){
        noDrip();
    } else if(dripCookie == "true") {
        noDrip();
    } else if(dripCookie == "false") {
        returnDrip();
    }
})

// Sidenav Toggle
openMenu.addEventListener("click", function () {
    menuWrapper.classList.add("offcanvas");
});

closeMenu.addEventListener("click", function () {
    menuWrapper.classList.remove("offcanvas");
});

// Collapsible Menu
hasCollapsible.forEach(function (collapsible) {
    collapsible.addEventListener("click", function () {
        collapsible.classList.toggle("active");

        // Close Other Collapsible
        hasCollapsible.forEach(function (otherCollapsible) {
            if (otherCollapsible !== collapsible) {
                otherCollapsible.classList.remove("active");
            }
        });
    });
});