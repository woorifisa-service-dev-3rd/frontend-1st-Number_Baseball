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
inputs.forEach((input, index) => {
    input.addEventListener('keyup', function (event) {
        const key = event.key;

        if (key !== 'Backspace' && key !== 'Delete') {
            if (index < 4) {
                inputs[index + 1].focus();
            }
        }
    });
});

input1.addEventListener('input', () => {
    b(1, 2, 3);
})
input2.addEventListener('input', () => {
    b(0, 2, 3);
})
input3.addEventListener('input', () => {
    b(0, 1, 3);
})
input4.addEventListener('input', () => {
    b(0, 1, 2);
})

function b(a, b, c) {
    let keynum = ['', '', '', ''];

    if (input1.value) {
        keynum[0] = input1.value;
    } else if (input2.value) {
        keynum[1] = input1.value;
    } else if (input3.value) {
        keynum[2] = input1.value;
    } else if (input4.value) {
        keynum[3] = input1.value;
    };

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.value === keynum[a] || input.value === keynum[b] || input.value === keynum[c]) {
            input.value = '';
        }
    })
}





// 버튼 클릭 이벤트 처리


const input1 = document.getElementById('number1');
const input2 = document.getElementById('number2');
const input3 = document.getElementById('number3');
const input4 = document.getElementById('number4');

const btn1 = document.getElementById('btn_1');
const btn2 = document.getElementById('btn_2');
const btn3 = document.getElementById('btn_3');
const btn4 = document.getElementById('btn_4');
const btn5 = document.getElementById('btn_5');
const btn6 = document.getElementById('btn_6');
const btn7 = document.getElementById('btn_7');
const btn8 = document.getElementById('btn_8');
const btn9 = document.getElementById('btn_9');
const btn0 = document.getElementById('btn_0');

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
        function resetInputs() {
            const buttons = document.querySelectorAll('button');
            var inputs = document.querySelectorAll('input[id^="number"]');
            inputs.forEach(input => {
                input.value = '';
            });
            document.getElementById('number1').focus();
            buttons.forEach(() => {
                button.disabled = false;
            })
        }
        const resetButton = document.getElementById('reset');
        resetButton.addEventListener('click', resetInputs);
    });
};

//리셋버튼

// function resetInputs() {
//     var inputs = document.querySelectorAll('input[id^="number"]');
//     inputs.forEach(input => {
//         input.value = '';
//     });
//     document.getElementById('number1').focus();
//     button.disabled = false;
// }
// const resetButton = document.getElementById('method_id2');
// resetButton.addEventListener('click', resetInputs);



/*
 
let selectedNumbers = ['', '', '', ''];
 
if(input1.value === selectNumbers[0]){
    btn.disabled = false;
}
 
 
*/




// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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






function generateRandomNumbers() {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [];


    for (let i = 0; i < 4; i++) {
        // 랜덤한 인덱스 선택
        const randomIndex = Math.floor(Math.random() * numbers.length);
        // 선택된 숫자 추출
        const selectedNumber = numbers[randomIndex];
        // 결과 배열에 추가
        result.push(selectedNumber);
        // 배열에서 선택된 숫자 제거
        numbers.splice(randomIndex, 1);
    }

    return result;
}

function checkGuess(randomNumbers, userInput) {
    let stlike = 0; // 맞은 숫자와 자리 모두 일치하는 개수 (Bulls)
    let ball = 0;  // 맞은 숫자는 맞지만 자리는 다른 개수 (Cows)

    for (let i = 0; i < randomNumbers.length; i++) {
        if (randomNumbers[i] === userInput[i]) {
            stlike++;
        } else if (randomNumbers.includes(userInput[i])) {
            ball++;
        }
    }

    return { stlike, ball };
}

// 랜덤 숫자 생성
const randomNumbers = generateRandomNumbers();
console.log('Random Numbers:', randomNumbers);

// 사용자 입력 (임의로 예시로 설정)
const userInput = [1, 2, 3, 4]; // 사용자가 입력한 숫자 배열

// 비교
const result = checkGuess(randomNumbers, userInput);
console.log('Bulls:', result.stlike); // Bulls 개수 출력
console.log('Cows:', result.ball);   // Cows 개수 출력