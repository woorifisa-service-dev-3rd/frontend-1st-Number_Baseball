const log_box= document.getElementById('log_contain');
const  answer_btn=document.getElementById('answer_btn');

const answer_1=document.getElementById('ex1').textContent;
const answer_2=document.getElementById('ex2').textContent;
const answer_3=document.getElementById('ex3').textContent;
const answer_4=document.getElementById('ex4').textContent;
const answer_list= [answer_1,answer_2,answer_3,answer_4];

answer_btn.addEventListener('click',()=>{
    let logs= document.querySelectorAll('.logCount').length;

    if(logs<=9){
        let out=4;
        let strike=0;
        let ball=0;
        let first= document.getElementById('number1').value;
        const second= document.getElementById('number2').value;
        const third= document.getElementById('number3').value;
        const fourth = document.getElementById('number4').value;
        
        const input= [first,second,third,fourth];
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(input[i]==answer_list[j]){
                    if(i==j){
                        strike++;
                    }
                    else{
                        ball++;
                    }
                }
            }
        }

        out= out-strike-ball;
        console.log(strike,ball,out);
    
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
        newBox.classList.add('logCount', 'animated-text');
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
        document.getElementById('number1').value='';
        document.getElementById('number2').value='';
        document.getElementById('number3').value='';
        document.getElementById('number4').value='';

        console.log(logs);
        
        if(logs==9){
            

        }
    }
   
});


