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



// 제출 버튼이 눌리면, 랜덤으로 생성된 4가지 숫자 조합과 입력된 숫자 조합을 비교하여 출력


function generateRandomNumbers() {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [];

    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const selectedNumber = numbers[randomIndex];
        result.push(selectedNumber);
        numbers.splice(randomIndex, 1);
    }

    return result;
}

// 사용자가 입력한 숫자 배열을 가져오는 함수
function getUserInput() {
    return [
        parseInt(input1.value),
        parseInt(input2.value),
        parseInt(input3.value),
        parseInt(input4.value)
    ];

}

// answer.addEventListener('click', () => {
//     const randomNumbers = generateRandomNumbers(); // 랜덤 숫자 생성
//     const userInput = getUserInput(); // 사용자 입력 숫자 배열 가져오기

//     console.log('Random Numbers:', randomNumbers);
//     console.log('User Input:', userInput);

//     const result = checkGuess(randomNumbers, userInput); // 결과 계산
//     console.log('Stlike:', result.stlike); // Bulls 개수 출력
//     console.log('Ball:', result.ball);   // Cows 개수 출력

//     // 결과를 HTML에 표시하는 부분은 실제로는 여기에 구현해야 합니다.

//     resetInputFields(); // 입력 필드 초기화
// });

// // 숫자와 자리 일치 여부를 확인하는 함수
// function checkGuess(randomNumbers, userInput) {
//     let stlike = 0; // 맞은 숫자와 자리 모두 일치하는 개수 (Bulls)
//     let ball = 0;    // 맞은 숫자는 맞지만 자리는 다른 개수 (Cows)

//     for (let i = 0; i < randomNumbers.length; i++) {
//         if (randomNumbers[i] === userInput[i]) {
//             stlike++;
//         } else if (randomNumbers.includes(userInput[i])) {
//             ball++;
//         }
//     }

//     return { stlike, ball };
// }

// // 게임 시작 함수



