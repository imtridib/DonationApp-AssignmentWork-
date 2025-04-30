/** @format */

document
  .getElementById("btnMoney-Noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateMoney = getInputFieldValueById("donateNoakhali");

    if (isNaN(donateMoney)) {
      alert("Failed to cash out");
      return;
    }

    const donationOfFeni = getTextFieldValueById("donateMoneyNoakhaliFlood");

    const newFeniDonation = donationOfFeni + donateMoney;
    
    document.getElementById("donateMoneyNoakhaliFlood").innerText = newFeniDonation;
  });

document.getElementById("btnMoney-Feni").addEventListener("click", function () {
  console.log("its working");
});

document
  .getElementById("btnMoney-Quota")
  .addEventListener("click", function () {
    console.log("its working");
  });
