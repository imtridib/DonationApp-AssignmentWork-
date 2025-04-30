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
document
  .getElementById("btnMoney-Feni")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateMoney = getInputFieldValueById("donateFeni");
    
    if (isNaN(donateMoney)) {
      alert("Failed to cash out");
      return;
    }

    const donationOfFeni = getTextFieldValueById("donateMoneyFeniFlood");

    const newFeniDonation = donationOfFeni + donateMoney;
    
    document.getElementById("donateMoneyFeniFlood").innerText = newFeniDonation;
  });
document
  .getElementById("btnMoney-Quota")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateMoney = getInputFieldValueById("donateQuota");
    
    if (isNaN(donateMoney)) {
      alert("Failed to Donate please enter amount!");
      return;
    }

    const donationOfFeni = getTextFieldValueById("donationForQuota");

    const newFeniDonation = donationOfFeni + donateMoney;
    
    document.getElementById("donationForQuota").innerText = newFeniDonation;
  });
