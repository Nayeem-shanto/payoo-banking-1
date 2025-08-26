document.getElementById('logout').addEventListener('click',function(){
    window.location.href='index.html';
})


document.getElementById('transfer-btn').addEventListener('click', function(e){
    e.preventDefault();
    const availableBalance = parseInt(document.getElementById('initial-balance').innerText);
    const userAccount = document.getElementById('account-number').value;
    const transferAmount = parseInt(document.getElementById('amount').value);
    const pinNumber = parseInt(document.getElementById('pin-number').value);
    const defaultPinNumber = 3842;
    if(userAccount.length != 11){
        alert('please enter a valid account number');
        return;
    }
    if(pinNumber != defaultPinNumber){
        alert('enter a valid pin Number');
        return;
    }

    const newAvailableBalance = availableBalance - transferAmount;
    document.getElementById('initial-balance').innerText= newAvailableBalance;
})

