console.log("file connected");

document.getElementById('add-money').addEventListener('click', function(e){
     e.preventDefault();
    // console.log("button worked");
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const selectBank = document.getElementById('select-bank');
    const accountNumber =document.getElementById('account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const pinNumber = parseInt(document.getElementById('pin-number').value);

    // console.log(availableBalance,selectBank,accountNumber,addAmount,pinNumber);
    const defaultPinNumber = 3842;
    if(accountNumber.length < 11){
        alert("Please provide a valid account number");
    }
    if(defaultPinNumber != pinNumber){
        alert("Please provide the valid pin number")
        return;
    }
    const newBalance = addAmount+availableBalance;
    document.getElementById('available-balance').innerText=newBalance;
})

document.getElementById('logout').addEventListener('click',function(){
    window.location.href='index.html';
})