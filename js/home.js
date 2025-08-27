document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "index.html";
});



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

/* Features for add money form */
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


  /* toggling features */
/* toggle handler for add money */
  /* document.getElementById('add-money-toggle').addEventListener('click', function(e){
    e.preventDefault();
    const allToggleClass = document.getElementsByClassName('toggle-handler');
  console.log(allToggleClass);
  for(const singleToggleClass of allToggleClass){
    console.log(singleToggleClass);
    singleToggleClass.style.display= "none";
  }
  document.getElementById('add-money-container').style.display="block";
  }) */
  
  function toggleHandler(id){
    const allToggleClass = document.getElementsByClassName('toggle-handler');
  console.log(allToggleClass);
  for(const singleToggleClass of allToggleClass){
    console.log(singleToggleClass);
    singleToggleClass.style.display= "none";
  }
  document.getElementById(id).style.display="block";
  }

  document.getElementById('add-money-toggle').addEventListener('click', function(){
    toggleHandler('add-money-container')
  })