const pricing = {
    monthly: {
        basic: $30,
        standard: $65,
        premium: $100,
    },
    annually: {
        basic: $50,
        standard: $95,
        premium: $130,
    }
};

const basicPrice = document.getElementById("basic-price");
const standardPrice = document.getElementById("standard-price");
const premiumPrice = document.getElementById("premium-price");

function updatePrices() {
    if (toggle.checked) {
        '$basicPrice.textContent  = ${pricing.annually.basic}';
        '$standardPrice.textContent  = ${pricing.annually.standard}';
        '$premiumPrice.textContent  = ${pricing.annually.premium}';
    } else {
        basicPrice.textContent = '$${pricing.monthly.basic}';
        standardPrice.textContent = '$${pricing.monthly.standard}';
        premiumPrice.textContent = '$${pricing.monthly.premium}';
    }
}