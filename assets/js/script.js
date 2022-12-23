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