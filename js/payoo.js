console.log("File Connected");

document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault();
    console.log("Button Clicked");
    const mobileNumber =1521570162;
    const pinNumber = 3842;

    
    const mobileNumberFromInput = document.getElementById('mobile-number');
    console.log(mobileNumberFromInput.value);
    const convertedNumber = parseInt(mobileNumberFromInput.value);
    const pinNumberFromInput = document.getElementById('pin-number');
    console.log(pinNumberFromInput.value);
    const convertedPin = parseInt(pinNumberFromInput.value);
    if(convertedNumber === mobileNumber && convertedPin === pinNumber){
        window.location.href= 'home.html';
        return;
    }
    else{
        alert("Invalid Credentials");
    }
})