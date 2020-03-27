const $burger = document.querySelector(".burger");
const $navLinks = document.querySelector(".nav_links");
const $nav = document.querySelector(".nav_links liS");
$burger, onclick = () => {
    $navLinks.classList.toggle("nav-clicked");
    $burger.classList.toggle("burger-clicked");
    nav.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = "navLinkAnimaion 0.5s ease forward ${index /5+ 0.5}s";
        }
    });
};