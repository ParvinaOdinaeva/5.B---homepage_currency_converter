let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currenciesElement = document.querySelector(".js-currencies");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currenciesElement.value;
  let result;

  let rateEUR = 4.0;
  let rateUSD = 3.0;
  let rateGBP = 5.0;

  
    switch (currency) {
      case "EUR":
        result = amount / rateEUR;
        break;

      case "USD":
        result = amount / rateUSD;
        break;

      case "GBP":
        result = amount / rateGBP;
        break;
  };

  resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
  

});
