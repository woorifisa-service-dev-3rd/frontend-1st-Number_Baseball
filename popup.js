import { value1 } from './generate_num.js';

const log_box = document.getElementsByClassName('log_container')[0];
const answer_btn = document.getElementById('answer');

const answer_list = [value1[0], value1[1], value1[2], value1[3]];

answer_btn.addEventListener('click', () => {
    let logs = document.querySelectorAll('.log').length;

    if (logs <= 9) {
        let out = 4;
        let strike = 0;
        let ball = 0;
        let first = document.getElementById('number1').value;
        const second = document.getElementById('number2').value;
        const third = document.getElementById('number3').value;
        const fourth = document.getElementById('number4').value;

        const input = [first, second, third, fourth];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (input[i] == answer_list[j]) {
                    if (i == j) {
                        strike++;
                    } else {
                        ball++;
                    }
                }
            }
        }

        out = out - strike - ball;

        let BText = '';
        if (ball !== 0) {
            BText = `${ball} B`;
        }
        let SText = '';
        if (strike !== 0) {
            SText = `${strike} S`;
        }
        let OText = '';
        if (out !== 0) {
            OText = `${out} OUT`;
        }

        const newBox = document.createElement('div');
        newBox.classList.add('log', 'animated-text');
        newBox.innerHTML = `
                <div style="margin: 0.1em;">
                    <strong>${input[0]}</strong>
                    <strong>${input[1]}</strong>
                    <strong>${input[2]}</strong>
                    <strong>${input[3]}</strong>
                </div>
                <div style="margin: 0.1em;">
                    <strong>${SText} </strong>
                    <strong>${BText}</strong>
                    <strong>${OText}</strong>
                </div>
            `;

        log_box.appendChild(newBox);

        // 입력 초기화
        document.getElementById('number1').value = '';
        document.getElementById('number2').value = '';
        document.getElementById('number3').value = '';
        document.getElementById('number4').value = '';

        if (strike === 4) {
            displayVictoryPopup(); // 스트라이크 4개일 때 정답 팝업 표시
        } else if (logs === 9) {
            displayLosePopup(); // 9개의 로그가 쌓였을 때 실패 팝업 표시
        }
    }
});

function displayVictoryPopup() {
    const victoryPopup = document.getElementById('victoryPopup');
    const closeVictoryPopupBtn = document.getElementById('closeVictoryPopupBtn');

    victoryPopup.style.display = 'block'; // 정답 팝업 표시

    closeVictoryPopupBtn.addEventListener('click', () => {
        victoryPopup.style.display = 'none'; // 팝업 닫기
    });
}

function displayLosePopup() {
    const losePopup = document.getElementById('losePopup');
    const closeLosePopupBtn = document.getElementById('closeLosePopupBtn');

    losePopup.style.display = 'block'; // 실패 팝업 표시

    closeLosePopupBtn.addEventListener('click', () => {
        losePopup.style.display = 'none'; // 팝업 닫기
    });
}