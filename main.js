const currentEl_one = document.getElementById("conversionOne");
const currentEl_two = document.getElementById("conversionTwo");
const amountOne = document.getElementById("amountOne");
const amountTwo = document.getElementById("amountTwo");

const rateVal = document.getElementById("rate");

const calcular = () => {
  const currency = currentEl_one.value;
  const currencyTwo = currentEl_two.value;
  fetch(
    `https://v6.exchangerate-api.com/v6/04e372966166804aea004f4e/latest/${currency}`
  )
    .then((response) => response.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTwo];
      rateVal.innerHTML = `1 ${currency} = ${rate.toFixed(2)} ${currencyTwo}`;
      amountTwo.value = (rate * amountOne.value).toFixed(2);
    });
};

currentEl_one.addEventListener("change", calcular);
currentEl_two.addEventListener("change", calcular);
amountOne.addEventListener("input", calcular);
amountTwo.addEventListener("input", calcular);
calcular();
