const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuWrapper = document.querySelector(".menu-wrapper");
const hasCollapsible = document.querySelectorAll(".has-collapsible");
const toggleAnimB = document.querySelector(".nav_anim_toggle_child");



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