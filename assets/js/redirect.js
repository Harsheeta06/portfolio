document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    if (path === "/project1") {
        window.location.href = "project1.html";
    } else if (path === "/project2") {
        window.location.href = "project2.html";
    } else if (path === "/project3") {
        window.location.href = "project3.html";
    } else if (path === "/about") {
        window.location.href = "about.html";
    } else if (path === "/certifications") {
        window.location.href = "certifications.html";
    }
});
