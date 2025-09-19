// /** @format */
// // Utilities function
// // For DOM uses
// function getInputFieldValueById(id) {
//   const inputValue = document.getElementById(id).value;
//   const inputNumber = parseFloat(inputValue);

//   return inputNumber;
// }
// // Text Value from input value
// function getTextFieldValueById(id) {
//   const textValue = document.getElementById(id).innerText;
//   const textNumber = parseFloat(textValue);

//   return textNumber;
// }

// function showSectionById(id) {
//   // hide all the sections
//   if (id == "blog") {
//     document.getElementById("home").classList.remove("hidden");
//     document.getElementById("blog-post").classList.remove("hidden");
//     document.getElementById("functionalKey").classList.add("hidden");
//     document.getElementById("donation").classList.add("hidden");
//     // show the section with the provide id as parameter
//     document.getElementById(id).classList.add("hidden");
//   } else {
//     document.getElementById("blog").classList.remove("hidden");
//     document.getElementById("blog-post").classList.add("hidden");
//     document.getElementById("functionalKey").classList.remove("hidden");
//     document.getElementById("donation").classList.remove("hidden");
//     // show the section with the provide id as parameter
//     document.getElementById(id).classList.add("hidden");
//   }

//   if (id == "donation") {
//     // hide all the sections
//     document.getElementById("donation-history").classList.add("hidden");
//     // show the section with the provide id as parameter
//     document.getElementById(id).classList.remove("hidden");
//   }
//   if (id == "donation-history") {
//     // hide all the sections
//     document.getElementById("donation").classList.add("hidden");
//     // show the section with the provide id as parameter
//     document.getElementById(id).classList.remove("hidden");
//   }
// }

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
  // Hide all sections first
  document.getElementById("blog-post").classList.add("hidden");
  document.getElementById("functionalKey").classList.add("hidden");
  document.getElementById("donation").classList.add("hidden");
  document.getElementById("donation-history").classList.add("hidden");

  // Reset navbar buttons
  document.getElementById("blog").classList.remove("hidden");
  document.getElementById("home").classList.remove("hidden");

  if (id === "blog") {
    // Show only blog/Q&A
    document.getElementById("blog-post").classList.remove("hidden");
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("blog").classList.add("hidden");
  } 
  else if (id === "home") {
    // Show donation/home sections
    document.getElementById("functionalKey").classList.remove("hidden");
    document.getElementById("donation").classList.remove("hidden");
    document.getElementById("blog").classList.remove("hidden");
    document.getElementById("home").classList.add("hidden");
  } 
  else if (id === "donation") {
    document.getElementById("functionalKey").classList.remove("hidden");
    document.getElementById("donation").classList.remove("hidden");
  } 
  else if (id === "donation-history") {
    document.getElementById("donation-history").classList.remove("hidden");
  }
}
