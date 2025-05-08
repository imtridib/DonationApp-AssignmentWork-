/** @format */
// Noakhali DOnation Function
document
  .getElementById("btnMoney-Noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateMoney = getInputFieldValueById("donateNoakhali");

    if (isNaN(donateMoney)) {
      alert("Failed to Donate please enter amount!");
      return;
    }

    const balance = getTextFieldValueById("accountBalance");
    if (isNaN(balance) || balance < 0) {
      alert("You're Currently out of Balance");
      return;
    } else {
      const donationOfFeni = getTextFieldValueById("donateMoneyNoakhaliFlood");

      const newFeniDonation = donationOfFeni + donateMoney;
      // Main Balance amount
      const newBalance = balance - donateMoney;
      if (isNaN(newBalance) || newBalance < 0) {
        alert("Not Enough Money in Balace to donate Please enter new amount.");
        return;
      } else {
        document.getElementById("accountBalance").innerText = newBalance;

        document.getElementById("donateMoneyNoakhaliFlood").innerText =
          newFeniDonation;

        const div = document.createElement("div");
        div.classList.add("bg-yellow-300");
        div.innerHTML = `
      <h4 class='text-2xl font-bold'>Donate Money</h4>
      <p>${donateMoney} taka donated, New Balance ${newBalance}</p>`;

        document.getElementById("donation-history").appendChild(div);
      }
    }
  });
// Feni Donation Function
document
  .getElementById("btnMoney-Feni")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateMoney = getInputFieldValueById("donateFeni");

    if (isNaN(donateMoney)) {
      alert("Failed to Donate please enter amount!");
      return;
    }
    const balance = getTextFieldValueById("accountBalance");
    if (isNaN(balance) || balance < 0) {
      alert("You're Currently out of Balance");
      return;
    }

    const donationOfFeni = getTextFieldValueById("donateMoneyFeniFlood");

    const newFeniDonation = donationOfFeni + donateMoney;
    // Main Balance amount
    const newBalance = balance - donateMoney;
    if (isNaN(newBalance) || newBalance < 0) {
      alert("Not Enough Money in Balace to donate Please enter new amount.");
      return;
    } else {
      document.getElementById("accountBalance").innerText = newBalance;
      document.getElementById("donateMoneyFeniFlood").innerText =
        newFeniDonation;
    }
  });
// Quota Donation Function
document
  .getElementById("btnMoney-Quota")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateMoney = getInputFieldValueById("donateQuota");

    if (isNaN(donateMoney)) {
      alert("Failed to Donate please enter amount!");
      return;
    }

    const balance = getTextFieldValueById("accountBalance");
    if (isNaN(balance) || balance < 0) {
      alert("You're Currently out of Balance");
      return;
    }

    const donationOfFeni = getTextFieldValueById("donationForQuota");

    const newFeniDonation = donationOfFeni + donateMoney;
    // Main Balance amount
    const newBalance = balance - donateMoney;
    if (isNaN(newBalance) || newBalance < 0) {
      alert("Not Enough Money in Balace to donate Please enter new amount.");
      return;
    } else {
      document.getElementById("accountBalance").innerText = newBalance;
      document.getElementById("donationForQuota").innerText = newFeniDonation;
    }
  });
