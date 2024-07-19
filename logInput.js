import { value1 } from './generate_num.js';

const inputs = document.querySelectorAll('input[id^="number"]');

const log_box= document.getElementsByClassName('log_container')[0];
const answer_btn=document.getElementById('answer');



// const answer_1=document.getElementById('ex1').textContent;
// const answer_2=document.getElementById('ex2').textContent;
// const answer_3=document.getElementById('ex3').textContent;
// const answer_4=document.getElementById('ex4').textContent;
// const answer_list= [answer_1,answer_2,answer_3,answer_4];

const answer_list = [value1[0], value1[1], value1[2], value1[3]];
console.log(answer_list);


answer_btn.addEventListener('click',()=>{
    answer.disabled=true

    let logs= document.querySelectorAll('.log').length;

    if(logs<=9){
        
        let out=4;
        let strike=0;
        let ball=0;
        let first= document.getElementById('number1').value;
        const second= document.getElementById('number2').value;
        const third= document.getElementById('number3').value;

        const fourth = document.getElementById('number4').value;

        const input = [first, second, third, fourth];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (input[i] == answer_list[j]) {
                    if (i == j) {
                        strike++;
                    }
                    else {
                        ball++;
                    }
                }
            }
        }

        out = out - strike - ball;
        console.log(strike, ball, out);

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

        // 성공 또는 실패시 팝업창 추가 
        document.getElementById('number1').value = '';
        document.getElementById('number2').value = '';
        document.getElementById('number3').value = '';
        document.getElementById('number4').value = '';

        if (strike === 4) {
            displayVictoryPopup();
        } else if (logs === 8) {
            displayLosePopup();
        }

        document.getElementById('number1').focus();
    }
});

function displayVictoryPopup() {
    const victoryPopup = document.getElementById('victoryPopup');
    const closeVictoryPopupBtn = document.getElementById('closeVictoryPopupBtn');

    victoryPopup.style.display = 'block';

    closeVictoryPopupBtn.addEventListener('click', () => {
        victoryPopup.style.display = 'none';
    });
};

function displayLosePopup() {
    const losePopup = document.getElementById('losePopup');
    const closeLosePopupBtn = document.getElementById('closeLosePopupBtn');

    losePopup.style.display = 'block';

    closeLosePopupBtn.addEventListener('click', () => {
        losePopup.style.display = 'none';
    });
};
