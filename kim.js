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
