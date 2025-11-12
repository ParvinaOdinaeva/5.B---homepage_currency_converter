{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.0;
    const rateUSD = 3.0;
    const rateGBP = 5.0;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "USD":
        return amount / rateUSD;

      case "GBP":
        return amount / rateGBP;
    }
  };


		const init = () => {
			const formElement = document.querySelector(".js-form");
			
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

    
    const resultElement = document.querySelector(".js-result");
    const amountElement = document.querySelector(".js-amount");
    const currenciesElement = document.querySelector(".js-currencies");
    const amount = +amountElement.value;
    const currency = currenciesElement.value;
    const result = calculateResult(amount, currency);

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
			});
  }

  init();
}
