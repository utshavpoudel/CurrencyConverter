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


const amountInput = document.querySelector("#amount");
const result = document.querySelector("#result");

function convertCurrency() {

    let amount = parseFloat(amountInput.value);

    if (isNaN(amount)) {
        result.innerText = "0";
        return;
    }

    let convertedAmount;

    // usd to npr
    if (fromCurrency.value === "usd" && toCurrency.value === "nep") {
        convertedAmount = amount * 150;
        result.innerText = `${convertedAmount.toFixed(2)} NPR`;
    }

    // npr to usD
    else if (fromCurrency.value === "nep" && toCurrency.value === "usd") {
        convertedAmount = amount / 150;
        result.innerText = `${convertedAmount.toFixed(2)} USD`;
    }

    // Same to same eg: usd to usd
    else {
        result.innerText = `${amount.toFixed(2)}`;
    }
}


amountInput.addEventListener("input", convertCurrency);

fromCurrency.addEventListener("change", convertCurrency);

toCurrency.addEventListener("change", convertCurrency);