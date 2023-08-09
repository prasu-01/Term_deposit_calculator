const initialAmount = document.getElementById("initialAmount");
const interestRate = document.getElementById("interestRate");
const term = document.getElementById("term");
const depositInterval = document.getElementById("rate");
const form = document.getElementById("calcuator-form");
const result = document.getElementById("result");


form.addEventListener("submit", (event) => {
    event.preventDefault();


    const principal = parseInt(initialAmount.value);
    const period = parseFloat(term.value);
    const rate = parseFloat(interestRate.value);
    const interval = parseInt(depositInterval.value);

    let finalAmount = principal * Math.pow(1 + (rate / 100), (interval * period));     
            
    result.innerHTML = finalAmount.toFixed(2);

});
