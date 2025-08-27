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
const defaultPinNumber = 3842;
/* Features for add money form */
document
  .getElementById("add-money-submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const initialBalance = getInnerText('initial-balance');
    console.log(initialBalance);
    const bankSelection = getInputValue('select-bank');
    console.log(bankSelection);
    const bankAccountNumber = getInputValue('bank-account-number');
    console.log(bankAccountNumber);

    const addAmount = getInputValueConverted('add-amount');
    console.log(addAmount)

    const pinNumber = getInputValueConverted('add-money-pin-number');
    console.log(pinNumber);

    if(bankAccountNumber.length !=11){
        alert("Please Provide a valid account number");
        return;
    }

    if(pinNumber !== defaultPinNumber){
        alert("please provide a valid pin number");
        return;
    }
    const newBalance = addAmount + initialBalance;
    document.getElementById('initial-balance').innerText= newBalance;

  });

/* features for cashOut */
document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const initialBalance = getInnerText('initial-balance');
    console.log(initialBalance);
    const agentNumber = getInputValue('agent-number');
    console.log(agentNumber);

    const withDrawAmount = getInputValueConverted('withdraw-amount');
    console.log(withDrawAmount);

    const pinNumber = getInputValueConverted('cash-out-pin');
    console.log(pinNumber);

    if(agentNumber.length !=11){
        alert("Please Provide a valid account number");
        return;
    }

    if(pinNumber !== defaultPinNumber){
        alert("please provide a valid pin number");
        return;
    }
    const newBalance = initialBalance- withDrawAmount;
    document.getElementById('initial-balance').innerText= newBalance;

  });
/* features for transfer money */
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const initialBalance = getInnerText('initial-balance');
    console.log(initialBalance);
    const userAccountNumberForTransfer = getInputValue('transfer-money-account-number');
    console.log(userAccountNumberForTransfer);

    const transferAmount = getInputValueConverted('transfer-amount');
    console.log(transferAmount);

    const pinNumber = getInputValueConverted('transfer-pin-number');
    console.log(pinNumber);

    if(userAccountNumberForTransfer.length !=11){
        alert("Please Provide a valid account number");
        return;
    }

    if(pinNumber !== defaultPinNumber){
        alert("please provide a valid pin number");
        return;
    }
    const newBalance = initialBalance- transferAmount;
    document.getElementById('initial-balance').innerText= newBalance;

  });

/* get bonus */
document
  .getElementById("bonus-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const initialBalance = getInnerText('initial-balance');
    console.log(initialBalance);
    
    const bonusAmount = getInputValueConverted('bonus-amount');
    console.log(bonusAmount);
    const newBalance = initialBalance+bonusAmount;
    document.getElementById('initial-balance').innerText= newBalance;

  });


  /* Features for add Pay Bill form */
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const initialBalance = getInnerText('initial-balance');
    console.log(initialBalance);

    const billSelection = getInputValue('select-bill');
    console.log(billSelection);
    const billerAccountNumber = getInputValue('biller-account-number');
    console.log(billerAccountNumber);

    const amountToPay = getInputValueConverted('paying-amount');
    console.log(amountToPay)

    const pinNumber = getInputValueConverted('pay-bill-pin');
    console.log(pinNumber);

    if(billerAccountNumber.length !=11){
        alert("Please Provide a valid account number");
        return;
    }

    if(pinNumber !== defaultPinNumber){
        alert("please provide a valid pin number");
        return;
    }
    const newBalance = initialBalance - amountToPay;
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

  /* toggle handler for add money */
  document.getElementById('add-money-toggle').addEventListener('click', function(){
    toggleHandler('add-money-container')
  })

  /* toggle handler for CashOut */
  document.getElementById('cashout-toggle').addEventListener('click', function(){
    toggleHandler('cashout-container')
  })
  /* toggle handler for Transfer Money */
  document.getElementById('transfer-money-toggle').addEventListener('click', function(){
    toggleHandler('transfer-money-container')
  })
  /* toggle handler for get bonus */
  document.getElementById('get-bonus-toggle').addEventListener('click', function(){
    toggleHandler('get-bonus-container')
  })

  /* toggle handler for pay bill */
   document.getElementById('pay-bill-toggle').addEventListener('click', function(){
    toggleHandler('pay-bill-container')
  }) 

  /* toggle handler for transaction */
  document.getElementById('transaction-toggle').addEventListener('click', function(){
    toggleHandler('transaction-container')
  })