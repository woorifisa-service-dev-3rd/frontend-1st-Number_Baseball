window.onload = function () {
    document.getElementById('number1').focus();
};

const inputs = document.querySelectorAll('input[id^="number"]');
inputs.forEach((input, index) => {
    input.addEventListener('keyup', function (event) {
        const key = event.key;

        if (key === 'Backspace' || key === 'Delete') {
            if (index > 0) {
                inputs[index - 1].focus();
            }
        }
    });
});

const inputs2 = document.querySelectorAll('input[id^="number"]');
inputs2.forEach((input, index) => {
    input.addEventListener('keyup', function (event) {
        const key = event.key;

        if (key !== 'Backspace' && key !== 'Delete') {
            if (index < 4) {
                inputs[index + 1].focus();
            }
        }
    });
});
