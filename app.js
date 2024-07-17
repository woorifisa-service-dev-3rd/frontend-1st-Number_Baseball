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
};


// // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let selectedNumbers = ['', '', '', ''];

// input1.addEventListener('input', function () {
//     handleInput(input1, 0);
// });

// input2.addEventListener('input', function () {
//     handleInput(input2, 1);
// });

// input3.addEventListener('input', function () {
//     handleInput(input3, 2);
// });

// input4.addEventListener('input', function () {
//     handleInput(input4, 3);
// });


// function handleInput(input, index) {

//     let value = input.value();

//     if (selectedNumbers.includes(value)) {
//         input.value = '';
//         return;
//     }

//     selectedNumbers[index] = value;

// };





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







// const buttonContainer = document.getElementsByClassName('buttonContainer');

// buttonContainer.addEventListener('click', (event) =>
//     if (event.target.tagName === 'BUTTON') {
//     var buttonId = event.target.id;
//     var buttonNumber = buttonId.replace('button', '');
//     input1.value = '값 ' + buttonNumber;
// }
// );