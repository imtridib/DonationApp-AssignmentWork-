/** @format */

const blogButton = document.getElementById("blog");
const homeButton = document.getElementById("home");

if (blogButton) {
  blogButton.addEventListener("click", function () {
    window.location.href = "/blog.html";
  });
}

if (homeButton) {
  homeButton.addEventListener("click", function () {
    window.location.href = "/index.html";
  });
}
