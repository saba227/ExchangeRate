let From = document.getElementById("From");
let To = document.getElementById("To");
let number = document.getElementById("number");
let disabled = document.getElementById("disabled");


function submitButton(result) {
    fetch('https://v6.exchangerate-api.com/v6/9932de00e48ce7dead0c6fdb/latest/' + From.value)
    .then(response => response.json())
    .then(finalDate => {
        result = finalDate.conversion_rates[To.value] * number.value;
        disabled.value = `${number.value} ${From.value} = ${result.toFixed(2)} ${To.value}`;
        number.value = '';
        number.focus();
    })
    .catch(err => reject(err));
}