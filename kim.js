window.onload = function () {
    document.getElementById('number1').focus();
};
//1.
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


inputs.forEach((input, index) => {
    input.addEventListener('input', function (event) {

        const key = event.target.value;
        if (key !== 'Backspace' && key !== 'Delete') {
            if (key >= '0' && key <= '9') {
                if (index < 4) {
                    inputs[index + 1].focus();
                }

            }
        }
    });
});

// 키보드 입력시 중복숫자방지 31~65 line
const input1 = document.getElementById('number1');
const input2 = document.getElementById('number2');
const input3 = document.getElementById('number3');
const input4 = document.getElementById('number4');

input1.addEventListener('input', () => {
    b(1, 2, 3, 0);
})
input2.addEventListener('input', () => {
    b(0, 2, 3, 1);
})
input3.addEventListener('input', () => {
    b(0, 1, 3, 2);
})
input4.addEventListener('input', () => {
    b(0, 1, 2, 3);
    if(input4.value !== ''){
        answer.disabled=false;
    }
})
//3.
function b(a, b, c, d) {
    let keynum = ['', '', '', ''];
    const inputs = document.querySelectorAll('input[id^=number]');
    inputs.forEach((input, index) => {
        keynum[index] = input.value;
    })
    if (inputs[d].value === keynum[a] || inputs[d].value === keynum[b] || inputs[d].value === keynum[c]) {
        inputs[d].value = '';
        inputs[d].focus();
    };



    // const inputs = document.querySelectorAll('input[id^=number]');
    // inputs.forEach(input => {
    //     if (input.value === keynum[a] || input.value === keynum[b] || input.value === keynum[c]) {
    //         input.value = '';
    //     }
    // })
}

// 버튼 클릭 이벤트 처리

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');

const reset = document.getElementById('reset');
const answer = document.getElementById('answer');
const method = document.getElementById('method_id');

//버튼이 한번 눌리면 두번 이상 눌리지 않도록
//reset 누르면 다시 누를 수 있도록



function a(btn) {

    const number = btn.querySelector('strong').textContent;

    if (input1.value === '') {
        input1.value = number;
    } else if (input2.value === '') {
        input2.value = number;
    } else if (input3.value === '') {
        input3.value = number;
    } else if (input4.value === '') {
        input4.value = number;
    };

    btn.disabled = true;

    if (input1.value !== '' && input2.value !== '' && input3.value !== '' && input4.value !== '') {
        answer.disabled=false
        disableAllButtonsExceptSelected();
    }


}

function disableAllButtonsExceptSelected() {
    // 모든 버튼을 찾아서 disabled 처리
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button => {
            if (!button.disabled) {
                button.disabled = true;
            }
        }

        function resetInputs() {
            const buttons = document.querySelectorAll('.btn-primary');
            let inputs = document.querySelectorAll('input[id^="number"]');
            inputs.forEach(input => {
                input.value = '';
            });
            document.getElementById('number1').focus();
            buttons.forEach(() => {
                button.disabled = false;
            })
        }
        const resetButton = document.getElementById('reset');
        const answerButton = document.getElementById('answer');
        resetButton.addEventListener('click', resetInputs);
        answerButton.addEventListener('click', resetInputs);
    });
};

btn1.addEventListener('click', () => {
    a(btn1);
});

btn2.addEventListener('click', () => {
    a(btn2);
});

btn3.addEventListener('click', () => {
    a(btn3);
});

btn4.addEventListener('click', () => {
    a(btn4);
});

btn5.addEventListener('click', () => {
    a(btn5);
});

btn6.addEventListener('click', () => {
    a(btn6);
});

btn7.addEventListener('click', () => {
    a(btn7);
});

btn8.addEventListener('click', () => {
    a(btn8);
});

btn9.addEventListener('click', () => {
    a(btn9);
});

btn0.addEventListener('click', () => {
    a(btn0);
});

