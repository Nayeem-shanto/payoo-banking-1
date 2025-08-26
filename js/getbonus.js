document.getElementById('logout').addEventListener('click',function(){
    window.location.href='index.html';
})

document.getElementById('bonus-btn').addEventListener('click', function(e){
    e.preventDefault();
    const initialBalance = parseInt(document.getElementById('initial-balance').innerText);
    const bonusAmount = parseInt(document.getElementById('bonus-amount').value);
    const newBalance = initialBalance + bonusAmount;
    document.getElementById('initial-balance').innerText = newBalance;
})