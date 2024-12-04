document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const inputAmount = getConvertInputValue('input-add-money');
    const pinNumber = getConvertInputValue('input-cash-out');

    const balance = getDivValueToNumber('balance');
    if(isNaN(inputAmount)) {
        alert("Your amount input is incorrect!")
    }

    if (pinNumber === 2121) {
        const newBalance = inputAmount + balance;
        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert("Wrong pin number! Please try again!")
    }
});