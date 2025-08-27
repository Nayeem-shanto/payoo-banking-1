document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "index.html";
});

/* Features for add money form */

/* function for all inner text */
function getInnerText(id){
    const amount = parseInt(document.getElementById(id).innerText);
    return amount;
}
/* function for all input value */
function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}
/* function for all input value converted in integer */

function getInputValueConverted(id){
    const inputValueConverted = parseInt(document.getElementById(id).value);
    return inputValueConverted;
}


document
  .getElementById("add-money-submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const defaultPinNumber = 3842;
    const initialBalance = getInnerText('initial-balance');
    console.log(initialBalance);
    const bankSelection = getInputValue('select-bank');
    console.log(bankSelection);
    const bankAccountNumber = getInputValue('bank-account-number');
    console.log(bankAccountNumber);

    const addAmount = getInputValueConverted('add-amount');
    console.log(addAmount)

    const pinNumber = getInputValueConverted('pin-number');
    console.log(pinNumber);

    if(bankAccountNumber.length !=11){
        alert("Please Provide a valid account number");
        return;
    }

    if(pinNumber != defaultPinNumber){
        alert("please provide a valid pin number");
    }
    const newBalance = addAmount + initialBalance;
    document.getElementById('initial-balance').innerText= newBalance;



  });
