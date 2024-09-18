
document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();

    const phoneNumber =  document.getElementById('phone-number').value;
    const pin =  document.getElementById('pin').value;
    
    if (phoneNumber === '01674982831' && pin === '1234') {
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong Credentials')
    }

    

})