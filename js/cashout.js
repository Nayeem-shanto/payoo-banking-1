document.getElementById('logout').addEventListener('click',function(){
    window.location.href='index.html';
})


document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
    const initialBalance = parseInt(document.getElementById('initial-balance').innerText);
    const agentNumber = document.getElementById('agent-number').value;
    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
    const pinNumber = parseInt(document.getElementById('pin-number').value);

    const defaultPinNumber = 3842;
    if(agentNumber.length != 11){
        alert("Enter a valid agent number");
        return;
    }
    if(pinNumber != defaultPinNumber){
        alert("Please enter valid pin");
        return;
    }

    const newBalance = initialBalance - withdrawAmount;
    document.getElementById('initial-balance').innerText = newBalance;
})