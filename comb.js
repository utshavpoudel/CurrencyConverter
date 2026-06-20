const swapBtn = document.querySelector("#swapBtn");
const fromFlag = document.querySelector("#fromFlag");
const toFlag = document.querySelector("#toFlag");

const fromCurrency = document.querySelector("#fromCurrency");
const toCurrency = document.querySelector("#toCurrency");

swapBtn.addEventListener("click", () => {

    // Swap flag images
    let tempFlag = fromFlag.src;
    fromFlag.src = toFlag.src;
    toFlag.src = tempFlag;

    // Swap currency values
    let tempCurrency = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCurrency;

});