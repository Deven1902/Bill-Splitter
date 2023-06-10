document.getElementById("splitBtn").addEventListener("click", function() {
  var totalAmount = parseFloat(document.getElementById("total").value);
  var numberOfPeople = parseInt(document.getElementById("people").value);
  var tipPercentage = parseFloat(document.getElementById("tip").value);

  if (isNaN(totalAmount) || isNaN(numberOfPeople) || isNaN(tipPercentage) || numberOfPeople < 1) {
    document.getElementById("result").textContent = "Please enter valid values.";
    return;
  }

  var tipAmount = totalAmount * (tipPercentage / 100);
  var totalAmountWithTip = totalAmount + tipAmount;
  var splitAmount = totalAmountWithTip / numberOfPeople;
  
  document.getElementById("result").textContent = "Each person should pay: Rs. " + splitAmount.toFixed(2);
});