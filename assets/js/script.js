window.addEventListener("scroll", function (event) {
    scrollEvent();
});

function scrollEvent() {
    const scroll = this.scrollY;
    const home = window.innerHeight - 100;
    const projects = 2 * window.innerHeight - 100;
    const about = 3 * window.innerHeight - 100;
    const contact = 4 * window.innerHeight - 100;

    document.getElementById("homelink").classList.toggle("active", scroll < home);
    document.getElementById("projectslink").classList.toggle("active", scroll >= home && scroll < projects);
    document.getElementById("aboutlink").classList.toggle("active", scroll >= projects && scroll < about);
    document.getElementById("contactlink").classList.toggle("active", scroll >= about && scroll < contact);
}

function toggleMenu() {
    document.getElementById("navbar-wide").classList.toggle("dont-display-navbar");
    document.getElementById("navbar-small").classList.toggle("dont-display-navbar");
    
    document.getElementById("home").classList.toggle("nav-is-wide");
    document.getElementById("projects").classList.toggle("nav-is-wide");
    document.getElementById("about").classList.toggle("nav-is-wide");
    document.getElementById("contact").classList.toggle("nav-is-wide");

    document.getElementById("home").classList.toggle("nav-is-small");
    document.getElementById("projects").classList.toggle("nav-is-small");
    document.getElementById("about").classList.toggle("nav-is-small");
    document.getElementById("contact").classList.toggle("nav-is-small");
}