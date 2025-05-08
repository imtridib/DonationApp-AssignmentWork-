/** @format */
// Routing between the pages is performed here
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

document.getElementById("donate").addEventListener("click", function () {
  showSectionById("donation");
});

document.getElementById("donate-history").addEventListener("click", function () {
  showSectionById("donation-history");
});