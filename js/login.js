document.getElementById('btn-login').addEventListener('click', function (event) {

    event.preventDefault();

    const inputNumber = document.getElementById('input-mobile-number').value;

    const inputPin = getConvertInputValue('input-pin-number');

    if (inputNumber.length <= 11 && inputPin === 2121) {
        window.location = '/home.html';
    }
    else {
        alert("Field login! Please full fill valid info")
    };
});