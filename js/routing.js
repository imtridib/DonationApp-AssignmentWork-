/** @format */
// Routings are added
document.getElementById("donate").addEventListener("click", function () {
  showSectionById("donation");
});

document.getElementById("donate-history").addEventListener("click", function () {
  showSectionById("donation-history");
});

// Blog side
document.getElementById("blog").addEventListener("click", function () {
  showSectionById("blog");
});

// Home side
document.getElementById("home").addEventListener("click", function () {
  showSectionById("home");
});

// ✅ Default view on first render (Home only, no blog/Q&A)
document.addEventListener("DOMContentLoaded", function () {
  showSectionById("home");
});
