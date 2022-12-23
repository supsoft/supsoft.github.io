window.addEventListener("scroll", function (event) {
    scrollEvent();
});

function scrollEvent() {
    var scroll = this.scrollY;
    var home = window.innerHeight - 100;
    var projects = 2 * window.innerHeight - 100;
    var about = 3 * window.innerHeight - 100;
    var contact = 4 * window.innerHeight - 100;
    if (scroll < home) {
        console.log("home");
        document.getElementById("homelink").classList.add("active");
        document.getElementById("projectslink").classList.remove("active");
        document.getElementById("aboutlink").classList.remove("active");
        document.getElementById("contactlink").classList.remove("active");
    } else if (scroll < projects) {
        console.log("projects");
        document.getElementById("homelink").classList.remove("active");
        document.getElementById("projectslink").classList.add("active");
        document.getElementById("aboutlink").classList.remove("active");
        document.getElementById("contactlink").classList.remove("active");
    } else if (scroll < about) {
        console.log("about");
        document.getElementById("homelink").classList.remove("active");
        document.getElementById("projectslink").classList.remove("active");
        document.getElementById("aboutlink").classList.add("active");
        document.getElementById("contactlink").classList.remove("active");
    } else if (scroll < contact) {
        console.log("contact");
        document.getElementById("homelink").classList.remove("active");
        document.getElementById("projectslink").classList.remove("active");
        document.getElementById("aboutlink").classList.remove("active");
        document.getElementById("contactlink").classList.add("active");
    }
}