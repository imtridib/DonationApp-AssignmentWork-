/** @format */
// Utilities function
// For DOM uses
function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);

  return inputNumber;
}
// Text Value from input value
function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);

  return textNumber;
}

function showSectionById(id) {
  // hide all the sections
  if (id == "blog") {
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("blog-post").classList.remove("hidden");
    document.getElementById("functionalKey").classList.add("hidden");
    document.getElementById("donation").classList.add("hidden");
    // show the section with the provide id as parameter
    document.getElementById(id).classList.add("hidden");
  } else {
    document.getElementById("blog").classList.remove("hidden");
    document.getElementById("blog-post").classList.add("hidden");
    document.getElementById("functionalKey").classList.remove("hidden");
    document.getElementById("donation").classList.remove("hidden");
    // show the section with the provide id as parameter
    document.getElementById(id).classList.add("hidden");
  }

  if (id == "donation") {
    // hide all the sections
    document.getElementById("donation-history").classList.add("hidden");
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove("hidden");
  }
  if (id == "donation-history") {
    // hide all the sections
    document.getElementById("donation").classList.add("hidden");
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove("hidden");
  }
}
