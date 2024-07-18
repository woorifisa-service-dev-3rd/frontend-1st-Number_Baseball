// 버튼 클릭 이벤트 처리


const input1 = document.getElementById('number1');
const input2 = document.getElementById('number2');
const input3 = document.getElementById('number3');
const input4 = document.getElementById('number4');

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
        disableAllButtonsExceptSelected();
    }


}

function disableAllButtonsExceptSelected() {
    // 모든 버튼을 찾아서 disabled 처리
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.disabled) {
            if (button.id !== 'reset' && button.id !== 'answer' && button.id !== 'method_id')
                button.disabled = true;
        }

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

